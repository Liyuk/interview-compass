# Interview Compass

Interview Compass is a bilingual, question-first library for exploring external interviews and internal promotion. It explains what a question is intended to surface and links it to related capabilities, topics, roles, and responsibility paths; it does not prescribe answers or score people.

This repository contains the Interview Compass site and its source content.

## Explore locally

Requirements: Node.js 24 and npm.

```sh
npm ci
npm run dev
```

The site has Chinese and English routes for the home page, a filterable question library, a capability map (eight domains and their leaves), role, scenario and topic views, a cross-domain product path, and question pages that explain intent and observable signals. Stage profiles describe role-specific behaviors, evidence to inspect, and the distinction between the IC and management paths. Search uses Pagefind per language. The Pages base path is `/interview-compass/`; the Chinese site is at `/interview-compass/` and English at `/interview-compass/en/`.

## Checks

```sh
npm run check
npm run check:content
npm run test:unit
npm run build
npm run test:e2e
```

Or run the full CI sequence with `npm run ci`. The browser suite previews the built site under the real repository base path on port 5017.

## Copyright and licensing

Copyright © 2026 Liyuk. Software code is licensed under MIT (`LICENSE`). Original Interview Compass questions and the bilingual capability-model stage descriptions are licensed under CC BY-NC-SA 4.0 (`CONTENT-LICENSE.md`). Company mappings, source-derived, third-party, and externally attributed material are excluded from that content license and remain subject to their respective rights and terms.

## Content model

Question records live under `src/content/questions/zh-CN/` and `src/content/questions/en/`. Keep each pair aligned by stable question ID and identical primary capability. Frontmatter provides the question, intent, observable `signals`, exactly one `primaryCapability` leaf, independent facets (topics, roles, scopes, tracks, scenarios, formats) and a `source` with provenance (`adapted`, `derived`, `inspired`, or `original`); answers and scoring fields are intentionally outside the content model. The single vocabulary lives in `src/lib/taxonomy.ts`; routes, titles and breadcrumbs come from `src/lib/routes.ts`. Source review status is tracked in `docs/planning/source-ledger/*.yml` and validated by `npm run check:content`. `npm run report:coverage` prints unique question counts by domain, role, scenario, format and locale. `docs/planning/` contains the MECE architecture, research, and migration plans. Public project snapshots are archived outside this repository and are not part of the site build.

## Deployment

`.github/workflows/deploy.yml` checks pull requests and builds every pushed branch, but deploys Pages only from the repository's configured default branch (`main`). The published site is at [liyuk.github.io/interview-compass](https://liyuk.github.io/interview-compass/), using GitHub Actions.
