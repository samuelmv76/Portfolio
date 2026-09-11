import { useCallback, useEffect, useState } from "react";

export type Tema = "dark" | "light";

const CLAVE = "tema";

function leerTema(): Tema {
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}

/* El oscuro es el estado de partida, así que no se guarda nunca: pasar a
   claro pone el atributo y la clave, y volver a oscuro los quita. Un
   visitante que vuelve al oscuro queda igual que uno nuevo. */
export function useTheme() {
  const [tema, setTema] = useState<Tema>(leerTema);

  useEffect(() => {
    const raiz = document.documentElement;
    if (tema === "light") {
      raiz.setAttribute("data-theme", "light");
      try { localStorage.setItem(CLAVE, "light"); } catch { /* modo privado */ }
    } else {
      raiz.removeAttribute("data-theme");
      try { localStorage.removeItem(CLAVE); } catch { /* modo privado */ }
    }
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", tema === "light" ? "#ffffff" : "#000000");
  }, [tema]);

  const alternar = useCallback(() => {
    setTema((actual) => (actual === "light" ? "dark" : "light"));
  }, []);

  return { tema, alternar };
}
