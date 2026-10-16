---
questionId: a-ai-eval-customer-harm-weighting
kind: question
status: published
locale: en
title: How do you assess a model upgrade when average accuracy rises but severe errors remain?
question: >-
  A new model raises overall accuracy from 91% to 94%, but errors remain concentrated in cases that affect customer
  rights. The team wants to ship based on the aggregate score. How would you decide?
intent: >-
  Assess whether you break quality down by severity and affected groups instead of allowing easy cases to mask
  high-risk failures.
signals:
  - Break error rates down by risk tier, user group, and task.
  - Define unacceptable severe errors and minimum sample coverage.
  - Weigh overall gain, residual risk, human mitigation, and rollback conditions.
primaryCapability: professional.ai-engineering
topics:
  - ai-engineering
  - metrics
  - risk-management
roles:
  - ai-engineer
  - product
  - operations
  - engineering
  - frontend
  - backend
  - mobile
  - data
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
  - promotion
formats:
  - case
  - behavioral
followUps:
  - How do you establish confidence when severe examples are scarce?
  - Who accepts remaining risk and approves expansion?
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 E
---
