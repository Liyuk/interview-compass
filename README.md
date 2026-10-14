# Interview Compass

Interview Compass is a bilingual, question-first library for exploring interview and promotion questions. It explains what a question is intended to surface and links it to related capabilities, topics, and roles; it does not prescribe answers or score people.

The new personal project lives at [Liyuk/interview-compass](https://github.com/Liyuk/interview-compass). The existing [Mountain-Buzhou/Interview-Book](https://github.com/Mountain-Buzhou/Interview-Book) project remains a separate legacy site and is not changed by this repository.

## Explore locally

Requirements: Node.js 24 and npm.

```sh
npm ci
npm run dev
```

The first implementation slice has Chinese and English routes, question/topic/role indexes, question-intent pages, Pagefind search, a content validator, and bilingual sample questions. The Pages base path is `/interview-compass/`; the Chinese site is at `/interview-compass/` and English at `/interview-compass/en/` after deployment.

## Checks

```sh
npm run check
npm run check:content
npm run test:unit
npm run build
npm run test:e2e
```

Or run the full CI sequence with `npm run ci`. The browser suite previews the built site under the real repository base path on port 5017.

## Content model

Question records live under `src/content/questions/zh-CN/` and `src/content/questions/en/`. Keep each pair aligned by stable question ID. Frontmatter provides the question, intent, primary capability, and cross-cutting topic/role metadata; answers and scoring fields are intentionally outside the content model. `docs/planning/` contains the MECE architecture, research, and migration plans. Public project snapshots are archived outside this repository and are not part of the site build.

## Deployment

`.github/workflows/deploy.yml` checks pull requests and builds/deploys Pages from `main`. The site is configured for `https://liyuk.github.io/interview-compass/`. GitHub Pages must be configured to use GitHub Actions before the first production deployment. Feature branches do not trigger a production deployment.
