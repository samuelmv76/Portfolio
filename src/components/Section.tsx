import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Props = {
  id?: string;
  eyebrow: string;
  titulo: string;
  alterna?: boolean;
  children: ReactNode;
};

export function Section({ id, eyebrow, titulo, alterna = false, children }: Props) {
  return (
    <section
      id={id}
      className={`py-[clamp(56px,8vw,96px)] ${alterna ? "bg-surface" : "bg-bg"}`}
    >
      <div className="mx-auto max-w-[980px] px-[22px]">
        <Reveal>
          <p className="mb-3.5 font-mono text-micro font-medium tracking-[0.06em] text-ink-2 uppercase">
            {eyebrow}
          </p>
          <h2 className="mb-[34px] max-w-[20ch] text-h2 font-semibold text-balance">{titulo}</h2>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
