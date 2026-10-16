---
questionId: bulk-a-backend-rate-limit-distributed
kind: question
status: published
locale: en
title: "How can multiple service instances share an API request limit?"
question: "An API runs across multiple instances, and a local request limiter makes the total allowance grow with each instance. How would you design request-rate controls for bursts, accuracy, and failures, and where would you keep their state?"
intent: >-
  Examines distributed rate-limiting algorithms, tenant quotas, cross-region coordination, and the trade-off between
  precision and availability during failures.
signals:
  - Clarifies tenant and endpoint scope, time windows, bursts, and acceptable cross-region error
  - Compares token buckets, sliding windows, and centralized, hierarchical, or approximate local state
  - Defines limiting, quota recovery, and audit behavior during partitions or state-store failures
  - Explains choices across precision, latency, cost, and availability
  - Clarifies quota windows, bursts, and tolerated cross-region error
  - Compares failure behavior of local tokens, central coordination, or hierarchical quotas
  - Explains how quota state is recovered, audited, and adjusted
primaryCapability: professional.system-design
topics:
  - backend
  - distributed-systems
  - system-design
roles:
  - backend
  - engineering
responsibilityScopes:
  - individual
  - team
careerTracks:
  - individual-contributor
scenarios:
  - interview
  - campus
  - hiring
formats:
  - system-design
source:
  - attribution: inspired
    label: JavaGuide — backend, Java, database, concurrency, and distributed systems topics
    url: https://github.com/Snailclimb/JavaGuide/blob/main/README.md
  - attribution: inspired
    label: System Design Primer：扩展与容量权衡
    url: https://github.com/donnemartin/system-design-primer
followUps:
  - >-
    During a partition, would you allow limited overage, reject requests, or degrade within each region, and where is
    the boundary?
  - How would you keep tenant quotas stable when the number of instances or regions changes?
  - How can quota changes take effect smoothly and remain auditable?
---
