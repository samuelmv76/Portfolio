# Cómo publicar tu portfolio gratis

Es una web estática (HTML + CSS + JS, sin backend, sin build). Puedes subirla gratis en cualquiera de estas opciones — elige la que prefieras:

## Opción 1 — Netlify (la más rápida, arrastrar y soltar)
1. Entra en https://app.netlify.com/drop
2. Arrastra la carpeta completa del proyecto a la ventana.
3. Netlify te da una URL al momento (tipo `algo.netlify.app`). Puedes cambiar el subdominio en Site settings → Domain management, o conectar un dominio propio, gratis.

## Opción 2 — Vercel
1. Crea una cuenta gratis en https://vercel.com
2. Instala su CLI (`npm i -g vercel`) o usa "Add New Project" → "Upload" desde el panel.
3. Despliega la carpeta tal cual (no hace falta configurar build command, es HTML plano).

## Opción 3 — GitHub Pages
1. Crea un repositorio en tu GitHub (`samuelmv76/portfolio`, por ejemplo).
2. Sube todos los archivos de esta carpeta a la raíz del repo.
3. En el repo → Settings → Pages → Source: selecciona la rama `main` y carpeta `/root`.
4. Tu web quedará en `https://samuelmv76.github.io/portfolio`.

## Nota sobre el `.htaccess`
Ese archivo solo sirve para hosting Apache (como Hostinger). Netlify, Vercel y GitHub Pages lo ignoran — no pasa nada si se sube igualmente, simplemente no se usa.

## Antes de publicar
- Cambia el email de `mailto` si algún día usas otro.
- Cuando tengas capturas reales de eSport-Gear y ProyectoDAM (o los despliegues en vivo), puedo sustituir las tarjetas ilustradas por las capturas reales y añadir el enlace "Ver demo".
- Si quieres una foto tuya en vez del monograma "SM", súbela y la integro (convertida a WebP).
