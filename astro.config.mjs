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
  // IMPORTANTE: Mueve react() al final de la lista de integraciones o 
  // asegúrate de que esté configurado explícitamente para incluir archivos JS
  integrations: [
    keystatic(), 
    react({
      include: ['**/*.{js,jsx,ts,tsx}']
    })
  ],
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      // Forzamos a Vite a NO externalizar absolutamente nada relacionado con React o Keystatic
      noExternal: [
        '@astrojs/react', 
        'react', 
        'react-dom', 
        '@keystatic/astro', 
        '@keystatic/core',
        'react/jsx-runtime'
      ]
    },
    optimizeDeps: {
      include: ['react', 'react-dom']
    }
  },
});