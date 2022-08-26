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
    description: "Everyone's favourite UI library! 🏝️",
  },
  {
    name: "Next.js",
    fancy: "Next.js ♟",
    icon: "logos:nextjs",
    skill: "library",
    description: "React framework with great features 🚂",
  },
  {
    name: "TypeScript",
    fancy: "TypeScript 🌊",
    icon: "logos:typescript-icon",
    skill: "language",
    description: "JS with types! 🌊",
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
    name: "Astro",
    fancy: "Astro 🚀",
    icon: "logos:astro",
    skill: "library",
    description: "Static site builder that ships minimal JS 🚀",
  },
  {
    name: "Tailwind",
    fancy: "TailwindCSS 🌬",
    icon: "logos:tailwindcss-icon",
    skill: "library",
    description: "Utility in-line CSS framework 🌬",
  },

  {
    name: "Chakra UI",
    fancy: "ChakraUI 💅",
    icon: "simple-icons:chakraui",
    skill: "library",
    description: "CSS component library for fast development 🏎️",
  },
  {
    name: "ES6",
    fancy: "JavaScript",
    icon: "logos:javascript",
    skill: "language",
    description: "Language of the web! 🌎",
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
    name: "MongoDB",
    fancy: "MongoDB 🍀",
    icon: "logos:mongodb",
    skill: "tool",
    description: "NoSQL document-oriented database 💾",
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
    tech.name === "Tailwind"
  );
});

export const portfolioStack = technologies.filter((tech) => {
  return tech.name === "Astro" || tech.name === "Tailwind";
});
