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
  // CAMBIO 1: React SIEMPRE debe ir antes que Keystatic
  integrations: [
    react({
      include: ['**/*.{js,jsx,ts,tsx}'],
    }), 
    keystatic()
  ],
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      // CAMBIO 2: Añadimos Emotion, que es lo que usa Keystatic para los iconos
      noExternal: [
        '@astrojs/react', 
        'react', 
        'react-dom', 
        '@keystatic/astro', 
        '@keystatic/core',
        'react/jsx-runtime',
        '@emotion/styled',
        '@emotion/react'
      ]
    },
    // CAMBIO 3: Eliminamos optimizeDeps (es para el cliente, no ayuda con el error 500 del servidor)
  },
});