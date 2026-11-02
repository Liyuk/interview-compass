import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://liyuk.github.io',
  base: '/interview-compass',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', zh: 'zh-CN' },
      },
      filter: (page) => !/\/(?:en|search|404)(?:\/|\.html?$)/.test(new URL(page).pathname),
    }),
  ],
});
