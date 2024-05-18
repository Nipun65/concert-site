import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "0px",
      },
      animation: {
        marquee: "marquee 10s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(-50%)" },
        },
      },
      delay: {
        0: "0s",
        "[30s]": "30s",
        "[60s]": "60s",
      },
    },
  },
  plugins: [],
};
export default config;
