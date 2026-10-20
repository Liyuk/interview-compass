# Three-Perspective Question Library Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Establish a credible bilingual question library for candidates, interviewers, and managers, then make its core questions and site entry paths useful to each audience.

**Architecture:** Keep one bilingual Markdown record per existing question ID and add explicit perspective and quality-tier fields to that record. Use one shared content contract for Astro and repository checks, report inferred metadata separately from human-reviewed core content, and reuse the existing route, capability, and curated-collection models for discovery.

**Tech Stack:** Astro 7 content collections, TypeScript/Zod, YAML frontmatter, Node scripts, Vitest, Playwright.

**Spec:** `docs/superpowers/specs/2026-10-19-three-perspective-question-library-design.md`

## Global Constraints

- Keep question IDs, public URLs, sources, and all extended questions.
- Add no standard answers, complete case studies, or extra applicability-boundary sections.
- Candidate, interviewer, and manager are equal perspectives; perspective describes who uses/answers the prompt, not its capability domain.
- Core is 100–150 bilingual question IDs, 30–50 per perspective, with 3–4 signals, 2–3 question-specific follow-ups, weakAnswer, and four question-specific anchors.
- Keep generated perspective assignments distinguishable from human-reviewed assignments.
- Extended-content quality defects warn; malformed structure and invalid enumerations fail.
- Keep every phase in its own pull request; open PRs only, do not merge, and do not push directly to main.
- Because prerequisite PRs remain unmerged, stack dependent phase branches on the preceding phase branch and set each PR's base to that prerequisite branch; keep each diff limited to its own phase.
- Do not rewrite or mark any candidate core question as core until the user has reviewed the candidate list.

## Review Focus

- A Chinese and English pair receives different inferred perspective — test pair-level inference and pair consistency.
- A rerun overwrites a human correction — test idempotent, fill-missing-only migration behavior.
- A weak or structurally invalid extended record blocks the build — test warnings versus hard schema errors separately.
- A core question has translated fields with mismatched counts — test strict bilingual parity for signals, followUps, and anchors.
- A core question is mislabeled as human-reviewed — test that core validation requires reviewed perspective metadata and complete required content.

---

## Phase A — Schema, Migration, and Quality Reports (PR 1)

### Task 1: Add perspective, tier, and core fields to the shared question model

**Files:**
- Modify: `src/lib/content-model.ts`
- Modify: `tests/content-model.test.ts`
- Modify: fixtures in `tests/question-feed.test.ts`, `tests/question-collections.test.ts`, and `tests/question-analysis-prompt.test.ts` as needed for the required fields

**Interfaces:**
- Produces `Perspective = 'candidate' | 'interviewer' | 'manager'`.
- Produces `QualityTier = 'core' | 'extended'`.
- Produces required `QuestionRecord.perspective`, `QuestionRecord.perspectiveReview: 'inferred' | 'reviewed'`, and `QuestionRecord.qualityTier`.
- Produces optional `weakAnswer` and optional four-field `anchors` (`notPassing`, `passing`, `excellent`, `exceptional`).
- `qualityTier` defaults to `extended` for parsing legacy records; the migration writes it explicitly to frontmatter.

- [x] Write failing tests for valid field enums, legacy default tier, unknown enum rejection, and core required content.
- [x] Run `npm run test:unit -- tests/content-model.test.ts` and confirm the new assertions fail before implementation.
- [x] Implement the Zod model and core-only checks: 3–4 signals, 2–3 followUps, non-empty weakAnswer, four non-empty anchors, and `perspectiveReview: reviewed`.
- [x] Run `npm run test:unit -- tests/content-model.test.ts` and confirm the tests pass.

### Task 2: Infer perspective consistently across bilingual pairs

**Files:**
- Create: `src/lib/question-perspective.ts`
- Create: `tests/question-perspective.test.ts`
- Create: `scripts/migrate-question-quality.mjs`
- Create: `docs/reviews/2026-10-19-question-perspective-migration.json`
- Modify: frontmatter in `src/content/questions/zh-CN/*.md` and `src/content/questions/en/*.md`

**Interfaces:**
- `inferQuestionPerspective(pair: readonly QuestionRecord[]): { perspective: Perspective; confidence: 'high' | 'low'; reasons: string[] }` returns one assignment for the bilingual pair.
- The migration reads both locales for each question ID, applies the same inferred value to each missing `perspective`, sets `perspectiveReview: inferred` and `qualityTier: extended`, and records evidence and confidence in the report.
- Migration mode fills missing fields only. It preserves manually supplied values, refuses inconsistent existing bilingual values, and supports `--check` (report changes without writing) and `--write`.

