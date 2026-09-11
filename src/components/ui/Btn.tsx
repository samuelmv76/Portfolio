import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  /** Versión compacta para la barra de navegación. */
  small?: boolean;
  externo?: boolean;
};

/* La pastilla azul: el único botón sólido de toda la página. */
export function Btn({ href, children, small = false, externo = false }: Props) {
  return (
    <a
      href={href}
      {...(externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={[
        "inline-flex items-center justify-center rounded-full bg-brand-solid font-normal text-white",
        "tracking-[-0.01em] transition-colors duration-200 hover:bg-brand-hover",
        small ? "px-3 py-[5px] text-micro" : "px-[21px] py-[10px] text-[17px]",
      ].join(" ")}
    >
      {children}
    </a>
  );
}
