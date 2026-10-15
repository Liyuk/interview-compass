---
questionId: b-data-model-effective-dated-ownership
kind: question
status: published
locale: en
title: How should reports reconstruct ownership after organizations and owners change?
question: >-
  A business object moves across teams as owners change. Audit must reconstruct the owner on a past
  date, while daily reporting needs current ownership. How would you model both queries?
intent: >-
  Assess whether you distinguish current state from valid-time history and make historical ownership
  reproducible and auditable.
signals:
  - Defines effective intervals, change times, and source records for ownership relationships.
  - >-
    Separates reporting by current organization from reporting by the organization responsible when
    an event occurred.
  - >-
    Explains how late corrections or reorganizations preserve old views and identify the chosen
    interpretation.
primaryCapability: domain-modeling.data-model
topics:
  - data-modeling
  - metrics
  - risk-management
roles:
  - data
  - product
  - operations
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - operations-review
formats:
  - case
  - artifact-review
followUps:
  - >-
    If ownership changes arrive late, how would you correct historical reports while preserving the
    change trail?
  - How would you prevent overlapping owners or gaps in responsibility on the same date?
source:
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
---
