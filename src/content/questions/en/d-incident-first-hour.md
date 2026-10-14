---
questionId: d-incident-first-hour
kind: question
status: published
locale: en
title: The first hour of a widespread outage
question: A production service suddenly fails widely. In what order do you act during the first hour?
intent: See how you contain first and diagnose second under incomplete information, and keep decision makers informed.
signals:
  - Contains the impact before explaining the cause
  - Separates confirmed facts from guesses
  - States who is updated, how often, and what they must decide
primaryCapability: delivery.reliability-incidents
topics:
  - reliability
  - risk-management
  - communication
  - debugging
roles:
  - engineering
  - backend
  - mobile
  - ai-engineer
  - pmo
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
  - debugging
source:
  - attribution: derived
    label: 'Management retrospective: eight judgments from execution to systems'
    url: https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2026/08/management-retrospective/zh.md
---
