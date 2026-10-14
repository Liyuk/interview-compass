import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { docsLoader, i18nLoader } from '@astrojs/starlight/loaders';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';
import { questionSchema } from './lib/content-model';

const docs = defineCollection({ loader: docsLoader(), schema: docsSchema() });
const i18n = defineCollection({ loader: i18nLoader(), schema: i18nSchema() });
const questions = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/questions' }),
  schema: questionSchema,
});
export const collections = { docs, i18n, questions };
