import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "hsl(var(--color-bg) / <alpha-value>)",
        panel: "hsl(var(--color-panel) / <alpha-value>)",
        text: "hsl(var(--color-text) / <alpha-value>)",
        muted: "hsl(var(--color-muted) / <alpha-value>)",
        border: "hsl(var(--color-border) / <alpha-value>)",
        accent: "hsl(var(--color-accent) / <alpha-value>)",
        accentStrong: "hsl(var(--color-accent-strong) / <alpha-value>)",
        focus: "hsl(var(--color-focus) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
      },
      boxShadow: {
        soft: "0 20px 30px -20px hsl(var(--color-shadow) / 0.4)",
      },
      gridTemplateColumns: {
        editorial: "repeat(12, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
export default config;
