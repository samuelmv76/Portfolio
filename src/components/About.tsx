import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { perfil } from "../data/perfil";

const DESTACADOS = [
  { titulo: "Formación técnica", texto: "Tres titulaciones de FP: DAM, DAW y SMR, CIFP Avilés." },
  { titulo: "Entornos internacionales", texto: "Comunicación técnica diaria en inglés." },
];

export function About() {
  return (
    <Section id="sobre-mi" eyebrow="Sobre mí" titulo="De ABAP a React, sin perder de vista el resultado." alterna>
      <div className="grid items-start gap-[34px] lg:grid-cols-[280px_1fr]">
        <Reveal>
          <div className="rounded-card bg-card-alt p-[26px] text-center">
            <div className="mx-auto mb-4 grid size-[84px] place-items-center rounded-[24px] bg-ink text-[28px] font-semibold tracking-[-0.03em] text-ink-on">
              {perfil.iniciales}
            </div>
            <h3 className="text-[17px] font-semibold tracking-[-0.015em]">{perfil.nombre}</h3>
            <span className="mt-1 block text-[14px] text-ink-2">{perfil.rol}</span>
            <ul className="mt-5 grid gap-[9px] text-left text-[14px] leading-[1.5] text-ink-2">
              <li>{perfil.ubicacion}</li>
              <li>{perfil.email}</li>
              <li>{perfil.telefono}</li>
              <li>Inglés B2</li>
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mb-4 max-w-[62ch] text-pretty">
            Soy desarrollador de software, titulado en Desarrollo de Aplicaciones Multiplataforma,
            Desarrollo de Aplicaciones Web y Sistemas Microinformáticos y Redes por el CIFP de Avilés.
            He aplicado esa formación en dos entornos muy distintos: el ecosistema SAP en Phoenix
            Contact y el desarrollo frontend con React en Capgemini.
          </p>
          <p className="max-w-[62ch] text-meta text-pretty text-ink-2">
            Me interesa la parte del desarrollo donde backend, frontend e integración se tocan:
            modelar bien los datos, exponerlos con una API limpia y construir una interfaz que los
            haga útiles.
          </p>
          <div className="mt-6 grid gap-[18px] sm:grid-cols-2">
            {DESTACADOS.map((d) => (
              <div key={d.titulo} className="min-w-0 rounded-card bg-card-alt p-[26px]">
                <h4 className="text-[17px] font-semibold tracking-[-0.015em]">{d.titulo}</h4>
                <p className="mt-1.5 text-[14px] leading-[1.55] text-ink-2">{d.texto}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
