export interface Tech {
  name: string;
  icon: string;
  skill: "library" | "language" | "tool";
  description?: string;
}

export const technologies: Tech[] = [
  {
    name: "React",
    icon: "logos:react",
    skill: "library",
    description: "Everyone's favourite UI library! 🏝️",
  },
  {
    name: "Next.js",
    icon: "logos:nextjs",
    skill: "library",
    description: "React framework with great features 🚂",
  },
  {
    name: "Node.js",
    icon: "logos:nodejs-icon",
    skill: "library",
    description: "Back-end JavaScript runtime environment 🛤️",
  },
  {
    name: "Socket.io",
    icon: "cib:socket-io",
    skill: "library",
    description: "Event-based WebSocket library 🔌",
  },
  {
    name: "Tailwind",
    icon: "logos:tailwindcss-icon",
    skill: "library",
    description: "Utility in-line CSS framework 💅 ",
  },
  {
    name: "TypeScript",
    icon: "logos:typescript-icon",
    skill: "language",
    description: "JS with types! 🌊",
  },
  {
    name: "Chakra UI",
    icon: "simple-icons:chakraui",
    skill: "library",
    description: "CSS component library for fast development 🏎️",
  },
  {
    name: "ES6",
    icon: "logos:javascript",
    skill: "language",
    description: "Language of the web! 🌎",
  },
  {
    name: "Java",
    icon: "logos:java",
    skill: "language",
    description: "That OOP language 💻",
  },
  {
    name: "Astro",
    icon: "logos:astro",
    skill: "library",
    description: "Static site builder that ships minimal JS 🚀",
  },
  {
    name: "Git",
    icon: "logos:git-icon",
    skill: "tool",
    description: "Version control 🦆",
  },
  {
    name: "MongoDB",
    icon: "logos:mongodb",
    skill: "tool",
    description: "Document-oriented database 💾",
  },
];

export const nompStack = [
  "logos:react",
  "cib:socket-io",
  "logos:nodejs-icon",
  "logos:mongodb",
];

export const onlyFoodsStack = [
  "logos:nextjs",
  "logos:typescript-icon",
  "simple-icons:chakraui",
  "logos:tailwindcss-icon",
];

export const portfolioStack = ["logos:astro", "logos:tailwindcss-icon"];
