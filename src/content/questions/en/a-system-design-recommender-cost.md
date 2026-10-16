---
questionId: a-system-design-recommender-cost
kind: question
status: published
locale: en
title: How do the costs of a recommender system add up, and how would you trade effect against cost?
question: How do the costs of a recommender system add up, including retrieval, ranking, feature serving, storage, and experimentation? How would you trade effect against cost?
intent: See whether you can break a recommender system into stages to understand its cost and trade off by each stage's marginal return.
signals:
  - Explains the source of cost for retrieval, ranking, feature serving, storage, and experimentation separately
  - Says which stage's cost grows fastest with users or candidate volume
  - Compares marginal effect with marginal cost per stage instead of cutting overall
  - Says how a cost optimization is verified by experiment not to have hurt the experience
primaryCapability: professional.system-design
topics: [system-design, ai-engineering, resource-allocation]
roles:
  - ai-engineer
  - backend
  - data
  - engineering
responsibilityScopes: [team, multiple-teams]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: [interview, promotion]
formats: [case, system-design]
followUps:
  - The budget is cut by thirty percent. Which stage do you touch first?
  - How do you show a cost optimization did not quietly hurt long-term metrics?
source:
  - attribution: original
    label: "The author's interview sequence: the cost of a recommender system"
---
