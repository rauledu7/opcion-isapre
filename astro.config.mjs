import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import node from '@astrojs/node';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  adapter: node({ mode: 'standalone' }),
  output: 'server',
  integrations: [
    react(), 
    keystatic()
  ],
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      // ESTA ES LA LISTA DEFINITIVA
      noExternal: [
        '@keystatic/astro', 
        '@keystatic/core', 
        '@astrojs/react', 
        'react', 
        'react-dom', 
        '@emotion/styled', 
        '@emotion/react'
      ]
    },
    resolve: {
      // Forzamos a que siempre use la versión de React que instalamos
      dedupe: ['react', 'react-dom']
    }
  }
});