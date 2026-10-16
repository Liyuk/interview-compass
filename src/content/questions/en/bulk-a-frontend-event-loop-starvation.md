---
questionId: bulk-a-frontend-event-loop-starvation
kind: question
status: published
locale: en
title: Event Loop and Long-Task Starvation
question: >-
  A search field briefly freezes after typing even though the network request completes quickly. How
  would you use the event loop, task queues, and main-thread occupancy to explain it and locate long
  tasks?
intent: Tests event-loop mechanics and diagnosis of browser responsiveness.
signals:
  - Describes the relationship between task execution and rendering opportunities
  - Distinguishes synchronous long tasks from asynchronous waits
  - Proposes performance traces or task decomposition for verification
primaryCapability: professional.computer-science
topics:
  - frontend
  - programming-languages
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
---
