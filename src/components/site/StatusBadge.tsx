import type { LabItem } from "@/data/portfolio";

const STYLES: Record<LabItem["status"], string> = {
  "In progress": "border-amber-400/30 text-amber-300",
  Production: "border-emerald-400/30 text-emerald-300",
  Shipped: "border-emerald-400/30 text-emerald-300",
  POC: "border-pink-400/30 text-pink-300",
  Training: "border-violet-400/30 text-violet-300",
};

export function StatusBadge({ status }: { status: LabItem["status"] }) {
  return (
    <span
      className={`mono inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[10px] uppercase tracking-[0.16em] ${STYLES[status]}`}
    >
      <span className="h-1 w-1 rounded-full bg-current" />
      {status}
    </span>
  );
}
