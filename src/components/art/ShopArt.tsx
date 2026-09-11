/* Ilustraciones: los colores salen de los tokens, así que cambian con el
   tema sin tocar nada. `slice` recorta como una foto de fondo. */
export function ShopArt() {
  return (
    <svg
      viewBox="0 0 480 300"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Ilustración abstracta de una tienda online: rejilla de productos sobre un panel ancho"
      className="size-full"
    >
      <rect width="480" height="300" fill="var(--color-art)" />
      <g fill="none" stroke="var(--color-brand)" strokeOpacity=".45" strokeWidth="1.5">
        <rect x="52" y="52" width="118" height="82" rx="10" />
        <rect x="188" y="52" width="118" height="82" rx="10" />
        <rect x="324" y="52" width="104" height="82" rx="10" />
        <rect x="52" y="156" width="376" height="84" rx="10" />
      </g>
      <circle cx="111" cy="93" r="15" fill="var(--color-brand)" fillOpacity=".22" />
      <circle cx="247" cy="93" r="15" fill="var(--color-art-line)" />
      <circle cx="376" cy="93" r="15" fill="var(--color-brand)" fillOpacity=".14" />
      <g fill="var(--color-art-line)">
        <rect x="72" y="180" width="120" height="7" rx="3.5" />
        <rect x="72" y="198" width="72" height="7" rx="3.5" />
      </g>
    </svg>
  );
}
