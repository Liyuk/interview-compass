# Interview Compass preparation and training experience Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add curated interview paths, a questioning framework, browser-based practice with an external-AI handoff, and a companion Codex skill that share one published question model.

**Architecture:** Keep Astro static on GitHub Pages. Add locale-specific public question JSON, a shared prompt builder, a one-route practice flow with local-only storage, editorial collection metadata referencing canonical question IDs, and a bilingual framework page. Package the complementary answer-analysis workflow as a discoverable skill using the same JSON feed and evidence rules.

**Tech Stack:** Astro 7, TypeScript, Pagefind, Vitest, Playwright, Node's built-in `fetch`.

**Spec:** `docs/superpowers/specs/2026-10-15-interview-preparation-experience.md`

## Global Constraints

- Keep the site static and deployable under `/interview-compass/`; do not add a backend, account system, or AI provider API.
- Keep all new routes and interface copy bilingual.
- Keep the existing six navigation destinations and add only 提问框架 / Questioning framework to the global navigation.
- Keep canonical question records single-source; collections store question ID references.
- Store practice drafts and optional AI feedback in local storage only, with visible clear controls.
- Do not add model answers, personality diagnoses, automated overall scores, or hiring recommendations.
- Treat the four score anchors as heuristic references, not validated measurements.

## Review Focus

- Malformed/missing question ID in practice query: show a useful picker/empty state instead of throwing.
- Unicode and long answer/context text: preserve exact text in prompt and local draft without truncation or HTML injection.
- localStorage unavailable or malformed: allow in-memory practice and present a recoverable message.
- Clipboard denied: provide a selectable prompt field and truthful copy status.
- Missing/unpaired collection question ID or locale: fail content validation before deployment.

## File Map

- `src/lib/practice-prompt.ts`: pure prompt serialization shared by practice UI tests.
- `src/lib/question-feed.ts`: pure compact-index and public-question projections shared by endpoint and validation tests.
- `src/pages/data/questions/[locale].json.ts`: compact public static question index for one locale.
- `src/pages/data/question/[locale]/[id].json.ts`: on-demand static JSON for one question and its evaluation guide.
- `src/views/PracticeView.astro` and `src/pages/practice/index.astro`, `src/pages/en/practice/index.astro`: practice page and translated routes.
- `src/lib/question-collections.ts` and `src/views/CollectionsView.astro`: curated metadata, validation, and collection listing/detail presentation.
- `src/pages/collections/index.astro`, `src/pages/collections/[id].astro` and English counterparts: collection entry routes.
- `src/views/QuestioningFrameworkView.astro` and `src/pages/framework.astro`, `src/pages/en/framework.astro`: methodology page.
- `src/lib/routes.ts`, `src/layouts/SiteLayout.astro`, `src/views/HomeView.astro`, `src/views/QuestionsView.astro`, `src/views/QuestionView.astro`: navigation and discoverability integration.
- `src/styles/global.css`: responsive styles using current design tokens.
- `tests/practice-prompt.test.ts`, `tests/question-feed.test.ts`, `tests/question-collections.test.ts`, `tests/interview-compass-skill.test.ts`, `tests/e2e/practice.spec.ts`, `tests/e2e/collections-framework.spec.ts`: behavior and route verification.
- `skills/interview-compass-coach/SKILL.md`, `skills/interview-compass-coach/references/evidence-rubric.md`, `skills/interview-compass-coach/scripts/get-question.mjs`: companion skill and question-feed resolver.
- `docs/superpowers/specs/2026-10-15-interview-preparation-experience.md`: design and research record.
- `.github/workflows/deploy.yml`: preserve main-only deployment trigger already changed in this worktree.

### Task 1: Shared prompt generation and question feed

**Files:**
- Create: `src/lib/practice-prompt.ts`
- Create: `src/lib/question-feed.ts`
- Create: `src/pages/data/questions/[locale].json.ts`
- Create: `src/pages/data/question/[locale]/[id].json.ts`
- Test: `tests/practice-prompt.test.ts`
- Test: `tests/question-feed.test.ts`

**Interfaces:**
- `buildPracticePrompt(input: { locale: Locale; question: QuestionRecord; evaluation: ReturnType<typeof questionEvaluation>; answer: string; role?: string; stage?: string; goal?: string }): string`
- `buildQuestionIndex(records, locale)` returns compact search entries; `buildPublicQuestion(record)` returns one public record plus `questionEvaluation`.
- Neither projection includes local practice state.

- [x] **Step 1: Write failing tests** for prompt structure, evidence-vs-hypothesis rules, empty optional fields, Unicode preservation, compact index locale/count parity, and single-record evaluation output.
- [x] **Step 2: Run focused tests** with `npm run test:unit -- tests/practice-prompt.test.ts tests/question-feed.test.ts`; confirm failure before implementation.
- [x] **Step 3: Implement the pure prompt builder, compact locale indexes, and per-question endpoints from `loadAllRecords`.
- [x] **Step 4: Run focused tests and build**; verify each index has exactly 1,500 unique IDs and each detail endpoint has the right locale and question-specific score anchors.
- [ ] **Step 5: Commit** as `feat: publish interview practice question feed`.

### Task 2: Curated collections and question-library entry modes

**Files:**
- Create: `src/lib/question-collections.ts`
- Create: collection list/detail views and bilingual collection routes from the File Map.
- Modify: `src/views/HomeView.astro`, `src/views/QuestionsView.astro`, `src/lib/routes.ts`, `src/layouts/SiteLayout.astro`, `src/styles/global.css`.
- Test: `tests/question-collections.test.ts`, `tests/e2e/collections-framework.spec.ts`.

