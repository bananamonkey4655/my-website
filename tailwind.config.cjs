/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    borderWidth: {
      DEFAULT: "1px",
    },
    fontFamily: {
      DEFAULT: [
        "Inter",
        "sans-serif",
        "ui-sans-serif",
        "system-ui",
        "sans-serif",
      ],
      headline: ["Menlo", "Monaco", "Lucida Console", "sans-serif"],
    },
  },
  plugins: [],
};
