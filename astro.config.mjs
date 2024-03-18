import { defineConfig } from 'astro/config';
import robotsTxt from 'astro-robots-txt';
import compressor from "astro-compressor";
// import { resolve } from 'node:path'
import { shield } from '@kindspells/astro-shield';
// const rootDir = new URL('.', import.meta.url).pathname;
// import min from 'astro-min'

// https://astro.build/config
export default defineConfig({
  site: 'https://patalcala.com',
  
  integrations: [compressor({gzip: false, brotli: true}), robotsTxt(),
  shield({
      enableStatic_SRI: true, // true by default
      enableMiddleware_SRI: false, // false by default
      // sriHashesModule: resolve(rootDir, 'src', 'utils', 'sriHashes.mjs'),
    }),
  // min({
  //     do_not_minify_doctype: false,
  //     ensure_spec_compliant_unquoted_attribute_values: false,
  //     keep_closing_tags: false,
  //     keep_comments: false,
  //     keep_html_and_head_opening_tags: false,
  //     keep_input_type_text_attr: false,
  //     keep_spaces_between_attributes: false,
  //     keep_ssi_comments: false,
  //     minify_css: false,
  //     minify_js: false,
  //     preserve_brace_template_syntax: false,
  //     preserve_chevron_percent_template_syntax: false,
  //     remove_bangs: false,
  //     remove_processing_instructions: false,
  //   })
  ],
  build: {
    assets: '_patalcala',
    // inlineStylesheets: `always`,
    // format: 'file'
  }
});