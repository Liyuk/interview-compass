---
questionId: a-databases-index-write-amplification
kind: question
status: published
locale: en
title: >-
  A new index speeds up queries, but write latency and storage growth worsen noticeably. How would
  you decide whether to keep it?
question: >-
  A new index speeds up queries, but write latency and storage growth worsen noticeably. How would
  you decide whether to keep it?
intent: >-
  Assess whether you weigh query benefit against write amplification, storage, maintenance windows,
  and actual access patterns.
signals:
  - Identifies covered queries, hit rate, selectivity, and read/write mix.
  - Quantifies added write cost, storage, and maintenance impact.
  - Tests representative workloads after dropping, combining, or adjusting indexes.
primaryCapability: professional.computer-science
topics:
  - databases
  - debugging
  - reliability
roles:
  - backend
  - data
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
  - debugging
source:
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
followUps:
  - If a query slows only during month-end batch work, should it justify a permanent index?
  - >-
    How would you distinguish an ineffective index from changed statistics, cache behavior, or query
    plans?
---
