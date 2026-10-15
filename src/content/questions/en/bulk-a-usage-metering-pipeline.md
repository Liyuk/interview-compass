---
questionId: bulk-a-usage-metering-pipeline
kind: question
status: published
locale: en
title: Usage-metering pipeline
question: >-
  A usage-billed API product must aggregate request events from several regions into customer
  invoices while allowing later corrections. How would you design the metering pipeline?
intent: >-
  Explore how event integrity, measurement definitions, late corrections, and explainable invoices
  fit together.
signals:
  - Defines unique event identity, units, and effective rules
  - Handles duplicate, late, out-of-order events and correction records
  - Explains traceability from raw events to a customer invoice
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
scenarios:
  - interview
  - hiring
formats:
  - system-design
source:
  - attribution: inspired
    label: System Design Primer：事件处理与数据建模
    url: https://github.com/donnemartin/system-design-primer
---
