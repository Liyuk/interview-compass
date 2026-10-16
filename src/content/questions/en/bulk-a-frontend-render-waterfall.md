---
questionId: bulk-a-frontend-render-waterfall
kind: question
status: published
locale: en
title: Tracing a First-Render Waterfall
question: >-
  The page HTML arrives quickly, but users still wait a long time to see the main content. How would
  you trace blockers across resource discovery, download, parsing, execution, and painting?
intent: Tests systematic diagnosis of the browser rendering pipeline.
signals:
  - Breaks the process into key rendering stages
  - Distinguishes network blockage from main-thread blockage
  - Chooses evidence such as a waterfall, performance trace, or Web Vitals
primaryCapability: professional.system-design
topics:
  - frontend
  - computer-networks
roles:
  - frontend
  - engineering
  - mobile
responsibilityScopes:
  - individual
  - team
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
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
