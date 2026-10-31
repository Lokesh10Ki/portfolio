import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="mono flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
      <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#2563EB]" />
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  as: Heading = "h2",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  as?: "h1" | "h2";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="max-w-3xl"
    >
      <SectionEyebrow>{eyebrow}</SectionEyebrow>
      <Heading className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-gradient">
        {title}
      </Heading>
      {description && (
        <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
}) {
  return (
    <div className="container-pro pt-32 pb-16 relative">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none [mask-image:radial-gradient(ellipse_at_top,black,transparent_60%)]" />
      <div className="relative">
        <SectionHeading as="h1" eyebrow={eyebrow} title={title} description={description} />
      </div>
    </div>
  );
}
