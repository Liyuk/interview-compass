---
questionId: bulk-a-search-index-refresh
kind: question
status: published
locale: en
title: Search-index refresh
question: >-
  A search service must change tokenization and ranking features without long result gaps or a major
  increase in write latency. How would you evolve the index?
intent: Explore the design of index production, version cutover, freshness, and resource contention.
signals:
  - Separates change capture, full builds, and incremental catch-up
  - Explains how to validate old and new indexes in parallel and limit cutover scope
  - Considers the effect of rebuild resources on online queries and the primary store
primaryCapability: professional.system-design
topics:
  - system-design
  - databases
  - reliability
roles:
  - backend
  - engineering
  - data
  - ai-engineer
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
  - system-design
source:
  - attribution: inspired
    label: System Design Primer：索引与读写路径
    url: https://github.com/donnemartin/system-design-primer
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
