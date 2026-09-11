const FILAS: [string, string | string[]][] = [
  ["nombre", "Samuel Martos Vidal"],
  ["ubicacion", "Asturias, España"],
  ["stack", ["Java/Spring", "React", "Angular", "PHP/Laravel", "SAP RAP/BTP"]],
  ["buscando", "equipo de desarrollo"],
];

export function PerfilCard() {
  return (
    <div className="rounded-card bg-card p-[22px]">
      <div className="mb-3.5 flex items-center gap-1.5 font-mono text-[11px] text-ink-2">
        <i className="size-[9px] rounded-full bg-[#ff5f57]" />
        <i className="size-[9px] rounded-full bg-[#febc2e]" />
        <i className="size-[9px] rounded-full bg-[#28c840]" />
        <b className="ml-1 font-normal">perfil.json</b>
      </div>
      <pre className="font-mono text-[12.5px] leading-[1.85] tracking-normal break-words whitespace-pre-wrap text-ink-2">
        <code>
          {"{\n"}
          {FILAS.map(([clave, valor], i) => (
            <span key={clave}>
              {"  "}
              <span className="text-brand">"{clave}"</span>
              {": "}
              {Array.isArray(valor) ? (
                <>["<span className="text-ink">{valor.join('", "')}</span>"]</>
              ) : (
                <span className="text-ink">"{valor}"</span>
              )}
              {i < FILAS.length - 1 ? ",\n" : "\n"}
            </span>
          ))}
          {"}"}
        </code>
      </pre>
    </div>
  );
}
