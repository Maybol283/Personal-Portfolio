/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,css}"],
  theme: {
    extend: {
      colors: {
        palette: {
          1: "#ff204e",
          2: "#a0153e",
          3: "#5d0e41",
          4: "#00224d",
        },
      },
    },
  },
  plugins: [],
};
