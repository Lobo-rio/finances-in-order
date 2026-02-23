import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00D97E",
        "background-light": "#F7F9FC",
        "sidebar-dark": "#0F172A",
        "card-border": "#E2E8F0",
        "text-primary": "#1A202C",
        "text-secondary": "#718096",
        positive: "#48BB78",
        negative: "#F56565",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        card: "0px 4px 12px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
} satisfies Config;
