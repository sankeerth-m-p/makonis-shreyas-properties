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
        secondary: "#9333EA",
        accent: "#22C55E",
        dark: "#0F172A",
        light: "#F8FAFC",
      },
    },
  },
  plugins: [],
};
