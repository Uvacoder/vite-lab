import { defineConfig } from 'vite';
import path from 'path'

import vue from '@vitejs/plugin-vue';
import Components from 'vite-plugin-components';

import ViteIcons, { ViteIconsResolver } from 'vite-plugin-icons';
import PurgeIcons from 'vite-plugin-purge-icons'

export default defineConfig({
  alias: {
    '/~/': `${path.resolve(__dirname, 'src')}/`,
  },
  plugins: [
    vue(),
    Components({
      customComponentResolvers: ViteIconsResolver(),
    }),
    ViteIcons(),
    PurgeIcons()
  ]
})
