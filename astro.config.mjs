// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';
import UnoCSS from 'unocss/astro'
import presetMini from '@unocss/preset-mini'
import transformerVariantGroup from '@unocss/transformer-variant-group'

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare(),
  integrations: [
    UnoCSS({
      injectReset: true,
      presets: [ presetMini({ dark: 'media' }) ],
      transformers: [
        transformerVariantGroup(),
      ],
    }),
  ],
});
