---
questionId: a-debugging-cache-stampede-warmup
kind: question
status: published
locale: en
title: >-
  After cache expiry, many requests hit the origin at once, and recovery causes a second traffic
  spike. How would you diagnose and suppress a cache stampede and warm-up storm?
question: >-
  After cache expiry, many requests hit the origin at once, and recovery causes a second traffic
  spike. How would you diagnose and suppress a cache stampede and warm-up storm?
intent: >-
  Assess whether you distinguish a single-key stampede, a fully cold cache, retry amplification, and
  load transfer during recovery.
signals:
  - >-
    Uses key distribution, origin rate, expiry timing, and retry traces to locate the main
    amplification path.
  - Compares request coalescing, randomized expiry, cache tiers, rate limits, and gradual warm-up.
  - Defines checks that prevent cache protection from creating stale data or a new bottleneck.
primaryCapability: professional.debugging
topics:
  - debugging
  - reliability
  - distributed-systems
roles:
  - backend
  - engineering
  - operations
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
scenarios:
  - interview
  - hiring
formats:
  - debugging
source:
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
followUps:
  - If only a few keys are hot, is a full cache warm-up necessary?
  - If the origin is already overloaded, which requests should degrade, queue, or fail clearly?
---
