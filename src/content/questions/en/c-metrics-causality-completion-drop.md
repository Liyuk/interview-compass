---
questionId: c-metrics-causality-completion-drop
kind: question
status: published
locale: en
title: "A key task's completion rate dropped. In what order do you investigate?"
question: "The completion rate of a key task fell this week. Before explaining why, in what order do you confirm that the change is real, where it is concentrated, and what cost users bear?"
intent: "Understand whether you validate the data and scope first, then form a falsifiable hypothesis, instead of grabbing the first plausible cause."
signals:
  - "Checks coverage and reporting delay of start, success, and failure events before explaining the change"
  - "Splits by the most likely relevant dimension and keeps the sample size of each group"
  - "Ends with a statement that can be refuted, and says which reproduction or small-scale check would confirm it"
primaryCapability: value-direction.metrics-causality
topics: [metrics, debugging, operations]
roles:
  - data
  - product
  - engineering
  - operations
  - frontend
  - backend
  - mobile
  - ai-engineer
responsibilityScopes: [team]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: [interview, operations-review]
formats: [case]
followUps:
  - "Task starts are normal, success events are near zero, but service logs look fine. What do you make of it?"
  - "Final processing success is unchanged while user-visible completion drops. What does that suggest?"
source:
  - attribution: adapted
    label: "Data metrics guide (2): define the measurement before arguing about metrics"
    url: https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2021/03/define-the-measurement-before-arguing-about-metrics/zh.md
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
