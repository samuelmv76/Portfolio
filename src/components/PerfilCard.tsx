/* La ficha perfil.json del hero. El resaltado va con dos clases, no con
   una librería de sintaxis: son seis líneas. */
export function PerfilCard() {
  const k = "text-brand";
  const v = "text-ink";

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
{"{\n  "}<span className={k}>"nombre"</span>{": "}<span className={v}>"Samuel Martos Vidal"</span>{",\n  "}
<span className={k}>"ubicacion"</span>{": "}<span className={v}>"Asturias, España"</span>{",\n  "}
<span className={k}>"stack"</span>{": ["}<span className={v}>"Java/Spring"</span>{", "}<span className={v}>"React"</span>{",\n            "}
<span className={v}>"Angular"</span>{", "}<span className={v}>"PHP/Laravel"</span>{",\n            "}
<span className={v}>"SAP RAP/BTP"</span>{"],\n  "}
<span className={k}>"buscando"</span>{": "}<span className={v}>"equipo de desarrollo"</span>{"\n}"}
        </code>
      </pre>
    </div>
  );
}
