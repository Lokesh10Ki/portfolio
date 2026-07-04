import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/data/portfolio";
import { PageHeader } from "@/components/site/Section";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Lokesh Devaraj" },
      { name: "description", content: "Case studies from enterprise financial analytics, revenue reconciliation, Power BI frameworks and AI-native analytics platforms." },
      { property: "og:title", content: "Projects — Lokesh Devaraj" },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects / production dossier"
        title={<>Case studies from the platform floor.</>}
        description="Every project below is in production or has shipped. Click through for architecture, impact and lessons."
      />
      <section className="container-pro pb-24">
        <div className="grid gap-5 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <Link
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="group relative block h-full overflow-hidden rounded-2xl glass p-7 transition-all hover:-translate-y-1 hover:border-border-strong hover:shadow-[0_30px_80px_-30px_rgba(37,99,235,0.4)]"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-[#2563EB]/10 to-transparent" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                      {String(i + 1).padStart(2, "0")} / {String(PROJECTS.length).padStart(2, "0")}
                    </div>
                    <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold tracking-tight">{p.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.tagline}</p>

                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {p.stack.map((t) => (
                      <span key={t} className="mono rounded-md border border-border px-2 py-0.5 text-[10px] text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 grid grid-cols-3 gap-3 border-t border-border pt-5">
                    {p.impact.slice(0, 3).map((imp) => (
                      <div key={imp} className="mono text-[10px] uppercase tracking-[0.18em] text-[#38BDF8] leading-relaxed">
                        {imp}
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
