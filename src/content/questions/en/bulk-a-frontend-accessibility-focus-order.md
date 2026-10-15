---
questionId: bulk-a-frontend-accessibility-focus-order
kind: question
status: published
locale: en
title: Keyboard Focus in Modal Interactions
question: >-
  A custom dialog works with a mouse, but keyboard users cannot reliably enter, close, or return from it. Which
  focus-management behaviors would you inspect, and how would you verify a fix?
intent: Tests implementation details of accessible frontend interaction and state management.
signals:
  - Checks focus movement on open and restoration on close
  - Considers focus containment and keyboard behavior such as Escape
  - Proposes keyboard walkthroughs and assistive-technology verification
  - Use appropriate live regions and semantic status.
  - Decide whether focus moves and where it should land.
  - Test keyboard order, screen-reader output, and duplicate submission.
primaryCapability: professional.coding-abstraction
topics:
  - frontend
  - accessibility
  - product-thinking
roles:
  - frontend
  - design
  - engineering
responsibilityScopes:
  - individual
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
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
    refreshes. Mouse users see a success message, but keyboard and screen-reader users miss the state change. How would
    you fix it?
  - Which messages need immediate announcement and which should not interrupt?
  - How do you prevent duplicate announcements?
---
