import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import keystatic from '@keystatic/astro';
import node from '@astrojs/node';

export default defineConfig({
  // CAMBIO AQUÍ: Astro 6 prefiere 'static' (el adaptador maneja lo dinámico solo)
  output: 'static', 
  
  adapter: node({
    mode: 'standalone',
  }),
  
  integrations: [tailwind(), keystatic()],
});