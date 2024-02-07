import { defineConfig } from 'astro/config';
import robotsTxt from 'astro-robots-txt';
import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  site: 'https://patalcala.com',
  
  integrations: [compressor({gzip: false, brotli: true}), robotsTxt()],

  build: {
    assets: '_patalcala'
  }
});