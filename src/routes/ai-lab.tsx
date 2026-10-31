import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Lightbulb, Sparkles } from "lucide-react";
import { AI_LAB, absoluteUrl } from "@/data/portfolio";
import { PageHeader, SectionEyebrow } from "@/components/site/Section";
import { StatusBadge } from "@/components/site/StatusBadge";

export const Route = createFileRoute("/ai-lab")({
  head: () => ({
    meta: [
      { title: "AI Lab — Lokesh Devaraj" },
      {
        name: "description",
        content:
          "AI on enterprise data: an agentic engagement-discovery skill, a RAG solution on Databricks Mosaic AI, a Claude MCP agent that cut Power BI review effort by ~70%, and AI-generated dashboards.",
      },
      { property: "og:title", content: "AI Lab — Lokesh Devaraj" },
      { property: "og:url", content: absoluteUrl("/ai-lab") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/ai-lab") }],
  }),
  component: AILabPage,
});

function AILabPage() {
  return (
    <>
      <PageHeader
        eyebrow="AI Lab / AI meets data engineering"
        title={<>AI on governed enterprise data.</>}
        description="I'm interested in where AI removes real effort from data and analytics work. Below is what I've built so far, and where I think AI fits next in data engineering."
      />
      <section className="container-pro pb-16">
        <SectionEyebrow>What I've built</SectionEyebrow>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {AI_LAB.built.map((item, i) => (
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
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 shrink-0 rounded-xl border border-border bg-gradient-to-br from-[#16223A] to-[#0E1524] flex items-center justify-center">
                    <Sparkles size={16} className="text-[#EC4899]" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-lg font-semibold">{item.name}</h2>
                      <StatusBadge status={item.status} />
                    </div>
                    <div className="mono mt-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      {item.context}
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">{item.tagline}</p>
                  </div>
                </div>
                {item.outcome && (
                  <div className="mt-5 inline-flex rounded-lg border border-[#2563EB]/30 bg-[#2563EB]/10 px-3 py-1.5 text-sm font-medium text-gradient-brand">
                    {item.outcome}
                  </div>
                )}
                <div className="mt-5">
                  <div className="mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                    // architecture
                  </div>
                  <div className="mt-3 rounded-xl border border-border bg-white/[0.02] p-4">
                    <div className="flex flex-wrap items-center gap-2">
                      {item.architecture.split("→").map((seg, idx, arr) => (
                        <div key={idx} className="flex items-center gap-2">
                          <span className="mono rounded-md border border-border px-2 py-1 text-[11px]">
                            {seg.trim()}
                          </span>
                          {idx < arr.length - 1 && <span className="text-muted-foreground">→</span>}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="mono rounded-full border border-border px-2.5 py-0.5 text-[10px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container-pro pb-24">
        <SectionEyebrow>Where I see AI fitting in data engineering</SectionEyebrow>
        <p className="mt-4 max-w-3xl text-sm text-muted-foreground leading-relaxed">
          These are directions I'm exploring, not finished work. They share one principle: AI should
          speed engineers up while governance and validation keep the output trustworthy.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {AI_LAB.exploring.map((idea, i) => (
            <motion.div
              key={idea.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-2xl border border-dashed border-border-strong p-5"
            >
              <div className="flex items-center gap-2">
                <Lightbulb size={15} className="text-[#38BDF8]" />
                <h3 className="text-base font-semibold tracking-tight">{idea.title}</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{idea.body}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
