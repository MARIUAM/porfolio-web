import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgba(26, 32, 44, 0.7)', // dark blue/gray with transparency
        foreground: 'rgba(255, 255, 255, 0.8)', // light white with slight transparency
        primary: 'rgba(26, 32, 44, 0.5)', // primary color with light transparency
        accent: 'rgba(74, 85, 104, 0.5)', // medium gray with transparency
        highlight: 'rgba(45, 55, 72, 0.5)', // lighter gray with transparency
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
