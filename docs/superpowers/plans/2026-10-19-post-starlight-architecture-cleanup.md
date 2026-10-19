# Post-Starlight Architecture Cleanup Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make current architecture documentation accurate, remove stale Starlight-only residue, establish one validated guide chapter map, and verify the site has no anomalous orphan module.

**Architecture:** Astro `SiteLayout` remains the only page shell. Structured question content stays in the Astro content collection; bilingual guide Markdown stays directly imported from `src/content/guide/`. A single explicit map in `article-sections.ts` will drive guide outline keys and locale hash translation, with validation in `guide-content.ts`. Dated design evidence remains intact but is labeled historical; current-state docs become the maintainer reference.

**Tech Stack:** Astro 7, TypeScript, Pagefind, Vitest, Playwright, static GitHub Pages.

**Spec:** `docs/superpowers/specs/2026-10-19-post-starlight-architecture-cleanup-design.md`

## Global Constraints

- Static output stays under `/interview-compass/` for GitHub Pages.
- Preserve `/handbook/` and `/en/handbook/`, guide heading text and anchors, question data endpoints, bilingual routes, and published content IDs.
- Do not add Starlight, a CMS, another content framework, or a second page shell.
- Preserve dated historical findings; label them as historical instead of rewriting the old facts.
- Preserve existing question corpus and attributed source material.

## Review Focus

- A missing or duplicate guide heading anchor must fail with a locale/key diagnostic rather than silently mispair chapters; test missing, duplicate, unknown, and reordered headings.
- Locale switching must translate only a mapped guide heading while preserving existing URLs and returning no hash for an unknown heading; test mapped, missing, and malformed hashes.
- Existing external selectors or tests must not depend on the removed Starlight TOC ID; verify handbook anchors and outlines in browser tests.
- Historical inventories may list removed Starlight files as evidence from their capture date; confirm they are labeled as snapshots and are excluded from current architecture claims.
- The architecture map must list only active source entry points and clarify the intentional `/handbook/` URL; compare it to route definitions, imports, content loader, and package scripts.

---

### Task 1: Unify and validate guide chapter mapping

**Files:**
- Modify: `src/lib/article-sections.ts`
- Modify: `src/lib/guide-content.ts`
- Modify: `src/views/GuideView.astro`
- Modify: `tests/guide-content.test.ts`
- Modify: `tests/article-sections.test.ts`

**Interfaces:**
- `article-sections.ts` exports `guideSections: SectionTranslation[]` as the only section key and locale-anchor map.
- `guide-content.ts` exports `guideSectionsFor(docs): SectionTranslation[]`, validating each configured locale anchor occurs exactly once in headings and every H2 chapter is represented.
- `guideHeadings(doc, locale, sections)` maps each validated anchor to the stable section key.

- [ ] **Step 1: Add failing guide mapping tests** for reordered H2 chapters, missing/duplicate/unknown anchors and exact diagnostics naming locale, key, and anchor.
- [ ] **Step 2: Run** `npx vitest run tests/guide-content.test.ts tests/article-sections.test.ts`; confirm the new contract assertions fail against positional mapping and unused `handbookSections`.
- [ ] **Step 3: Implement the single explicit mapping** and validation described in the spec. Rename `handbookSections` to `guideSections`; remove `guideSectionKeys`; make `GuideView.astro` consume validated sections.
- [ ] **Step 4: Run the focused tests** and verify the existing Chinese/English heading anchors remain unchanged.
- [ ] **Step 5: Commit** as `refactor: validate bilingual guide chapter mapping`.

### Task 2: Remove Starlight-only outline compatibility residue

**Files:**
- Modify: `src/layouts/SiteLayout.astro`
- Modify: `src/components/WikiOutline.astro`
- Modify: `src/components/docs/ArticleOutline.astro`
- Modify: `src/styles/discovery.css`
- Modify: `src/styles/reading.css`
- Modify: `src/styles/reference.css`
- Modify: `src/styles/shell.css`
- Modify: `src/styles/tokens.css`
- Modify: `tests/e2e/site.spec.ts`

