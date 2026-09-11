import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { Chips } from "./ui/Chip";
import { stack } from "../data/perfil";

export function Stack() {
  return (
    <Section id="stack" eyebrow="Stack técnico" titulo="Herramientas con las que trabajo">
      <div className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
        {stack.map((b, i) => (
          <Reveal key={b.titulo} delay={i * 0.06}>
            <div className="h-full min-w-0 rounded-card bg-card p-[26px]">
              <h3 className="mb-3 text-micro font-medium tracking-[0.06em] text-ink-2 uppercase">
                {b.titulo}
              </h3>
              <Chips items={b.items} />
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
