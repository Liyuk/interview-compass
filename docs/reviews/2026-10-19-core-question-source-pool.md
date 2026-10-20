# Core question source pool

This inventory records the concrete seed pool for Phase C. It does not mark any question as core or change question metadata.

## Existing curated sets

The four sets contain 33 entries and 31 unique bilingual question IDs. The interviewer collection is the clearest example of audience and answerer diverging: six of its eight entries currently have candidate perspective, while the collection is explicitly written for interviewer use.

| Set | Unique IDs | Current respondent perspective | IDs |
|---|---:|---|---|
| `general-interview` | 8 | Candidate: 8 | `a-coding-abstraction-defensive-edge-cases`, `b-business-context-user-task-chain`, `bulk-c-metrics-03`, `wave17-delivery-010`, `bulk-e-cross-team-decision-deadlock`, `c-prioritization-top-three-stop-two`, `bulk-g-recovery-after-public-mistake`, `h-attribution-team-vs-personal` |
| `technical-selected` | 9 | Candidate: 9 | `a-computer-science-process-vs-thread`, `a-computer-science-transaction-isolation`, `a-coding-abstraction-lru-cache-sketch`, `a-debugging-api-works-locally-frontend-disagrees`, `a-databases-read-replica-stale-read`, `a-system-design-cross-system-consistency`, `a-engineering-systems-schema-deploy-rollback`, `a-ai-engineering-model-change-release`, `a-monorepo-build-graph-invalidation` |
| `interviewer-evidence` | 8 | Interviewer: 2; candidate: 6 | `h-attribution-team-vs-personal`, `exp1500-f-022`, `wave16-people-043`, `f-hiring-lead-leveling-evidence`, `a-ai-engineering-resume-claim-verification`, `a-ai-engineering-eval-disagreement`, `bulk1000-h-093-v1`, `exp1500-f-028` |
| `promotion-dialogue` | 8 | Candidate: 8 | `bulk1000-f-081-v1`, `bulk-g-growth-goal-without-promotion-slot`, `bulk-g-growth-path-specialist-vs-manager`, `bulk-g-learning-from-rejected-promotion`, `exp1500-f-028`, `f-mom-calibration-evidence`, `f-growth-development-inconsistent-performance`, `wave18-attrib-011` |

`h-attribution-team-vs-personal` and `exp1500-f-028` are duplicates across sets, yielding 31 unique curated IDs. All have paired published Chinese and English records.

## Reviewed question analyses

There are 12 IDs with reviewed bilingual analyses (24 locale records). Eleven are currently assigned candidate perspective and one manager perspective. Only `c-prioritization-top-three-stop-two` overlaps the curated sets, so the combined seed pool has 42 unique IDs.

| Current respondent perspective | IDs |
|---|---|
| Candidate (11) | `c-metrics-causality-competitor-benchmark`, `c-prioritization-top-three-stop-two`, `c-product-judgment-industry-leading-claim`, `h-ownership-proudest-work`, `h-attribution-without-you`, `e-influence-break-constraints`, `g-learning-transfer-unfamiliar-domain`, `g-structured-reflection-project-failure`, `g-structured-reflection-improvement-executed`, `f-manager-of-managers-bypass-the-lead`, `a-ai-engineering-agent-duplicate-side-effect` |
| Manager (1) | `f-manager-of-managers-conflicting-local-optima` |

This seed pool is a starting point only. The final list still needs bilingual wording review, concrete evidence potential, domain balance, and a decision on whether its three counts represent respondents or site audiences.
