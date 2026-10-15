---
questionId: next-ai-018
kind: question
status: published
locale: en
title: Can model-result caching reuse an incorrect answer?
question: To reduce inference cost, the team caches answers by prompt text. User permissions, knowledge versions, and regional rules may differ. How would you define cache keys and invalidation?
intent: Assesses identifying output dependencies and preventing reuse across permission or version boundaries.
signals:
  - List permission, context, model, and policy dimensions affecting answers.
  - Define versioned keys, freshness windows, and active invalidation.
  - Prove through isolation tests that caching cannot cross permissions or return stale facts.
primaryCapability: professional.ai-engineering
topics:
  - ai-engineering
  - reliability
roles:
  - ai-engineer
  - backend
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
followUps:
  - Can semantically similar but differently worded prompts share results?
  - How should hit rate and correctness be monitored together?
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 A
---
