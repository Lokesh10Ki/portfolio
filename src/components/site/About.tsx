import { motion } from "framer-motion";
import { PROFILE } from "@/data/portfolio";
import { SectionHeading } from "./Section";

const STATS = [
  { label: "Years Experience", value: PROFILE.yearsExperience, suffix: "+" },
  { label: "Projects Delivered", value: PROFILE.projectsDelivered, suffix: "+" },
  { label: "Enterprise Platforms", value: PROFILE.enterprisePlatforms, suffix: "" },
  { label: "Business Domains", value: PROFILE.businessDomains, suffix: "" },
];

const TIMELINE = [
  { year: "2022", title: "Started with web development", body: "Built responsive interfaces and backend services during a remote internship at Simtrak Solutions." },
  { year: "2024", title: "Joined JMAN Group", body: "Gained hands-on experience with ETL, Azure Data Factory, SQL and business intelligence workflows." },
  { year: "2025", title: "Moved into data engineering", body: "Delivered Databricks and PySpark pipelines for financial and operational reporting." },
  { year: "2026", title: "Leading platform work", body: "Now shaping enterprise data platforms and AI-assisted analytics workflows across multiple business entities." },
];

export function About() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-pro">
        <SectionHeading
          eyebrow="About / operator profile"
          title={<>The operator behind the platform.</>}
          description="I don't ship dashboards — I ship data platforms. Two-plus years building lakehouses, semantic layers and AI-assisted analytics for finance, operations and executive reporting."
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
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#38BDF8] flex items-center justify-center text-xl font-semibold text-white shadow-[0_0_30px_rgba(37,99,235,0.4)]">
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
                  Currently building enterprise reporting platforms for JMAN Group that support 17 business entities, with Power BI dashboards spanning revenue, utilisation, contribution, GRR/NRR and executive KPIs.
                </p>
                <p>Previously led revenue reconciliation and KPI validation work for a private equity exit engagement, strengthening reporting trust for finance leadership.</p>
              </div>
              <dl className="mt-6 grid grid-cols-2 gap-3 border-t border-border pt-6">
                {STATS.map((s) => (
                  <div key={s.label}>
                    <dd className="text-3xl font-semibold tracking-tight text-gradient-brand">
                      {s.value}
                      {s.suffix}
                    </dd>
                    <dt className="mono mt-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      {s.label}
                    </dt>
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
                  key={t.year}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative"
                >
                  <span className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-[#2563EB] shadow-[0_0_0_4px_rgba(37,99,235,0.15)]" />
                  <div className="mono text-[11px] uppercase tracking-[0.18em] text-[#38BDF8]">{t.year}</div>
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
