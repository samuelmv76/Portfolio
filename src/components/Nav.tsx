import { Btn } from "./ui/Btn";
import { ThemeToggle } from "./ThemeToggle";
import { mailto, perfil } from "../data/perfil";
import { useTheme } from "../hooks/useTheme";

const ENLACES = [
  { texto: "Proyectos", href: "#proyectos" },
  { texto: "Experiencia", href: "#trayectoria" },
  { texto: "Stack", href: "#stack" },
  { texto: "Contacto", href: "#contacto" },
];

export function Nav() {
  const { tema, alternar } = useTheme();

  return (
    <header className="sticky top-0 z-20 h-12 border-b border-nav-line bg-nav backdrop-blur-[20px] backdrop-saturate-[1.8]">
      <div className="mx-auto flex h-full max-w-[980px] items-center justify-between gap-[18px] px-[22px]">
        <a href="#top" className="flex items-center gap-2 text-[13px] font-semibold tracking-[-0.02em]">
          <span className="grid size-[22px] place-items-center rounded-md bg-ink text-[10px] font-bold text-ink-on">
            {perfil.iniciales}
          </span>
          Samuel Martos
        </a>

        <nav aria-label="Navegación principal" className="hidden gap-[26px] text-micro md:flex">
          {ENLACES.map((e) => (
            <a key={e.href} href={e.href} className="opacity-[0.88] hover:opacity-100">
              {e.texto}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <ThemeToggle tema={tema} onAlternar={alternar} />
          <Btn href={mailto} small>Hablemos</Btn>
        </div>
      </div>
    </header>
  );
}
