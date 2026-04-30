import { defineConfig } from 'astro/config';
import react from '@astrojs/react'; // <--- Añade esto
import keystatic from '@keystatic/astro';
import node from '@astrojs/node';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  adapter: node({
    mode: 'standalone',
  }),
  // React DEBE ir antes que Keystatic
  integrations: [react(), keystatic()], 
  vite: {
    plugins: [tailwindcss()],
  },
});