import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Building2 } from "lucide-react";
import { EXPERIENCE } from "@/data/portfolio";
import { PageHeader } from "@/components/site/Section";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Lokesh Devaraj" },
      { name: "description", content: "Two-plus years of enterprise data platform work across finance, operations and analytics organizations." },
      { property: "og:title", content: "Experience — Lokesh Devaraj" },
      { property: "og:url", content: "/experience" },
    ],
    links: [{ rel: "canonical", href: "/experience" }],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <PageHeader
        eyebrow="Experience / operator log"
        title={<>Where I've shipped platforms.</>}
        description="Each role expands into the full engineering brief — architecture, business impact, and lessons learned."
      />
      <section className="container-pro pb-24">
        <div className="grid gap-4">
          {EXPERIENCE.map((exp, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="glass rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center gap-5 p-6 text-left hover:bg-white/[0.02] transition-colors"
                >
                  <div className="h-11 w-11 shrink-0 rounded-xl bg-gradient-to-br from-[#16223A] to-[#0E1524] border border-border flex items-center justify-center">
                    <Building2 size={18} className="text-[#38BDF8]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="text-lg font-semibold">{exp.company}</span>
                      <span className="mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                        {exp.period} · {exp.location}
                      </span>
                    </div>
                    <div className="mt-0.5 text-sm text-muted-foreground">{exp.role}</div>
                  </div>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180 text-foreground" : ""}`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-border p-6 grid gap-8 md:grid-cols-2">
                        <Block label="Overview" body={<p className="text-sm text-muted-foreground leading-relaxed">{exp.overview}</p>} />
                        <Block
                          label="Responsibilities"
                          body={
                            <ul className="text-sm text-muted-foreground space-y-1.5 list-disc list-inside marker:text-[#38BDF8]">
                              {exp.responsibilities.map((r) => <li key={r}>{r}</li>)}
                            </ul>
                          }
                        />
                        <Block
                          label="Business Impact"
                          body={
                            <ul className="space-y-1.5 text-sm">
                              {exp.impact.map((r) => (
                                <li key={r} className="flex gap-2 text-foreground">
                                  <span className="mono text-[#38BDF8]">▲</span> {r}
                                </li>
                              ))}
                            </ul>
                          }
                        />
                        <Block
                          label="Technologies"
                          body={
                            <div className="flex flex-wrap gap-1.5">
                              {exp.tech.map((t) => (
                                <span key={t} className="mono rounded-md border border-border px-2 py-0.5 text-[10px] text-muted-foreground">{t}</span>
                              ))}
                            </div>
                          }
                        />
                        <Block label="Architecture" body={<p className="mono text-xs text-muted-foreground leading-relaxed">{exp.architecture}</p>} />
                        <Block label="Lessons Learned" body={<p className="text-sm text-muted-foreground leading-relaxed italic">{exp.lessons}</p>} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
}

function Block({ label, body }: { label: string; body: React.ReactNode }) {
  return (
    <div>
      <div className="mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground mb-3">// {label}</div>
      {body}
    </div>
  );
}
