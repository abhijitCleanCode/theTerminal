/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dimBlue: "rgba(9, 151, 124, 0.1)",
        dimWhite: "rgba(255, 255, 255, 0.7)"
      }
    },
  },
  plugins: [],
}

