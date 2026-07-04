import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Download, Search } from "lucide-react";
import { PROFILE, EXPERIENCE, RESUME } from "@/data/portfolio";
import { PageHeader } from "@/components/site/Section";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Lokesh Devaraj" },
      { name: "description", content: "Interactive resume for Lokesh Devaraj, Data Engineer." },
      { property: "og:title", content: "Resume — Lokesh Devaraj" },
      { property: "og:url", content: "/resume" },
    ],
    links: [{ rel: "canonical", href: "/resume" }],
  }),
  component: ResumePage,
});

function ResumePage() {
  const [q, setQ] = useState("");
  const filter = q.trim().toLowerCase();

  const filteredExp = useMemo(
    () =>
      EXPERIENCE.filter((e) =>
        !filter ||
        [e.company, e.role, e.overview, ...e.tech, ...e.responsibilities, ...e.impact]
          .join(" ")
          .toLowerCase()
          .includes(filter),
      ),
    [filter],
  );
  const filteredSkills = RESUME.skills.filter((s) => !filter || s.toLowerCase().includes(filter));

  return (
    <>
      <PageHeader
        eyebrow="Resume / operator dossier"
        title={<>Interactive resume.</>}
        description="Search across roles, technologies, and impact. Download the PDF version if you want it offline."
      />
      <section className="container-pro pb-24">
        <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between mb-8">
          <div className="glass flex items-center gap-2 rounded-full px-4 py-2 flex-1 max-w-md">
            <Search size={14} className="text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search — Databricks, RAG, Snowflake…"
              className="bg-transparent flex-1 text-sm outline-none placeholder:text-muted-foreground/60"
            />
            {q && (
              <button onClick={() => setQ("")} className="mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground">
                clear
              </button>
            )}
          </div>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black hover:bg-white/90 transition-colors self-start"
          >
            <Download size={15} /> Download PDF
          </a>
        </div>

        <div className="glass rounded-2xl p-8 md:p-10">
          <header className="border-b border-border pb-8">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">{PROFILE.name}</h1>
            <div className="mono mt-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              {PROFILE.role} · {PROFILE.location} · {PROFILE.email}
            </div>
            <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-3xl">{RESUME.summary}</p>
          </header>

          <div className="mt-8 grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <SectionLabel>Experience</SectionLabel>
                <div className="mt-4 space-y-6">
                  {filteredExp.length === 0 && <div className="mono text-xs text-muted-foreground">// no matches</div>}
                  {filteredExp.map((e) => (
                    <div key={e.company} className="border-l border-border pl-5">
                      <div className="flex flex-wrap items-baseline gap-x-3">
                        <div className="text-base font-semibold">{e.role}</div>
                        <div className="text-sm text-muted-foreground">· {e.company}</div>
                        <div className="mono ml-auto text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{e.period}</div>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">{e.overview}</p>
                      <ul className="mt-3 space-y-1 text-sm">
                        {e.impact.map((i) => (
                          <li key={i} className="flex gap-2">
                            <span className="mono text-[#38BDF8]">▲</span>
                            <Highlight text={i} q={filter} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <aside className="space-y-8">
              <div>
                <SectionLabel>Skills</SectionLabel>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {filteredSkills.map((s) => (
                    <span key={s} className="mono rounded-md border border-border px-2 py-0.5 text-[10px] text-muted-foreground">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <SectionLabel>Certifications</SectionLabel>
                <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  {RESUME.certifications.map((c) => <li key={c}>· {c}</li>)}
                </ul>
              </div>
              <div>
                <SectionLabel>Education</SectionLabel>
                {RESUME.education.map((e) => (
                  <div key={e.school} className="mt-3">
                    <div className="text-sm font-medium">{e.school}</div>
                    <div className="text-xs text-muted-foreground">{e.degree} · {e.period}</div>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <div className="mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">// {children}</div>;
}
function Highlight({ text, q }: { text: string; q: string }) {
  if (!q) return <span>{text}</span>;
  const i = text.toLowerCase().indexOf(q);
  if (i < 0) return <span>{text}</span>;
  return (
    <span>
      {text.slice(0, i)}
      <mark className="bg-[#2563EB]/30 text-foreground rounded px-0.5">{text.slice(i, i + q.length)}</mark>
      {text.slice(i + q.length)}
    </span>
  );
}
