/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
