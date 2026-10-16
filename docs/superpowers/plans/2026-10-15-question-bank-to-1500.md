# Expand the Interview Compass question bank to 1,500

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add 433 original bilingual question pairs to reach 1,500, with deliberate capability allocations and balanced role navigation.

**Architecture:** Keep the current content schema and one primary A–H capability per question. Add questions as paired Markdown records, tag true role/topic/context relationships, and register provenance in the source ledger. Work sequentially in four batches; leave semantic similarity merging for a later pass.

**Tech Stack:** Astro content collections, TypeScript, YAML frontmatter, Vitest, Node content validation scripts.

**Spec:** `docs/planning/2026-10-15-question-bank-mece-1500.md`

## Global Constraints

- Expand from 1,067 to exactly 1,500 published bilingual question IDs.
- Each question has one primary capability; roles and other facets remain independent multi-value browse dimensions.
- Preserve the heuristic question format; do not add answer examples or hiring recommendations.
- Do not merge semantic near-duplicates during this expansion; retain exact wording and paired-ID validation.
- Record original provenance and all new IDs in the source ledger.
- Work serially; no parallel question generation.

## Review Focus

- Every Chinese question has exactly one English pair with matching primary capability and facets; validate after each batch.
- Every question lands on the leaf whose decision target is primary; inspect neighboring-leaf boundaries in the spec during generation.
- Role tags represent genuine applicability; verify role minimums from the spec after each batch and at completion.
- Empty or malformed facets and ledger IDs fail content validation; run `npm run check:content` for each batch.
- Existing IDs, pages, and question analyses remain valid; run unit tests and `npm run check` after each batch.

---

### Task 1: Add A and B question pairs

**Files:**
- Create: bilingual question Markdown files in `src/content/questions/zh-CN/` and `src/content/questions/en/` for 126 new IDs.
- Create: `docs/planning/source-ledger/domain-original-expansion-to-1500-a-b.yml`.
- Test: content validation and question coverage report.

- [x] Add 49 A questions according to the leaf quotas in the spec.
- [x] Add 77 B questions according to the leaf quotas in the spec, emphasizing business context, feature semantics, commercial rules, and model evolution.
- [x] Record all 126 IDs as original in the source ledger.
- [x] Run `npm run check:content`, `npm run test:unit`, `npm run check`, and `npm run report:coverage`.
- [x] Confirm total 1,193 and compare role counts with the planned distribution.

### Task 2: Add C and D question pairs

**Files:**
- Create: bilingual question Markdown files in `src/content/questions/zh-CN/` and `src/content/questions/en/` for 119 new IDs.
- Create: `docs/planning/source-ledger/domain-original-expansion-to-1500-c-d.yml`.
- Test: content validation and question coverage report.

- [x] Add 55 C questions and 64 D questions to their specified leaves.
- [x] Cover why/what-to-do decisions separately from how to execute and coordinate the chosen work.
- [x] Record all 119 IDs as original in the source ledger.
- [x] Run `npm run check:content`, `npm run test:unit`, `npm run check`, and `npm run report:coverage`.
- [x] Confirm total 1,312 and check role minimums and leaf targets.

### Task 3: Add E and F question pairs

**Files:**
- Create: bilingual question Markdown files in `src/content/questions/zh-CN/` and `src/content/questions/en/` for 108 new IDs.
- Create: `docs/planning/source-ledger/domain-original-expansion-to-1500-e-f.yml`.
- Test: content validation and question coverage report.

- [x] Add 60 E questions and 48 F questions to their specified leaves.
- [x] Distinguish individual collaboration from people-management and organizational mechanisms; cover both first-line and manager-of-managers paths.
- [x] Record all 108 IDs as original in the source ledger.
- [x] Run `npm run check:content`, `npm run test:unit`, `npm run check`, and `npm run report:coverage`.
- [x] Confirm total 1,420 and check role minimums and leaf targets; mobile and design role floors remain for G/H.

### Task 4: Add G and H question pairs and complete the target

**Files:**
- Create: bilingual question Markdown files in `src/content/questions/zh-CN/` and `src/content/questions/en/` for 80 new IDs.
- Create: `docs/planning/source-ledger/domain-original-expansion-to-1500-g-h.yml`.
- Test: content validation, tests, type check, production build, and final coverage report.

- [x] Add 47 G questions and 33 H questions to their specified leaves.
- [x] Keep learning, reflection, resilience, and self-direction distinct from integrity, ownership, attribution, boundaries, and work expectations.
- [x] Record all 80 IDs as original in the source ledger.
- [x] Run `npm run ci` and `npm run report:coverage`.
- [x] Confirm exactly 1,500 unique paired IDs, all domain/leaf targets, all role minimums, and no duplicate wording.
- [x] Defer semantic near-duplicate review to the separately requested next stage.

## Self-review

- Spec coverage: all eight module purposes and capability models, all 47 leaf quotas, role minimums, batch targets, bilingual pairing, provenance, and dedup timing have implementation steps.
- Step clarity: each batch has exact counts and a single bounded content-domain pairing, with its own validator and coverage review.
- Totals: batches sum to 126 + 119 + 108 + 80 = 433; cumulative totals are 1,193, 1,312, 1,420, and 1,500.
- Review focus: pairing, unique primary ownership, truthful role labels, ledger validation, and regression safety are assigned to explicit checks.
- Proportion: this plan points to a separate target spec and does not reproduce the full quota table.
