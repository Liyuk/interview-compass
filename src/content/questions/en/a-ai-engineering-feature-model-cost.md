---
questionId: a-ai-engineering-feature-model-cost
kind: question
status: published
locale: en
title: What does an algorithm model and the features it depends on truly cost?
question: What does an algorithm model and the features it depends on truly cost? How do you count training, inference, feature computation and storage, labeling, and maintenance, and how do you judge whether a feature is worth keeping?
intent: See whether you know the full lifecycle cost of models and features and can trade it off against benefit.
signals:
  - Breaks cost into training, inference, feature computation and storage, labeling, and long-term maintenance
  - Estimates the cost of a single feature and compares it with the improvement it brings
  - Names easily overlooked costs, such as latency and consistency upkeep for online features
  - Says what retiring or merging a feature rests on and its risks
primaryCapability: professional.ai-engineering
topics: [ai-engineering, feature-modeling, resource-allocation]
roles: [ai-engineer, data, backend, engineering]
responsibilityScopes: [team]
careerTracks: [individual-contributor, team-manager]
scenarios: [interview, promotion]
formats: [case, system-design]
followUps:
  - A feature gives a small gain at high cost. How do you decide?
  - Between effect and cost, which do you optimize first?
source:
  - attribution: original
    label: "The author's interview sequence: the cost of models and features"
---
