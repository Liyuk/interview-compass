# Post-Starlight Architecture Cleanup

Date: 2026-10-19  
Status: Design for the requested site-wide cleanup and verification.  
Scope: Current architecture documentation, stale Starlight migration references, guide content boundaries, and architecture consistency checks.

## Goal

Make the repository describe and implement one coherent current site architecture: an Astro static site with bilingual authored content, Pagefind search, native shared site components, and GitHub Pages deployment. Remove stale Starlight runtime-era identifiers and claims, preserve historical evidence without presenting it as current, and make the guide's source and bilingual chapter contract explicit and robust.

## Current Findings

- `package.json` and `astro.config.mjs` use Astro and Pagefind; there is no Starlight dependency or Starlight component directory.
- `PRODUCT.md` still names Starlight as part of the stack and recommends mapping Starlight surfaces. `DESIGN.md` describes separate Astro and Starlight renderers.
- Five shared style files have comments claiming they are shared with Starlight.
- The article outline accepts a Starlight-derived legacy summary ID, and an E2E test asserts that ID.
- Dated plans, specs, reviews, and design explorations record Starlight as a past or planned implementation. Several do not clearly say that their architecture was superseded.
- `.impeccable/direction-notes*.md` and some mock prompts describe the former Starlight direction. Other mock artifacts are product design history and are not runtime modules.
- The usage guide source is `src/content/guide/{zh-CN,en}.md`, imported directly by `GuideView.astro`. `src/content/docs/` contains no tracked files and is not a content collection.
- `guide-content.ts` pairs bilingual chapters by position, while `article-sections.ts` separately contains an unused explicit heading-to-key map. This duplicates the guide contract and leaves the map unvalidated.
- The `/handbook/` URL is the established canonical URL for the guide route in `routes.ts`; preserve it during this cleanup. It is a legacy product URL, not evidence of a Starlight runtime.
- Site pages consume the shared `SiteLayout`; no separate Starlight adapter remains. Existing guide, question, capability, role, scenario, search, and collection modules have active route or component usage.

## Chosen Approach

Use a focused cleanup with one current architecture source and explicit historical labeling:

1. Correct `PRODUCT.md`, `DESIGN.md`, and `README.md` to state the current stack, content sources, rendering model, search/index generation, route compatibility, and module ownership. Add a concise `docs/architecture/current-state.md` as the maintainer's canonical architecture map and link it from the README.
2. Update only historical documents that contain Starlight claims. Add a short, consistent historical-status notice at the top that identifies them as dated records and points to the current architecture map. Preserve their original decisions and findings as history; do not rewrite past claims into present-tense facts.
3. Remove stale Starlight-only runtime affordances: the old outline summary ID plumbing and its assertion, and obsolete framework wording in shared style comments. Keep `/handbook/` and its compatibility tests because they protect an established public route.
4. Keep current visual reference artifacts. Remove Starlight-specific claims from the retained active direction notes and mock text. Do not delete binary design history or unrelated older concepts merely because they are old.
5. Make the existing explicit bilingual heading-to-key map the single guide contract. Validate that each configured Chinese and English anchor exists exactly once in the imported Markdown headings, and use that map for outline and language-switch translation. Remove the positional key list and rename the misleading `handbookSections` export to `guideSections`. Keep the Markdown files as the canonical guide source and direct Astro imports as the rendering path; remove no content and add no CMS or content framework.
6. Remove no active product modules unless import and route evidence proves they are unreachable. The empty untracked `src/content/docs/` directory is not part of the repository and requires no source change.

## Architecture Contract

- Framework and rendering: Astro 7 static output; all site pages use `SiteLayout` and shared Astro components.
- Content: structured questions are an Astro content collection under `src/content/questions/`; bilingual guide articles are authored Markdown under `src/content/guide/`; capability and role-stage models remain authored JSON/Markdown datasets under `src/content/`.
- Navigation and relationships: route definitions and page titles live in `src/lib/routes.ts`; validated cross-content structure lives in `src/lib/knowledge/`; discovery/search adapters live in `src/lib/discovery/`.
- Search: Pagefind indexes the built static output; repository scripts add the reading map and validate generated output.
- Client behavior: focused browser modules under `src/lib/` own progressive enhancements such as navigation, target selection, outline tracking, and reading sessions. They must not duplicate route or content ownership.
- Public compatibility: preserve `/handbook/`, bilingual route pairs, question data endpoints, and existing content IDs unless a separate migration is approved.
- Deployment: static GitHub Pages output under `/interview-compass/`.
- No Starlight dependency, adapter, style layer, or present-tense documentation claim is part of the current architecture.

## Guide Chapter Contract

The Chinese and English Markdown guides remain the source of truth. `src/lib/article-sections.ts` holds one explicit mapping of stable section keys to each locale's existing heading anchor. `guide-content.ts` validates that every mapped anchor appears exactly once in its locale's rendered heading metadata, and that no chapter heading is unmapped. The outline and language-switch hash conversion consume this same mapping. A reordered chapter remains associated with the same key; duplicate, missing, or unknown headings fail with a diagnostic naming locale, key, and anchor. Existing heading text and generated anchors do not change.

## Historical Records

Historical plans and reviews remain useful for provenance. Their contents stay intact except for a leading status notice where needed. The notice must state that the file records a past decision or implementation snapshot, must not be read as current architecture, and links to `docs/architecture/current-state.md`. The canonical current docs and executable configuration are authoritative for present behavior.

Abandoned `.impeccable` Starlight direction notes should be removed from the active design root or explicitly labeled as archived alternatives. Retained current direction notes and prompt files must describe the current Astro page shell. Preserve selected mock images and user-supplied references.

## Acceptance Criteria

1. Current product, design, README, and architecture documentation agree with `package.json`, `astro.config.mjs`, content loaders, routes, and build scripts.
2. A repository-wide Starlight search finds no present-tense current-architecture claim, runtime adapter, obsolete CSS comment, or test coupled to a removed Starlight ID. Remaining mentions are explicitly historical records or third-party source titles/URLs.
3. The guide chapter key mapping is defined once, locale-independent, and rejects missing, duplicate, or unknown heading anchors; rendered Chinese and English outlines and section translation links still resolve correctly.
4. `/handbook/` and `/en/handbook/`, existing guide anchors, question endpoints, and Pagefind search remain available.
5. Every active source module in the architecture map has an observed import, route, or script consumer. Any removed module is supported by repository-wide reference evidence and is not used by generated or external public data contracts.
6. `npm run check`, `npm run check:content`, `npm run test:unit`, `npm run build`, `npm run check:shell`, `npm run check:knowledge-output`, `npm run check:size`, and `npm run test:e2e` pass. The full `npm run ci` is the final acceptance run.

## Risks and Limits

- Date-stamped history cannot be made factually current without falsifying its provenance; status notices will distinguish it from current guidance.
- Public route cleanup is intentionally excluded. `/handbook/` remains supported and documented until a dedicated URL migration is reviewed.
- The chapter mapping change must not alter headings, content text, generated anchors, or localized route behavior; the existing language-switch hash translation and guide chapter keys must use the same validated map.
- The module audit is bounded to source modules and repository-owned build/runtime consumers; generated output and untracked local artifacts are not architecture sources.
