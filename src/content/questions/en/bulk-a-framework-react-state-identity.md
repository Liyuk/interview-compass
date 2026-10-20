---
questionId: bulk-a-framework-react-state-identity
kind: question
status: published
locale: en
title: Component Identity and State Reset
question: >-
  After a list item changes from record A to record B, its input still contains A’s draft. How would
  you explain component identity, keys, and state reuse, and choose where to fix it?
intent: Tests a declarative UI framework’s identity model and state ownership.
signals:
  - Explains how the framework determines node identity
  - Identifies the role of stable, semantically correct keys
  - Distinguishes cases where state should persist from those where it should reset
primaryCapability: professional.coding-abstraction
topics:
  - frontend
  - frameworks
roles:
  - frontend
  - engineering
  - mobile
responsibilityScopes:
  - individual
  - team
careerTracks:
  - individual-contributor
scenarios:
  - interview
  - campus
  - hiring
formats:
  - case
source:
  - attribution: inspired
    label: Front-end Interview Handbook — JavaScript and frontend interview topics
    url: https://github.com/yangshun/front-end-interview-handbook/blob/main/README.md
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
