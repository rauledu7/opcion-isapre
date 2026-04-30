import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import node from '@astrojs/node';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  adapter: node({ mode: 'standalone' }),
  output: 'server',
  integrations: [
    // Pasamos una configuración vacía a react para forzar su inicialización
    react({ include: ['**/*.{js,jsx,ts,tsx}'] }), 
    keystatic()
  ],
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      // Forzamos a Vite a meter TODO dentro del archivo final
      noExternal: true 
    }
  }
});