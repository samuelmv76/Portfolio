import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Se sirve desde la raíz del dominio (Vercel / Netlify), así que no hace
// falta `base`. Si algún día va a GitHub Pages, sería base: "/Portfolio/".
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
