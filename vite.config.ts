import { defineConfig } from 'vite';
import path from 'path';

import vue from '@vitejs/plugin-vue';
import Components from 'vite-plugin-components';

import ViteIcons, { ViteIconsResolver } from 'vite-plugin-icons';
import PurgeIcons from 'vite-plugin-purge-icons';
import WindiCSS from 'vite-plugin-windicss';

export default defineConfig({
  resolve: {
    alias: {
      '/~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    vue(),
    Components({
      customComponentResolvers: ViteIconsResolver(),
    }),
    ViteIcons(),
    PurgeIcons(),
    WindiCSS({
      safelist: 'prose prose-sm m-auto',
    }),
  ],
  server: {
    open: true,
    port: 2590,
  },
});
