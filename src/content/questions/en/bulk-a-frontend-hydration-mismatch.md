---
questionId: bulk-a-frontend-hydration-mismatch
kind: question
status: published
locale: en
title: Server-Rendered Hydration Mismatch
question: >-
  A page has valid server-rendered HTML, but content flickers after hydration and the console
  reports a warning. How would you locate the difference between server and client rendering?
intent: Tests SSR/hydration mechanics and reproducible debugging.
signals:
  - Understands that initial HTML and the first client render must align
  - Checks time, randomness, environment, or data differences
  - Proposes a minimal reproduction and server/client output comparison
primaryCapability: professional.debugging
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
  - debugging
source:
  - attribution: inspired
    label: Front-end Interview Handbook — JavaScript and frontend interview topics
    url: https://github.com/yangshun/front-end-interview-handbook/blob/main/README.md
---
