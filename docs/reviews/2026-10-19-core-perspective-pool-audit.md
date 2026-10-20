# Core question perspective pool audit

## Finding

The current corpus cannot support a trustworthy 100–150 question candidate list with 30–50 questions assigned to each of three mutually exclusive perspectives without changing the meaning of `perspective` or adding content.

The Phase A migration reports 1,334 bilingual question IDs: 1,295 candidate, 13 interviewer, and 26 manager. It also marks 1,261 assignments low-confidence because the prompt does not explicitly identify who should answer it. Those figures are useful as a baseline, not as a reviewed editorial classification.

The mismatch is semantic. A candidate-facing prompt can be used by an interviewer to collect evidence, and a manager can use the same prompt to assess a team member. The approved plan describes the perspectives both as who answers a prompt and as equal user entrances on the site. Those are different relationships, but the current schema stores only one exclusive `perspective` value.

The existing `interviewer-evidence` collection does not resolve this: it includes candidate-facing questions intended to help interviewers gather evidence. Treating every question an interviewer can use as interviewer-perspective would misclassify its respondent. Treating only prompts that ask interviewers to make a decision leaves 13 current records, below the approved minimum of 30.

## Recommendation

Keep respondent perspective explicit and exclusive only where the question itself supports it. Model site audiences as a separate, multi-valued discovery relationship so the same question may serve candidate preparation, interviewer evidence gathering, and manager assessment without being duplicated or mislabeled.

For the core set, select by quality and usefulness from the existing corpus. Do not impose equal per-audience counts until an editorial review shows that each group has enough distinct questions. If 30–50 interviewer-answer prompts remain a firm requirement, authoring new prompts is a separate content expansion and should be planned explicitly.

## Decision needed before Task 5

Choose one direction before a candidate list is assembled:

1. Keep `perspective` as the person answering; remove the 30–50 minimum for each group and select only supported records.
2. Keep the equal minimum; expand the corpus with new interviewer- and manager-answer prompts in a separately reviewed content phase.
3. Separate respondent perspective from multi-valued site audiences, then define core counts against the intended relationship.

No question text, perspective metadata, or quality tier was changed during this audit.
