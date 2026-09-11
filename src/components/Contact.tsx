import { Reveal } from "./Reveal";
import { Btn } from "./ui/Btn";
import { ArrowLink } from "./ui/ArrowLink";
import { mailto, perfil } from "../data/perfil";

export function Contact() {
  return (
    <section id="contacto" className="bg-surface px-[22px] py-[clamp(56px,8vw,96px)] text-center">
      <Reveal>
        <h2 className="mb-[18px] text-h2 font-semibold text-balance">
          ¿Hablamos de tu próximo proyecto?
        </h2>
        <p className="mx-auto mb-8 max-w-[44ch] text-lede text-ink-2">
          Busco incorporarme a un equipo de desarrollo donde seguir creciendo.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3.5">
          <Btn href={mailto}>{perfil.email}</Btn>
          <ArrowLink href={perfil.github} externo>Ver GitHub</ArrowLink>
          <ArrowLink href={perfil.linkedin} externo>LinkedIn</ArrowLink>
        </div>
      </Reveal>
    </section>
  );
}
