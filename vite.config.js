import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/rareChars/',  // esto asegura que las rutas se resuelvan bien en GitHub Pages
  plugins: [react()],
})
