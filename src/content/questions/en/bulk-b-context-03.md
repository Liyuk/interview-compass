---
questionId: bulk-b-context-03
kind: question
status: published
locale: en
title: Operations, product, and finance interpret a promotion’s status differently. How would you align the model?
question: >-
  After a promotion ends, operations considers the campaign complete, product sees orders still being
  fulfilled, and finance says settlement is not yet possible. How would you define each party’s objects,
  states, and state transitions?
intent: >-
  See how the candidate separates a shared business process into concepts with clear meaning and boundaries
  that support collaboration.
signals:
  - Recognizes campaigns, orders, fulfillment, and settlement as related but distinct objects
  - Defines state semantics and valid transitions for each object
  - Explains relationships and who handles state divergence
primaryCapability: domain-modeling.product-project-model
topics:
  - product-thinking
  - data-modeling
  - operations
roles:
  - product
  - operations
  - data
  - engineering
  - frontend
  - backend
  - mobile
  - ai-engineer
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - promotion
formats:
  - case
source:
  - attribution: derived
    label: 产品判断：将跨职能流程画成可讨论的模型
    url: >-
      https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2022/02/engineer-product-judgment/zh.md
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
