---
questionId: a-distributed-systems-deadline-budget-fanout
kind: question
status: published
locale: en
title: How do you allocate deadlines when a request exceeds its budget across services?
question: >-
  A request calls four downstream services, each using a full two-second timeout. End-to-end tail latency is
  high, and clients continue work after the response is no longer useful. How would you propagate deadlines
  and budgets?
intent: >-
  Assess whether you allocate end-to-end time across queues, retries, and downstream calls while reducing
  wasted work.
signals:
  - Distinguish end-to-end deadlines from per-call timeouts.
  - Reserve budget for network, queueing, downstream work, and response.
  - Stop, degrade, or return partial results when budget is insufficient.
primaryCapability: professional.system-design
topics:
  - distributed-systems
  - reliability
  - system-design
  - computer-networks
roles:
  - backend
  - engineering
  - ai-engineer
  - frontend
  - mobile
  - data
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
  - operations-review
formats:
  - system-design
  - case
followUps:
  - "Should a retry use the remaining end-to-end budget or reset the timeout, and what failure could each choice cause?"
  - "If downstream work cannot be canceled, how can the caller stop wasting resources after the response is no longer useful?"
  - "When should an asynchronous task receive a separate completion deadline from the initiating request?"
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 H
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
