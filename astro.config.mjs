import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import node from '@astrojs/node';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  adapter: node({
    mode: 'standalone',
  }),
  output: 'server',
  integrations: [react(), keystatic()],
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      // Esto obliga a Astro a meter React dentro del bundle compilado
      noExternal: ['@astrojs/react', 'react', 'react-dom', '@keystatic/astro']
    }
  },
});