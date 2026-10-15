---
questionId: bulk-b-data-05
kind: question
status: published
locale: en
title: >-
  The company wants one definition of an “active customer.” How would you avoid erasing real
  business differences?
question: >-
  Business units use an “active customer” metric, but some define it by payment, others by usage,
  and others by likelihood to renew. How would you decide which definitions should be standardized
  and which should remain distinct concepts?
intent: >-
  Assess whether the candidate balances cross-team comparability with local business meaning instead
  of assuming that a shared label measures the same thing.
signals:
  - Asks which decision, entity, time window, and exclusion rules the metric serves
  - Identifies same-name/different-meaning and different-name/same-meaning cases
  - Proposes governance for a shared core definition alongside business-specific derivatives
primaryCapability: domain-modeling.data-model
topics:
  - data-modeling
  - metrics
  - product-thinking
roles:
  - data
  - product
  - operations
responsibilityScopes:
  - multiple-teams
  - organization
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - promotion
formats:
  - case
  - planning
source:
  - attribution: derived
    label: 数据度量工作指南：指标定义需要可复算
    url: >-
      https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2021/04/metric-dictionary-template/zh.md
---
