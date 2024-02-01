import { defineConfig } from 'astro/config';

import compressor from "astro-compressor";
// import { astroImageTools } from "astro-imagetools";

// https://astro.build/config
export default defineConfig({
  integrations: [compressor({gzip: false, brotli: true})]
});