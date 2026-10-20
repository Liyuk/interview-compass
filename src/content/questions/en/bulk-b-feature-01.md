---
questionId: bulk-b-feature-01
kind: question
status: published
locale: en
title: Two features called “spend in the last 30 days” use different boundaries. Should they be shared?
question: >-
  Recommendation and risk teams both need a “spend in the last 30 days” feature, but one uses calendar days
  and the other a rolling hour window, and refund handling differs. How would you decide whether the
  definition can be shared?
intent: >-
  Understand whether the candidate treats time semantics, business meaning, and usage context as part of a
  feature contract.
signals:
  - Defines entity grain, calendar or rolling windows, endpoint inclusion, time zones, and cadence.
  - >-
    Explains refunds, cancellation, late data, deduplication, and no-history semantics instead of
    defaulting to zero.
  - Compares shared definitions, parameterized reuse, and distinct features by consumer needs.
  - Versions owners and consumer relations, reconciling batch and online boundary examples.
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
  - backend
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
  - artifact-review
source:
  - attribution: inspired
    label: dataskew-io/data-engineering-interview-questions：时间点一致性与特征可复算
    url: https://github.com/dataskew-io/data-engineering-interview-questions
  - attribution: derived
    label: 'Data metrics guide (4): a metric dictionary template that makes definitions recomputable'
    url: >-
      https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2021/04/metric-dictionary-template/zh.md
  - attribution: original
    label: Interview Compass Original Expansion to 1,500 — Batch B
followUps:
  - If two teams get different values under the same name, how would you locate the definition mismatch?
  - When the definition changes, how would you keep historical trends and model inputs interpretable?
  - What evidence would justify reuse, and when should two feature definitions remain separate?
  - If real-time updates are too costly, which approximate refresh strategies could be acceptable?
  - How would you communicate a feature's data cutoff to model consumers?
relatedQuestions:
  - questionId: b-feature-model-time-semantics
    relation: >-
      Also about defining a feature, but moving from the correctness of the point in time to the completeness
      of definition details.
    contrast: >-
      This question is about window, deduplication, exclusions, and missing values; the related one is about
      cutoff time and information leakage.
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
