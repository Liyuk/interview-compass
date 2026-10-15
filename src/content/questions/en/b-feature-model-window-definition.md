---
questionId: b-feature-model-window-definition
kind: question
status: published
locale: en
title: Define a reproducible and shareable feature contract
question: >-
  Several teams need a “30-day spend” feature, but disagree on calendar days versus rolling hours, refund
  handling, and what information was available at the prediction time. How would you define a reproducible
  contract and decide whether to share one feature or maintain distinct versions?
intent: >-
  Assesses whether you make the entity grain, window, time semantics, exclusion rules, and use case explicit
  in a reproducible and traceable feature contract.
signals:
  - Defines entity grain, calendar-day or rolling windows, timezone, and prediction time
  - Specifies refunds, cancellations, late data, deduplication, and missing-value semantics
  - Distinguishes a shared definition, configurable parameters, and genuinely different business concepts
  - Makes definitions discoverable and versioned, with consumers and historical changes traceable
primaryCapability: domain-modeling.feature-model
topics:
  - feature-modeling
  - metrics
roles:
  - data
  - product
  - ai-engineer
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
scenarios:
  - interview
  - campus
formats:
  - case
followUps:
  - If two teams get different values under the same name, how would you locate the definition mismatch?
  - When the definition changes, how would you keep historical trends and model inputs interpretable?
  - What evidence would justify reuse, and when should two feature definitions remain separate?
relatedQuestions:
  - questionId: b-feature-model-time-semantics
    relation: >-
      Also about defining a feature, but moving from the correctness of the point in time to the completeness
      of definition details.
    contrast: >-
      This question is about window, deduplication, exclusions, and missing values; the related one is about
      cutoff time and information leakage.
source:
  - attribution: derived
    label: 'Data metrics guide (4): a metric dictionary template that makes definitions recomputable'
    url: >-
      https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2021/04/metric-dictionary-template/zh.md
  - attribution: inspired
    label: dataskew-io/data-engineering-interview-questions：时间点一致性与特征可复算
    url: https://github.com/dataskew-io/data-engineering-interview-questions
---
