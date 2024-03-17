import { defineConfig } from 'astro/config';
import robotsTxt from 'astro-robots-txt';
import compressor from "astro-compressor";
// import { resolve } from 'node:path'
import { shield } from '@kindspells/astro-shield';
const rootDir = new URL('.', import.meta.url).pathname;

// https://astro.build/config
export default defineConfig({
  site: 'https://patalcala.com',
  
  integrations: [compressor({gzip: false, brotli: true}), robotsTxt(),
  shield({
      enableStatic_SRI: true, // true by default
      enableMiddleware_SRI: false, // false by default
      // sriHashesModule: resolve(rootDir, 'src', 'utils', 'sriHashes.mjs'),
    })],
  build: {
    assets: '_patalcala',
    // inlineStylesheets: `always`,
    // format: 'file'
  }
});