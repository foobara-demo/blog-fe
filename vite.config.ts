import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // The generated Foobara SDK in src/domains reads import.meta.env.REACT_APP_FOOBARA_GLOBAL_URL_BASE
  // and Vite only exposes VITE_-prefixed variables by default.
  envPrefix: ['VITE_', 'REACT_APP_'],
  server: {
    // blog-rack only allows CORS requests from http://localhost:3000
    port: 3000,
    strictPort: true,
  },
})
