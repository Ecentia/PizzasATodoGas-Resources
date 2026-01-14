// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://pizzasatodogas.es', 
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  },
  vite: {
    build: {
      cssMinify: 'lightningcss'
    }
  }
});