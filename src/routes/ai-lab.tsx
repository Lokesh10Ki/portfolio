import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { AI_LAB } from "@/data/portfolio";
import { PageHeader } from "@/components/site/Section";

export const Route = createFileRoute("/ai-lab")({
  head: () => ({
    meta: [
      { title: "AI Lab — Lokesh Devaraj" },
      { name: "description", content: "AI-native analytics on the lakehouse: Databricks Mosaic AI, Claude, OpenAI, RAG and Power BI MCP." },
      { property: "og:title", content: "AI Lab — Lokesh Devaraj" },
      { property: "og:url", content: "/ai-lab" },
    ],
    links: [{ rel: "canonical", href: "/ai-lab" }],
  }),
  component: AILabPage,
});

function AILabPage() {
  return (
    <>
      <PageHeader
        eyebrow="AI Lab / experiments in production"
        title={<>AI-native analytics on the lakehouse.</>}
        description="Where I explore agents, retrieval, and evaluations grounded in enterprise data — not demos."
      />
      <section className="container-pro pb-24">
        <div className="grid gap-5 md:grid-cols-2">
          {AI_LAB.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass rounded-2xl p-6 relative overflow-hidden group hover:border-border-strong transition-colors"
            >
              <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-[#EC4899]/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl border border-border bg-gradient-to-br from-[#16223A] to-[#0E1524] flex items-center justify-center">
                      <Sparkles size={16} className="text-[#EC4899]" />
                    </div>
                    <div>
                      <div className="text-lg font-semibold">{item.name}</div>
                      <div className="text-sm text-muted-foreground mt-0.5">{item.tagline}</div>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">// architecture</div>
                  <div className="mt-3 rounded-xl border border-border bg-white/[0.02] p-4">
                    <div className="flex flex-wrap items-center gap-2">
                      {item.architecture.split("→").map((seg, idx, arr) => (
                        <div key={idx} className="flex items-center gap-2">
                          <span className="mono rounded-md border border-border px-2 py-1 text-[11px]">{seg.trim()}</span>
                          {idx < arr.length - 1 && <span className="text-muted-foreground">→</span>}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {item.tags.map((t) => (
                    <span key={t} className="mono rounded-full border border-border px-2.5 py-0.5 text-[10px] text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
