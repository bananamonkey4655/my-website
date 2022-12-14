const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    borderWidth: {
      DEFAULT: "1px",
    },
    fontFamily: {
      sans: ["Recoleta", ...defaultTheme.fontFamily.sans],
      headline: ["Menlo", "Monaco", "Lucida Console", "sans-serif"],
    },
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(10deg)" },
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
