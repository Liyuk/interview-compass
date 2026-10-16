---
questionId: a-distributed-systems-partition-key-hotspot
kind: question
status: published
locale: en
title: >-
  Overall capacity is sufficient after sharding, but a few tenants still overload hot keys. How
  would you reassess the partition strategy?
question: >-
  Overall capacity is sufficient after sharding, but a few tenants still overload hot keys. How
  would you reassess the partition strategy?
intent: >-
  Assess whether you combine data distribution, key choice, hotspot isolation, and query semantics
  instead of only adding machines.
signals:
  - Uses tenant, time, and request distributions to locate the source of hotspots.
  - Compares resharding, splitting hot tenants, composite keys, and localized caching.
  - Explains how correctness is maintained during migration and how load balance is verified.
primaryCapability: professional.system-design
topics:
  - distributed-systems
  - system-design
  - debugging
roles:
  - backend
  - data
  - engineering
  - ai-engineer
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
formats:
  - system-design
source:
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
followUps:
  - If a hot key cannot be split and queries must preserve ordering, what trade-offs remain?
  - How would you prevent write salting from making reads and deduplication much more complex?
---
