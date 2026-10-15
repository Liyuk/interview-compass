---
questionId: wave16-ai-011
kind: question
status: published
locale: en
title: How do you constrain impact when a model can generate SQL?
question: A data assistant can generate read-only SQL, but queries may scan the entire warehouse, join sensitive tables, or incur high costs. How would you design execution sandboxing and approval?
intent: Assesses tool boundaries, query governance, and auditable authorization.
signals:
  - Parse and validate plans, permissions, and resource limits before execution.
  - Assess read-only separately from low risk.
  - Record generation, rewriting, approval, and execution.
primaryCapability: professional.ai-engineering
topics:
  - ai-engineering
  - security
roles:
  - ai-engineer
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
  - Does user permission to query imply access to every field?
  - How do you verify a backend query stopped after timeout cancellation?
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 C
---
