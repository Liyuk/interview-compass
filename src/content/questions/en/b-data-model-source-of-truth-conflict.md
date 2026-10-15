---
questionId: b-data-model-source-of-truth-conflict
kind: question
status: published
locale: en
title: >-
  Customer master data has separate identifiers and states in CRM, billing, and product systems, so
  downstream reports disagree. How would you establish explainable sources of truth?
question: >-
  Customer master data has separate identifiers and states in CRM, billing, and product systems, so
  downstream reports disagree. How would you establish explainable sources of truth?
intent: >-
  Assess whether you distinguish system records, business authority, and analytical mappings while
  preserving ownership and a path to resolve conflicts.
signals:
  - >-
    Identifies the business owner, writer, authoritative meaning, and update timing for each entity
    and field.
  - >-
    Designs cross-system identity mappings, conflict states, and history rather than simply
    overwriting values.
  - Explains how downstream consumers choose a view, detect drift, and request correction.
primaryCapability: domain-modeling.data-model
topics:
  - data-modeling
  - engineering-systems
  - risk-management
roles:
  - data
  - engineering
  - product
responsibilityScopes:
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - hiring
formats:
  - case
source:
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
followUps:
  - >-
    If systems have valid but different definitions of “churned customer,” how would you preserve
    those views?
  - >-
    When migrating to unified IDs, how would you handle duplicates, merges, and entities that cannot
    be matched automatically?
---
