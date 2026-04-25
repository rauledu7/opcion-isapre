import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import keystatic from '@keystatic/astro';
import node from '@astrojs/node'; // 1. Importar el adaptador

export default defineConfig({
  // 2. Cambiar el output a 'hybrid' 
  // (La landing será estática, Keystatic será dinámico)
  output: 'hybrid', 
  
  adapter: node({
    mode: 'standalone',
  }),
  
  integrations: [tailwind(), keystatic()],
});
