---
questionId: bulk-a-debug-clock-skew
kind: question
status: published
locale: en
title: Out-of-order cross-service events
question: >-
  A reconciliation shows timestamps from two data centers placing event A before B, while the message trace
  shows B triggered A. How would you distinguish clock skew, processing delay, and business causality, and
  choose trustworthy diagnostic evidence?
intent: Explore how physical time, processing time, and business order are distinguished and diagnosed.
signals:
  - Verifies event, receipt, and processing timestamps and the order business actually needs.
  - >-
    Uses cross-service IDs, synchronization, and latency distributions to distinguish skew, drift, delay,
    and business order.
  - >-
    Compares versions, causal markers, and logical clocks without treating timestamp order as causal
    proof.
  - Tests regional differences, reordering, and replay, stating remaining uncertainty.
primaryCapability: professional.debugging
topics:
  - debugging
  - distributed-systems
  - databases
roles:
  - backend
  - data
  - engineering
  - ai-engineer
responsibilityScopes:
  - team
  - multiple-teams
  - individual
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - hiring
  - campus
formats:
  - debugging
  - case
source:
  - attribution: inspired
    label: System Design Primer：分布式系统时序问题
    url: https://github.com/donnemartin/system-design-primer
  - attribution: inspired
    label: System Design Primer — requirements, constraints, and trade-offs
    url: https://github.com/donnemartin/system-design-primer/blob/master/README.md
followUps:
  - If a global time order cannot be established, how would you represent “happened before”?
  - How would you tell whether the observed order came from clock skew, message delay, or a business rule?
relatedQuestions: []
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
