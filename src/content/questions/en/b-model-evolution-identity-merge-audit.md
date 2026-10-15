---
questionId: b-model-evolution-identity-merge-audit
kind: question
status: published
locale: en
title: How should history and permissions behave after two customer entities are merged?
question: >-
  Duplicate registration created two customer entities later confirmed to be the same company. Reports should unify
  them, while contracts, approvals, permissions, and personal actions must retain original responsibility. How
  would you model the merge?
intent: Assess whether you distinguish entity resolution, business keys, historical facts, and permission inheritance.
signals:
  - Determine whether this is an alias, merge, or false match, preserving evidence.
  - Specify which historical facts are linked for display and which may be recomputed or moved.
  - Define inheritance boundaries for contracts, permissions, approvals, and audit logs.
primaryCapability: domain-modeling.model-evolution
topics:
  - data-modeling
  - operations
roles:
  - data
  - backend
  - product
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
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
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15
---
