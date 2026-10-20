# Core question content batch 5 review

## Scope

This batch completes the final 20 IDs in the approved 100-question list. Each Chinese and English record now has a focused intent, four observable signals, two question-specific follow-ups, a weak-answer boundary, and four question-specific evidence anchors. IDs, URLs, question wording, source provenance, and primary capability assignments remain stable.

## Primary audience and respondent perspective

| Approved primary audience | IDs | Respondent perspective |
| --- | --- | --- |
| Candidate preparation | `bulk-g-recovery-after-public-mistake`, `bulk-g-learning-from-rejected-promotion`, `wave18-attrib-011`, `bulk1000-h-098-v1`, `h-attribution-ai-assisted-work-disclosure`, `h-attribution-credit-dispute`, `h-attribution-lead-or-manage` | Candidate. These prompts ask candidates to explain reflection, contribution, credit, and career choices. |
| Interviewer evidence entry | `g-structured-reflection-improvement-executed`, `g-structured-reflection-project-failure`, `bulk1000-g-085-v1`, `h-attribution-team-vs-personal`, `bulk1000-h-093-v1`, `h-attribution-without-you`, `h-ownership-proudest-work` | Candidate. These are interview prompts answered by the person describing their work and learning. |
| Manager evaluation/team leadership | `exp1500-f-038`, `f-delegation-succession-be-replaceable`, `f-delegation-succession-decision-rehearsal`, `f-delegation-succession-decision-rights`, `f-delegation-succession-frontline-leaver`, `f-delegation-succession-internal-external-fairness` | Manager. These ask leaders to make or evaluate delegation, continuity, and succession decisions. |

The approved primary audience describes the site entry path; respondent perspective describes who answers a question. The interviewer evidence set intentionally contains candidate-answer prompts.

## Track and applicability review

Tracks and responsibility scopes were narrowed to at most two values per core question based on the decision and evidence requested. Each affected applicability fingerprint was reconciled against the previous human-reviewed profile and current role/track suggestions. Only the prior reviewed intersection was retained; no role/stage combinations were added. Coverage remains 1,334 reviewed, 0 pending, and 0 empty profiles.

## Editorial examples

- **AI-assisted work disclosure:** distinguishes tool output, personal decisions, independent verification, data boundaries, and responsibility for the adopted result.
- **Credit dispute:** asks for evidence-based attribution and a fair response to disagreement rather than a generic claim about teamwork.
- **Learning from failure:** separates the decision made with available information from outcome hindsight, then requires a verifiable change in later work.
- **Succession fairness:** compares readiness, vacancy risk, and capability needs while giving internal candidates and interim owners concrete support.

## Validation

- `npm run check:content` — 2,668 localized records; 1,334 applicability entries reviewed, 0 pending.
- `npm run check:stage-coverage` — 0 empty reviewed profiles.
- `npm run check:core-candidates` — 100 unique bilingual candidates across eight domains; audience split 35/35/30.
- `npm run test:unit` — 37 files, 201 tests passed.
- `npm run check` — 0 errors, 0 warnings, 4 existing hints.
- `npm run build` — 3,470 pages and 15,873 indexed words.
- `git diff --check`
