---
questionId: bulk-a-framework-angular-change-detection-boundary
kind: question
status: published
locale: en
title: Change-Detection Boundaries and External Callbacks
question: >-
  A third-party SDK callback updates data, but the UI does not refresh; forcing a refresh causes
  duplicate updates. How would you identify the framework’s change-detection boundary and choose the
  right integration point?
intent: Tests framework update scheduling and external-event integration.
signals:
  - Determines whether the callback enters the framework’s scheduling context
  - Distinguishes missing notification from duplicate subscriptions
  - Proposes lifecycle-aware subscription cleanup and reproducible verification
primaryCapability: professional.coding-abstraction
topics:
  - frontend
  - frameworks
roles:
  - frontend
  - engineering
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
