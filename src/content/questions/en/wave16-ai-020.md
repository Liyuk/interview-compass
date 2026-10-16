---
questionId: wave16-ai-020
kind: question
status: published
locale: en
title: How should old models be interpreted after label definitions change?
question: The business changes “churn” from 60 days without login to 30 days without payment, while historical training and models use the old definition. How would you manage versions and comparisons?
intent: Assesses label semantics, training-data versions, and model comparability.
signals:
  - Version label definitions as domain objects.
  - Record sample-generation time and definition version.
  - Separate same-definition model comparison from cross-definition business outcomes.
primaryCapability: professional.ai-engineering
topics:
  - ai-engineering
  - data-modeling
roles:
  - ai-engineer
  - engineering
  - backend
  - data
  - product
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
followUps:
  - How can old data be recomputed without erasing an old model’s basis?
  - Who can approve a label-definition change?
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 C
---
