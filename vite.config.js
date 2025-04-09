import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/project_22053413/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});