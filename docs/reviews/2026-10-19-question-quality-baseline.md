# Question quality baseline

Generated from the migrated question records on 2026-10-19. This report describes repository data; inferred perspectives are not editorial approvals.

## Inventory

- 1,334 published question IDs and 2,668 bilingual Markdown records.
- 0 core records; all 2,668 records are marked `extended`.
- All perspective assignments are marked `inferred` pending human review.
- The deterministic text rules assign 1,270 IDs to `candidate`, 38 to `interviewer`, and 26 to `manager`. Of these, 1,236 are low-confidence and default provisionally to candidate. The 98 high-confidence assignments are still inferred, not reviewed.

The distribution is not a reliable estimate of the library's eventual perspective balance. It shows where the current wording permits a rule to make a provisional guess. Core candidates need explicit human perspective review.

## Editorial warnings

Warnings are advisory for extended questions and do not fail `check:content`.

| Warning | Chinese | English | Total records |
| --- | ---: | ---: | ---: |
| No follow-up questions | 498 | 505 | 1,003 |
| Follow-up begins with merged-question marker `【` | 41 | 41 | 82 |
| Intent shorter than 20 Chinese characters / 12 English words | 121 | 405 | 526 |

The English short-intent count uses whitespace-delimited words, so it is a flag for review rather than a quality judgment. The warnings can overlap on one record.

Representative records include `a-ai-engineering-eval-set-design` (no follow-ups), `a-backend-read-replica-consistency-window` (merged-question residue), and `bulk-a-backend-idempotency-key-scope` (short Chinese intent).

## Validation behavior

- Schema errors, invalid taxonomy IDs, invalid perspective/tier values, broken bilingual pairs, invalid provenance, and core-contract violations fail validation.
- Extended editorial warnings are reported with representative IDs and do not block the build.
- The current corpus has no core questions, so the new strict core rules are covered by unit tests but are not exercised against published core content yet.
- `question-specific-analyses.json` remains a separate reviewed-analysis structure for 12 bilingual IDs; it has not been copied into the new `anchors` field.
