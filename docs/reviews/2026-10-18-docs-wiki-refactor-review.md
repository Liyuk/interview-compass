# Docs / Wiki refactor acceptance

Specification: `docs/superpowers/specs/2026-10-18-docs-wiki-refactor-technical-design.md`.
Plan: `docs/superpowers/plans/2026-10-18-docs-wiki-refactor.md`.
Implementation base: `ce2493c`. Worktree branch: `codex/wiki-knowledge-experience`.

## Evidence by public seam

| Seam | Authoritative checks |
| --- | --- |
| S1 Content and document tree | `knowledge-registry.test.ts`, actual build validation, `docs-navigation.spec.ts`; independent role/topic/context facets and permanent question ancestry |
| S2 Article outline | `article-outline.test.ts`, `article-sections.test.ts`, `article-outline.spec.ts`; authored H2/H3, old IDs, translated handbook hashes and mobile keyboard behavior |
| S3 Wiki relations | `knowledge-relations.test.ts`, `wiki-relations.spec.ts`; explicit incoming/outgoing edges, authored contrasts and real curated membership |
| S4 URL state | `browse-query.test.ts`, existing preference/routes/return tests, discovery/browser history and locale journeys; responsibility `scope` and content `searchScope` remain separate |
| S5 Discovery | `discovery.test.ts`, `unified-discovery.spec.ts`, existing real-index target/search/security/race tests; pre-pagination filtering, independent docs, group preview/full group, disjunctive cached counts |
| S6 Reading | `reading-session.test.ts`, `reading-session.spec.ts`, original reading-continuation journeys; complete ordered snapshots across result pages, local editing, refresh, locale, blocked/corrupt/future storage |
| S7 Rendered site | `docs-recovery.spec.ts`, route-family and keyboard tests; actual 503 retries, no-JS, old hashes opening references, delayed scripts CLS < 0.05, stationary mobile navigation and target popovers |

## Full-site compatibility and release gates

- All 3,464 baseline HTML URLs and recorded anchor sets are checked by `check:knowledge-output`.
- Every built HTML has six global navigation links, exactly one main landmark and valid internal file destinations (`check:shell`).
- Output checks cover duplicate chapter IDs, rendered outline destinations, explicit relation endpoints, translation destinations and local resources. Failing fixtures demonstrate these gates detect defects.
- Question feed implementation and legacy endpoints remain unchanged. Registry/reading support data use new versioned files.
- Content validation covers 2,668 localized records / 1,334 published question identities. Applicability review and dedicated question analysis are separate claims.
- Typecheck, content/applicability validation, unit tests, production build, output gates, size and E2E run through `npm run ci`; GitHub build runs output gates before E2E/deployment.

## Visual and interaction audit

Two batched visual rounds covered seven representative surfaces at 320, 390, 768, 1024 and 1440 CSS pixels, including bilingual handbooks. No horizontal overflow or page errors remained in the confirmation. Screenshots are local runtime artifacts under `output/docs-wiki-review/` and are not committed. The audit found a real Starlight fixed-position TOC overlap; a first-chapter click regression verifies the sticky-container fix. Shared review/role context folds allow question intent and signals to precede optional tools. Native no-JS navigation and static question fallback remain available.

## Decisions and limits

1. Starlight retains its native mobile TOC with explicit H2/H3 limits; desktop uses the shared outline adapter. Both consume the rendered headings. Cost: the mobile component's focus behavior remains owned by Starlight.
2. Full discovery groups use 50 items/page; all-content mode previews five per group with full-group links. Instant search uses eight per group. Old search page numbers can describe a different window; URLs remain valid and normalize to the current grouped view.
3. The pinned Pagefind 1.5.2 artifact adapter builds a versioned handle-to-question identity map, preserving full reading order without downloading every search result body. An incompatible Pagefind upgrade fails this adapter and needs an update.
4. The old exported `wikiNavigationFor` compatibility API and tests remain; production document navigation exclusively uses the Registry. Cost: legacy mapping maintenance until explicit API removal.
5. This is a document structure for existing questions, methods, guides and stage references. It does not manufacture unwritten concept articles, answers, scores or completion metrics.

## Final execution and independent review

Full CI and one independent read-only whole-branch review are in progress. Final counts, reviewed head and any resolved findings will be recorded here before delivery.
