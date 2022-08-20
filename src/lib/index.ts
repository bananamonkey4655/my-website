export interface Tech {
  name: string;
  icon: string;
  skill: "library" | "language" | "tool";
}

export const technologies: Tech[] = [
  { name: "React", icon: "logos:react", skill: "library" },
  { name: "Next.js", icon: "logos:nextjs", skill: "library" },
  { name: "Node.js", icon: "logos:nodejs-icon", skill: "library" },
  { name: "Socket.io", icon: "cib:socket-io", skill: "library" },
  { name: "Tailwind", icon: "logos:tailwindcss-icon", skill: "library" },
  { name: "TypeScript", icon: "logos:typescript-icon", skill: "language" },
  { name: "Chakra UI", icon: "simple-icons:chakraui", skill: "library" },
  { name: "ES6", icon: "logos:javascript", skill: "language" },
  { name: "Java", icon: "logos:java", skill: "language" },
  { name: "Astro", icon: "logos:astro", skill: "library" },
  { name: "Git", icon: "logos:git-icon", skill: "tool" },
  { name: "MongoDB", icon: "logos:mongodb", skill: "tool" },
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
