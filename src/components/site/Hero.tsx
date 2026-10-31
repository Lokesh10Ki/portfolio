import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, Download, Mail } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { HERO_STACK, KEY_METRICS, PROFILE } from "@/data/portfolio";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Backdrop */}
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute inset-0 radial-glow pointer-events-none" />
      <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[520px] w-[900px] max-w-full rounded-full bg-[#2563EB]/10 blur-[120px] pointer-events-none" />

      <div className="container-pro relative">
        {/* Name and pitch render visible on first paint (no JS-gated fade) so recruiters and link previews see them immediately. */}
        <div className="text-center">
          <div className="mx-auto mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-border bg-white/[0.03] px-3 py-1">
            <span className="relative flex h-1.5 w-1.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:animate-none" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            <span className="mono min-w-0 truncate text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Now · {PROFILE.role} @ {PROFILE.currentCompany} · Azure → AWS Lakehouse migration
            </span>
          </div>

          <h1 className="mx-auto max-w-4xl text-[36px] sm:text-[52px] md:text-[88px] font-semibold leading-[0.95] tracking-[-0.03em]">
            <span className="text-gradient">LOKESH DEVARAJ</span>
          </h1>
          <div className="mono mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs md:text-sm uppercase tracking-[0.18em] md:tracking-[0.24em] text-muted-foreground">
            <span>Data Engineer</span>
            <span aria-hidden className="text-border-strong">
              /
            </span>
            <a
              href={PROFILE.certification.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-[#38BDF8] hover:text-foreground transition-colors"
            >
              <BadgeCheck size={14} /> Databricks Certified
            </a>
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-lg md:text-2xl text-foreground/90 tracking-tight">
            I design and build{" "}
            <span className="text-gradient-brand font-medium">Lakehouse platforms</span> on
            Databricks, PySpark and SQL across Azure and AWS, turning messy, multi-source business
            data into governed, trusted analytics.
          </p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.04, delayChildren: 0.2 } },
            }}
            className="mx-auto mt-8 flex max-w-2xl flex-wrap items-center justify-center gap-2"
          >
            {HERO_STACK.map((s) => (
              <motion.span
                key={s}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="mono rounded-full border border-border bg-white/[0.03] px-3 py-1.5 text-[11px] tracking-wide text-muted-foreground"
              >
                {s}
              </motion.span>
            ))}
          </motion.div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black shadow-[0_10px_40px_-10px_rgba(255,255,255,0.4)] hover:bg-white/90 transition-all"
            >
              View Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href={PROFILE.resumePdf}
              download="Lokesh_Devaraj_Data_Engineer_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-5 py-3 text-sm text-foreground hover:bg-white/[0.06] hover:border-border-strong transition-all"
            >
              <Download size={16} /> Download Resume
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-5 py-3 text-sm text-foreground hover:bg-white/[0.06] hover:border-border-strong transition-all"
            >
              <Mail size={16} /> Email me
            </a>
          </div>

          {/* Impact metrics */}
          <motion.dl
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.06, delayChildren: 0.35 } },
            }}
            className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-3 md:grid-cols-4"
          >
            {KEY_METRICS.map((m) => (
              <motion.div
                key={m.label}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="flex flex-col-reverse rounded-2xl border border-border/70 bg-white/[0.03] p-5 text-left shadow-[0_10px_40px_-24px_rgba(37,99,235,0.5)]"
              >
                <dt className="mt-2 text-xs leading-relaxed text-muted-foreground">{m.label}</dt>
                <dd className="text-3xl md:text-4xl font-semibold tracking-tight text-gradient-brand">
                  {m.value}
                </dd>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
}
