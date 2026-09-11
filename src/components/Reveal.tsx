import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { EASE } from "../lib/anim";

type Props = {
  children: ReactNode;
  className?: string;
  /** Retardo en segundos, para escalonar hermanos. */
  delay?: number;
};

/* Entrada al entrar en pantalla. Con `prefers-reduced-motion` no envuelve
   nada en motion: devuelve el contenido tal cual, visible desde el principio. */
export function Reveal({ children, className, delay = 0 }: Props) {
  const reducido = useReducedMotion();

  if (reducido) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -40px 0px" }}
      transition={{ duration: 0.55, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}
