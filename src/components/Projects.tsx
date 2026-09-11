import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { ProjectCard } from "./ProjectCard";
import { proyectos } from "../data/perfil";

export function Projects() {
  return (
    <Section id="proyectos" eyebrow="Proyectos" titulo="Tres proyectos reales, de principio a fin.">
      <div className="grid gap-[18px]">
        {proyectos.map((p, i) => (
          <Reveal key={p.nombre} delay={i * 0.08}>
            <ProjectCard proyecto={p} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
