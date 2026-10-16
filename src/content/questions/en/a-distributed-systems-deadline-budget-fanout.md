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
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - hiring
  - operations-review
formats:
  - system-design
  - case
followUps:
  - Should retries use remaining budget or reset the timeout?
  - How do you handle downstream work that cannot be canceled?
  - >-
    A request passes through several services. No individual call times out, yet the total response often
    exceeds the user’s wait limit. How would you design deadline propagation?
  - If a downstream service cannot cancel work, how can the caller limit the damage?
  - Should an asynchronous task inherit the request deadline or use an independent completion deadline?
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 H
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
---