**Interfaces:**
- Each `QuestionCollection` contains stable `id`, bilingual `title`, `purpose`, `audience`, and ordered entries `{ questionId, rationale }`.
- `validateQuestionCollections(collections, records)` rejects duplicate IDs inside a set, missing question IDs, missing locale pairs, and empty rationales.

- [ ] **Step 1: Write failing validation and browser tests** for valid localized sets, missing references, duplicate entries, collections/full-library links, ordering, and question detail navigation.
- [ ] **Step 2: Run focused tests** and confirm they fail on missing collection support.
- [ ] **Step 3: Select existing questions by editorial criteria** and add the five initial sets; keep reverse due-diligence prompts as a separately labeled non-scored resource.
- [ ] **Step 4: Implement localized collection routes and the two-mode library entry**; keep search/filter behavior intact.
- [ ] **Step 5: Run unit tests, content checks, and targeted E2E tests**; verify every collection ID resolves in both locales.
- [ ] **Step 6: Commit** as `feat: add curated interview question paths`.

### Task 3: Questioning framework and bidirectional interview prompts

**Files:**
- Create: `src/views/QuestioningFrameworkView.astro`
- Create: framework routes from the File Map.
- Modify: `src/lib/routes.ts`, `src/layouts/SiteLayout.astro`, `src/styles/global.css`, and Handbook cross-links.
- Test: `tests/e2e/collections-framework.spec.ts`.

**Interfaces:**
- Framework sections are explicitly separated into interviewer evidence gathering, candidate answer organization, and candidate due diligence for external hiring and promotion.
- Candidate due-diligence questions are not scored using the interviewee rubric.

- [ ] **Step 1: Write route and content-assertion tests** for bilingual nav, breadcrumb, all three paths, and evidence caveats.
- [ ] **Step 2: Run targeted tests and confirm expected failure**.
- [ ] **Step 3: Add localized framework content** grounded in the approved spec and cite source links without claiming measurement validation.
- [ ] **Step 4: Implement responsive, accessible page layout** consistent with Radix theme and existing typography/icons.
- [ ] **Step 5: Run E2E and visual browser checks** at desktop and mobile widths; inspect console and links.
- [ ] **Step 6: Commit** as `feat: explain interview questioning framework`.

### Task 4: Browser practice and local-only state

**Files:**
- Create: practice routes and view from the File Map.
- Modify: `src/views/QuestionView.astro`, `src/styles/global.css`.
- Test: `tests/e2e/practice.spec.ts`.

**Interfaces:**
- Practice query uses `?question=<stable-question-id>`; absence or invalid value leaves a searchable selector.
- Local storage keys are namespaced by locale and question ID; actions can clear the current answer and optional feedback.
- Copy action serializes the selected question, framework, optional role/stage/goal, and answer with `buildPracticePrompt`.

- [ ] **Step 1: Write E2E tests** for launch from question detail, selection, answer/context persistence, local clearing, prompt output, clipboard denial fallback, and no outbound answer request.
- [ ] **Step 2: Run targeted tests to establish failure**.
- [ ] **Step 3: Implement static practice routes and accessible form controls**; handle storage/clipboard errors without blocking in-memory use.
- [ ] **Step 4: Add explicit external-AI privacy notice and paste-back feedback field**; persist only in local storage and offer clear/export actions.
- [ ] **Step 5: Run E2E tests** and inspect the practice flow at narrow and wide widths.
- [ ] **Step 6: Commit** as `feat: add local interview practice with AI handoff`.

### Task 5: Companion Codex skill

**Files:**
- Create: `skills/interview-compass-coach/SKILL.md`
- Create: `skills/interview-compass-coach/references/evidence-rubric.md`
- Create: `skills/interview-compass-coach/scripts/get-question.mjs`
- Test: `tests/interview-compass-skill.test.ts` or a focused Node validation script if the skill package is not suitable for Vitest.

**Interfaces:**
- Resolver accepts a question ID and locale, fetches the public site JSON feed, and prints exactly one matching question; invalid IDs return nonzero with a useful message.
- Skill supports answer-evaluation and candidate reverse-question planning, uses the evidence rubric, and does not transmit data beyond the requested fetch of public question data.

- [ ] **Step 1: Write resolver tests** for both locales, missing IDs, bad locale, network failures, and JSON contract drift using a local test server.
- [ ] **Step 2: Run focused tests to confirm failure**.
- [ ] **Step 3: Implement resolver and concise self-contained skill instructions** with the two modes and no unsupported inference.
- [ ] **Step 4: Validate skill frontmatter, links, script behavior, and discoverability metadata**; install a local copy only to the configured Codex skill directory, preserving the repository source as canonical.
- [ ] **Step 5: Run skill package checks** and confirm the installed and repository copies match.
- [ ] **Step 6: Commit** as `feat: add Interview Compass coaching skill`.

### Task 6: Full acceptance and pull request

**Files:**
- Modify: `README.md`, `docs/planning/2026-10-15-question-bank-mece-1500.md`, `.github/workflows/deploy.yml` as needed.
- Verify: all generated pages, JSON feeds, question pairs, collections, skill package, and existing 1,500-question audit.

- [ ] **Step 1: Run `npm run ci`** and record full output.
- [ ] **Step 2: Build and inspect `dist`** for the two framework locales, two practice locales, collection routes, and both JSON feeds under the Pages base.
- [ ] **Step 3: Run a full git diff review** for accidental content deletion, duplicated question data, stale project references, answer leaks, and deployment-branch behavior.
- [ ] **Step 4: Commit remaining docs/content with clear history**; do not rewrite existing shared commits.
- [ ] **Step 5: Push the branch and open a PR against `main`**; attach the PR to this chat.

