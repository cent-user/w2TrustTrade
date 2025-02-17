import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary1: "var(--primary-1 )",
        primary2: "var(--primary-2 )",
        primary3: "var(--primary-3 )",
        primary4: "var(--primary-4 )",
        primary5: "var(--primary-5 )",
      },
      fontFamily: {
        h1: ['var(--font-pd)']
        ,b1 : ['var(--font-garamond)']
        ,m1 : ['var(--font-ibmmono)']
      }
    },
  },
  plugins: [],
} satisfies Config;
