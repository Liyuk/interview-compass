---
questionId: c-metrics-causality-metric-tiers
kind: question
status: published
locale: en
title: "A dashboard holds dozens of metrics. How do you decide which belong on the core list?"
question: "A dashboard holds dozens of metrics and the team's attention keeps getting pulled to the most visible numbers. Pick one user task and explain how you would tier the metrics and decide which enter the core list."
intent: "Understand whether you can rank metrics by distance to the user task and actionability, while keeping checks on data quality and user cost."
signals:
  - "Separates task outcome, experience guardrails, process diagnostics, and data quality"
  - "Uses task relevance, reach, actionability, and trustworthiness to explain why one is watched first"
  - "Says who does what when a metric moves, and demotes any that cannot say so to watch or on-demand"
primaryCapability: value-direction.metrics-causality
topics: [metrics, product-thinking, operations]
roles:
  - product
  - data
  - operations
  - engineering
  - frontend
  - backend
  - mobile
  - ai-engineer
responsibilityScopes: [team, multiple-teams]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: [interview, operations-review, hiring]
formats: [case, artifact-review]
followUps:
  - "Cache hit rate is high but users still cannot find results. How do you explain that?"
  - "How does the core list change across stages: before launch, early validation, and at scale?"
source:
  - attribution: adapted
    label: "Data metrics guide (3): metric tiers that let data serve the most important decisions first"
    url: https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2021/04/metric-tiers-prioritize-decisions/zh.md
---
