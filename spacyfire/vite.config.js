import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';


export default defineConfig({
  base: './', // Ensures correct relative paths
  plugins: [react()],
  server: {
    port: 3000
  }
});
