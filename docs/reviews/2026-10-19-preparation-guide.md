# Preparation guide implementation acceptance

Spec: `docs/superpowers/specs/2026-10-19-preparation-guide-information-architecture.md`.
Plan: `docs/superpowers/plans/2026-10-19-preparation-guide.md`.
Implementation base: `9d909ae`; existing isolated branch `codex/wiki-knowledge-experience`.

## Delivered behavior

- Three primary entries: Home, Preparation guide and Question bank. `boardFor` is the shared ownership source; global search is neutral.
- Six new localized pages: guide landing, capability overview and preparation direction in Chinese and English. Real framework/role/method/category content is linked into the ordered guide rather than duplicated under new URLs.
- Guide sidebar and breadcrumbs include existing handbook, role/stage references, methods and classifications. Categories retain real related question lists. Questions remain in the Question bank with independent capability ancestry and source return.
- Direction explains the role being prepared for or assessed, target responsibility, and independent use contexts. Users explicitly open and apply the existing target editor. Inspection established that automatic first-visit opening was already absent; no redundant prompt behavior was added.
- The same header searches all content from any board without retaining question-page facets. Results use that single visible keyword field; the sidebar switches scope while retaining keyword, linked target and conditions. Instant results preview up to eight items per content group.
- Reading continuation follows the guide sequence and same-group reference order. Existing curated sets, candidate due-diligence guide, local current collection, question tools and public data identities remain available. Guide return destinations now pass the existing strict origin/base/locale validation.

## Independent review and fix pass

A fresh read-only reviewer inspected the working changes against the spec and plan, including runtime behavior. One consolidated P2 finding covered incorrect breadcrumb ancestry: duplicate guide roots, search attached to Question bank, and context categories attached to Goal paths. The author also reproduced dynamic search links losing keywords because target propagation restored cached SSR destinations.

Both were covered by observed failing public-interface tests, repaired and verified:

- `uses one guide ancestor and keeps search and context categories under their actual owners` — RED→GREEN; explicit parent mappings and single guide ancestry.
- `search scope links retain the keyword and linked target after changing the query` — RED→GREEN; controller-owned scope/group links retain their own serialized state.
- The route regression additionally exposed existing empty-base normalization producing `//en/...`; normalization now handles both empty and `/` bases.

No additional confirmed P1/P2 findings or deferred minor findings were reported. Existing regression expectations were migrated to three primary entries, full-site instant groups, and the single search field. The new mobile scope test explicitly opens the collapsed sidebar before selecting a scope.

## Validation

All commands ran against this worktree's production preview on port 18565:

- `npm run check`: 0 errors / 0 warnings (6 existing hints).
- `npm test`: 176 passed across 34 files.
- `npm run build`: Astro production build, real bilingual Pagefind index and 2,668-entry reading identity map passed.
- `npm run check:shell`: 3,470 built pages, 0 failures; three global links, global search input, one main landmark and valid internal files.
- `npm run check:knowledge-output`: 3,470 pages, 0 failures; all 3,464 baseline URLs/anchors plus outline, relation, translation and asset destinations preserved.
- `npm run check:size`: 218,440,597 bytes, below 220 MiB.
- `PLAYWRIGHT_PORT=18565 npm run test:e2e`: 239 passed / 1 existing device-conditional skip / 0 failed (1.0 minute).

The full CI sequence completed type/content/stage/unit/build/output/size checks. Its browser phase initially collected the mobile test before its disclosure-opening correction; the complete browser suite was rerun against the final test file and passed as listed above. Remote CI is verified on the pushed implementation and recorded in PR #12.

Desktop/mobile Chinese/English guide and global-search screenshots were inspected in one batch, followed by a bounded confirmation of corrected breadcrumbs. Runtime screenshots stay under `output/preparation-review/` and are not committed. Existing tests cover shared responsive frames at 320/390/768/1024/1440px, native no-JS access, keyboard/Escape, delayed scripts, real-index filtering, retry and reading restoration.

## Decisions and limits

1. Keep old published routes and add `/guide/`, `/guide/capabilities/`, `/guide/direction/` with English equivalents. Cost: internal route IDs retain legacy terms while navigation provides the new ownership.
2. Preparation context remains a facet; only role and stage form the stored target. This avoids a second implicit profile and preserves sharing contracts.
3. Use actual shared methods with role requirements and real question sets. No role-specific method articles are claimed without authored content.
4. Local collection continues to use its existing panel at `/collections/#current-collection`; no duplicate collection storage or new empty standalone page.
5. Full-text search requires JavaScript, with static document navigation and explicit fallback retained. Existing compatibility exports remain for legacy callers; production navigation uses the new board mapping.
