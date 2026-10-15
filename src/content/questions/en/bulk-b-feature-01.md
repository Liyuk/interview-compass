---
questionId: bulk-b-feature-01
kind: question
status: published
locale: en
title: Two features called “spend in the last 30 days” use different boundaries. Should they be shared?
question: >-
  Recommendation and risk teams both need a “spend in the last 30 days” feature, but one uses calendar days and the
  other a rolling hour window, and refund handling differs. How would you decide whether the definition can be shared?
intent: >-
  Understand whether the candidate treats time semantics, business meaning, and usage context as part of a feature
  contract.
signals:
  - Clarifies window boundaries, time zone, refunds, and late-data rules
  - Distinguishes a shared concept with different parameters from genuinely different features
  - Designs a discoverable, versioned definition with consumer traceability
primaryCapability: domain-modeling.feature-model
topics:
  - feature-modeling
  - metrics
  - data-modeling
roles:
  - data
  - ai-engineer
  - product
  - engineering
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
scenarios:
  - interview
  - promotion
formats:
  - case
  - artifact-review
source:
  - attribution: inspired
    label: dataskew-io/data-engineering-interview-questions：时间点一致性与特征可复算
    url: https://github.com/dataskew-io/data-engineering-interview-questions
---
