/* Todo el contenido de la página, en un sitio. Para tocar un
   proyecto o añadir un puesto no hace falta abrir ningún componente. */

export type Arte = "tienda" | "tactica" | "grafica";

export interface Proyecto {
  nombre: string;
  rol: string;
  puntos: string[];
  chips: string[];
  url: string;
  arte: Arte;
}

export interface Hito {
  fecha: string;
  titulo: string;
  organizacion: string;
  puntos?: string[];
}

export interface BloqueStack {
  titulo: string;
  items: string[];
}

export const perfil = {
  nombre: "Samuel Martos Vidal",
  iniciales: "SM",
  rol: "Desarrollador Full Stack & SAP",
  ubicacion: "Corvera de Asturias, España",
  email: "samuelmv04@gmail.com",
  telefono: "+34 722 110 250",
  github: "https://github.com/samuelmv76",
  linkedin: "https://www.linkedin.com/in/samuel-martos-7953803ab",
  asuntoMail: "Hablemos de una oportunidad",
} as const;

export const mailto = `mailto:${perfil.email}?subject=${encodeURIComponent(perfil.asuntoMail)}`;

export const datosHero = [
  { valor: "3", etiqueta: "Titulaciones: DAM, DAW y SMR" },
  { valor: "B2", etiqueta: "Inglés — entornos internacionales" },
  { valor: "SAP", etiqueta: "RAP · BTP · ABAP · CDS" },
];

/* Los tres proyectos fijados en github.com/samuelmv76 */
export const proyectos: Proyecto[] = [
  {
    nombre: "eSport-Gear",
    rol: "Proyecto personal",
    arte: "tienda",
    puntos: [
      "Tienda online de material para eSports, desarrollada de principio a fin.",
      "Backend en Laravel con API REST y MySQL para catálogo, pedidos y gestión de datos.",
      "Frontend en React con Vite, consumiendo esa API.",
    ],
    chips: ["PHP / Laravel", "API REST", "MySQL", "React", "Vite"],
    url: "https://github.com/samuelmv76/eSport-Gear",
  },
  {
    nombre: "Runeterra-Tactics",
    rol: "Proyecto personal",
    arte: "tactica",
    puntos: [
      "Videojuego táctico por turnos, con frontend en Angular y backend en Spring Boot.",
      "Dos bases de datos en paralelo: MySQL para lo relacional y MongoDB para el estado de partida.",
      "Partidas en tiempo real por WebSocket y entorno levantado con Docker Compose.",
    ],
    chips: ["Angular", "TypeScript", "Java", "Spring Boot", "MySQL", "MongoDB", "Docker"],
    url: "https://github.com/samuelmv76/Runeterra-Tactics",
  },
  {
    nombre: "laliga-fantasy-stats",
    rol: "Proyecto personal",
    arte: "grafica",
    puntos: [
      "App para seguir tu equipo de LaLiga Fantasy: mercado de jugadores y ranking diario.",
      "Guarda el histórico diario de precios, no solo el último, para graficar la evolución de cada jugador.",
      "React con Vite; la plantilla del usuario vive en el navegador, sin necesidad de cuenta.",
    ],
    chips: ["React", "Vite", "JavaScript", "Gráficas"],
    url: "https://github.com/samuelmv76/laliga-fantasy-stats",
  },
];

export const experiencia: Hito[] = [
  {
    fecha: "Enero 2026 – Marzo 2026",
    titulo: "Prácticas en Desarrollo SAP",
    organizacion: "Phoenix Contact · Oviedo",
    puntos: [
      "RAP, SAP BTP, ABAP Coding y vistas CDS.",
      "Comunicación técnica diaria en inglés.",
    ],
  },
  {
    fecha: "Marzo 2025 – Junio 2025",
    titulo: "Prácticas en Desarrollo Frontend",
    organizacion: "Capgemini · Langreo",
    puntos: [
      "Interfaces con React para aplicaciones de cliente.",
      "Componentes reutilizables y mejoras de rendimiento.",
    ],
  },
];

export const formacion: Hito[] = [
  { fecha: "Sept. 2025 – Jun. 2026", titulo: "Técnico Superior en DAM", organizacion: "CIFP Avilés" },
  { fecha: "Sept. 2024 – Jun. 2025", titulo: "Técnico Superior en DAW", organizacion: "CIFP Avilés" },
  { fecha: "Sept. 2021 – Mar. 2022", titulo: "Técnico en Sistemas Microinformáticos y Redes", organizacion: "CIFP Avilés" },
];

export const stack: BloqueStack[] = [
  { titulo: "SAP", items: ["RAP", "SAP BTP", "ABAP", "Vistas CDS"] },
  { titulo: "Backend", items: ["Java", "Spring Boot", "PHP / Laravel", "API REST"] },
  { titulo: "Frontend", items: ["React", "Angular", "TypeScript", "JavaScript", "Vite"] },
  { titulo: "Datos y herramientas", items: ["MySQL", "MongoDB", "Docker", "Git"] },
];
