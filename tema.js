/* Interruptor de tema.
   El sitio es oscuro por defecto: el estado "sin atributo" ya es
   oscuro en el CSS, así que aquí solo se gestiona el paso a claro.
   El script inline del <head> es el que aplica la elección guardada
   antes del primer pintado; esto solo conecta el botón. */
(function () {
  "use strict";

  var root = document.documentElement;
  var btn = document.querySelector(".theme-toggle");
  if (!btn) return;

  var META = { dark: "#000000", light: "#ffffff" };

  function actual() {
    return root.getAttribute("data-theme") === "light" ? "light" : "dark";
  }

  function etiquetar() {
    var claro = actual() === "light";
    btn.setAttribute("aria-label", claro ? "Volver al tema oscuro" : "Activar el tema claro");
    btn.setAttribute("aria-pressed", claro ? "true" : "false");
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", META[actual()]);
  }

  btn.addEventListener("click", function () {
    if (actual() === "light") {
      root.removeAttribute("data-theme");          // vuelve al oscuro de partida
      try { localStorage.removeItem("tema"); } catch (e) {}
    } else {
      root.setAttribute("data-theme", "light");
      try { localStorage.setItem("tema", "light"); } catch (e) {}
    }
    etiquetar();
  });

  etiquetar();
})();
