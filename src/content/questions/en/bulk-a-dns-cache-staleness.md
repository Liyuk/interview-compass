---
questionId: bulk-a-dns-cache-staleness
kind: question
status: published
locale: en
title: DNS Caching and Delayed Traffic Shifts
question: >-
  A service has moved to a new address, yet some users still reach the old nodes. How would you
  distinguish recursive-DNS caches, client caches, and connection reuse?
intent: Tests DNS caching semantics and network diagnosis during traffic shifts.
signals:
  - Identifies cache locations at different layers
  - Understands that TTL does not guarantee immediate refresh by every client
  - Proposes validation that separates DNS results from connection lifetime
primaryCapability: professional.computer-science
topics:
  - computer-networks
roles:
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
  - case
source:
  - attribution: inspired
    label: Coding Interview University — computer science foundations
    url: https://github.com/jwasham/coding-interview-university/blob/main/README.md
---
