import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { questionSchema } from './lib/content-model';

const questions = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/questions' }),
  schema: questionSchema,
});
export const collections = { questions };
