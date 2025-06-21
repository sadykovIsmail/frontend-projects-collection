import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/frontend-projects-collection/14-hello-app/',
  plugins: [react()],
});

