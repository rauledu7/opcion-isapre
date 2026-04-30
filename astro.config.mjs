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
      // Solo forzamos lo estrictamente necesario
      noExternal: ['@keystatic/astro', '@keystatic/core', 'react-dom']
    }
  }
});