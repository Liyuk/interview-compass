# Delivery Readiness Implementation Plan
> **Historical record:** This document records a plan or review from its date; its framework and implementation statements are not current. See the [current architecture](../architecture/current-state.md).


> **For agentic workers:** Implement inline in this task; keep the question bank unchanged in size and preserve bilingual parity.

**Goal:** Execute the taxonomy audit and deliver a reliable bilingual question library with tested search behavior and a reviewable GitHub pull request.

**Architecture:** Keep A–H as the single primary capability taxonomy. Add cross-domain browse paths as faceted views over existing questions, clarify leaf assignment rules in shared taxonomy data, and harden Pagefind rendering at the browser boundary. No question content is added; existing question IDs and source links remain stable.

**Tech Stack:** Astro 7, TypeScript, Pagefind, Vitest, Playwright, GitHub Actions Pages.

**Spec:** `docs/reviews/2026-10-15-taxonomy-coverage-audit.md`

## Global Constraints

- Each question keeps one primary capability; topics, roles, scope, track, scenario, and format remain independent facets.
- The site stays Chinese/English and GitHub Pages remains under `/interview-compass/`.
- Do not add new question IDs or duplicate existing questions to build browse paths.
- Keep search results same-origin and within the configured base path; treat indexed titles and excerpts as untrusted content.

## Review Focus

- A language with fewer than eight high-ranked matches must still show its own results; test mixed-locale ordering before result limits.
- Clearing or escaping during an in-flight search must not reveal stale results; test delayed responses.
- Indexed HTML in excerpts and malformed/external result URLs must not create executable or escaping links; test hostile fixtures.
- A path must contain only its intended tagged questions in both languages and survive the Pages base path; test route and query state.
- The taxonomy must not expose empty leaf pages as ordinary browse destinations; validate published route generation and question counts.

### Task 1: Localized Pagefind search safety and behavior

**Files:** `src/lib/search-records.ts`, `src/layouts/SiteLayout.astro`, `tests/catalog-and-routing.test.ts`, `tests/e2e/site.spec.ts`.

**Interface:** Let Pagefind apply the active locale filter before ranking and its eight-result display cap; validate each returned URL with `safeSearchResultHref(value, options)` and create result nodes through DOM APIs.

- [x] Write and observe failing tests for locale ordering, safe destinations, unsafe excerpts, and stale responses.
- [x] Implement request sequencing, localized result filtering, same-origin/base validation, text-only excerpts, and localized error/empty states.
- [x] Run focused unit and Chromium search tests.

### Task 2: Taxonomy boundary and browse-path execution

**Files:** `src/lib/taxonomy.ts`, `src/lib/site-data.ts`, `src/lib/routes.ts`, `src/views/PathView.astro`, `src/views/LeafView.astro`, `src/views/HomeView.astro`, bilingual question frontmatter, content validation and tests.

**Interface:** Preserve one primary capability per record; add bilingual leaf placement guidance and cross-domain paths backed by explicit topic tags. Populate routes only from published, tagged questions.

- [x] Review existing candidates for the five empty leaves and record primary-ownership decisions; do not move questions based on a secondary topic alone.
- [x] Add explicit classification guidance for each leaf and show it on leaf pages.
- [x] Add a “提问、追问与探询” browse path and business/technical/team planning paths using existing questions only.
- [x] Verify every path in Chinese and English, with paired IDs and nonempty sections.

### Task 3: Site-level search and navigation coverage

**Files:** `tests/e2e/site.spec.ts`, route/content tests, `docs/reviews/2026-10-15-taxonomy-coverage-audit.md`.

- [x] Confirm keyboard focus, Escape, Enter, empty query, no results, exact result navigation, language isolation, locale result limits, stale requests, and hostile indexed content.
- [x] Confirm routes, unique question counts, bilingual path labels, and empty-leaf behavior.
- [x] Review task-first navigation and content discovery; add topic browsing as a direct route and prioritize curated paths before the full A–H map.
- [x] Audit all published question records for analysis-field coverage, inspect representative questions across A–H, and record the distinction between tailored fields and shared heuristic guidance.
- [x] Record any unresolved build warnings with their cause; fix project-owned warnings.

### Task 4: Delivery verification and PR

**Files:** package scripts/workflow only if coverage reveals a missing required gate.

- [x] Run `npm run ci` and inspect its complete output.
- [x] Review the full diff, confirm no new question IDs, check whitespace and generated artifacts, then commit.
- [x] Push the feature branch, create PR #4 against `main`, attach it to this task, and report its checks/status.

**Verification note:** Starlight emits one content warning while creating its built-in `/404` fallback because there is no `docs/404` entry. Adding one conflicts with the built-in 404 route and the lower-priority catch-all, so the default fallback is retained. The project-owned Astro diagnostics are clean.
