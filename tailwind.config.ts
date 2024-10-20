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
        background: "var(--background)",
        foreground: "var(--foreground)",
        titleColor: "#F3D382",
        bgColor: "#1B1B1B",
        dishPerDayColor: "#828BF3",
        textGrayColor: "#D9D9D9",
      },
      fontFamily: {
        cinzel: ["var(--font-cinzel)"],
        "great-vibes": ["var(--font-great-vibes)"],
        "dm-sans": ["var(--font-dmsans)"],
        "dmserif-display": ["var(--font-dmserif-display)"],
      },
    },
  },
  plugins: [],
};

export default config;
