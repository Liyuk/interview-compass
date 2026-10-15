---
questionId: bulk-a-frontend-bundle-cache-invalidation
kind: question
status: published
locale: en
title: Frontend Asset Cache Invalidation
question: >-
  After an update, some users occasionally load new HTML with old JavaScript and the page fails. How
  would you design asset naming, cache policies, and release order to reduce inconsistency?
intent: Tests caching and version-transition mechanics for frontend build artifacts.
signals:
  - Separates caching policies for HTML and versioned assets
  - Accounts for a window in which old clients still reference old assets
  - Proposes release-order, rollback, and compatibility strategies
primaryCapability: professional.engineering-systems
topics:
  - frontend
  - engineering-systems
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
  - case
source:
  - attribution: inspired
    label: Front-end Interview Handbook — JavaScript and frontend interview topics
    url: https://github.com/yangshun/front-end-interview-handbook/blob/main/README.md
---
