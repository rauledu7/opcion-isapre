import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import node from '@astrojs/node';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  adapter: node({
    mode: 'standalone',
  }),
  integrations: [
    react(), 
    keystatic()
  ],
  output: 'server', // Asegúrate de que esto esté presente
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      // FORZAMOS a Vite a procesar estos paquetes para el servidor
      noExternal: ['@keystatic/astro', '@astrojs/react', 'react', 'react-dom']
    }
  },
});