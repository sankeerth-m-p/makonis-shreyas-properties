/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ORANGE: "#ff6316",
        
      },fontFamily: {
        aeonik: ["Aeonik", "sans-serif"],
        mont: ["Mont", "sans-serif"],
      },
    },
  },
  plugins: [],
};
