---
questionId: next-ai-015
kind: question
status: published
locale: en
title: Can an evaluation set remain trustworthy after repeated tuning?
question: The team tunes prompts and model settings against the same fixed evaluation set every week. Scores rise, but new-user feedback does not improve. How would you restore evaluation trustworthiness?
intent: Assesses evaluation contamination, hidden-set governance, and production representativeness.
signals:
  - Identify overfitting and item leakage from repeated inspection.
  - Create versioned development, blind, and real-task samples.
  - Tie metric changes to verifiable user or task outcomes.
primaryCapability: professional.ai-engineering
topics:
  - ai-engineering
  - metrics
roles:
  - ai-engineer
  - data
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
  - How should you handle a real production failure absent from the evaluation set?
  - When should an evaluation set be retired or rotated?
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 A
---
