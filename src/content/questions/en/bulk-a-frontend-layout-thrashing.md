---
questionId: bulk-a-frontend-layout-thrashing
kind: question
status: published
locale: en
title: Layout Thrashing and Forced Reflow
question: >-
  Scrolling a list lowers frame rate, and the performance trace repeatedly shows layout work. How
  would you determine whether code is causing layout thrashing, and why does DOM read/write order
  matter?
intent: Tests browser layout cost and the effects of interleaved reads and writes.
signals:
  - Explains that layout reads may trigger synchronous calculation
  - Recognizes repeated-layout risk from alternating reads and writes
  - Proposes batched reads/writes or trace-based verification
primaryCapability: professional.computer-science
topics:
  - frontend
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
