import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { experiencia, formacion } from "../data/perfil";
import type { Hito } from "../data/perfil";

function Columna({ hitos }: { hitos: Hito[] }) {
  return (
    <div className="grid gap-[26px]">
      {hitos.map((h) => (
        <div key={h.titulo}>
          <time className="block text-micro tracking-[0.02em] tabular-nums text-ink-2">{h.fecha}</time>
          <h3 className="mt-[5px] mb-0.5 text-[19px] leading-[1.2] font-semibold tracking-[-0.02em]">
            {h.titulo}
          </h3>
          <span className="mb-2.5 block text-[14px] text-ink-2">{h.organizacion}</span>
          {h.puntos && (
            <ul className="grid gap-1.5">
              {h.puntos.map((p) => (
                <li key={p} className="text-meta text-ink-2">{p}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export function Timeline() {
  return (
    <Section id="trayectoria" eyebrow="Trayectoria" titulo="Experiencia y formación" alterna>
      <div className="grid gap-[34px] md:grid-cols-2">
        <Reveal><Columna hitos={experiencia} /></Reveal>
        <Reveal delay={0.08}><Columna hitos={formacion} /></Reveal>
      </div>
    </Section>
  );
}
