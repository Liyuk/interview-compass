---
questionId: a-ai-rag-source-freshness-contract
kind: question
status: published
locale: en
title: How do you define freshness ownership when a RAG answer cites a correct but outdated document?
question: >-
  A RAG assistant cites an internal document, but its owner has updated the process and the new version is not
  indexed yet. How would you define freshness goals, propagation, and answer behavior during the gap?
intent: >-
  Assess whether you include data updates, index consistency, citation freshness, and business ownership in the
  retrieval contract.
signals:
  - Set a latency target from source change to searchable index.
  - Make versions, update times, and invalidation propagation observable.
  - Warn, degrade, or abstain for stale or conflicting content.
primaryCapability: professional.ai-engineering
topics:
  - ai-engineering
  - data-modeling
  - reliability
roles:
  - ai-engineer
  - data
  - product
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
  - case
  - behavioral
followUps:
  - How do you handle document withdrawal while old and new versions coexist?
  - Who confirms that the knowledge source remains valid for the business?
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 E
---
