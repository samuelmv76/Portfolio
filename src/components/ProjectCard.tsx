import { motion, useReducedMotion } from "motion/react";
import { Chips } from "./ui/Chip";
import { ArrowLink } from "./ui/ArrowLink";
import { ilustraciones } from "./art";
import type { Proyecto } from "../data/perfil";
import { EASE } from "../lib/anim";

export function ProjectCard({ proyecto }: { proyecto: Proyecto }) {
  const reducido = useReducedMotion();
  const Ilustracion = ilustraciones[proyecto.arte];

  return (
    <motion.article
      whileHover={reducido ? undefined : { y: -4 }}
      transition={{ duration: 0.35, ease: EASE }}
      className="grid overflow-hidden rounded-tile bg-card md:grid-cols-2 md:items-center"
    >
      <div className="aspect-[16/10]">
        <Ilustracion />
      </div>
      <div className="p-[28px]">
        <p className="mb-2.5 font-mono text-micro font-medium tracking-[0.06em] text-ink-2 uppercase">
          {proyecto.rol}
        </p>
        <h3 className="mb-2.5 text-h3 font-semibold">{proyecto.nombre}</h3>
        <ul className="mt-3.5 mb-[18px] grid gap-2">
          {proyecto.puntos.map((p) => (
            <li key={p} className="text-meta text-pretty text-ink-2">{p}</li>
          ))}
        </ul>
        <div className="mb-5">
          <Chips items={proyecto.chips} />
        </div>
        <ArrowLink href={proyecto.url} externo>Ver repositorio</ArrowLink>
      </div>
    </motion.article>
  );
}
