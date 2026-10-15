---
questionId: a-distributed-systems-clock-deadline-propagation
kind: question
status: published
locale: en
title: >-
  A request passes through several services. No individual call times out, yet the total response
  often exceeds the user’s wait limit. How would you design deadline propagation?
question: >-
  A request passes through several services. No individual call times out, yet the total response
  often exceeds the user’s wait limit. How would you design deadline propagation?
intent: >-
  Assess whether you decompose end-to-end time across services and handle cancellation, retries, and
  background work boundaries.
signals:
  - Distinguishes the client’s total deadline, per-hop timeout, and remaining downstream budget.
  - >-
    Explains how deadlines travel in request context and how downstream services stop work that no
    longer has value.
  - Prevents stacked retries, canceled work consuming resources, and repeated side effects.
primaryCapability: professional.system-design
topics:
  - distributed-systems
  - computer-networks
  - reliability
roles:
  - backend
  - engineering
  - ai-engineer
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
scenarios:
  - interview
  - hiring
formats:
  - system-design
source:
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
followUps:
  - If a downstream service cannot cancel work, how can the caller limit the damage?
  - >-
    Should an asynchronous task inherit the request deadline or use an independent completion
    deadline?
---
