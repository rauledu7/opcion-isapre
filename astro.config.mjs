import { defineConfig } from 'astro/config';
import keystatic from '@keystatic/astro';
import node from '@astrojs/node';
import tailwindcss from '@tailwindcss/vite'; // 1. Importar el plugin de Vite

export default defineConfig({
  adapter: node({
    mode: 'standalone',
  }),
  integrations: [keystatic()], // 2. QUITAR tailwind() de aquí
  vite: {
    plugins: [tailwindcss()], // 3. AGREGARLO aquí como plugin de Vite
  },
});