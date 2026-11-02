# Default English and `/zh` Paths Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make English the default site language, serve Chinese under `/zh/`, edit site copy to be concise and natural, and complete the site's SEO/GEO foundations.

**Architecture:** Swap the localized Astro page trees while leaving shared data endpoints in place. Centralize the new locale prefixes in route generation and retain legacy URL redirects. Refine shared UI and guide copy in both languages. Generate canonical and alternate language metadata, a localized sitemap and page-accurate structured data for indexable pages.

**Tech Stack:** Astro 7, TypeScript, Markdown.

**Spec:** `docs/superpowers/specs/2026-11-02-default-english-zh-prefix-design.md`

## Global Constraints

- English uses root paths; Chinese uses `/zh/`.
- Old `/en/` routes redirect to root English routes. Chinese root routes collide with the new English routes and therefore cannot redirect while root serves English.
- Do not change question data, evaluation logic, data structures, or visual design.
- Retain necessary factual boundaries and safety notices while removing redundant defensive copy.
- Use SEO fundamentals as the GEO baseline; describe any `llms.txt` as an optional index, not a Google ranking feature.
- Honor the GitHub Pages `/interview-compass` base for every absolute URL.
- Do not add or run tests; run Astro static checks and build for verification.

## Review Focus

- Base path `/interview-compass/` remains present on generated internal links.
- Pagination and localized search links resolve to the correct language tree.
- Language switching preserves the current page when an equivalent route exists.
- Legacy routes do not shadow the new localized pages.
- Localized metadata uses the language and canonical URL matching the served route.
- Canonicals, sitemap entries and JSON-LD URLs include the deployment base and configured site origin.
- Search, not-found and redirect pages do not become indexable canonical content.
- JSON-LD contains only claims represented by visible page content.

---

### Task 1: Swap localized page trees and preserve legacy routes

**Files:**
- Move English page files from `src/pages/en/` to their corresponding paths under `src/pages/`.
- Move existing localized root page files under `src/pages/zh/`.
- Keep `src/pages/data/` shared and add redirects for previous `/en/` paths.

- [ ] Move the 33 English pages to root paths and the 33 Chinese pages under `/zh/`, excluding shared data endpoints.
- [ ] Add `/en/` compatibility redirects to the corresponding root routes.
- [ ] Check page tree collisions and ensure all static route entry points remain represented.

### Task 2: Update locale path generation and metadata

**Files:**
- Modify `src/lib/routes.ts`.
- Modify `src/lib/locale-paths.ts` only if required by route switching.
- Modify `src/layouts/SiteLayout.astro` for canonical, alternate locale metadata, robots directives and JSON-LD.
- Modify `astro.config.mjs` and `package.json` for localized sitemap generation if supported by the installed Astro version.
- Add `public/robots.txt` and a concise `public/llms.txt` only when their deployed paths are valid for this GitHub Pages project site.

- [ ] Make English the unprefixed locale and prefix Chinese paths with `/zh`.
- [ ] Ensure language switches, breadcrumbs, pagination, search and canonical links target the new paths.
- [ ] Preserve `/en/` links with generated static redirects. Do not claim root Chinese URLs can redirect because those URLs now serve English pages.
- [ ] Generate canonical URLs and reciprocal `en` / `zh-CN` alternates for equivalent indexable pages.
- [ ] Generate a localized sitemap and page-appropriate JSON-LD; exclude search, not-found and compatibility redirect pages.
- [ ] Verify robots and optional LLM index paths against the project-site base path and document any hosting-level limit.

### Task 3: Edit user-facing site copy

**Files:**
- Modify localized text in `src/components/`, `src/views/`, `src/content/guide/en.md`, and `src/content/guide/zh-CN.md`.

- [ ] Review copy across shared shell, navigation, empty/error states, guides and page introductions in both locales.
- [ ] Replace defensive or generic framing with direct, specific language; preserve necessary caveats and factual distinctions.
- [ ] Search for stale `/en/` and root-Chinese references in copy and documentation.

### Verification

- [ ] Run `npm run check` and confirm Astro reports no errors.
- [ ] Run `npm run build` and inspect generated output for root English pages, `/zh/` Chinese pages, shared data endpoints and legacy redirects.
- [ ] Inspect built HTML, sitemap, robots and LLM index output for canonical origin/base, reciprocal hreflang, indexability and valid JSON-LD.
- [ ] Verify public SEO/GEO behavior against official crawler documentation; distinguish technical readiness from actual indexing or AI citations.
- [ ] Review the complete diff read-only and report actionable findings and remaining risks.
