---
questionId: next-ai-014
kind: question
status: published
locale: en
title: How do you distinguish queueing from model latency when inference slows?
question: "Users see response times double, but model inference time has barely changed. How would you break down the request-processing stages, locate the bottleneck, and limit impact?"
intent: Assesses end-to-end observability, queueing, and layered mitigation.
signals:
  - Measure waiting, retrieval, orchestration, network, and inference separately.
  - Compare concurrency, queue depth, batching, and rate-limit signals.
  - Contain user impact before validating the root-cause fix.
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
  - debugging
  - behavioral
followUps:
  - Why can larger batches hurt interactive latency?
  - How should priority flow through a shared inference pool?
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 A
---
