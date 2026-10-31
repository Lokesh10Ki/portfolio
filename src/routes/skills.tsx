import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { CONCEPTUAL_SKILLS, SKILL_GRAPH, absoluteUrl } from "@/data/portfolio";
import { PageHeader } from "@/components/site/Section";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Lokesh Devaraj" },
      {
        name: "description",
        content:
          "Interactive graph of Lokesh Devaraj's stack: Databricks, PySpark, Delta Lake, Unity Catalog, Azure, AWS, Terraform, Power BI and AI tooling.",
      },
      { property: "og:title", content: "Skills — Lokesh Devaraj" },
      { property: "og:url", content: absoluteUrl("/skills") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/skills") }],
  }),
  component: SkillsPage,
});

const W = 1200;
const H = 900;
// Each category is a cluster: an inner ring, then an outer ring for overflow.
// Labels sit radially outside their node so neighbours don't collide.
const INNER_CAPACITY = 8;
const INNER_R = 72;
const OUTER_R = 145;
// Data Engineering is the hub in the middle; the other categories sit in the corners.
const CLUSTER_CENTERS: Record<string, { x: number; y: number }> = {
  data: { x: W / 2, y: H / 2 },
  cloud: { x: 960, y: 195 },
  analytics: { x: 960, y: 700 },
  ai: { x: 240, y: 690 },
  dev: { x: 240, y: 195 },
};

