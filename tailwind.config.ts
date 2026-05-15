import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F7F1E6",
        linen: "#FCFAF5",
        olive: "#596B3A",
        "olive-dark": "#314023",
        wood: "#8B5E34",
        "wood-dark": "#5C3D22",
        clay: "#C4845A",
      },
      fontFamily: {
        sans: ["var(--font-heebo)", "Arial", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 45px rgba(49, 64, 35, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
