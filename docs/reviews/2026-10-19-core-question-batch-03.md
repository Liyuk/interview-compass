# Core question content batch 3 review

## Scope

This batch advances the next 20 approved bilingual IDs: seven candidate-preparation questions, seven interviewer-evidence entry questions, and six manager-evaluation questions. Existing IDs, URLs, question wording, sources, and primary capabilities remain stable. Both locales now have 3–4 topic-specific signals, two focused follow-ups, a weak-answer boundary, and four distinct evidence anchors. The respondent perspective is reviewed independently from the primary site audience.

## IDs and responsibility decisions

| Approved primary audience | IDs | Respondent | Track/scope decision |
| --- | --- | --- | --- |
| Candidate preparation | `wave17-delivery-010`, `d-capacity-planning-incident-vs-roadmap-tradeoff`, `d-capacity-planning-interrupt-load-budget`, `d-capacity-resources-and-scope`, `bulk-e-cross-team-decision-deadlock`, `e-communication-make-value-visible`, `e-communication-rebuild-trust-after-scrapping` | candidate | Bounded execution, communication, and personal decision examples remain relevant to individual contributors and team managers. Capacity policy and cross-team deadlocks are scoped to team and senior managers because they require resource or multi-team decision authority. |
| Interviewer evidence entry | `b-business-context-marketplace-liquidity`, `bulk-growth-12`, `bulk1000-d-052-v1`, `bulk1000-d-057-v1`, `d-capacity-headcount-for-ambiguous-problem`, `e-influence-break-constraints`, `bulk1000-e-070-v1` | candidate | Bounded analysis and execution prompts include individual contributors and team managers. Marketplace liquidity, organizational status/risk controls, and vendor obligations use team and senior manager tracks where decisions span portfolios or functions. The ambiguous headcount prompt is limited to team and multiple-team responsibility. |
| Manager evaluation/team leadership | `f-team-design-cliques`, `f-team-design-diverse-and-multilingual`, `f-team-design-expert-load-map`, `f-team-design-org-matches-architecture`, `f-team-design-outsider-leader-onboarding`, `f-team-design-product-ops-research-loop` | manager | Team design, information flow, and cross-functional interfaces require team or multi-team leadership responsibility; scopes and career tracks were reduced to reflect that responsibility. |

Nineteen modified applicability records were reconciled to the intersection of their previous human-reviewed role/stage combinations and the current role/track tags. `d-capacity-resources-and-scope` is a documented exception: its existing regression test and prior review establish it as role-neutral across engineering stages, so its reviewed role/stage combinations were retained while the fingerprint was refreshed. No new role or stage combinations were introduced. Coverage remains 1,334 reviewed, 0 pending, and 0 empty reviewed profiles.

## Editorial examples

- **End-to-end account opening:** makes successful customer onboarding—not component delivery—the acceptance outcome, with explicit integration ownership and failure-path validation.
- **Interrupt capacity:** replaces a universal reserve percentage with demand segmentation, removable repeat work, service-level choices, and recalibration triggers.
- **Green status before a migration failure:** separates verified facts, forecasts, and assumptions, adding decision deadlines and evidence gates before release.
- **Team cliques:** replaces impression-based labeling with observable effects on information, opportunities, and decisions, while protecting privacy and holding harmful behavior accountable.

## Validation

- `npm run check:content`
- `npm run check:stage-coverage`
- `npm run check:core-candidates`
- `npm run test:unit`
- `npm run check`
- `npm run build`
- `git diff --check`
