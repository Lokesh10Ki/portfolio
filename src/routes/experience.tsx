import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Building2 } from "lucide-react";
import { EXPERIENCE, absoluteUrl } from "@/data/portfolio";
import { PageHeader } from "@/components/site/Section";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Lokesh Devaraj" },
      {
        name: "description",
        content:
          "Data Engineer at Presidio (Azure to AWS Databricks migration) and previously JMAN Group (17-entity financial analytics Lakehouse, PE-exit revenue reconciliation, AI POCs).",
      },
      { property: "og:title", content: "Experience — Lokesh Devaraj" },
      { property: "og:url", content: absoluteUrl("/experience") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/experience") }],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  // Full-time roles start expanded; the internship starts collapsed.
  const [open, setOpen] = useState<Set<number>>(
    () => new Set(EXPERIENCE.flatMap((e, i) => (e.internship ? [] : [i]))),
  );
  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    <>
      <PageHeader
        eyebrow="Experience / operator log"
        title={<>Where I've shipped platforms.</>}
        description="Each role breaks down into the engagements I delivered, what I owned, and the architecture behind it."
      />
      <section className="container-pro pb-24">
        <div className="grid gap-4">
          {EXPERIENCE.map((exp, i) => {
            const isOpen = open.has(i);
            const panelId = `experience-panel-${i}`;
            return (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="glass rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="w-full flex items-center gap-4 md:gap-5 p-5 md:p-6 text-left hover:bg-white/[0.02] transition-colors"
                >
                  <div className="h-11 w-11 shrink-0 rounded-xl bg-gradient-to-br from-[#16223A] to-[#0E1524] border border-border flex items-center justify-center">
                    <Building2 size={18} className="text-[#38BDF8]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-x-3 gap-y-1 flex-wrap">
                      <span className="text-lg font-semibold">{exp.company}</span>
                      {exp.current && (
                        <span className="mono rounded-full border border-emerald-400/30 px-2 py-0.5 text-[10px] uppercase tracking-[0.16em] text-emerald-300">
                          Current
                        </span>
                      )}
                      {exp.internship && (
                        <span className="mono rounded-full border border-border px-2 py-0.5 text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                          Internship
                        </span>
                      )}
                    </div>
                    <div className="mt-0.5 text-sm text-foreground/90">{exp.role}</div>
                    {exp.progression && (
                      <div className="mt-0.5 text-xs text-muted-foreground">
                        {exp.progression.length} roles: {exp.progression[0].title} →{" "}
                        {exp.progression[exp.progression.length - 1].title}
                      </div>
                    )}
                    <div className="mono mt-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      {exp.period} · {exp.location}
                    </div>
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
                      id={panelId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-border p-5 md:p-6 space-y-8">
                        <div className="grid gap-8 md:grid-cols-2">
                          <Block
                            label="Overview"
                            body={
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                {exp.overview}
                              </p>
                            }
                          />
                          {exp.architecture && (
                            <Block
                              label="Architecture"
                              body={
                                <p className="mono text-xs text-muted-foreground leading-relaxed">
                                  {exp.architecture}
                                </p>
                              }
                            />
                          )}
                        </div>

                        {exp.progression && (
                          <Block
                            label="Role progression"
                            body={
                              <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                                {exp.progression.map((r, idx, arr) => {
                                  const latest = idx === arr.length - 1;
                                  return (
                                    <li key={r.title} className="flex gap-3 lg:flex-col lg:gap-2">
                                      <div className="flex items-center gap-2 pt-1 lg:pt-0">
                                        <span
                                          className={`h-2.5 w-2.5 shrink-0 rounded-full ${latest ? "bg-[#38BDF8] shadow-[0_0_0_4px_rgba(56,189,248,0.15)]" : "bg-[#2563EB]/60"}`}
                                        />
                                        {!latest && (
                                          <span className="hidden h-px flex-1 bg-border lg:block" />
                                        )}
                                      </div>
                                      <div>
                                        <div
                                          className={`text-sm font-medium ${latest ? "text-foreground" : "text-foreground/80"}`}
                                        >
                                          {r.title}
                                        </div>
                                        <div className="mono mt-0.5 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                                          {r.period}
                                        </div>
                                      </div>
                                    </li>
                                  );
                                })}
                              </ol>
                            }
                          />
                        )}

                        {exp.engagements.map((eng) => (
                          <div
                            key={eng.name}
                            className="rounded-xl border border-border bg-white/[0.015] p-5"
                          >
                            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                              <h3 className="text-base font-semibold tracking-tight">{eng.name}</h3>
                              {eng.context && (
                                <span className="mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                                  {eng.context}
                                </span>
                              )}
                            </div>
                            <div className="mt-3 flex flex-wrap gap-1.5">
                              {eng.stack.map((t) => (
                                <span
                                  key={t}
                                  className="mono rounded-md border border-border px-2 py-0.5 text-[10px] text-muted-foreground"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                            <ul className="mt-4 space-y-2.5">
                              {eng.highlights.map((h) => (
                                <li key={h.body} className="flex gap-2.5 text-sm leading-relaxed">
                                  <span className="mono mt-0.5 text-[#38BDF8]">▸</span>
                                  <span className="text-muted-foreground">
                                    {h.title && (
                                      <span className="font-medium text-foreground">
                                        {h.title}:{" "}
                                      </span>
                                    )}
                                    {h.body}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
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
      <div className="mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground mb-3">
        // {label}
      </div>
      {body}
    </div>
  );
}
