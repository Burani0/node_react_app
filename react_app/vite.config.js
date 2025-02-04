import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/submit': {
        target: 'http://localhost:5000',  // Your Node.js backend
        changeOrigin: true
      }
    }
  }
});
