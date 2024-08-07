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

    // aca abajo llamamos a fontFamily, y ponemos el nombre de la font importada
    // y a esta la llamamos desde className con "font-body"
    fontFamily: { 
      body: ["Roboto"]
    }
  },
  darkMode: 'class',
  plugins: [],
}

