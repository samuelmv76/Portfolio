import { motion, useReducedMotion } from "motion/react";
import { Btn } from "./ui/Btn";
import { ArrowLink } from "./ui/ArrowLink";
import { PerfilCard } from "./PerfilCard";
import { datosHero, mailto } from "../data/perfil";
import { EASE } from "../lib/anim";

/* El hero entra al cargar, no al hacer scroll: ya está en pantalla. */
export function Hero() {
  const reducido = useReducedMotion();

  // Misma forma siempre: con movimiento reducido `initial` es false, que
  // Motion entiende como "empieza ya en su sitio".
  const entrada = (i: number) => ({
    initial: reducido ? (false as const) : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: EASE, delay: i * 0.08 },
  });

  return (
    <section id="top" className="bg-bg py-[clamp(52px,7vw,92px)]">
      <div className="mx-auto grid max-w-[980px] items-center gap-10 px-[22px] lg:grid-cols-[1.12fr_0.88fr]">
        <div className="min-w-0">
          <motion.h1 {...entrada(1)} className="mb-[18px] text-display font-semibold text-balance">
            Construyo software full stack y soluciones SAP que funcionan de verdad.
          </motion.h1>

          <motion.p {...entrada(2)} className="mb-[26px] max-w-[30ch] text-lede text-ink-2">
            Desarrollador full stack con experiencia en el ecosistema SAP y en frontend con React y Angular.
          </motion.p>

          <motion.div {...entrada(3)} className="flex flex-wrap items-center gap-x-6 gap-y-3.5">
            <Btn href={mailto}>Hablemos</Btn>
            <ArrowLink href="#proyectos">Ver proyectos</ArrowLink>
          </motion.div>

          <motion.div
            {...entrada(4)}
            className="mt-[34px] grid max-w-[520px] grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-3"
          >
            {datosHero.map((d) => (
              <div key={d.valor} className="min-w-0 rounded-[14px] bg-card px-[18px] py-4">
                <strong className="block text-[24px] leading-[1.1] font-semibold tracking-[-0.03em] tabular-nums">
                  {d.valor}
                </strong>
                <span className="mt-1 block text-micro text-ink-2">{d.etiqueta}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div {...entrada(2)} className="min-w-0">
          <PerfilCard />
        </motion.div>
      </div>
    </section>
  );
}
