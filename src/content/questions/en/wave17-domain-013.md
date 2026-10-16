---
questionId: wave17-domain-013
kind: question
status: published
locale: en
title: A report number cannot be traced to its source events. How would you add lineage?
question: >-
  Several teams manually corrected an aggregate table, and later no one could explain why the number changed. How would
  you record sources, transformations, versions, owners, and recomputation evidence?
intent: >-
  Assesses whether the candidate makes metrics traceable through the data pipeline and governs manual corrections rather
  than hiding them in outputs.
signals:
  - Connects source events, transformation logic, runtime versions, and final metrics
  - Records rationale, approval, impact scope, and recomputation for corrections
primaryCapability: domain-modeling.data-model
topics:
  - data-modeling
  - databases
roles:
  - data
  - engineering
  - backend
  - ai-engineer
responsibilityScopes:
  - individual
  - team
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - hiring
  - promotion
formats:
  - system-design
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-17 B
---
