---
questionId: next-delivery-093
kind: question
status: published
locale: en
title: How do you prevent advance notice from invalidating continuity drills?
question: Disaster-recovery drills notify every team a week in advance, and special scripts make the exercise succeed while real recovery still fails. How would you redesign the drill?
intent: Assesses exercise validity, realistic constraints, and learning closure.
signals:
  - Define the capability and safety boundaries under test.
  - Gradually reduce notice and introduce unknown failure injection.
  - Track real recovery time, data integrity, and follow-up actions.
primaryCapability: delivery.operational-execution
topics:
  - operations
  - risk-management
roles:
  - operations
  - engineering
  - backend
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
followUps:
  - Which systems are unsuitable for unannounced drills?
  - How can external dependency recovery be tested safely?
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 B
---
