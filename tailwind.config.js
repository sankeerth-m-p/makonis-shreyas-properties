/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ORANGE: "#ff6417",
        ORANGE2: "#ff7f15",
        text: "#2c2c2c",
        
      },fontFamily: {
        aeonik: ["Aeonik", "sans-serif"],
        mont: ["Mont", "sans-serif"],
        roboto:["Oswald", "roboto"],
      },
    },
  },
  plugins: [],
};
