import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // Enable fallback for React Router
    historyApiFallback: true,
  },
  build: {
    outDir: 'dist',
  },
});