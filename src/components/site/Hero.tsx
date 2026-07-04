import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Download, Terminal } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { HERO_STACK, SKILL_HIGHLIGHTS } from "@/data/portfolio";

const BOOT_LINES = [
  "Initializing Enterprise Data Platform...",
  "Loading Databricks runtime...",
  "Provisioning financial data pipelines...",
  "Connecting reporting semantic layer...",
  "System ready.",
];

export function Hero() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (step < BOOT_LINES.length) {
      const t = setTimeout(() => setStep((s) => s + 1), 380);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setDone(true), 350);
    return () => clearTimeout(t);
  }, [step]);

  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Backdrop */}
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute inset-0 radial-glow pointer-events-none" />
      <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[520px] w-[900px] rounded-full bg-[#2563EB]/10 blur-[120px] pointer-events-none" />

      <div className="container-pro relative">
        {/* Boot terminal */}
        <AnimatePresence>
          {!done && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
              transition={{ duration: 0.4 }}
              className="mx-auto max-w-2xl"
            >
              <div className="glass-strong rounded-2xl p-5 shadow-[0_30px_120px_-40px_rgba(37,99,235,0.5)]">
                <div className="flex items-center gap-2 border-b border-border pb-3">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
                  </div>
                  <div className="mono ml-2 flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    <Terminal size={11} /> lokesh@platform ~ boot
                  </div>
                </div>
                <div className="mono mt-3 space-y-1.5 text-[12px] leading-relaxed">
                  {BOOT_LINES.slice(0, step).map((line, i) => (
                    <motion.div
                      key={line}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center gap-2"
                    >
                      <span className="text-[#38BDF8]">›</span>
                      <span className={i === BOOT_LINES.length - 1 ? "text-emerald-400" : "text-muted-foreground"}>
                        {line}
                      </span>
                    </motion.div>
                  ))}
                  <span className="inline-block h-3 w-1.5 translate-y-0.5 animate-pulse bg-[#38BDF8]" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {done && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-3 py-1"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                <span className="mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                  System ready · JMAN Group · 17 entities · 15+ dashboards
                </span>
              </motion.div>

              <h1 className="mx-auto max-w-4xl text-[52px] md:text-[88px] font-semibold leading-[0.95] tracking-[-0.03em]">
                <span className="text-gradient">LOKESH DEVARAJ</span>
              </h1>
              <div className="mono mt-4 text-xs md:text-sm uppercase tracking-[0.32em] text-muted-foreground">
                Data Engineer
              </div>
              <p className="mx-auto mt-6 max-w-2xl text-lg md:text-2xl text-foreground/90 tracking-tight">
                Building{" "}
                <span className="text-gradient-brand font-medium">enterprise data platforms</span>{" "}
                for finance, operations and reporting — from ETL pipelines to semantic models, Power BI reporting and AI-assisted analytics.
              </p>

              {/* Floating stack pills */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.3 } },
                }}
                className="mx-auto mt-8 flex max-w-2xl flex-wrap items-center justify-center gap-2"
              >
                {HERO_STACK.map((s, i) => (
                  <motion.span
                    key={s}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    style={{ animationDelay: `${i * 0.15}s` }}
                    className="mono rounded-full border border-border bg-white/[0.03] px-3 py-1.5 text-[11px] tracking-wide text-muted-foreground hover:text-foreground hover:border-border-strong transition-colors [animation:float-slow_6s_ease-in-out_infinite]"
                  >
                    {s}
                  </motion.span>
                ))}
              </motion.div>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.35 } },
                }}
                className="mx-auto mt-8 grid max-w-4xl gap-3 md:grid-cols-2 xl:grid-cols-5"
              >
                {SKILL_HIGHLIGHTS.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      variants={{
                        hidden: { opacity: 0, y: 12 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      transition={{ delay: index * 0.04 }}
                      className="group rounded-2xl border border-border/70 bg-white/[0.03] p-4 text-left shadow-[0_10px_40px_-24px_rgba(37,99,235,0.5)] transition-all hover:-translate-y-1 hover:border-[#2563EB]/50"
                    >
                      <div className={`inline-flex rounded-xl bg-gradient-to-br ${skill.accent} p-2`}>
                        <Icon size={16} className="text-[#38BDF8]" />
                      </div>
                      <div className="mt-3 text-sm font-medium text-foreground">{skill.name}</div>
                      <div className="mt-1 text-xs leading-relaxed text-muted-foreground">{skill.label}</div>
                    </motion.div>
                  );
                })}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-10 flex flex-wrap items-center justify-center gap-3"
              >
                <Link
                  to="/projects"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black shadow-[0_10px_40px_-10px_rgba(255,255,255,0.4)] hover:bg-white/90 transition-all"
                >
                  View Projects
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  to="/resume"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-5 py-3 text-sm text-foreground hover:bg-white/[0.06] hover:border-border-strong transition-all"
                >
                  <Download size={16} /> Download Resume
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
