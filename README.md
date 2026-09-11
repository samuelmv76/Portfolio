# Portfolio — Samuel Martos Vidal

Portfolio personal construido con React, Vite, TypeScript, Tailwind CSS v4 y Motion.

## Desarrollo

```bash
npm install
npm run dev        # servidor de desarrollo en http://localhost:5173
```

## Otros comandos

```bash
npm run build      # compila a dist/
npm run preview    # sirve dist/ para comprobarlo antes de publicar
npm run typecheck  # solo TypeScript, sin compilar
```

## Estructura

```
index.html              Shell de Vite: <meta>, JSON-LD y script anti-parpadeo de tema.
public/assets/          Archivos servidos tal cual (favicon).
src/
  main.tsx              Punto de entrada.
  App.tsx               Composición de las secciones.
  index.css             Tailwind + tokens del tema + estilos base.
  data/perfil.ts         Todo el contenido: proyectos, experiencia, stack.
  hooks/useTheme.ts      Tema oscuro/claro.
  lib/anim.ts            Curva de animación compartida.
  components/
    ui/                  Botón, enlace con chevron, chips.
    art/                 Ilustraciones SVG de los proyectos.
```

Para cambiar un texto, añadir un proyecto o un puesto: **`src/data/perfil.ts`**.
No hace falta tocar ningún componente.

## Tema

Oscuro por defecto; `prefers-color-scheme` no se consulta. El botón de la barra
pone `data-theme="light"` en el `<html>` y lo guarda en `localStorage`; volver
a oscuro quita el atributo y la clave. Los colores son tokens `@theme` en
`index.css`, así que los componentes usan `bg-bg`, `text-ink`, etc. sin variantes.

## Despliegue

Vercel o Netlify detectan Vite automáticamente al conectar el repo.
Comando de build: `npm run build`. Carpeta de salida: `dist`.
