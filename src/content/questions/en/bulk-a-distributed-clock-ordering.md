---
questionId: bulk-a-distributed-clock-ordering
kind: question
status: published
locale: en
title: Ordering Events Across Distributed Clocks
question: >-
  Logs from two data centers show event A before event B, while a network message indicates B
  triggered A. How would you explain the contradiction and choose information for causal ordering?
intent: Tests the distinction between clock skew and causal order.
signals:
  - Notes that physical clocks can be offset or drift
  - Distinguishes timestamp order from causality
  - Suggests logical clocks, causal message metadata, or tracing context
primaryCapability: professional.computer-science
topics:
  - distributed-systems
roles:
  - backend
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
    label: System Design Primer — requirements, constraints, and trade-offs
    url: https://github.com/donnemartin/system-design-primer/blob/master/README.md
---
