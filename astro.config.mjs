import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Reemplaza este valor por el dominio final antes de publicar (ya usado para sitemap y canonical URLs).
const SITE_URL = 'https://recursosalfred.online';

export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  compressHTML: true,
});
