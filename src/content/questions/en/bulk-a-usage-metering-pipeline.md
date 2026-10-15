---
questionId: bulk-a-usage-metering-pipeline
kind: question
status: published
locale: en
title: Usage-metering pipeline
question: >-
  A usage-billed API product must aggregate request events from several regions into customer invoices while allowing
  later corrections. How would you design the metering pipeline?
intent: Explore how event integrity, measurement definitions, late corrections, and explainable invoices fit together.
signals:
  - "Define event identity, units, customer attribution, and billing periods."
  - "Handle duplicate, late, out-of-order, backfilled, and corrected events without silently overwriting originals."
  - "Version prices and rules so each invoice traces to its events and applicable definitions."
  - "Explain adjustments, offsets, refunds, or credits, and prevent duplicate corrections."
primaryCapability: professional.system-design
topics:
  - system-design
  - data-modeling
  - commercialization
roles:
  - backend
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
  - system-design
  - case
source:
  - attribution: inspired
    label: System Design Primer：事件处理与数据建模
    url: https://github.com/donnemartin/system-design-primer
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 B
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 C
followUps:
  - >-
    Last month’s usage arrives this month. The contract bills monthly and paid invoices cannot be silently overwritten.
    How would you handle adjustments and notification?
---
