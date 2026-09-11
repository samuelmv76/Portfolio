import { Moon, Sun } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import type { Tema } from "../hooks/useTheme";
import { EASE } from "../lib/anim";

type Props = { tema: Tema; onAlternar: () => void };

/* El icono anuncia la ACCIÓN, no el estado: en oscuro se ve un sol
   ("activar el claro"), en claro una luna. */
export function ThemeToggle({ tema, onAlternar }: Props) {
  const reducido = useReducedMotion();
  const esClaro = tema === "light";
  const Icono = esClaro ? Moon : Sun;

  return (
    <button
      type="button"
      onClick={onAlternar}
      aria-pressed={esClaro}
      aria-label={esClaro ? "Volver al tema oscuro" : "Activar el tema claro"}
      className="grid size-[30px] shrink-0 place-items-center rounded-full text-ink transition-colors duration-200 hover:bg-chip"
    >
      <motion.span
        key={tema}
        initial={reducido ? false : { rotate: -60, opacity: 0, scale: 0.7 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.28, ease: EASE }}
        className="grid place-items-center"
      >
        <Icono aria-hidden className="size-4" strokeWidth={1.8} />
      </motion.span>
    </button>
  );
}
