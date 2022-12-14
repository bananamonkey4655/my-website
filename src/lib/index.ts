export interface Tech {
  name: string;
  fancy?: string;
  icon: string;
  skill: "library" | "language" | "tool";
  description?: string;
}

export const technologies: Tech[] = [
  {
    name: "React",
    fancy: "React ⚛️",
    icon: "logos:react",
    skill: "library",
    description: "UI rendering library 🏝️",
  },
  {
    name: "Next.js",
    fancy: "Next.js ♟",
    icon: "logos:nextjs",
    skill: "library",
    description: "Opinionated react framework 🚂",
  },
  {
    name: "TypeScript",
    fancy: "TypeScript 🌊",
    icon: "logos:typescript-icon",
    skill: "language",
    description: "JS with better DX 🌊",
  },

  {
    name: "Socket.io",
    fancy: "Socket.io 🔌",
    icon: "cib:socket-io",
    skill: "library",
    description: "Event-based WebSocket library 🔌",
  },
  {
    name: "Node.js",
    fancy: "Node.js 🐲",
    icon: "logos:nodejs-icon",
    skill: "library",
    description: "Back-end JavaScript runtime environment 🛤️",
  },
  {
    name: "Tailwind",
    fancy: "TailwindCSS 🌬",
    icon: "logos:tailwindcss-icon",
    skill: "library",
    description: "Utility inline CSS 🌬",
  },

  {
    name: "Chakra UI",
    fancy: "ChakraUI 💅",
    icon: "simple-icons:chakraui",
    skill: "library",
    description: "CSS component library for fast development 🏎️",
  },
  {
    name: "Astro",
    fancy: "Astro 🚀",
    icon: "logos:astro",
    skill: "library",
    description: "Static site builder that ships minimal JS 🚀",
  },
  {
    name: "JavaScript",
    fancy: "JavaScript",
    icon: "logos:javascript",
    skill: "language",
    description: "Language of the web 🌎",
  },
  {
    name: "Java",
    fancy: "Java ☕️",
    icon: "logos:java",
    skill: "language",
    description: "Java ☕️",
  },

  {
    name: "Git",
    icon: "logos:git-icon",
    skill: "tool",
    description: "Version control 🦆",
  },
  {
    name: "Webpack",
    icon: "logos:webpack",
    skill: "tool",
  },
  { name: "PostgreSQL", icon: "logos:postgresql", skill: "tool" },
  {
    name: "MongoDB",
    fancy: "MongoDB 🍀",
    icon: "vscode-icons:file-type-mongo",
    skill: "tool",
    description: "NoSQL document-oriented database 💾",
  },
  {
    name: "HTML",
    icon: "logos:html-5",
    skill: "language",
  },
  {
    name: "CSS",
    icon: "logos:css-3",
    skill: "language",
  },
  {
    name: "Redux",
    fancy: "Redux ",
    icon: "logos:redux",
    skill: "library",
    description: "State management library",
  },
];

export const nompStack = technologies.filter((tech) => {
  return (
    tech.name === "React" ||
    tech.name === "Socket.io" ||
    tech.name === "MongoDB" ||
    tech.name === "Node.js"
  );
});

export const onlyFoodsStack = technologies.filter((tech) => {
  return (
    tech.name === "Next.js" ||
    tech.name === "TypeScript" ||
    tech.name === "Chakra UI" ||
    tech.name === "Tailwind" ||
    tech.name === "Zustand"
  );
});

export const portfolioStack = technologies.filter((tech) => {
  return tech.name === "Astro" || tech.name === "Tailwind";
});
