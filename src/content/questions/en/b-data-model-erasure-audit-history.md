---
questionId: b-data-model-erasure-audit-history
kind: question
status: published
locale: en
title: A user asks to have personal data deleted, while finance must retain transaction records for audit. How would you define the boundary among deletion, anonymization, and traceability?
question: A user asks to have personal data deleted, while finance must retain transaction records for audit. How would you define the boundary among deletion, anonymization, and traceability?
intent: Assess whether you express data purpose, sensitivity, retention basis, and deletion propagation rather than treating deletion as one database operation.
signals:
  - Separates identity data, transaction facts, derived data, and audit evidence by purpose and sensitivity.
  - Explains how deletion or anonymization propagates to caches, analytical sets, backups, and downstream copies.
  - Defines evidence that deletion completed and data cannot re-enter production for an unauthorized purpose.
primaryCapability: domain-modeling.data-model
topics:
  - data-modeling
  - security
  - risk-management
  - databases
  - distributed-systems
roles:
  - data
  - engineering
  - product
  - backend
responsibilityScopes:
  - multiple-teams
  - organization
  - team
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - hiring
  - promotion
  - operations-review
formats:
  - case
  - system-design
source:
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 A
  - attribution: inspired
    label: GitHub 数据工程与 AI 工程题目主题调研；题目为本站独立编写
    url: https://github.com/dataskew-io/data-engineering-interview-questions
  - attribution: inspired
    label: GitHub 技术面试与工程体系调研；题目为本站独立编写
    url: https://github.com/yangshun/tech-interview-handbook
followUps:
  - If backups cannot be rewritten item by item immediately, how would you prevent restored data from returning to production?
  - How would you demonstrate that anonymized records cannot be reidentified through linked data?
  - 【When can soft-deleted records be physically purged?】A customer requests account deletion, while finance must retain some transactions and analytics systems hold copies. How would you define deletion semantics and verify scope?
  - How would you prevent deleted data from reappearing after backup restoration?
  - How would you prove anonymization is irreversible?
  - 【How do you propagate data deletion and prove it is complete?】After a customer requests deletion, the source database, CDC pipeline, and downstream indexes, caches, or materialized views may still retain old values. How would you define deletion semantics, design propagation, and prove cleanup is complete?
---
