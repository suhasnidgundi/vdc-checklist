import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/', // Add this line
  server: {
    open: true,
    hmr: true,
    port: 4000,
    proxy: {
      '/api': {
        target: 'https://checklist.vdcapp.in',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})