function SkillsPage() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [activeCat, setActiveCat] = useState<string | null>(null);

  const positions = useMemo(() => {
    const cats = SKILL_GRAPH.categories;
    const byCat: Record<string, (typeof SKILL_GRAPH.nodes)[number][]> = {};
    for (const n of SKILL_GRAPH.nodes) (byCat[n.cat] ||= []).push(n);

    const map: Record<string, { x: number; y: number; a: number }> = {};
    cats.forEach((cat) => {
      const { x: cx, y: cy } = CLUSTER_CENTERS[cat.id];
      const nodes = byCat[cat.id] || [];
      const inner = nodes.slice(0, INNER_CAPACITY);
      const outer = nodes.slice(INNER_CAPACITY);
      inner.forEach((n, i) => {
        const a = (i / inner.length) * Math.PI * 2 - Math.PI / 2;
        const r = inner.length === 1 ? 0 : INNER_R;
        map[n.id] = { x: cx + Math.cos(a) * r, y: cy + Math.sin(a) * r, a };
      });
      outer.forEach((n, i) => {
        // Outer nodes only exist when the inner ring is full, so slot them into the gaps between inner nodes;
        // if there are more outer nodes than gaps, spread them evenly instead.
        const a =
          outer.length <= INNER_CAPACITY
            ? ((Math.floor((i * INNER_CAPACITY) / outer.length) + 0.5) / INNER_CAPACITY) *
                Math.PI *
                2 -
              Math.PI / 2
            : ((i + 0.5) / outer.length) * Math.PI * 2 - Math.PI / 2 + Math.PI / outer.length / 2;
        map[n.id] = { x: cx + Math.cos(a) * OUTER_R, y: cy + Math.sin(a) * OUTER_R, a };
      });
    });
    return map;
  }, []);

  const highlighted = useMemo(() => {
    if (!hovered) return new Set<string>();
    const node = SKILL_GRAPH.nodes.find((n) => n.id === hovered);
    if (!node) return new Set<string>();
    return new Set<string>([hovered, ...node.related]);
  }, [hovered]);

  const edges = useMemo(() => {
    const out: { a: string; b: string }[] = [];
    const seen = new Set<string>();
    for (const n of SKILL_GRAPH.nodes) {
      for (const r of n.related) {
        const key = [n.id, r].sort().join("-");
        if (seen.has(key)) continue;
        seen.add(key);
        out.push({ a: n.id, b: r });
      }
    }
    return out;
  }, []);

  return (
    <>
      <PageHeader
        eyebrow="Skills / architecture graph"
        title={<>The stack, as a graph.</>}
        description="Hover a node to highlight related technologies. Filter by category to see how the platform fits together."
      />

      <section className="container-pro pb-24">
        <div className="mb-6 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCat(null)}
            className={`mono rounded-full border px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] transition-colors ${
              activeCat === null
                ? "border-border-strong bg-white/[0.06] text-foreground"
                : "border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            All
          </button>
          {SKILL_GRAPH.categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCat(activeCat === c.id ? null : c.id)}
              className={`mono rounded-full border px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] transition-colors flex items-center gap-2 ${
                activeCat === c.id
                  ? "border-border-strong bg-white/[0.06] text-foreground"
                  : "border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: c.color }} />
              {c.label}
            </button>
          ))}
        </div>

        <div className="glass relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <svg
            viewBox={`0 0 ${W} ${H}`}
            role="img"
            aria-label="Graph of technologies grouped by category; the same list appears as text below."
            className="relative w-full h-auto"
          >
            <defs>
              <radialGradient id="glowNode" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#2563EB" stopOpacity="0.5" />
              </radialGradient>
            </defs>
            {edges.map(({ a, b }, i) => {
              const pa = positions[a];
              const pb = positions[b];
              if (!pa || !pb) return null;
              const nodeA = SKILL_GRAPH.nodes.find((n) => n.id === a)!;
              const nodeB = SKILL_GRAPH.nodes.find((n) => n.id === b)!;
              const catDim = activeCat && nodeA.cat !== activeCat && nodeB.cat !== activeCat;
              const active = hovered && highlighted.has(a) && highlighted.has(b);
              const dim = catDim || (hovered && !active);
              return (
                <line
                  key={i}
                  x1={pa.x}
                  y1={pa.y}
                  x2={pb.x}
                  y2={pb.y}
                  stroke={active ? "#38BDF8" : "#94A3B8"}
                  strokeOpacity={dim ? 0.04 : active ? 0.55 : 0.12}
                  strokeWidth={active ? 1.2 : 0.7}
                />
              );
            })}
            {SKILL_GRAPH.nodes.map((n) => {
              const pos = positions[n.id];
              if (!pos) return null;
              const cat = SKILL_GRAPH.categories.find((c) => c.id === n.cat)!;
              const active = hovered ? highlighted.has(n.id) : true;
              const catDim = activeCat && n.cat !== activeCat;
              const dim = catDim || (hovered && !active);
              return (
                <g
                  key={n.id}
                  transform={`translate(${pos.x}, ${pos.y})`}
                  onMouseEnter={() => setHovered(n.id)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    cursor: "pointer",
                    opacity: dim ? 0.25 : 1,
                    transition: "opacity 0.25s",
                  }}
                >
                  <circle r={hovered === n.id ? 22 : 16} fill={cat.color} opacity={0.12} />
                  <circle
                    r={hovered === n.id ? 7 : 5}
                    fill={cat.color}
                    stroke="#070B14"
                    strokeWidth={2}
                  />
                  <text
                    x={Math.cos(pos.a) * (hovered === n.id ? 16 : 12)}
                    y={Math.sin(pos.a) * (hovered === n.id ? 18 : 14) + 4}
                    textAnchor={
                      Math.cos(pos.a) > 0.35 ? "start" : Math.cos(pos.a) < -0.35 ? "end" : "middle"
                    }
                    fill="#F8FAFC"
                    fontSize={hovered === n.id ? 12 : 10}
                    fontFamily="Inter, sans-serif"
                    style={{ pointerEvents: "none" }}
                  >
                    {n.label}
                  </text>
                </g>
              );
            })}
          </svg>
          <div className="absolute bottom-4 left-4 mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            // {SKILL_GRAPH.nodes.length} nodes · {edges.length} edges
          </div>
        </div>

        {/* Category summary */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-3">
          {SKILL_GRAPH.categories.map((c, i) => {
            const nodes = SKILL_GRAPH.nodes.filter((n) => n.cat === c.id);
            return (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass rounded-xl p-4"
              >
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full" style={{ backgroundColor: c.color }} />
                  <div className="mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    {c.label}
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {nodes.map((n) => (
                    <span
                      key={n.id}
                      className="mono rounded-md border border-border px-2 py-0.5 text-[10px] text-muted-foreground"
                    >
                      {n.label}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
        <p className="mono mt-6 text-[11px] text-muted-foreground">
          // conceptual familiarity (not production): {CONCEPTUAL_SKILLS.join(" · ")}
        </p>
      </section>
    </>
  );
}
