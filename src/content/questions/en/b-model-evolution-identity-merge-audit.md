---
questionId: b-model-evolution-identity-merge-audit
kind: question
status: published
locale: en
title: How should history and permissions behave after two customer entities are merged?
question: >-
  Duplicate registration created two customer entities later confirmed to be the same company. Reports should
  unify them, while contracts, approvals, permissions, and personal actions must retain original
  responsibility. How would you model the merge?
intent: >-
  Assess whether you distinguish entity resolution, business keys, historical facts, and permission
  inheritance.
signals:
  - >-
    Verifies alias, genuine merge, or false match evidence, separating entities, source IDs, and
    candidates.
  - >-
    Decides link-only versus migration for contracts, approvals, permissions, and facts without automatic
    access inheritance.
  - >-
    Preserves IDs, decision owners, grounds, times, and merge-split events rather than irreversibly
    overwriting history.
  - Tests references, reporting, and access, including containment and recovery from mistaken merges.
primaryCapability: domain-modeling.model-evolution
topics:
  - data-modeling
  - operations
  - reliability
roles:
  - data
  - backend
  - product
  - engineering
  - frontend
  - mobile
  - ai-engineer
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - hiring
  - promotion
formats:
  - case
  - behavioral
followUps:
  - If the merge is later reversed, how do you undo it without rewriting history?
  - Which downstream metrics change because of entity resolution?
  - >-
    【How do you preserve traceability after merging two entities?】After an acquisition, two company accounts
    must merge into one entity, while audits, contracts, and historical activities still reference old IDs.
    How would you design mappings and queries?
  - How would you restore boundaries if the merged entity must later split?
  - Which references should dynamically resolve to the canonical entity?
  - If two profiles have conflicting identity fields, how would you decide whether to merge?
  - How could downstream systems migrate gradually without creating more duplicates during cutover?
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 A
relatedQuestions: []
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
