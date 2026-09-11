const BARRAS = [
  { x: 66, y: 212, h: 26 }, { x: 120, y: 200, h: 38 }, { x: 174, y: 218, h: 20 },
  { x: 228, y: 192, h: 46 }, { x: 282, y: 204, h: 34 }, { x: 336, y: 186, h: 52 },
  { x: 390, y: 196, h: 42 },
];

export function ChartArt() {
  return (
    <svg
      viewBox="0 0 480 300"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Ilustración abstracta de una gráfica de evolución de precios sobre barras diarias"
      className="size-full"
    >
      <rect width="480" height="300" fill="var(--color-art)" />
      <g stroke="var(--color-art-line)" strokeWidth="1" opacity=".7">
        {[76, 130, 184, 238].map((y) => (
          <line key={y} x1="52" y1={y} x2="428" y2={y} />
        ))}
      </g>
      <g fill="var(--color-art-line)">
        {BARRAS.map((b) => (
          <rect key={b.x} x={b.x} y={b.y} width="20" height={b.h} rx="4" />
        ))}
      </g>
      <polyline
        points="76,168 130,146 184,158 238,116 292,128 346,94 400,104"
        fill="none"
        stroke="var(--color-brand)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g fill="var(--color-art)" stroke="var(--color-brand)" strokeWidth="2.5">
        <circle cx="238" cy="116" r="5" />
        <circle cx="346" cy="94" r="5" />
      </g>
    </svg>
  );
}
