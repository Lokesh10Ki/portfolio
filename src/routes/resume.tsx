import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { BadgeCheck, Download, Search } from "lucide-react";
import { PROFILE, EXPERIENCE, RESUME, absoluteUrl } from "@/data/portfolio";
import { PageHeader } from "@/components/site/Section";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Lokesh Devaraj" },
      {
        name: "description",
        content:
          "Interactive, searchable resume for Lokesh Devaraj, Databricks Certified Data Engineer. Download the PDF.",
      },
      { property: "og:title", content: "Resume — Lokesh Devaraj" },
      { property: "og:url", content: absoluteUrl("/resume") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/resume") }],
  }),
  component: ResumePage,
});

function matches(filter: string, ...parts: Array<string | undefined>) {
  return !filter || parts.join(" ").toLowerCase().includes(filter);
}

function ResumePage() {
  const [q, setQ] = useState("");
  const filter = q.trim().toLowerCase();

  // Keep a role if any part of it matches; inside a matching role, narrow to matching engagements/bullets.
  const filteredExp = useMemo(
    () =>
      EXPERIENCE.map((e) => {
        const roleHit = matches(filter, e.company, e.role, e.overview);
        const engagements = e.engagements
          .map((eng) => {
            const engHit = roleHit || matches(filter, eng.name, eng.context, ...eng.stack);
            const highlights = engHit
              ? eng.highlights
              : eng.highlights.filter((h) => matches(filter, h.title, h.body));
            return { ...eng, highlights };
          })
          .filter((eng) => eng.highlights.length > 0);
        return { ...e, engagements };
      }).filter((e) => e.engagements.length > 0),
    [filter],
  );
  const filteredGroups = RESUME.skillGroups
    .map((g) => ({ ...g, items: g.items.filter((s) => matches(filter, s, g.label)) }))
    .filter((g) => g.items.length > 0);

  return (
    <>
      <PageHeader
        eyebrow="Resume / operator dossier"
        title={<>Interactive resume.</>}
        description="Search across roles, technologies and impact, or download the PDF."
      />
      <section className="container-pro pb-24">
        <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between mb-8">
          <label className="glass flex items-center gap-2 rounded-full px-4 py-2 flex-1 max-w-md">
            <Search size={14} className="text-muted-foreground" />
            <span className="sr-only">Search resume</span>
            <input
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search — Unity Catalog, Terraform, RAG…"
              className="bg-transparent flex-1 min-w-0 text-sm outline-none placeholder:text-muted-foreground/60"
            />
            {q && (
              <button
                type="button"
                onClick={() => setQ("")}
                className="mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground"
              >
                clear
              </button>
            )}
          </label>
          <a
            href={PROFILE.resumePdf}
            download="Lokesh_Devaraj_Data_Engineer_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black hover:bg-white/90 transition-colors self-start"
          >
            <Download size={15} /> Download PDF
          </a>
        </div>

        <div className="glass rounded-2xl p-6 md:p-10">
          <header className="border-b border-border pb-8">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{PROFILE.name}</h2>
            <div className="mono mt-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground break-words">
              {PROFILE.role} · {PROFILE.location} ·{" "}
              <a
                href={`mailto:${PROFILE.email}`}
                className="normal-case tracking-normal hover:text-foreground"
              >
                {PROFILE.email}
              </a>
            </div>
            <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-3xl">
              {RESUME.summary}
            </p>
          </header>

          <div className="mt-8 grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <SectionLabel>Experience</SectionLabel>
                <div className="mt-4 space-y-8">
                  {filteredExp.length === 0 && (
                    <div className="mono text-xs text-muted-foreground">// no matches</div>
                  )}
                  {filteredExp.map((e) => (
                    <div key={`${e.company}-${e.period}`} className="border-l border-border pl-5">
                      <div className="flex flex-wrap items-baseline gap-x-3">
                        <div className="text-base font-semibold">{e.role}</div>
                        <div className="text-sm text-muted-foreground">· {e.company}</div>
                        <div className="mono ml-auto text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                          {e.period}
                        </div>
                      </div>
                      {e.progression && (
                        <div className="mono mt-1 text-[10px] text-muted-foreground">
                          {e.progression.map((r) => `${r.title} (${r.period})`).join("  →  ")}
                        </div>
                      )}
                      {e.engagements.map((eng) => (
                        <div key={eng.name} className="mt-4">
                          <div className="text-sm font-medium text-foreground/90">
                            <Highlight text={eng.name} q={filter} />
                            {eng.context && (
                              <span className="text-muted-foreground"> · {eng.context}</span>
                            )}
                          </div>
                          <div className="mono mt-1 text-[10px] text-muted-foreground">
                            <Highlight text={eng.stack.join(" · ")} q={filter} />
                          </div>
                          <ul className="mt-2 space-y-1.5 text-sm">
                            {eng.highlights.map((h) => (
                              <li key={h.body} className="flex gap-2 leading-relaxed">
                                <span className="mono text-[#38BDF8]">▸</span>
                                <span className="text-muted-foreground">
                                  {h.title && (
                                    <span className="font-medium text-foreground">
                                      <Highlight text={h.title} q={filter} />:{" "}
                                    </span>
                                  )}
                                  <Highlight text={h.body} q={filter} />
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <aside className="space-y-8">
              <div>
                <SectionLabel>Skills</SectionLabel>
                <div className="mt-3 space-y-4">
                  {filteredGroups.length === 0 && (
                    <div className="mono text-xs text-muted-foreground">// no matches</div>
                  )}
                  {filteredGroups.map((g) => (
                    <div key={g.label}>
                      <div className="text-xs font-medium text-foreground/90">{g.label}</div>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {g.items.map((s) => (
                          <span
                            key={s}
                            className="mono rounded-md border border-border px-2 py-0.5 text-[10px] text-muted-foreground"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <SectionLabel>Certifications</SectionLabel>
                <ul className="mt-3 space-y-2 text-sm">
                  {RESUME.certifications.map((c) => (
                    <li key={c.name}>
                      <a
                        href={c.url}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex gap-2 hover:text-foreground"
                      >
                        <BadgeCheck size={16} className="mt-0.5 shrink-0 text-[#38BDF8]" />
                        <span>
                          {c.name}
                          <span className="mono block text-[10px] uppercase tracking-[0.18em] text-muted-foreground group-hover:text-[#38BDF8]">
                            Verify ↗
                          </span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <SectionLabel>Education</SectionLabel>
                {RESUME.education.map((e) => (
                  <div key={e.school} className="mt-3">
                    <div className="text-sm font-medium">{e.degree}</div>
                    <div className="text-xs text-muted-foreground">
                      {e.school} · {e.period}
                    </div>
                    <div className="mono mt-1 text-[10px] uppercase tracking-[0.18em] text-[#38BDF8]">
                      {e.note}
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <SectionLabel>Key Achievements</SectionLabel>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground leading-relaxed">
                  {RESUME.achievements.map((a) => (
                    <li key={a} className="flex gap-2">
                      <span className="mono text-[#38BDF8]">▸</span>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
      // {children}
    </div>
  );
}
function Highlight({ text, q }: { text: string; q: string }) {
  if (!q) return <span>{text}</span>;
  const i = text.toLowerCase().indexOf(q);
  if (i < 0) return <span>{text}</span>;
  return (
    <span>
      {text.slice(0, i)}
      <mark className="bg-[#2563EB]/30 text-foreground rounded px-0.5">
        {text.slice(i, i + q.length)}
      </mark>
      {text.slice(i + q.length)}
    </span>
  );
}
