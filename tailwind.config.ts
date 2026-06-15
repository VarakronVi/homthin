import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#F5F0E8",
          light: "#FDFAF5",
          dark: "#EDE5D5",
        },
        gold: {
          DEFAULT: "#C9A84C",
          light: "#DFC27A",
          dark: "#A8852E",
        },
        earth: {
          DEFAULT: "#4A6741",
          light: "#8A9E7E",
          dark: "#2E4228",
        },
        brown: {
          DEFAULT: "#2C1810",
          light: "#5C3A28",
        },
        sage: "#8A9E7E",
      },
      fontFamily: {
        serif: ["Playfair Display", "Trirong", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        thai: ["Trirong", "Sarabun", "serif"],
      },
      backgroundImage: {
        "linen": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Crect width='4' height='4' fill='%23F5F0E8'/%3E%3Cpath d='M0 0L4 4M4 0L0 4' stroke='%23C9A84C' stroke-width='0.3' opacity='0.12'/%3E%3C/svg%3E\")",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "counter": "counter 2s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
