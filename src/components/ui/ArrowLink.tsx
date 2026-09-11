import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";

type Props = {
  href: string;
  children: ReactNode;
  externo?: boolean;
};

/* El enlace con chevron. El icono viene de lucide en vez de un ::after
   con un carácter, así que hereda el color y se alinea solo. */
export function ArrowLink({ href, children, externo = false }: Props) {
  return (
    <a
      href={href}
      {...(externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group inline-flex items-center gap-0.5 text-[17px] tracking-[-0.01em] text-brand hover:underline"
    >
      {children}
      <ChevronRight
        aria-hidden
        className="size-[18px] transition-transform duration-200 group-hover:translate-x-0.5"
        strokeWidth={2}
      />
    </a>
  );
}
