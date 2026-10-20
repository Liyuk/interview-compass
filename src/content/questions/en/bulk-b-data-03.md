---
questionId: bulk-b-data-03
kind: question
status: published
locale: en
title: Partner settlement spans several order systems. How would you build a reconcilable mapping?
question: >-
  Partner settlement must connect external order IDs, internal orders, payments, and refunds, but
  systems use different keys and update times. How would you build the mappings and reconciliation
  process?
intent: >-
  Assess whether the candidate treats cross-system identity mapping as a business object with
  lifecycle and quality constraints.
signals:
  - Separates source identifiers, internal entity identifiers, and their effective times
  - Explains handling of one-to-many links, duplicates, missing records, and corrections
  - Designs reconciliation output that traces to source records and localizes discrepancies
primaryCapability: domain-modeling.data-model
topics:
  - data-modeling
  - databases
  - commercialization
roles:
  - data
  - product
  - operations
  - engineering
  - backend
responsibilityScopes:
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - operations-review
formats:
  - case
source:
  - attribution: inspired
    label: dataskew-io/data-engineering-interview-questions：数据契约与数据所有权主题
    url: https://github.com/dataskew-io/data-engineering-interview-questions
perspectiveReview: inferred
qualityTier: extended
perspective: candidate
---
