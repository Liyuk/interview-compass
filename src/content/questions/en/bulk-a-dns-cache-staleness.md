---
questionId: bulk-a-dns-cache-staleness
kind: question
status: published
locale: en
title: Why can DNS caching delay failover?
question: >-
  A service has moved to a new address, but some users still reach old nodes and recovery varies by network.
  How would you check DNS caches, client caches, and existing connections?
intent: >-
  Assess whether you can distinguish address resolution, cache layers, and connection reuse, then use that
  evidence to plan safe failover.
signals:
  - Distinguishes what authoritative DNS, recursive resolvers, client caches, and connection pools retain.
  - Explains why TTL expiry does not immediately move every client or existing connection.
  - >-
    Uses resolved addresses, connection lifetimes, traffic, and errors to verify whether old nodes still serve
    requests.
  - Keeps old and new nodes available during migration, then drains the old nodes gradually.
primaryCapability: professional.computer-science
topics:
  - computer-networks
  - reliability
  - distributed-systems
roles:
  - engineering
  - backend
  - mobile
responsibilityScopes:
  - individual
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - campus
  - hiring
  - promotion
formats:
  - case
  - knowledge
source:
  - attribution: inspired
    label: Coding Interview University — computer science foundations
    url: https://github.com/jwasham/coding-interview-university/blob/main/README.md
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 A
  - attribution: original
    label: Interview Compass Original Expansion to 1,500 — Batch A
followUps:
  - If lowering TTL does not shorten recovery, which caches or connections would you inspect?
  - How would you confirm that long-idle clients have left the old nodes?
  - Why should failover not rely on DNS alone?
relatedQuestions: []
---
