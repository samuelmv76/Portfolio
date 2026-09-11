# Portfolio — Samuel Martos Vidal

Aplicación React con Vite, TypeScript, Tailwind CSS v4, Motion y lucide-react.

## Arrancar el proyecto

Las dependencias no están en `package.json` a propósito: instálalas con estos
dos comandos y npm escribirá las versiones vigentes junto con el lockfile.

```bash
npm install react react-dom motion lucide-react
npm install -D vite @vitejs/plugin-react typescript @types/react @types/react-dom tailwindcss @tailwindcss/vite
```

Después:

```bash
npm run dev        # servidor de desarrollo en http://localhost:5173
npm run build      # compila a dist/
npm run preview    # sirve dist/ para comprobarlo antes de publicar
npm run typecheck  # solo TypeScript, sin compilar
```

## Estructura

```
index.html              Shell de Vite. Aquí viven los <meta>, el JSON-LD
                        y el script que evita el parpadeo de tema.
public/assets/          Archivos servidos tal cual (favicon).
src/
  main.tsx              Punto de entrada.
  App.tsx               Composición de las secciones.
  index.css             Tailwind + tokens del tema + estilos base.
  data/perfil.ts        TODO el contenido: proyectos, experiencia, stack.
  hooks/useTheme.ts     Tema oscuro/claro.
  lib/anim.ts           Curva de animación compartida.
  components/
    ui/                 Botón, enlace con chevron, chips.
    art/                Las tres ilustraciones SVG.
```

Para cambiar un texto, añadir un proyecto o un puesto: **`src/data/perfil.ts`**.
No hace falta tocar ningún componente.

## Tema

Oscuro por defecto. `prefers-color-scheme` no se consulta: el sistema operativo
del visitante no decide. El botón de la barra pone `data-theme="light"` en el
`<html>` y lo guarda; volver a oscuro quita el atributo y la clave.

Los colores son tokens de `@theme` en `index.css`, y el tema claro solo los
redefine, así que los componentes usan `bg-bg`, `text-ink`, etc. sin variantes.

## Publicar

Vercel o Netlify: conecta el repo y detectan Vite solo.
Comando de build `npm run build`, carpeta de salida `dist`.
Se sirve desde la raíz del dominio, así que `vite.config.ts` no necesita `base`.

Para GitHub Pages haría falta `base: "/Portfolio/"` en `vite.config.ts` y un
workflow de Actions que publique `dist/`.

## Pendiente

- Capturas reales de los tres proyectos: las tarjetas llevan ilustración abstracta.
- Borrar los restos de la versión estática (ver abajo).

## Archivos de la versión anterior, ya sin uso

`estilo-apple.css`, `tema.js`, `styles.css`, `main.js`, `lib/`, `apple/`,
`assets/` (sustituida por `public/assets/`) y `.htaccess` (solo servía para
hosting Apache). Se pueden borrar: `git rm -r apple lib assets && git rm estilo-apple.css tema.js styles.css main.js .htaccess`
