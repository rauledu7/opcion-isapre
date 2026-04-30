import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import node from '@astrojs/node';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // 1. Adaptador para Cloud Run
  adapter: node({ mode: 'standalone' }),
  output: 'server',
  
  // 2. Integraciones (React SIEMPRE primero que Keystatic)
  integrations: [react(), keystatic()],
  
  vite: {
    plugins: [tailwindcss()],
  },
});