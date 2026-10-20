---
questionId: bulk-a-frontend-accessibility-focus-order
kind: question
status: published
locale: en
title: Keyboard Focus in Modal Interactions
question: >-
  A custom dialog works with a mouse, but keyboard users cannot reliably enter, close, or return from it.
  Which focus-management behaviors would you inspect, and how would you verify a fix?
intent: Tests implementation details of accessible frontend interaction and state management.
signals:
  - Defines initial focus, reachable controls, and return focus after closing.
  - Distinguishes modal and nonmodal focus constraints and tests Tab and Escape.
  - >-
    Checks accessible names, states, and necessary announcements without forcing every change to be
    announced.
  - >-
    Tests open, operate, close, reopen, and missing-trigger boundaries with keyboards and assistive
    technology.
primaryCapability: professional.coding-abstraction
topics:
  - frontend
  - accessibility
  - product-thinking
roles:
  - frontend
  - design
  - engineering
  - mobile
responsibilityScopes:
  - individual
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - campus
  - hiring
  - promotion
formats:
  - artifact-review
  - case
source:
  - attribution: inspired
    label: Front-end Interview Handbook — JavaScript and frontend interview topics
    url: https://github.com/yangshun/front-end-interview-handbook/blob/main/README.md
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 B
followUps:
  - >-
    【What if keyboard focus jumps to the top after dynamic content updates?】After submission, part of the page
    refreshes. Mouse users see a success message, but keyboard and screen-reader users miss the state change.
    How would you fix it?
  - Which messages need immediate announcement and which should not interrupt?
  - How do you prevent duplicate announcements?
relatedQuestions: []
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
