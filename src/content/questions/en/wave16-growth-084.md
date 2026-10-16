---
questionId: wave16-growth-084
kind: question
status: published
locale: en
title: What if temporary delegated access remains active after the assignment?
question: >-
  A teammate temporarily approves requests for an absent lead, but access remains after the leave ends. How
  would you design expiry and audit for temporary delegation?
intent: Assesses authorization lifecycle, least privilege, and return of responsibility.
signals:
  - Define scope, duration, and revocation criteria.
  - Prefer automatic expiry and log actual use.
  - Test departure, role changes, and emergency extensions.
primaryCapability: work-responsibility.boundaries
topics:
  - boundaries
  - management
roles:
  - manager
  - engineering
  - frontend
  - backend
  - mobile
  - ai-engineer
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - team-manager
  - senior-manager
  - individual-contributor
scenarios:
  - interview
  - hiring
  - promotion
formats:
  - case
followUps:
  - Who revokes access if the delegator leaves the company?
  - Should extension require a second approval?
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 D
---
