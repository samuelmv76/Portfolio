import { perfil } from "../data/perfil";

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg py-[26px] text-micro text-ink-2">
      <div className="mx-auto flex max-w-[980px] flex-wrap justify-between gap-3 px-[22px]">
        <span>© {new Date().getFullYear()} {perfil.nombre}</span>
        <span className="flex gap-2">
          <a href={perfil.github} target="_blank" rel="noopener noreferrer" className="hover:text-ink">GitHub</a>
          <span aria-hidden>·</span>
          <a href={perfil.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-ink">LinkedIn</a>
          <span aria-hidden>·</span>
          <a href={`mailto:${perfil.email}`} className="hover:text-ink">Email</a>
        </span>
      </div>
    </footer>
  );
}