- [ ] Write failing inference tests for candidate narrative prompts, interviewer design prompts, manager review prompts, mixed/ambiguous prompts, and bilingual input ordering.
- [ ] Run `npm run test:unit -- tests/question-perspective.test.ts` and confirm inference cases fail before implementation.
- [ ] Implement pair-level inference using explicit semantic evidence from question text, `scenarios`, and existing `roles`/`careerTracks`; do not infer candidate solely from second-person grammar.
- [ ] Write failing migration tests proving `--check` is read-only, `--write` fills both locales identically, and reruns preserve manual edits.
- [ ] Implement the YAML-frontmatter migration and JSON report with low-confidence IDs and reasons.
- [ ] Run migration in `--check` mode, review its report, then apply `--write` to the 2,668 existing records.
- [ ] Run the migration in `--check` mode again and confirm it reports no pending changes.

### Task 3: Enforce core quality and report extended issues without breaking the corpus

**Files:**
- Modify: `scripts/check-content.mjs`
- Modify: `src/lib/content-model.ts`
- Modify: `tests/content-model.test.ts`
- Create/modify: tests for content-check behavior under `tests/`
- Create: `docs/reviews/2026-10-19-question-quality-baseline.md`

**Interfaces:**
- Astro collection parsing and `check:content` consume the same `questionSchema` and bilingual validation helpers.
- Core paired records must match on `perspective`, `perspectiveReview`, and `qualityTier`; core English/Chinese signals, followUps, and anchors must have equal counts.
- Extended records emit warnings for detectable editorial defects including no followUps, followUps beginning with `【`, suspicious template-like intent, and short intent; warnings do not fail the command.
- Schema shape, invalid enum, duplicate/missing bilingual record, invalid source, and broken relationship remain hard errors.

- [ ] Add checker tests showing an extended editorial defect is reported as a warning with exit status 0, while invalid perspective or malformed fields fail.
- [ ] Add pair tests for tier/perspective mismatch and core count mismatch across locales.
- [ ] Run the focused checker tests and observe failures before implementation.
- [ ] Reuse the shared question model and bilingual helpers from `content-model.ts` in `check-content.mjs`; keep existing taxonomy, source-ledger, collection, and applicability validation.
- [ ] Generate a baseline report with exact warning counts and a small sample of IDs per warning type.
- [ ] Run `npm run check:content`, `npm run check`, `npm run test:unit`, and `npm run build`.

**Phase A review gate:** Open a standalone PR with schema, migration, and report. Do not begin content rewriting in this PR.

## Phase B — Bilingual Content Style Guide (PR 2)

### Task 4: Document the editorial contract in Chinese and English

**Files:**
- Create: `docs/content-style-guide.md`
- Modify: `README.md` only if a concise link is useful and matches the existing README structure

- [ ] Draft paired Chinese/English guidance for intent, signals, followUps, weakAnswer, anchors, perspective, tag discipline, and translation parity.
- [ ] Use verified repository examples and short excerpts; include three positive and three negative examples without introducing answer templates.
- [ ] Check all referenced fields and count rules against the current Zod schema and Phase A checker.
- [ ] Run `git diff --check` and review the bilingual document side by side.

**Phase B review gate:** Open a documentation-only PR.

## Phase C — Core Candidate List (PR 3; user review required before Phase D)

### Task 5: Select and explain 100–150 candidate question IDs

**Files:**
- Create: `docs/core-question-candidates.md`
- Read: `src/lib/question-collections.ts`, `src/data/question-specific-analyses.json`, `src/lib/taxonomy.ts`, and paired question records

- [ ] Build a candidate pool from the 31 IDs in four existing question sets, the 12 IDs with reviewed bilingual analyses, and other scenario questions only where their evidence potential is concrete.
- [ ] Select 100–150 IDs across all eight domains, with 30–50 assigned to each perspective; confirm every selected ID has one published Chinese and one English record.
- [ ] For each candidate, record ID, proposed perspective, domain, selection rationale, current bilingual/content risks, and whether that perspective is inferred or manually reviewed.
- [ ] Review perspective assignment and semantic question wording against both locales; remove candidates whose primary perspective cannot be established without changing the prompt.
- [ ] Run a small script or checker to verify list uniqueness, counts, domain coverage, perspective balance, and paired IDs.
- [ ] Open a standalone candidate-list PR; make no question content or tier changes.
- [ ] Stop and wait for the user's review of the candidate list. Do not start Phase D until approved.

