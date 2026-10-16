---
questionId: b-data-model-policy-version-at-event-time
kind: question
status: published
locale: en
title: How can you reproduce the rule applied to a transaction after policies change?
question: >-
  A fee rule changes today, but a disputed order was created under the old rule. How would you preserve rule
  versions and transaction facts so finance can reproduce the original calculation?
intent: Assess whether you model rules with versions and effective time so historical outcomes remain reproducible.
signals:
  - Distinguish publication time, business effective time, and calculation time.
  - Link each transaction result to an explicit rule version and input snapshot.
  - Explain how retroactive corrections preserve old results and audit rationale.
primaryCapability: domain-modeling.data-model
topics:
  - data-modeling
  - databases
roles:
  - data
  - backend
  - product
  - engineering
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
  - If the old rule lacks complete input fields, where do you set the recomputation boundary?
  - How do you prevent a new rule deployment from changing in-flight historical transactions?
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 C
---
