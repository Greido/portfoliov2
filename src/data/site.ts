// Contenido central del portfolio.
// Reemplaza los valores marcados como PLACEHOLDER cuando tengas la info lista.

export const profile = {
  name: "Juan Pablo Corzo Barrera",
  roles: ["AI Developer", "Frontend Developer", "UI Designer"],
  shortBio:
    "Construyo interfaces con alma y le busco la vuelta divertida a cada problema. Me muevo entre el frontend, el backend y la IA sin perder de vista que, al final, todo tiene que verse (y sentirse) bien.",
  location: "PLACEHOLDER — Ciudad, País",
  // PLACEHOLDER: comparte el email real cuando lo tengas listo
  email: "tu@email.com",
  socials: {
    github: "#", // PLACEHOLDER
    linkedin: "#", // PLACEHOLDER
    twitter: "#", // PLACEHOLDER — opcional, elimina si no aplica
  },
  // PLACEHOLDER: coloca el PDF en /public/cv.pdf y actualiza este link
  resumeUrl: "#",
};

export const about = {
  paragraphs: [
    "Soy alguien creativo y divertido que encontró en el código la forma perfecta de combinar lógica y diseño. Me gusta pensar cada interfaz como una pequeña historia: tiene que fluir, sorprender un poco y, sobre todo, funcionar sin fricción.",
    "Me muevo entre el frontend, el backend y la IA, siempre buscando la manera de que la tecnología sirva a las personas y no al revés. Cada proyecto es una oportunidad para aprender algo nuevo y dejar mi huella en la experiencia del usuario.",
    "Cuando no estoy frente a la pantalla, me encontrarás explorando nuevas ideas, jugando con conceptos de diseño o simplemente disfrutando de un buen café mientras pienso en la próxima gran cosa que quiero construir.",
  ],
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "HTML5 / CSS3",
    ],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "MySQL", "REST APIs"],
  },
  {
    title: "IA",
    // PLACEHOLDER: agrega tus herramientas de IA reales (ej. OpenAI API, LangChain, embeddings, etc.)
    items: ["PLACEHOLDER — tus herramientas de IA"],
  },
  {
    title: "Diseño UI/UX",
    // PLACEHOLDER: ajusta según tus herramientas reales
    items: ["Figma", "Diseño de sistemas", "Prototipado", "PLACEHOLDER"],
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
  placeholder: boolean;
};

// PLACEHOLDER: reemplaza estos 3 proyectos con los tuyos (título, descripción, tags, links).
export const projects: Project[] = [
  {
    title: "Tu proyecto #1",
    description:
      "Cuéntame de qué se trata este proyecto, qué problema resuelve y qué parte te enorgullece más.",
    tags: ["Next.js", "TypeScript"],
    placeholder: true,
  },
  {
    title: "Tu proyecto #2",
    description:
      "Espacio reservado — pásame el nombre, stack, link de demo/repo e imágenes cuando los tengas.",
    tags: ["Node.js", "MySQL"],
    placeholder: true,
  },
  {
    title: "Tu proyecto #3",
    description:
      "Otro espacio reservado para un proyecto de IA, frontend o diseño que quieras destacar.",
    tags: ["IA"],
    placeholder: true,
  },
];

export type ExperienceItem = {
  role: string;
  organization: string;
  period: string;
  description: string;
  placeholder: boolean;
};

// PLACEHOLDER: reemplaza con tu experiencia laboral y/o educación real.
export const experience: ExperienceItem[] = [
  {
    role: "PLACEHOLDER — Rol / Título",
    organization: "PLACEHOLDER — Empresa o institución",
    period: "PLACEHOLDER — 2023 — Presente",
    description:
      "Cuéntame qué hiciste en este rol, con qué tecnologías trabajaste y algún logro concreto.",
    placeholder: true,
  },
];
