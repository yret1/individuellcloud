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
        cta: "#EF4343",
        mainbg: "#19274A",
        cardbg: "#FFFFFF",
      },

      backgroundImage: {
        nomessages: "url('/src/assets/nomsgbg.svg')",
      },

      fontFamily: {
        pt: ["PT Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
