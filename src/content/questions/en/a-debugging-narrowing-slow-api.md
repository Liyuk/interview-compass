---
questionId: a-debugging-narrowing-slow-api
kind: question
status: published
locale: en
title: "An API got slow with no release on record"
question: "An API has been slow since yesterday, and there is no release on record. Given logs, monitoring, and database slow-query records, in what order would you investigate?"
intent: "Understand how you rule out causes layer by layer with evidence instead of guessing from experience."
signals:
  - "Confirms the scope and start of the slowdown before choosing a direction"
  - "Compares what changed with what stayed the same"
  - "Says when to roll back or throttle first instead of continuing to dig"
primaryCapability: professional.debugging
topics: [debugging, databases, backend]
roles: [engineering, backend, data]
responsibilityScopes: [team]
careerTracks: [individual-contributor]
scenarios: [interview, operations-review]
formats: [debugging]
relatedQuestions:
  - questionId: a-computer-science-slow-page-causal-chain
    relation: "Both start from the symptom “it got slow.”"
    contrast: "This one is about the order of investigation against live evidence; the other explains cause through network and browser principles."
source:
  - attribution: original
    label: "Original prompt"
---
