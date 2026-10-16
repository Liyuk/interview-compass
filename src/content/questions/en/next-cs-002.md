---
questionId: next-cs-002
kind: question
status: published
locale: en
title: Will a reader-writer lock make this service faster?
question: A shared cache is read-heavy and the team plans to replace a mutex with a reader-writer lock. What evidence would you gather, and how would you judge whether the added complexity is worthwhile?
intent: Assesses choosing synchronization based on contention, critical-section behavior, and observed latency rather than read/write ratios alone.
signals:
  - Measure lock wait time, critical-section duration, and concurrency distribution.
  - Consider writer starvation, reentrancy, and implementation overhead.
  - Compare throughput, tail latency, and correctness under representative load.
primaryCapability: professional.computer-science
topics:
  - concurrency
  - databases
roles:
  - backend
  - data
  - engineering
  - ai-engineer
  - mobile
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
  - promotion
formats:
  - case
followUps:
  - Which workloads could make a reader-writer lock slower?
  - How would you test for writer starvation?
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 A
---