## Phase D — Rewrite Approved Core Questions (one PR per batch)

### Task 6: Rewrite one approved batch of 20–30 question IDs at a time

**Files:**
- Modify: paired Markdown files for IDs in the user-approved `docs/core-question-candidates.md`
- Modify: migration review metadata only for perspective assignments the user reviewed

- [ ] Take the next 20–30 uncompleted IDs from the approved list; include candidates from each perspective as needed to retain the approved final balance.
- [ ] Write a failing/fixture-level content check for each requested core invariant before the first content batch is marked core.
- [ ] Rewrite the Chinese and English records together: one intent, 3–4 observable signals, 2–3 question-specific followUps, one weakAnswer, four question-specific anchors, and no invented sourcing.
- [ ] Keep IDs and URLs stable. Repair only verified merged follow-up residue, mismatched follow-ups, or obvious naming drift; do not alter canonical identity.
- [ ] Set `qualityTier: core` and `perspectiveReview: reviewed` only after bilingual editorial review.
- [ ] Run `npm run check:content`, `npm run test:unit`, `npm run check`, and `npm run build` for each batch.
- [ ] Open a separate PR listing changed IDs and perspectives, with concise before/after reasoning for 2–3 questions.
- [ ] Repeat until all approved candidates are complete; verify final count 100–150 and 30–50 per perspective.

## Phase E — Home, Scenarios, and Question Reading Paths (1–2 PRs)

### Task 7: Put three equal audience entrances and core-first sets on discovery pages

**Files:**
- Modify: `src/views/HomeView.astro` or current home view source
- Modify: `src/views/FacetView.astro` and/or existing scenario view
- Modify: `src/lib/question-collections.ts` only where links or core filtering require it
- Modify: relevant unit and E2E tests under `tests/`

- [ ] Add three first-level home entrances for candidate preparation, interviewer use, and manager evaluation/team leadership; each reaches its first core question within two clicks.
- [ ] Place relevant curated sets first on scenario pages, link promotion to `promotion-dialogue`, and keep extended questions available behind a clear “not reviewed question by question” label.
- [ ] Add tests asserting each entrance resolves to a localized core question set and that no extended question appears in the core-first section.
- [ ] Run focused unit/E2E tests and inspect 390px and 768px screenshots in Chinese and English.

### Task 8: Adapt question detail emphasis and continuation links by perspective

**Files:**
- Modify: `src/views/QuestionView.astro`
- Modify: `src/lib/question-feed.ts` and existing display helpers only if needed to serialize the new fields
- Modify: question-view and E2E tests under `tests/`

- [ ] Candidate view emphasizes intent, signals, and self-assessment anchors.
- [ ] Interviewer view emphasizes followUps, weakAnswer, and evidence anchors.
- [ ] Manager view emphasizes evidence gathering and feedback, reusing the same question content.
- [ ] Show extended review status as one concise line and remove placeholder claims that suggest question-specific review.
- [ ] Ensure search-entry detail pages show at least three meaningful next steps: similar core questions, containing curated sets, and next question.
- [ ] Add bilingual `hreflang` links while preserving stable URL paths and current batch IDs.
- [ ] Run question-detail unit/E2E tests and inspect 390px and 768px screenshots in Chinese and English.

## Final Verification and Delivery

- [ ] Run `npm run check:content`, `npm run check`, `npm run test:unit`, `npm run build`, and affected E2E coverage.
- [ ] Verify 100–150 bilingual core IDs, 30–50 in each perspective, all core fields and count parity, and no extended question removed.
- [ ] Verify all three home entrances, search-entry next steps, localized `hreflang`, and mobile layouts in a real browser.
- [ ] Open phase PRs only; do not merge or push directly to `main`.
- [ ] Report each completed phase in Chinese with PR link, change summary, remaining issues, and decisions needed.

## Self-Review

- Spec coverage: tasks 1–3 cover the data contract, migration confidence, strict core checks, bilingual parity, and extended warnings; task 4 covers editorial standards; task 5 covers the candidate review gate; tasks 6–8 cover approved content and reader experience.
- Gate integrity: Task 5 explicitly stops before content edits; Task 6 consumes only the user-approved list.
- Data risk: migration fills only missing fields, operates at bilingual-ID level, reports low confidence, and is checked for idempotence before writing.
- Verification coverage: schema edge cases, pair consistency, checker warning/error behavior, content tests, build, E2E, locale parity, stable routes, and mobile widths are assigned to owning tasks.
- Delivery boundaries: Phase A, B, C, each content batch, and presentation work have independent PR boundaries; no task merges a PR or updates `main`.

