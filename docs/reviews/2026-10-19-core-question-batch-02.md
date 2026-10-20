# Core question content batch 2 review

## Scope

This batch advances the next 20 approved IDs: seven candidate-preparation questions, seven interviewer-evidence entry questions, and six manager-evaluation questions. All existing IDs, URLs, questions, source records, and primary capabilities remain intact. The Chinese and English records now carry reviewed respondent perspectives, four question-specific evidence anchors, question-specific weak answers, three to four observable signals, and two focused follow-ups.

Respondent perspective was reviewed separately from the approved primary site audience:

- Candidate preparation: candidate answers the prompts.
- Interviewer evidence: candidate answers prompts intended to help interviewers gather evidence.
- Manager evaluation: manager answers the prompts.

No source attributions were added. Existing sources were retained.

## IDs and track decisions

| Approved primary audience | IDs | Reviewed respondent | Career-track rationale |
| --- | --- | --- | --- |
| Candidate preparation | `b-commercial-rules-bundle-discount-allocation`, `b-commercial-rules-cancellation-fee`, `b-business-context-marketplace-take-rate-change`, `b-business-context-price-increase-churn-risk`, `b-business-context-unit-economics-service-mix`, `bulk-c-metrics-02`, `bulk-c-product-02` | candidate | Transaction and pricing-rule analysis is useful to individual contributors and team managers. Marketplace policy, service mix, and enterprise customization require portfolio trade-offs, so those are scoped to team managers and senior managers. The broadest custom-feature scope was reduced to team and multiple-team responsibility. |
| Interviewer evidence | `b-business-context-replacement-paths`, `b-business-context-revenue-recognition-vs-user-value`, `b-business-context-service-tier-contribution`, `c-prioritization-top-three-stop-two`, `c-metrics-causality-competitor-benchmark`, `c-product-judgment-industry-leading-claim`, `bulk-c-metrics-03` | candidate | These prompts ask respondents to demonstrate analysis, prioritization, or product judgment. Bounded evidence tasks remain useful for individual contributors and team managers; portfolio-level service contribution is scoped to team managers and senior managers. |
| Manager evaluation/team leadership | `f-manager-of-managers-conflict-between-leads`, `f-manager-of-managers-cost-cutting-restructure`, `f-manager-of-managers-decision-review`, `f-manager-of-managers-employee-backlash`, `f-manager-of-managers-filtered-reporting`, `f-manager-of-managers-goal-cascade-distortion` | manager | The prompts require responsibility for multiple leads, organization-wide decisions, or goal systems; they are scoped to team managers and senior managers. |

Career-track edits changed applicability fingerprints. Each affected applicability profile was re-reviewed against the current role and track tags. The review retained only the intersection with previously approved role/stage combinations and did not introduce new roles or stages. Coverage remains 1,334 reviewed, 0 pending, and 0 empty reviewed profiles.

## Editorial examples

- **Marketplace take rate:** the revised evidence connects supplier response, buyer conversion, delayed network effects, confounders, and explicit expand/pause/reverse thresholds. A short-term revenue increase alone no longer passes.
- **Top three / stop two:** the revised rubric requires one shared goal and consistent criteria, opportunity costs, real capacity, and disconfirming evidence. A list of preferences alone does not pass.
- **Filtered reporting:** the revised rubric checks whether the manager's incentives and reactions suppress bad news, adds independent signals, protects good-faith escalation, and keeps accountability for repair.

## Validation

- `npm run check:content`
- `npm run check:stage-coverage`
- `npm run check:core-candidates`
- `npm run test:unit`
- `npm run check`
- `npm run build`
- `git diff --check`
