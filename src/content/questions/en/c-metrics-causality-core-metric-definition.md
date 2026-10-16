---
questionId: c-metrics-causality-core-metric-definition
kind: question
status: published
locale: en
title: How is your core metric defined?
question: How is your core metric defined? What are the numerator, denominator, time window, de-duplication, and exclusion rules, and why is it the core metric?
intent: See whether you have a precise grip on metric definitions and can say how the details change the conclusion.
signals:
  - States the numerator, denominator, time window, de-duplication, and exclusion rules, not only the metric's name
  - Says why it is the core metric rather than an easily optimized surface number
  - Gives a concrete example where a slightly different definition would lead to a different conclusion
  - Says how the definition is recorded so that others can recompute it
primaryCapability: value-direction.metrics-causality
topics: [metrics, product-thinking]
roles:
  - product
  - operations
  - data
  - engineering
  - marketing
  - frontend
  - backend
  - mobile
  - ai-engineer
responsibilityScopes: [individual, team]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: [interview, promotion, hiring]
formats: [knowledge, case]
followUps:
  - Has the definition changed once? How was historical data handled?
  - If two teams report the same metric with different definitions, what do you do?
source:
  - attribution: original
    label: "The author's interview sequence: definition of the core metric"
---
