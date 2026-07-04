import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { PROFILE } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="container-pro py-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
            © {new Date().getFullYear()} Lokesh Devaraj — All systems operational
          </div>
          <div className="mt-1 text-sm text-muted-foreground">
            Built as a data platform, not a portfolio.
          </div>
        </div>
        <div className="flex items-center gap-2">
          <a href={PROFILE.github} target="_blank" rel="noreferrer" className="rounded-md border border-border p-2 text-muted-foreground hover:text-foreground hover:border-border-strong transition-colors" aria-label="GitHub">
            <Github size={16} />
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="rounded-md border border-border p-2 text-muted-foreground hover:text-foreground hover:border-border-strong transition-colors" aria-label="LinkedIn">
            <Linkedin size={16} />
          </a>
          <a href={`mailto:${PROFILE.email}`} className="rounded-md border border-border p-2 text-muted-foreground hover:text-foreground hover:border-border-strong transition-colors" aria-label="Email">
            <Mail size={16} />
          </a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="ml-2 flex items-center gap-1.5 rounded-md border border-border px-3 py-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowUp size={14} /> Top
          </button>
        </div>
      </div>
    </footer>
  );
}
