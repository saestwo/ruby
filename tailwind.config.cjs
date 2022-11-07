/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Here's white
        "fair-100": "#B3B3B3",
        "fair-200": "#5A5A5A",
        "fair-300": "#3E3E3E",
        "fair-400": "#282828",
        "fair-500": "#121212",
        // And here's black
      }
    },
  },
  plugins: [],
}
