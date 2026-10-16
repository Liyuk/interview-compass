import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://liyuk.github.io',
  base: '/interview-compass',
  integrations: [
    react(),
    starlight({
      title: 'Interview Compass',
      pagefind: false,
      components: {
        Header: './src/components/starlight/Header.astro',
        Footer: './src/components/starlight/Footer.astro',
      },
      defaultLocale: 'root',
      locales: {
        root: { label: '简体中文', lang: 'zh-CN' },
        en: { label: 'English', lang: 'en' },
      },
      sidebar: [],
      editLink: { baseUrl: 'https://github.com/Liyuk/interview-compass/edit/main/' },
    }),
  ],
});
