/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'site-bg-color': '#EDEDEB' // agregue un color aparte para el background.
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}

