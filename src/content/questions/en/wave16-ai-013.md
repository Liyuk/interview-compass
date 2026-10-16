---
questionId: wave16-ai-013
kind: question
status: published
locale: en
title: How do you decide whether a prompt change needs reevaluation?
question: A template changes only formatting and examples, but output length and tool-call frequency shift. The team wants to skip full regression. How would you tier the risk?
intent: Assesses change-impact analysis and evaluation gates.
signals:
  - Track template versions and behavior metrics.
  - Identify changes affecting safety, cost, correctness, or tool actions.
  - Set triggers for sampled, targeted, and full regression.
primaryCapability: professional.ai-engineering
topics:
  - ai-engineering
  - operations
roles:
  - ai-engineer
  - engineering
  - frontend
  - backend
  - mobile
  - data
  - product
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
  - Which formatting changes could alter instruction priority?
  - How can production behavior roll back to an earlier template?
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 C
---
