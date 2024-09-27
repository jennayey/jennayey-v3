import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/[object Object].js"
  ],
  theme: {
    fontFamily: {
      display: ["Outfit", "sans-serif"],
      body: ["Reddit Mono", "sans-serif"],
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        orange: "#FFAF24",
        bone: "#FFFFEB",
        cement: "#A0A8AA",
        dungeon: "#010301",
      },
    },
  },
  plugins: [nextui()],
};
export default config;
