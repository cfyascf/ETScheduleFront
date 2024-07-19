import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import cors from 'cors'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  proxy: {
    '/api': {
      target: 'http://localhost:8080', // URL do seu servidor backend
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, '')
    }
  }
})
