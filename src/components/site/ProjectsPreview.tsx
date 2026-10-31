import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/data/portfolio";
import { SectionHeading } from "./Section";
import { StatusBadge } from "./StatusBadge";

export function ProjectsPreview() {
  return (
    <section className="relative py-24 md:py-32 border-t border-border">
      <div className="container-pro">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <SectionHeading
            eyebrow="Selected work / v.production"
            title={<>Platforms in production.</>}
            description="Case studies from Presidio and JMAN Group: Lakehouse migrations, financial analytics platforms and AI on enterprise data."
          />
          <Link
            to="/projects"
            className="mono inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground hover:border-border-strong transition-colors"
          >
            All projects <ArrowUpRight size={12} />
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.slice(0, 3).map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <Link
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="group block relative overflow-hidden rounded-2xl glass p-6 h-full transition-all hover:border-border-strong hover:-translate-y-1 hover:shadow-[0_30px_80px_-30px_rgba(37,99,235,0.45)]"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#2563EB]/10 via-transparent to-transparent pointer-events-none" />
                <div className="relative">
                  <div className="flex items-center justify-between gap-3">
                    <div className="mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                      {p.company} · {p.period}
                    </div>
                    <StatusBadge status={p.status} />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold tracking-tight leading-tight">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.tagline}</p>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.stack.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="mono rounded-md border border-border px-2 py-0.5 text-[10px] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                    <div className="mono text-[10px] uppercase tracking-[0.18em] text-[#38BDF8]">
                      {p.impact[0]}
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
