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
        "horizontal-marquee": "marquee-horizontal 10s linear infinite",
        "vertical-marquee": "marquee 10s linear infinite",
      },
      keyframes: {
        "marquee-horizontal": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-150%)" },
        },
        marquee: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
