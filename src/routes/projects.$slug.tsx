import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Download } from "lucide-react";
import { PROFILE, PROJECTS, absoluteUrl } from "@/data/portfolio";
import { StatusBadge } from "@/components/site/StatusBadge";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = PROJECTS.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    const index = PROJECTS.indexOf(project);
    return { project, next: PROJECTS[(index + 1) % PROJECTS.length] };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.project.name ?? "Project"} — Lokesh Devaraj` },
      { name: "description", content: loaderData?.project.tagline },
      { property: "og:title", content: loaderData?.project.name },
      { property: "og:description", content: loaderData?.project.tagline },
      { property: "og:type", content: "article" },
      ...(loaderData
        ? [{ property: "og:url", content: absoluteUrl(`/projects/${loaderData.project.slug}`) }]
        : []),
    ],
    links: loaderData
      ? [{ rel: "canonical", href: absoluteUrl(`/projects/${loaderData.project.slug}`) }]
      : [],
  }),
  notFoundComponent: () => (
    <div className="container-pro py-40 text-center">
      <div className="mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">404</div>
      <h1 className="mt-4 text-3xl font-semibold">Project not found</h1>
      <Link to="/projects" className="mt-6 inline-block text-sm text-[#38BDF8] hover:underline">
        ← Back to projects
      </Link>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="container-pro py-40 text-center">
      <h1 className="text-2xl font-semibold">Something went wrong</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        {error instanceof Error ? error.message : String(error)}
      </p>
      <button
        onClick={reset}
        className="mt-6 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground"
      >
        Retry
      </button>
    </div>
  ),
  component: ProjectPage,
});

function ProjectPage() {
  const { project: p, next } = Route.useLoaderData();
  return (
    <article className="pt-32 pb-24">
      <div className="container-pro">
        <Link
          to="/projects"
          className="mono inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft size={12} /> All projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-6 max-w-3xl"
        >
          <div className="flex flex-wrap items-center gap-3">
            <div className="mono text-[10px] uppercase tracking-[0.24em] text-[#38BDF8]">
              Case study · {p.company}
            </div>
            <StatusBadge status={p.status} />
          </div>
          <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gradient">
            {p.name}
          </h1>
          <p className="mt-5 text-xl text-muted-foreground">{p.tagline}</p>
        </motion.div>

        {/* Impact strip */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {p.impact.map((imp) => (
            <div key={imp} className="glass rounded-xl p-5">
              <div className="mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Impact
              </div>
              <div className="mt-2 text-lg font-medium text-gradient-brand">{imp}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <Section label="Problem" body={p.problem} />
            <Section label="Solution" body={p.solution} />
            <div>
              <Label>Architecture</Label>
              <div className="mt-3 glass rounded-2xl p-6">
                <div className="mono text-xs text-muted-foreground leading-relaxed whitespace-pre-wrap">
                  {p.architecture}
                </div>
                <div className="mt-6 flex items-center justify-center gap-3 flex-wrap border-t border-border pt-6">
                  {p.architecture.split("→").map((seg, i, arr) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="mono rounded-lg border border-border bg-white/[0.02] px-3 py-1.5 text-[11px]">
                        {seg.trim()}
                      </div>
                      {i < arr.length - 1 && <span className="text-muted-foreground">→</span>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <Section label="Challenges" body={p.challenges} />
            <Section label="Lessons Learned" body={p.lessons} italic />
          </div>

          <aside className="space-y-6">
            <div className="glass rounded-2xl p-6">
              <Label>Tech Stack</Label>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="mono rounded-md border border-border px-2 py-1 text-[11px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="glass rounded-2xl p-6">
              <Label>Context</Label>
              <dl className="mt-3 space-y-3 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Company</dt>
                  <dd className="text-right">{p.company}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Timeline</dt>
                  <dd className="text-right">{p.period}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Status</dt>
                  <dd>
                    <StatusBadge status={p.status} />
                  </dd>
                </div>
              </dl>
              <p className="mono mt-4 border-t border-border pt-4 text-[10px] uppercase tracking-[0.18em] text-muted-foreground leading-relaxed">
                // client work: source code is not public
              </p>
            </div>
            <a
              href={PROFILE.resumePdf}
              download="Lokesh_Devaraj_Data_Engineer_Resume.pdf"
              className="glass flex items-center justify-between rounded-2xl p-5 group hover:border-border-strong transition-colors"
            >
              <div className="flex items-center gap-3">
                <Download size={18} />
                <div>
                  <div className="text-sm font-medium">Download resume</div>
                  <div className="mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    PDF · 2 pages
                  </div>
                </div>
              </div>
              <span className="text-muted-foreground group-hover:text-foreground">→</span>
            </a>
          </aside>
        </div>

        <Link
          to="/projects/$slug"
          params={{ slug: next.slug }}
          className="group mt-20 flex items-center justify-between gap-6 rounded-2xl glass p-6 md:p-8 transition-all hover:border-border-strong"
        >
          <div>
            <div className="mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
              Next case study
            </div>
            <div className="mt-2 text-xl md:text-2xl font-semibold tracking-tight">{next.name}</div>
          </div>
          <ArrowRight
            size={20}
            className="shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-foreground"
          />
        </Link>
      </div>
    </article>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
      // {children}
    </div>
  );
}
function Section({
  label,
  body,
  italic = false,
}: {
  label: string;
  body: string;
  italic?: boolean;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <p
        className={`mt-3 text-base leading-relaxed text-muted-foreground ${italic ? "italic" : ""}`}
      >
        {body}
      </p>
    </div>
  );
}
