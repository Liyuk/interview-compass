# Current Site Architecture

This document describes the implementation currently in this repository. Dated plans, reviews, and mockups are historical evidence; executable configuration and source code determine current behavior.

## Runtime and rendering

- **Framework:** Astro 7, static output, Node.js 24 for development and builds.
- **Page shell:** `src/layouts/SiteLayout.astro` is the shared shell for all routed pages. `SiteMasthead.astro` owns the global three-link navigation, target status/selector, language switch, and search form; Pagefind behavior is implemented in `src/lib/discovery/`. Home changes its content frame, not its global shell.
- **Routes:** `src/pages/` and `src/pages/en/` declare Chinese and English static routes. `src/lib/routes.ts` owns route references, canonical local paths, page titles, parents, and breadcrumbs. The public `/handbook/` path remains the usage-guide URL and is translated to `/en/handbook/`; `/guide/` is the preparation guide.
- **Presentation:** `src/views/` composes route-specific content. Reusable UI lives in `src/components/`; shared reading navigation is under `src/components/docs/`.
- **Styling:** `src/styles/` contains the shared design tokens and shell, reading, discovery, reference, and global styles. The authored SVG sprite is rendered by `Icon.astro`.

## Content and relationships

| Content | Source of truth | Loader or owner | Rendered through |
| --- | --- | --- | --- |
| Interview questions | `src/content/questions/{zh-CN,en}/` Markdown with validated frontmatter | Astro content collection in `src/content.config.ts`, model in `src/lib/content-model.ts`, catalog in `src/lib/site-data.ts` | Question, library, facet, path, and search views |
| Usage guide | `src/content/guide/{zh-CN,en}.md` | Direct Astro Markdown imports in `GuideView.astro`; `article-sections.ts` maps bilingual headings to stable section keys; `guide-content.ts` validates the map | Shared `SiteLayout` and article outline |
| Capability model | `src/content/capability-model/*.json` and taxonomy definitions | `src/lib/capability-model.ts`, `src/lib/taxonomy.ts` | Capability and stage-reference views |
| Role-stage expectations | `src/content/role-stages/` plus reviewed question applicability data | `src/lib/role-stage-model.ts`, `src/lib/question-applicability.ts` | Stage and target-selection views |
| Curated sets and goal paths | `src/lib/question-collections.ts`, `src/lib/taxonomy.ts` | Route/view modules | Collections and path views |

The only Astro content collection is `questions`. Guide Markdown is intentionally imported as paired source documents; `src/content/docs/` is not a tracked or configured content source.

## Navigation and search

- `src/lib/knowledge/site-registry.ts` builds localized page nodes and explicit relation edges from route, taxonomy, and published question data.
- `src/lib/knowledge/registry.ts` validates identities, translations, parents, URLs, and hierarchy cycles, then serves page, navigation, and relation queries.
- `src/lib/page-presentation.ts` determines which pages receive a section tree and reading tools. `DocumentNavigation`, `WikiSidebar`, and `ArticleOutline` render those shared structures.
- `src/lib/discovery/` owns query state, filtering, result adapters, and Pagefind integration. Pagefind indexes the generated static HTML; `scripts/build-search-reading-map.mjs` adds stable question identities to Pagefind result handles.
- `src/lib/reading/` owns local reading-session state. Other browser enhancements live in focused client modules under `src/lib/`; they enhance rendered HTML rather than define a second route or content model.

“Wiki” names the site's linked, hierarchical reading experience. It is implemented by the shared route and knowledge modules above; it is not a separate framework or second page renderer.

## Public data and build outputs

- `/data/questions/{locale}.json` exposes the localized question index used by the companion coach skill.
- `/data/question/{locale}/{id}.json` exposes a question record.
- `/data/target-roles/{locale}.json` and `/data/stage-model/{locale}.json` expose target and stage data.
- `/data/knowledge/manifest.v1.json` exposes localized knowledge nodes and their relation edges.
- `npm run build` runs `astro build`, copies legal files, builds Pagefind indexes, then writes the reading map. `scripts/check-site-shell.mjs` and `scripts/check-knowledge-output.mjs` validate generated HTML and the knowledge manifest.

## Deployment and verification

The site is a static GitHub Pages deployment with base path `/interview-compass/`. `.github/workflows/deploy.yml` runs type/content/applicability checks and unit tests in separate jobs, then builds and validates generated output on pull requests, pushes to `main`, and manual dispatch. Deployment runs only for pushes to `main` or a manual dispatch on `main`. Locally, `npm run ci` runs those checks as one sequential command.

## Compatibility rules

- Keep `/handbook/` and `/en/handbook/` stable unless a separate URL migration is reviewed.
- Keep bilingual routes paired by stable content IDs and preserve published question IDs and data endpoint shapes.
- Keep Markdown heading anchors stable when changing guide text. The shared guide section map validates those anchors and controls cross-language hash translation.
- Keep one `SiteLayout` page shell and one validated knowledge registry as the shared source for navigation hierarchy and article relationships.
