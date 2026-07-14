// Contenido bilingüe del portfolio. Inglés es el idioma principal, español el secundario.
// Reemplaza los valores marcados como PLACEHOLDER cuando tengas la info lista.

export type Lang = "en" | "es";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
  // PLACEHOLDER: add screenshot paths/URLs here when you have them (e.g. "/projects/ecommerce/1.png").
  images: string[];
  placeholder: boolean;
};

export type ExperienceItem = {
  role: string;
  organization: string;
  period: string;
  description: string;
  placeholder: boolean;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type SiteContent = {
  nav: {
    links: { href: string; label: string }[];
    cv: string;
    menuLabel: string;
    downloadCv: string;
    resumeUrl: string;
  };
  hero: {
    greeting: string;
    roles: string[];
    bio: string;
    viewProjects: string;
    contact: string;
  };
  about: { label: string; heading: string; paragraphs: string[] };
  skills: { label: string; heading: string; groups: SkillGroup[] };
  projects: {
    label: string;
    heading: string;
    items: Project[];
    slotAvailable: string;
    demo: string;
    repo: string;
    close: string;
    noImages: string;
  };
  experience: { label: string; heading: string; items: ExperienceItem[] };
  contact: {
    label: string;
    heading: string;
    body: string;
    linkedinLabel: string;
    githubLabel: string;
  };
  footer: { madeWith: string };
};

// Datos independientes del idioma (URLs, email, nombre propio).
export const profile = {
  name: "Juan Pablo Corzo Barrera",
  // PLACEHOLDER: comparte el email real cuando lo tengas listo
  email: "tu@email.com",
  socials: {
    github: "#", // PLACEHOLDER
    linkedin: "#", // PLACEHOLDER
  },
};

const en: SiteContent = {
  nav: {
    links: [
      { href: "#about", label: "About" },
      { href: "#skills", label: "Skills" },
      { href: "#projects", label: "Projects" },
      { href: "#experience", label: "Experience" },
      { href: "#contact", label: "Contact" },
    ],
    cv: "CV",
    menuLabel: "Menu",
    downloadCv: "Download CV",
    // PLACEHOLDER: add the English CV as public/cv/cv-en.pdf
    resumeUrl: "/cv/cv-en.pdf",
  },
  hero: {
    greeting: "Hi, I'm 👋",
    roles: ["AI Developer", "Frontend Developer", "UI Designer"],
    bio: "I build interfaces with soul and always look for the fun angle in every problem. I move between frontend, backend, and AI without losing sight of the fact that, in the end, everything has to look (and feel) right.",
    viewProjects: "View projects",
    contact: "Get in touch",
  },
  about: {
    label: "01 · About",
    heading: "A bit of context",
    paragraphs: [
      "I'm a creative, fun person who found in code the perfect way to combine logic and design. I like to think of every interface as a small story: it has to flow, surprise a little, and above all, work without friction.",
      "I move between frontend, backend, and AI, always looking for ways to make technology serve people rather than the other way around. Every project is a chance to learn something new and leave my mark on the user experience.",
      "When I'm not in front of a screen, you'll find me exploring new ideas, playing with design concepts, or just enjoying a good coffee while thinking about the next big thing I want to build.",
    ],
  },
  skills: {
    label: "02 · Skills",
    heading: "What I work with",
    groups: [
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
        title: "AI",
        // PLACEHOLDER: add your real AI tools (e.g. OpenAI API, LangChain, embeddings, etc.)
        items: ["PLACEHOLDER — your AI tools"],
      },
      {
        title: "UI/UX Design",
        items: ["Figma", "Design systems", "Prototyping", "PLACEHOLDER"],
      },
    ],
  },
  projects: {
    label: "03 · Projects",
    heading: "Things I've built",
    slotAvailable: "SLOT AVAILABLE",
    demo: "Demo",
    repo: "Repo",
    close: "Close",
    noImages: "No images yet — coming soon.",
    items: [
      {
        title: "Ecommerce",
        description:
          "E-commerce site for a local pet store, built as a freelance thesis project.",
        tags: ["React", "Node.js", "Express", "MySQL"],
        repoUrl: "https://github.com/Greido/tesisecommerce",
        images: [],
        placeholder: false,
      },
      {
        title: "Pomodoro App",
        description:
          "Mobile app that helps users manage their time with the Pomodoro technique to boost productivity.",
        tags: ["React Native", "Expo"],
        repoUrl: "https://github.com/Greido/Pomodoro",
        images: [
          "/projects/pomodoro-app/1.PNG",
          "/projects/pomodoro-app/2.PNG",
          "/projects/pomodoro-app/3.PNG",
        ],
        placeholder: false,
      },
      {
        title: "Nike Page",
        description:
          "Nike-themed landing page showcasing products and brand news, built with React, Vite and Tailwind CSS.",
        tags: ["React", "Vite", "Tailwind CSS"],
        repoUrl: "https://github.com/Greido/NikePage",
        images: [],
        placeholder: false,
      },
    ],
  },
  experience: {
    label: "04 · Experience",
    heading: "Where I've been",
    items: [
      {
        role: "IT Administrator",
        organization: "Ministry of Infrastructure of La Rioja",
        period: "Mar 2022 — Jul 2025 · 3 years 5 months",
        description:
          "Part-time, on-site in La Rioja, Argentina. IT infrastructure support and management, plus interface design work in Figma.",
        placeholder: false,
      },
      {
        role: "Full Stack Developer",
        organization: "Ministry of Infrastructure of La Rioja",
        period: "Jul 2023 — May 2025 · 1 year 11 months",
        description:
          "Full-time. Full stack development of internal applications with Node.js, Express, and MySQL on both frontend and backend.",
        placeholder: false,
      },
      {
        role: "Frontend Developer",
        organization: "Animal Zoo",
        period: "Mar 2023 — Aug 2023 · 6 months",
        description:
          "Full-time, remote from La Rioja, Argentina. Frontend development of the product.",
        placeholder: false,
      },
    ],
  },
  contact: {
    label: "05 · Contact",
    heading: "Let's talk",
    body: "Got an idea, a project, or an opening in mind? Reach out, I'd love to talk about it.",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
  },
  footer: { madeWith: "Built with Next.js & Tailwind CSS" },
};

