---
questionId: a-backend-read-replica-consistency-window
kind: question
status: published
locale: en
title: What API contract should handle stale reads from replicas after a write?
question: A user updates account settings and refreshes immediately, but a read replica returns the old value. Reading from the primary adds load, while waiting for replication may time out. How would you design the experience?
intent: Assess whether you choose consistency windows, routing, and degraded behavior based on business read/write semantics.
signals:
  - Identify fields or actions requiring read-your-writes behavior.
  - Compare session stickiness, version tokens, and brief primary reads.
  - Define replication-lag monitoring, stale indicators, and capacity cost.
primaryCapability: professional.system-design
topics:
  - databases
  - distributed-systems
  - reliability
roles:
  - backend
  - data
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
  - system-design
  - debugging
  - case
followUps:
  - How do version tokens avoid hiding concurrent updates?
  - Which queries can explicitly accept eventual consistency?
  - 【How does read-your-writes consistency change replica routing?】A user refreshes immediately after an update and sometimes sees stale data. The system uses asynchronous replicas and cannot switch globally to strong consistency. How would you define and implement the required consistency?
  - Is session affinity sufficient when the same user acts across devices?
  - How would you bound read waiting time?
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 G
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 A
---
