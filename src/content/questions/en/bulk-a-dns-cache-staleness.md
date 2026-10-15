---
questionId: bulk-a-dns-cache-staleness
kind: question
status: published
locale: en
title: DNS Caching and Delayed Traffic Shifts
question: A service has moved to a new address, yet some users still reach the old nodes. How would you distinguish recursive-DNS caches, client caches, and connection reuse?
intent: Tests DNS caching semantics and network diagnosis during traffic shifts.
signals:
  - Identifies cache locations at different layers
  - Understands that TTL does not guarantee immediate refresh by every client
  - Proposes validation that separates DNS results from connection lifetime
primaryCapability: professional.computer-science
topics:
  - computer-networks
  - reliability
roles:
  - engineering
  - backend
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
source:
  - attribution: inspired
    label: Coding Interview University — computer science foundations
    url: https://github.com/jwasham/coding-interview-university/blob/main/README.md
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 A
followUps:
  - 【How do you control impact when DNS caching delays traffic shifts?】A service has moved to a new region, but some clients still connect to the old address, which is about to be shut down. How would you handle caching, connection reuse, and shutdown order?
  - Why does TTL expiry not mean existing connections have moved?
  - How would you confirm long-tail clients have left?
---
