/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "rgba(var(--background))",
        bbackground: "rgba(var(--b-background))",
        hover: "rgba(var(--hover))",
        border: "rgba(var(--border))",
        card: "rgba(var(--card))",
        primary: "rgba(var(--primary))",
        secondary: "rgba(var(--secondary))",
        tprimary: "rgba(var(--tprimary))",
        tsecondary: "rgba(var(--tsecondary))",
        tdisabled: "rgba(var(--tdisabled))",
        cta: "rgba(var(--cta))",
        "cta-active": "rgba(var(--cta-active))",
        "cta-text": "rgba(var(--cta-text))",

        grape: "rgba(var(--grape))",
      },
    },
  },
  plugins: [],
};
