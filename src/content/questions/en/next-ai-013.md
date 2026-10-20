---
questionId: next-ai-013
kind: question
status: published
locale: en
title: How do you limit logging risk when model outputs contain personal data?
question: >-
  Model responses may echo customer identifiers, while production debugging relies on request and response
  logs. How would you design collection, redaction, access, and retention?
intent: Assesses balancing diagnostic value with minimization of sensitive data.
signals:
  - Separate required telemetry from raw content by purpose.
  - Define redaction, access controls, and retention at ingestion.
  - Verify logging neither leaks data nor prevents diagnosis.
primaryCapability: professional.ai-engineering
topics:
  - ai-engineering
  - security
roles:
  - ai-engineer
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
followUps:
  - How would you diagnose quality changes caused by over-redaction?
  - Who may temporarily access raw samples?
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 A
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
