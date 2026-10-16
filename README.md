# Interview Compass

Interview Compass is a bilingual, question-first heuristic library for external interviews, hiring, promotion, and project reflection. Start from a goal or search directly; use questions to compare approaches, examine context and causality, and make contribution visible through evidence. It does not prescribe answers or automatically score people.

This repository contains the Interview Compass site and its source content.

## Explore locally

Requirements: Node.js 24 and npm.

```sh
npm ci
npm run dev
```

The site has Chinese and English routes for the home page, six goal-based paths, curated question sets, a filterable full library, the questioning framework, optional local answer practice, an eight-domain capability map, role, scenario and topic views, and question pages. Question cards distinguish individually reviewed analysis from shared reading prompts. Stage profiles describe role-specific behaviors, evidence to inspect, and the distinction between professional-contributor and management paths. Search uses Pagefind per language. The Pages base path is `/interview-compass/`; the Chinese site is at `/interview-compass/` and English at `/interview-compass/en/`.

The practice page stores drafts only in the browser. It creates a structured analysis prompt that a user may copy into an AI tool; answers are never sent automatically. The question library also has a compact public data feed for selected question cards. The companion skill at `skills/interview-compass-coach/` uses that feed for question lookup and follows the same evidence and privacy limits.

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

Question records live under `src/content/questions/zh-CN/` and `src/content/questions/en/`. Keep each pair aligned by stable question ID and identical primary capability. Frontmatter provides the question, intent, observable `signals`, exactly one `primaryCapability` leaf, independent facets (topics, roles, scopes, tracks, scenarios, formats) and provenance. Shared 1–4 evidence references are not stored as question-specific judgments. Individually reviewed objective analysis, alternative interpretations, context probes, comparison dimensions, trade-offs and four anchors live in `src/data/question-specific-analyses.json`; that file is paired by ID and locale and validated against the published bank. Curated sets reference question IDs in `src/lib/question-collections.ts`; candidate due-diligence prompts use a separate, non-scored shape. The single vocabulary lives in `src/lib/taxonomy.ts`; routes, titles and breadcrumbs come from `src/lib/routes.ts`. Source review status is tracked in `docs/planning/source-ledger/*.yml` and validated by `npm run check:content`. `npm run report:coverage` prints unique question counts by domain, role, scenario, format and locale. `docs/planning/` contains the MECE architecture, research, and migration plans. Public project snapshots are archived outside this repository and are not part of the site build.

## Deployment

`.github/workflows/deploy.yml` runs the full CI sequence on pull requests, pushes to `main`, and manual dispatch: Astro type checks, content and source-ledger validation, unit tests, static build and Pagefind indexing, then desktop and mobile Chromium browser tests. It uploads a Pages artifact and deploys only from the repository's default branch (`main`); pull requests and feature branches verify the site without publishing it. The published site is at [liyuk.github.io/interview-compass](https://liyuk.github.io/interview-compass/), using GitHub Actions.
