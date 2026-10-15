---
questionId: bulk-a-frontend-virtualized-list-state
kind: question
status: published
locale: en
title: State Ownership in a Virtualized List
question: >-
  Design a reusable virtualized list: it renders only visible rows, but selection state must not
  leak to different data when DOM nodes are recycled. How would you define the interface and test
  it?
intent: Tests component abstraction, stable identity, and UI state ownership.
signals:
  - Uses stable data identity rather than visible position as the state key
  - Separates viewport state from business selection state
  - Designs tests for scroll boundaries, recycling, and reordering
primaryCapability: professional.coding-abstraction
topics:
  - frontend
  - data-structures
roles:
  - frontend
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
  - coding
source:
  - attribution: inspired
    label: Front-end Interview Handbook — JavaScript and frontend interview topics
    url: https://github.com/yangshun/front-end-interview-handbook/blob/main/README.md
---