- [x] **Step 1: Change the browser assertion** to expect no Starlight ID while checking the localized outline summary and existing `#_top` / guide chapter anchors.
- [x] **Step 2: Run** `npm run build` followed by `PLAYWRIGHT_PORT=18566 CI=1 npx playwright test tests/e2e/site.spec.ts --project=chromium --grep 'handbook uses'`; confirm the new absence assertion fails against the unchanged source build. (Ruling: the default port 5027 was serving the primary checkout, so use port 18566 with `CI=1` to force this worktree's preview and limit the red run to the handbook case.)
- [x] **Step 3: Remove `legacySummaryId` plumbing**, remove the obsolete Starlight ID, and make shared CSS comments describe their actual Astro/site-shell consumers.
- [x] **Step 4: Rebuild and rerun the focused browser test**; confirm both guide locales render one outline and retain the original `#_top` and H2 anchors.
- [x] **Step 5: Commit** as `refactor: remove Starlight outline compatibility code` (`2b063cb`).
- [x] **Step 6: Reconcile the immutable historical anchor snapshot with the current rendered contract.** Added a generic check that does not require retired plugin-namespaced UI IDs; verified missing ordinary anchors still fail, and `npm run check:knowledge-output` passes after the 3470-page build.

### Task 3: Publish an accurate current architecture map

**Files:**
- Create: `docs/architecture/current-state.md`
- Modify: `README.md`
- Modify: `PRODUCT.md`
- Modify: `DESIGN.md`

- [x] **Step 1: Draft the architecture map** with stack, page shell, content sources, route ownership, knowledge registry, discovery/search, client behavior, generated feeds, and deployment, using the spec's architecture contract.
- [x] **Step 2: Correct product and design docs** so every present-tense stack/rendering/module claim matches the architecture map and executable config. Link to the map from the README.
- [x] **Step 3: Verify the claims** against `package.json`, `astro.config.mjs`, `src/content.config.ts`, `src/lib/routes.ts`, `src/layouts/SiteLayout.astro`, `scripts/`, and the public data endpoints.
- [x] **Step 4: Run** `git diff --check` and a targeted stale-claim search across current docs.
- [x] **Step 5: Commit** as `docs: document current site architecture` (`pending`).

### Task 4: Mark Starlight-era plans and reviews as historical

**Files:**
- Modify historical files containing Starlight claims under `docs/planning/`, `docs/reviews/`, and `docs/superpowers/{plans,specs}/`.
- Create: `docs/architecture/README.md` to explain how dated records and immutable machine snapshots should be read; it will link to, not duplicate, the canonical current map.

- [ ] **Step 1: Inventory text records** with `git grep -Iil starlight HEAD -- docs` and classify narrative records versus machine snapshots.
- [ ] **Step 2: Add a short standard historical notice** to narrative records: date-stamped historical record, its status is not current architecture, and link to `docs/architecture/current-state.md`. Preserve original findings and decisions.
- [ ] **Step 3: Add the historical-record index** in `docs/architecture/README.md`; leave machine-generated compatibility/resource snapshots byte-for-byte unchanged where their capture metadata already identifies them as historical, and link them from the index or relevant review notice.
- [ ] **Step 4: Verify** every remaining textual Starlight reference under docs is clearly in a historical record or captured snapshot; no old spec is presented as active guidance.
- [ ] **Step 5: Commit** as `docs: label Starlight-era records as historical`.

### Task 5: Clean active design notes and confirm module ownership

**Files:**
- Modify: `.impeccable/direction-notes.md`, `.impeccable/direction-notes-reroll-1.md`, and retained current prompt/metadata files containing old Starlight direction.
- Create: `.impeccable/mocks/README.md` to identify generated mock and prompt folders as historical design exploration, not current implementation guidance.
- Modify: `docs/architecture/current-state.md` if the ownership audit finds a missing active source boundary.

- [ ] **Step 1: Classify the matching `.impeccable` text files** as accepted/current, rejected alternative, or screenshot metadata. Preserve current accepted visual direction and user-supplied reference assets.
- [ ] **Step 2: Remove stale Starlight claims from the current direction notes** and add a clear historical label to abandoned rerolls and candidate prompts. Keep accepted mock images and user-supplied reference assets.
- [ ] **Step 3: Check active source module consumers** with import, route, and script searches. Do not remove modules with an observed consumer or public data contract.
- [ ] **Step 4: Verify** current design notes contain no present-tense Starlight claim and the architecture map's module ownership matches actual consumers.
- [ ] **Step 5: Commit** as `docs: clean stale design direction and verify module ownership`.

### Task 6: Full site acceptance

**Files:**
- Modify: any source or docs found inconsistent during acceptance; update this plan's checkboxes with actual outcomes.

- [ ] **Step 1: Run focused unit and browser tests** for guide mapping, locale hash switching, guide anchors, search discovery, and handbook route compatibility.
- [ ] **Step 2: Run repository-wide searches** for Starlight and stale framework descriptions; inspect every remaining match in text files and classify it as historical, captured evidence, or third-party attribution.
- [ ] **Step 3: Run `npm run ci`** and address any failures at their source.
- [ ] **Step 4: Start the production preview and inspect** `/interview-compass/handbook/`, `/interview-compass/en/handbook/`, home, question bank, search, and representative question pages. Confirm shared shell, outline, locale switching, links, and browser console/network health.
- [ ] **Step 5: Commit** any acceptance fixes as `fix: resolve architecture cleanup acceptance findings`; report commit IDs and exact verification results.