const es: SiteContent = {
  nav: {
    links: [
      { href: "#about", label: "Sobre mí" },
      { href: "#skills", label: "Skills" },
      { href: "#projects", label: "Proyectos" },
      { href: "#experience", label: "Experiencia" },
      { href: "#contact", label: "Contacto" },
    ],
    cv: "CV",
    menuLabel: "Menú",
    downloadCv: "Descargar CV",
    // PLACEHOLDER: agrega el CV en español como public/cv/cv-es.pdf
    resumeUrl: "/cv/cv-es.pdf",
  },
  hero: {
    greeting: "Hola, soy 👋",
    roles: ["Desarrollador de IA", "Desarrollador Frontend", "Diseñador UI"],
    bio: "Construyo interfaces con alma y le busco la vuelta divertida a cada problema. Me muevo entre el frontend, el backend y la IA sin perder de vista que, al final, todo tiene que verse (y sentirse) bien.",
    viewProjects: "Ver proyectos",
    contact: "Contactar",
  },
  about: {
    label: "01 · Sobre mí",
    heading: "Un poco de contexto",
    paragraphs: [
      "Soy alguien creativo y divertido que encontró en el código la forma perfecta de combinar lógica y diseño. Me gusta pensar cada interfaz como una pequeña historia: tiene que fluir, sorprender un poco y, sobre todo, funcionar sin fricción.",
      "Me muevo entre el frontend, el backend y la IA, siempre buscando la manera de que la tecnología sirva a las personas y no al revés. Cada proyecto es una oportunidad para aprender algo nuevo y dejar mi huella en la experiencia del usuario.",
      "Cuando no estoy frente a la pantalla, me encontrarás explorando nuevas ideas, jugando con conceptos de diseño o simplemente disfrutando de un buen café mientras pienso en la próxima gran cosa que quiero construir.",
    ],
  },
  skills: {
    label: "02 · Skills",
    heading: "Con qué trabajo",
    groups: [
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
        items: ["PLACEHOLDER — tus herramientas de IA"],
      },
      {
        title: "Diseño UI/UX",
        items: ["Figma", "Diseño de sistemas", "Prototipado", "PLACEHOLDER"],
      },
    ],
  },
  projects: {
    label: "03 · Proyectos",
    heading: "Cosas que he construido",
    slotAvailable: "ESPACIO DISPONIBLE",
    demo: "Demo",
    repo: "Repo",
    close: "Cerrar",
    noImages: "Todavía no hay imágenes — próximamente.",
    items: [
      {
        title: "Ecommerce",
        description:
          "Ecommerce para una tienda de animales local, desarrollado como proyecto de tesis de forma freelance.",
        tags: ["React", "Node.js", "Express", "MySQL"],
        repoUrl: "https://github.com/Greido/tesisecommerce",
        images: [],
        placeholder: false,
      },
      {
        title: "Pomodoro App",
        description:
          "Aplicación móvil que ayuda a los usuarios a gestionar su tiempo utilizando la técnica Pomodoro, mejorando su productividad.",
        tags: ["React Native", "Expo"],
        repoUrl: "https://github.com/Greido/Pomodoro",
        images: [
          "/projects/pomodoro-app/1.PNG",
          "/projects/pomodoro-app/2.PNG",
          "/projects/pomodoro-app/3.PNG",
        ],
        placeholder: false,
      },
      {
        title: "Nike Page",
        description:
          "Landing page de Nike para mostrar productos y novedades de la marca, hecha con React, Vite y Tailwind CSS.",
        tags: ["React", "Vite", "Tailwind CSS"],
        repoUrl: "https://github.com/Greido/NikePage",
        images: [],
        placeholder: false,
      },
    ],
  },
  experience: {
    label: "04 · Experiencia",
    heading: "Dónde he estado",
    items: [
      {
        role: "Administrador de TI",
        organization: "Ministerio de Infraestructura de La Rioja",
        period: "Mar. 2022 — Jul. 2025 · 3 años 5 meses",
        description:
          "Jornada parcial, presencial en La Rioja, Argentina. Soporte y gestión de infraestructura de TI, con trabajo de diseño de interfaces en Figma.",
        placeholder: false,
      },
      {
        role: "Programador Full Stack",
        organization: "Ministerio de Infraestructura de La Rioja",
        period: "Jul. 2023 — May. 2025 · 1 año 11 meses",
        description:
          "Jornada completa. Desarrollo full stack de aplicaciones internas con Node.js, Express y MySQL en el frontend y backend.",
        placeholder: false,
      },
      {
        role: "Desarrollador Frontend",
        organization: "Animal Zoo",
        period: "Mar. 2023 — Ago. 2023 · 6 meses",
        description:
          "Jornada completa, en remoto desde La Rioja, Argentina. Desarrollo frontend del producto.",
        placeholder: false,
      },
    ],
  },
  contact: {
    label: "05 · Contacto",
    heading: "Hablemos",
    body: "¿Tienes una idea, un proyecto o una vacante en mente? Escríbeme, con gusto lo conversamos.",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
  },
  footer: { madeWith: "Hecho con Next.js & Tailwind CSS" },
};

export const content: Record<Lang, SiteContent> = { en, es };
