import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/frontend-projects-collection/03-reusable-profile-card/',
  plugins: [react()],
});