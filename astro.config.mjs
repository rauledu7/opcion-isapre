// astro.config.mjs
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import node from '@astrojs/node';

export default defineConfig({
  adapter: node({ mode: 'standalone' }),
  output: 'server',
  integrations: [react(), keystatic()], // React antes que Keystatic
  vite: {
    ssr: {
      // ESTO OBLIGA A ASTRO A INCLUIR REACT EN EL SERVER BUNDLE
      noExternal: ['@keystatic/astro', '@keystatic/core', 'react', 'react-dom', '@astrojs/react']
    }
  }
});