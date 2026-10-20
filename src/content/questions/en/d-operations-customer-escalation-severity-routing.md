---
questionId: d-operations-customer-escalation-severity-routing
kind: question
status: published
locale: en
title: How do you route customer escalations without a shared severity model?
question: >-
  Sales, support, and engineering can all label customer issues top priority, so the queue cannot distinguish business
  outages from general dissatisfaction. How would you design severity and escalation?
intent: Assess whether you use impact, urgency, scope, and service commitments to prioritize work.
signals:
  - "Defines severity using user impact, scope, urgency, and safety or data risk, separately from account value."
  - "Sets response and update targets that fit each severity while distinguishing them from resolution promises."
  - "Names who can set or change severity, how evidence and capacity constraints are recorded, and when to escalate."
  - "Reviews misclassification, displaced work, and customer outcomes to verify the model improves response."
primaryCapability: delivery.operational-execution
topics:
  - operations
  - risk-management
  - communication
roles:
  - operations
  - product
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
  - "Who may lower a severity rating, and what evidence must be recorded?"
  - "How should an urgent safety or data-security incident bypass normal queues without making every executive request top priority?"
  - "How would you show which other risks or customers were delayed by an escalation?"
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 J
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 B
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
