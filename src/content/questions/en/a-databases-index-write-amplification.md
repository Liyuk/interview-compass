---
questionId: a-databases-index-write-amplification
kind: question
status: published
locale: en
title: A new index speeds up queries, but write latency and storage growth worsen noticeably. How would you decide whether to keep it?
question: A new index speeds up queries, but write latency and storage growth worsen noticeably. How would you decide whether to keep it?
intent: Assess whether you weigh query benefit against write amplification, storage, maintenance windows, and actual access patterns.
signals:
  - Identifies covered queries, hit rate, selectivity, and read/write mix.
  - Quantifies added write cost, storage, and maintenance impact.
  - Tests representative workloads after dropping, combining, or adjusting indexes.
primaryCapability: professional.computer-science
topics:
  - databases
  - debugging
  - reliability
  - system-design
  - metrics
roles:
  - backend
  - data
  - engineering
  - ai-engineer
responsibilityScopes:
  - individual
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - campus
  - hiring
formats:
  - debugging
  - system-design
source:
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 G
followUps:
  - If a query slows only during month-end batch work, should it justify a permanent index?
  - How would you distinguish an ineffective index from changed statistics, cache behavior, or query plans?
  - 【How do you decide on an index when reads improve but write cost rises?】A composite index halves latency for a core query, but write latency and storage cost rise, and batch updates time out more often. How would you decide whether to keep it?
  - How do you assess lock and replication-lag risk during index creation?
  - When should you change query or data model instead of adding indexes?
---
