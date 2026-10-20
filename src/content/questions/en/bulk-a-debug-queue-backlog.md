---
questionId: bulk-a-debug-queue-backlog
kind: question
status: published
locale: en
title: Queue backlog that returns
question: >-
  Message backlog often falls after scaling out, then returns a few hours later. What producer,
  consumer, and message characteristics would you inspect to locate the actual bottleneck?
intent: >-
  Examine whether throughput, processing time, hot partitions or keys, and downstream constraints
  are connected to the root cause.
signals:
  - Compares producer rate, consumer rate, and per-message processing distributions
  - Checks parallelism, hot keys, poison messages, and downstream throttling
  - Distinguishes temporary backlog reduction from sustained capacity improvement
primaryCapability: professional.debugging
topics:
  - debugging
  - reliability
  - devops
roles:
  - backend
  - engineering
  - ai-engineer
  - data
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - hiring
formats:
  - debugging
source:
  - attribution: inspired
    label: DevOps Interview Questions：容量与运行诊断
    url: https://github.com/DNXLabs/DevOps-Interview-Questions
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
