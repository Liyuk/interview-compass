---
questionId: b-model-evolution-reopened-work-item
kind: question
status: published
locale: en
title: How do you reopen a closed ticket without overwriting its history?
question: >-
  A support ticket can be reopened when a customer provides new evidence and may be split into
  follow-up work. How would you model states and events so closure, reopening, and splitting remain
  traceable?
intent: >-
  Assess whether you distinguish state snapshots from business events and express allowed
  transitions, ownership, and history.
signals:
  - Defines the business meaning of closure, reopening, reversal, and splitting.
  - >-
    Records who triggered a transition, its evidence and time, and links between original and
    follow-up work.
  - >-
    Handles duplicate submissions, concurrent updates, and compatibility with systems that know only
    one status.
primaryCapability: domain-modeling.model-evolution
topics:
  - data-modeling
  - product-thinking
  - engineering-systems
roles:
  - product
  - engineering
  - operations
  - frontend
  - backend
  - mobile
  - ai-engineer
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - hiring
formats:
  - case
followUps:
  - >-
    If closure triggered settlement or notifications, which side effects need compensation after
    reopening?
  - How can current work be summarized without erasing when the issue was first resolved?
source:
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
---
