---
questionId: b-data-model-event-grain
kind: question
status: published
locale: en
title: "What exactly does one row in an event table represent?"
question: "In a behavioral event table, what exactly does one row represent? Explain how you settle its grain, and which statistics go wrong when the grain is unclear."
intent: "Understand whether you define data grain before discussing fields and statistics, and can foresee double counting and drifting definitions."
signals:
  - "States in one sentence what a row represents before listing any columns"
  - "Gives a concrete example of double counting caused by mixed grain"
  - "Distinguishes a deduplication key from a join key and explains the role of a task or session ID"
primaryCapability: domain-modeling.data-model
topics: [data-modeling, databases, metrics]
roles:
  - data
  - backend
  - product
  - engineering
  - frontend
  - mobile
  - ai-engineer
responsibilityScopes: [team]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: [interview, campus]
formats: [knowledge, case]
followUps:
  - "How does your table tell one user clicking ten times from ten users clicking once?"
  - "If the grain later changes from request to task, what happens to historical data?"
source:
  - attribution: derived
    label: "Data metrics guide (2): define the measurement before arguing about metrics"
    url: https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2021/03/define-the-measurement-before-arguing-about-metrics/zh.md
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
