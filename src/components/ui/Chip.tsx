import type { ReactNode } from "react";

export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full bg-chip px-[9px] py-[4px] font-mono text-[11px] tracking-normal text-chip-ink">
      {children}
    </span>
  );
}

export function Chips({ items }: { items: readonly string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((i) => (
        <Chip key={i}>{i}</Chip>
      ))}
    </div>
  );
}
