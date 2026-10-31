import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FileText, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { PROFILE, absoluteUrl } from "@/data/portfolio";
import { PageHeader } from "@/components/site/Section";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Lokesh Devaraj" },
      {
        name: "description",
        content:
          "Contact Lokesh Devaraj, Data Engineer, about Data Engineering roles, Lakehouse architecture and AI-assisted analytics.",
      },
      { property: "og:title", content: "Contact — Lokesh Devaraj" },
      { property: "og:url", content: absoluteUrl("/contact") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/contact") }],
  }),
  component: ContactPage,
});

const CHANNELS = [
  { icon: Mail, label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: `in/${PROFILE.linkedinHandle}`,
    href: PROFILE.linkedin,
  },
  { icon: Github, label: "GitHub", value: `@${PROFILE.githubHandle}`, href: PROFILE.github },
  { icon: FileText, label: "Resume", value: "Download PDF", href: PROFILE.resumePdf },
  { icon: MapPin, label: "Location", value: PROFILE.location, href: null },
];

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact / open the channel"
        title={<>Let's build a data platform.</>}
        description="Hiring for a Data Engineering role, or want to talk Lakehouse architecture or AI in data engineering? Email is the fastest way to reach me. I reply within 48 hours."
      />
      <section className="container-pro pb-24">
        <div className="grid lg:grid-cols-2 gap-6">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              const subject = encodeURIComponent(`[Site] ${data.get("subject") || "Inquiry"}`);
              const body = encodeURIComponent(
                `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`,
              );
              window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
            }}
            className="glass rounded-2xl p-7 space-y-4"
          >
            <div className="mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
              // new_inquiry.msg
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Field label="Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
            </div>
            <Field label="Subject" name="subject" />
            <div>
              <label
                htmlFor="contact-message"
                className="mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                className="mt-2 w-full rounded-lg border border-border bg-white/[0.02] px-3 py-2.5 text-sm outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all resize-none"
                placeholder="Tell me about the role or the data platform you're building…"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black hover:bg-white/90 transition-colors"
            >
              Send message
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-3"
          >
            {CHANNELS.map((c) => {
              const Icon = c.icon;
              const inner = (
                <div className="glass flex items-center gap-4 rounded-2xl p-5 hover:border-border-strong transition-colors">
                  <div className="h-11 w-11 rounded-xl border border-border bg-gradient-to-br from-[#16223A] to-[#0E1524] flex items-center justify-center">
                    <Icon size={16} className="text-[#38BDF8]" />
                  </div>
                  <div>
                    <div className="mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      {c.label}
                    </div>
                    <div className="mt-0.5 text-sm break-all">{c.value}</div>
                  </div>
                </div>
              );
              return c.href ? (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  download={
                    c.label === "Resume" ? "Lokesh_Devaraj_Data_Engineer_Resume.pdf" : undefined
                  }
                >
                  {inner}
                </a>
              ) : (
                <div key={c.label}>{inner}</div>
              );
            })}

            <div className="glass rounded-2xl p-5">
              <div className="mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                // availability
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:animate-none" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span className="text-sm">Open to Data Engineering roles</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={`contact-${name}`}
        className="mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={`contact-${name}`}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-lg border border-border bg-white/[0.02] px-3 py-2.5 text-sm outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all"
      />
    </div>
  );
}
