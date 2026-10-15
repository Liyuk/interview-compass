---
questionId: next-domain-021
kind: question
status: published
locale: en
title: Should active users be counted by person, account, or organization?
question: A company shares accounts among employees, and some employees belong to multiple organizations. Leadership asks for “monthly active customers.” How would you define the entity and explain the metric?
intent: Assesses tracing a metric name to entities, identity, and decision purpose.
signals:
  - Distinguish people, accounts, seats, organizations, and paying customers.
  - Choose a stable grain for the business use and document the definition.
  - Explain effects of deduplication, merging, and historical changes on trends.
primaryCapability: domain-modeling.data-model
topics:
  - data-modeling
  - metrics
roles:
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
followUps:
  - Which actions qualify as active, and why?
  - Should historical monthly-active counts be recomputed after identity merges?
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 A
---
