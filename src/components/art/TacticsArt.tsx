const CASILLAS = Array.from({ length: 18 }, (_, i) => ({
  x: 54 + (i % 6) * 62,
  y: 76 + Math.floor(i / 6) * 54,
}));

export function TacticsArt() {
  return (
    <svg
      viewBox="0 0 480 300"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Ilustración abstracta de un tablero táctico por turnos con piezas enfrentadas"
      className="size-full"
    >
      <rect width="480" height="300" fill="var(--color-art)" />
      <g fill="none" stroke="var(--color-art-line)" strokeWidth="1.5">
        {CASILLAS.map((c) => (
          <rect key={`${c.x}-${c.y}`} x={c.x} y={c.y} width="54" height="46" rx="8" />
        ))}
      </g>
      <g stroke="var(--color-brand)" strokeWidth="1.5" fill="var(--color-brand)" fillOpacity=".22">
        <circle cx="81" cy="99" r="14" />
        <circle cx="143" cy="153" r="14" />
      </g>
      <g stroke="var(--color-art-line)" strokeWidth="1.5" fill="var(--color-art-line)">
        <circle cx="391" cy="153" r="14" />
        <circle cx="329" cy="207" r="14" />
      </g>
      <path
        d="M143 153 L329 207"
        fill="none"
        stroke="var(--color-brand)"
        strokeOpacity=".55"
        strokeWidth="1.5"
        strokeDasharray="5 7"
      />
    </svg>
  );
}
