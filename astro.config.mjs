import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://murph-sys.github.io',
  base: '/Indito',
  output: 'static',
  build: {
    assets: 'assets',
  },
});
