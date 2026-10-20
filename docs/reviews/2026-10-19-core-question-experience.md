# Core question discovery and reading experience review

## Scope

This completes the discovery and question-reading work after the approved 100-question core list. The homepage presents three equal starting points: candidate preparation, interviewer evidence, and manager evaluation/team leadership. Each leads to a six-question bilingual core path, so a visitor can reach a reviewed question in one click. A collection validation rule prevents non-core questions from entering any path marked reviewed core.

Scenario pages show six relevant reviewed core questions first and offer the rest in a disclosure. Extended questions remain available below with a clear statement that they have not received question-by-question review. Promotion preparation also links to the separate promotion conversation set.

Core question detail pages adapt the first evidence guide to the respondent perspective: candidates see the four self-assessment anchors, interviewers see consistent follow-ups, and managers see observable evidence signals for feedback and responsibility decisions. Core pages without a dedicated objective analysis omit that unrelated “not reviewed” placeholder. Question pages provide reciprocal Chinese and English `hreflang` links. Core question pages also link to up to three related reviewed questions, curated sets that contain the question, and the active reading session's next question.

## Validation

- Core contract audit: 100 bilingual IDs; no field, count, perspective, or tag-limit issues.
- `npm run test:unit` — 37 files, 202 tests passed.
- `npm run check:content` — 2,668 localized records; 1,334 reviewed applicability entries, 0 pending.
- `npm run check:core-candidates` — 100 unique bilingual candidates across eight domains; audience split 35/35/30.
- `npm run check` — 0 errors, 0 warnings, 4 existing hints.
- `npm run build` — 3,476 pages; 16,030 indexed words.
- `npm run test:e2e` — desktop and mobile Chromium coverage; 251 passed, 1 existing test skipped.
- `git diff --check`

The tablet breakpoint also reduces the promotion path grid from three narrow columns to two columns between 761px and 1100px. This keeps the cards readable beside the persistent section navigation.
