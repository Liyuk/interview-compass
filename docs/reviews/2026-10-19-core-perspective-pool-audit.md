# Core question perspective pool audit

## Finding

The current corpus cannot support a trustworthy 100–150 question candidate list with 30–50 questions assigned to each of three mutually exclusive perspectives without changing the meaning of `perspective` or adding content.

The Phase A migration reports 1,334 bilingual question IDs: 1,295 candidate, 13 interviewer, and 26 manager. It also marks 1,261 assignments low-confidence because the prompt does not explicitly identify who should answer it. Those figures are useful as a baseline, not as a reviewed editorial classification.

The mismatch is semantic. A candidate-facing prompt can be used by an interviewer to collect evidence, and a manager can use the same prompt to assess a team member. The approved plan describes the perspectives both as who answers a prompt and as equal user entrances on the site. Those are different relationships, but the current schema stores only one exclusive `perspective` value.

The existing `interviewer-evidence` collection does not resolve this: it includes candidate-facing questions intended to help interviewers gather evidence. Treating every question an interviewer can use as interviewer-perspective would misclassify its respondent. Treating only prompts that ask interviewers to make a decision leaves 13 current records, below the approved minimum of 30.

The concrete source pool confirms the distinction: 31 unique IDs across four curated sets plus 12 reviewed-analysis IDs, with one overlap. In the `interviewer-evidence` set, six of eight entries currently have candidate respondent perspective. See `docs/reviews/2026-10-19-core-question-source-pool.md` for the IDs and counts.

## Candidate-list proposal

The Phase C draft now lists 100 unique IDs under three primary site audiences (candidate 35, interviewer 35, manager 30) and keeps the migration's respondent perspective visible per row. All 100 still have inferred, unreviewed respondent metadata. The draft does not change question content or persist audience tags.

This separates the equal audience entrances from the current answerer classification for the purpose of review. If approved, a following schema/navigation PR should store site audiences separately from respondent perspective and validate audience metadata before any record is marked core. The same question may be linked from more than one reading path without duplicating its record.

## Review gate

Review `docs/core-question-candidates.md` and confirm that its 35/35/30 counts represent the three intended site audiences. Remove or reassign any ID whose bilingual wording, evidence potential, respondent perspective, or primary audience is inaccurate. Do not start Phase D until the list is approved.

No question text, perspective metadata, or quality tier was changed during this audit.
