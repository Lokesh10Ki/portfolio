import { motion } from "framer-motion";
import { PROFILE } from "@/data/portfolio";
import { SectionHeading } from "./Section";

const STATS = [
  { label: "Years Experience", value: PROFILE.yearsExperience },
  { label: "Cloud Platforms · Azure & AWS", value: "2" },
  { label: "Power BI Dashboards", value: "15+" },
  { label: "Roles at JMAN · Intern → Solutions Enabler", value: "4" },
];

const TIMELINE = [
  {
    year: "2022",
    title: "Started with web development",
    body: "Built interfaces, APIs and tests during a remote internship at Simtrak Solutions while studying Information Technology.",
  },
  {
    year: "Jan 2024",
    title: "Joined JMAN Group as a Software Intern",
    body: "Structured training across data engineering, BI, cloud and DevOps; built Azure Data Factory and SQL assignments plus Python automation and web scraping with Selenium, Playwright and BeautifulSoup.",
  },
  {
    year: "Jun 2024",
    title: "Software Engineer",
    body: "Built Equiflow, a full-stack private equity data platform with Microsoft SSO, versioned document workflows and AI-generated dashboards.",
  },
  {
    year: "Apr 2025",
    title: "Senior Software Engineer: into data engineering",
    body: "Databricks and PySpark pipelines, dimensional models and Power BI semantic models for a financial analytics Lakehouse serving 17 business entities.",
  },
  {
    year: "Apr 2026",
    title: "Solutions Enabler",
    body: "Drove design and delivery of enterprise data solutions across the group, led revenue reconciliation work and built AI proofs of concept on Mosaic AI and Claude MCP.",
  },
  {
    year: "Aug 2026",
    title: "Joined Presidio",
    body: "Migrating an enterprise Databricks Lakehouse from Azure to AWS with Unity Catalog governance, Terraform and automated reconciliation, and building agentic systems through the AI400 program.",
  },
];

export function About() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-pro">
        <SectionHeading
          eyebrow="About / operator profile"
          title={<>The engineer behind the platform.</>}
          description="Data engineering is as much about understanding the business as it is about writing pipelines. I've spent 2.5+ years doing both: Lakehouses, dimensional models and governed reporting for finance, operations and executive teams."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Profile card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 glass rounded-2xl p-6 relative overflow-hidden"
          >
            <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-[#2563EB]/20 blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 shrink-0 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#38BDF8] flex items-center justify-center text-xl font-semibold text-white shadow-[0_0_30px_rgba(37,99,235,0.4)]">
                  LD
                </div>
                <div>
                  <div className="text-lg font-semibold">{PROFILE.name}</div>
                  <div className="mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    {PROFILE.role} · {PROFILE.location}
                  </div>
                </div>
              </div>
              <div className="mt-6 space-y-3 text-sm text-muted-foreground leading-relaxed">
                <p>
                  <span className="text-foreground">Now at Presidio</span>, moving an enterprise
                  Databricks Lakehouse from Azure to AWS: S3 re-platforming, Unity Catalog,
                  automated data-parity checks and Terraform-based CI/CD.
                </p>
                <p>
                  <span className="text-foreground">Previously at JMAN Group</span>, I built and
                  owned a financial analytics Lakehouse for a professional services group of 17
                  companies, and led the revenue reconciliation behind a private equity exit.
                </p>
              </div>
              <dl className="mt-6 grid grid-cols-2 gap-3 border-t border-border pt-6">
                {STATS.map((s) => (
                  <div key={s.label} className="flex flex-col-reverse">
                    <dt className="mono mt-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      {s.label}
                    </dt>
                    <dd className="text-3xl font-semibold tracking-tight text-gradient-brand">
                      {s.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.div>

          {/* Timeline */}
          <div className="lg:col-span-3">
            <div className="mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground mb-6">
              // trajectory.log
            </div>
            <ol className="relative border-l border-border pl-6 space-y-8">
              {TIMELINE.map((t, i) => (
                <motion.li
                  key={t.title}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative"
                >
                  <span className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-[#2563EB] shadow-[0_0_0_4px_rgba(37,99,235,0.15)]" />
                  <div className="mono text-[11px] uppercase tracking-[0.18em] text-[#38BDF8]">
                    {t.year}
                  </div>
                  <div className="mt-1 text-lg font-medium">{t.title}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{t.body}</div>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
