import { copyFile, mkdir } from 'node:fs/promises';

await mkdir('dist', { recursive: true });
await Promise.all([
  copyFile('LICENSE', 'dist/LICENSE'),
  copyFile('CONTENT-LICENSE.md', 'dist/CONTENT-LICENSE.md'),
]);
