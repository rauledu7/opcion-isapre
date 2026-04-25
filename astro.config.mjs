import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import keystatic from '@keystatic/astro';
import node from '@astrojs/node';

export default defineConfig({
  // Importante: Astro 6 con adaptador de Node
  adapter: node({
    mode: 'standalone',
  }),
  integrations: [tailwind(), keystatic()],
});