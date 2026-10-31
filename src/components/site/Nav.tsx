import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV } from "@/data/portfolio";

export function Nav() {
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 80], ["rgba(7,11,20,0)", "rgba(7,11,20,0.72)"]);
  const border = useTransform(scrollY, [0, 80], ["rgba(148,163,184,0)", "rgba(148,163,184,0.12)"]);
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      style={{ backgroundColor: bg, borderColor: border }}
      className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl"
    >
      <div className="container-pro flex h-16 items-center justify-between">
        <Link to="/" className="group flex items-center gap-2.5">
          <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#2563EB] to-[#38BDF8] shadow-[0_0_24px_rgba(37,99,235,0.35)]">
            <span className="mono text-[11px] font-bold text-white">LD</span>
          </div>
          <div className="hidden sm:block">
            <div className="text-sm font-semibold tracking-tight">Lokesh Devaraj</div>
            <div className="mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Data Engineer
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground bg-white/[0.04]" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <span className="mono flex items-center gap-2 rounded-full border border-border px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:animate-none" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            Open to roles
          </span>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden rounded-md p-2 text-muted-foreground hover:text-foreground"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="container-pro flex flex-col py-2">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm text-muted-foreground"
                activeProps={{ className: "text-foreground" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </motion.header>
  );
}
