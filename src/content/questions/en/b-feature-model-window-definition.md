---
questionId: b-feature-model-window-definition
kind: question
status: published
locale: en
title: "How do you define 'orders in the last 30 days' without ambiguity?"
question: "Someone asks for an 'orders in the last 30 days' feature. List every definition detail you need to confirm first, and say which choices would make the same name produce different numbers."
intent: "Understand whether you can press a verbal metric into a recomputable definition covering object, window, deduplication, exclusions, and missing values."
signals:
  - "Asks whether the window includes today and whether it counts order time or payment time"
  - "States whether canceled, refunded, and test orders count, and why"
  - "Defines what a value means for new users with no history instead of defaulting to zero"
primaryCapability: domain-modeling.feature-model
topics: [feature-modeling, metrics]
roles: [data, product, ai-engineer]
responsibilityScopes: [team]
careerTracks: [individual-contributor]
scenarios: [interview, campus]
formats: [case]
followUps:
  - "Two teams implement it and the numbers differ. How do you find which detail caused the gap?"
  - "After the definition changes, can the historical trend still be compared with before?"
relatedQuestions:
  - questionId: b-feature-model-time-semantics
    relation: "Also about defining a feature, but moving from the correctness of the point in time to the completeness of definition details."
    contrast: "This question is about window, deduplication, exclusions, and missing values; the related one is about cutoff time and information leakage."
source:
  - attribution: derived
    label: "Data metrics guide (4): a metric dictionary template that makes definitions recomputable"
    url: https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2021/04/metric-dictionary-template/zh.md
---
