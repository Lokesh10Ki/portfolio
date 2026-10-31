import { motion } from "framer-motion";
import { Award, BadgeCheck } from "lucide-react";
import { PROFILE, RECOGNITION, STRENGTHS } from "@/data/portfolio";
import { SectionHeading } from "./Section";

export function HowIWork() {
  return (
    <section className="relative py-24 md:py-32 border-t border-border">
      <div className="container-pro">
        <SectionHeading
          eyebrow="How I work / operating principles"
          title={<>What I bring to a team.</>}
          description="Strong pipelines are table stakes. What teams have relied on me for is ownership, clear requirements and getting the business logic right."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {STRENGTHS.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="glass rounded-2xl p-6"
              >
                <div className="inline-flex rounded-xl bg-gradient-to-br from-blue-500/25 to-cyan-400/20 p-2">
                  <Icon size={16} className="text-[#38BDF8]" />
                </div>
                <h3 className="mt-4 text-lg font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </motion.div>
            );
          })}

          {/* Recognition & credentials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: STRENGTHS.length * 0.05 }}
            className="glass-strong rounded-2xl p-6 relative overflow-hidden"
          >
            <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-[#2563EB]/20 blur-3xl" />
            <div className="relative">
              <div className="mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                // recognition
              </div>
              <a
                href={PROFILE.certification.url}
                target="_blank"
                rel="noreferrer"
                className="mt-4 flex items-start gap-3 rounded-xl border border-border bg-white/[0.02] p-3 hover:border-[#2563EB]/50 transition-colors"
              >
                <BadgeCheck size={18} className="mt-0.5 shrink-0 text-[#38BDF8]" />
                <span>
                  <span className="block text-sm font-medium">{PROFILE.certification.name}</span>
                  <span className="mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    Verify credential ↗
                  </span>
                </span>
              </a>
              <ul className="mt-4 space-y-3">
                {RECOGNITION.map((r) => (
                  <li key={r} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                    <Award size={16} className="mt-0.5 shrink-0 text-[#38BDF8]" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
