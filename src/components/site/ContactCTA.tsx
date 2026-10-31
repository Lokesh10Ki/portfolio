import { motion } from "framer-motion";
import { Download, Linkedin, Mail } from "lucide-react";
import { PROFILE } from "@/data/portfolio";

export function ContactCTA() {
  return (
    <section className="relative py-24 md:py-32 border-t border-border">
      <div className="container-pro">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="glass-strong relative overflow-hidden rounded-3xl p-8 md:p-14 text-center"
        >
          <div className="absolute inset-0 radial-glow pointer-events-none" />
          <div className="relative">
            <div className="mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
              // open_channel
            </div>
            <h2 className="mx-auto mt-4 max-w-2xl text-3xl md:text-5xl font-semibold tracking-tight text-gradient">
              Building a data platform? Let's talk.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground leading-relaxed">
              I'm open to Data Engineering roles where Lakehouse architecture, business
              understanding and AI-assisted analytics all matter.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black hover:bg-white/90 transition-colors"
              >
                <Mail size={16} /> {PROFILE.email}
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-5 py-3 text-sm text-foreground hover:bg-white/[0.06] hover:border-border-strong transition-all"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
              <a
                href={PROFILE.resumePdf}
                download="Lokesh_Devaraj_Data_Engineer_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-5 py-3 text-sm text-foreground hover:bg-white/[0.06] hover:border-border-strong transition-all"
              >
                <Download size={16} /> Resume (PDF)
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
