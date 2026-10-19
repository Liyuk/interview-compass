import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://liyuk.github.io',
  base: '/interview-compass',
  integrations: [
    starlight({
      title: 'Interview Compass',
      pagefind: false,
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
      disable404Route: true,
      customCss: ['./src/styles/starlight.css'],
      components: {
        PageFrame: './src/components/starlight/PageFrame.astro',
        Header: './src/components/starlight/Header.astro',
        Footer: './src/components/starlight/Footer.astro',
        TableOfContents: './src/components/starlight/TableOfContents.astro',
        Sidebar: './src/components/starlight/Sidebar.astro',
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
