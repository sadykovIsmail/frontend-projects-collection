import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/frontend-projects-collection/10-gallery/',
  plugins: [react()],
});
