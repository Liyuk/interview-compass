---
questionId: bulk-b-feature-02
kind: question
status: published
locale: en
title: Why does a feature differ between training and live serving?
question: >-
  A risk value is usually present in training data, but live serving often substitutes a default and model
  performance fluctuates. How would you find whether the cause is data collection, timing, missing-value
  handling, or implementation differences?
intent: >-
  Assess whether you can trace data sources, time windows, and computations to explain why training and live
  serving use different values.
signals:
  - Compares training and serving sources, filters, joins, calculation windows, and versions.
  - Separates a real zero from missing data and from collection or computation failures.
  - Checks default rates and their impact across user groups and model outcomes.
  - Proposes repeatable sample comparisons, monitoring, and release validation.
primaryCapability: domain-modeling.feature-model
topics:
  - feature-modeling
  - data-modeling
  - ai-engineering
  - metrics
roles:
  - data
  - ai-engineer
  - engineering
  - backend
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - operations-review
  - hiring
  - promotion
formats:
  - case
  - system-design
source:
  - attribution: inspired
    label: dataskew-io/data-engineering-interview-questions：特征新鲜度与训练服务一致性
    url: https://github.com/dataskew-io/data-engineering-interview-questions
  - attribution: inspired
    label: GitHub 数据工程与 AI 工程题目主题调研；题目为本站独立编写
    url: https://github.com/dataskew-io/data-engineering-interview-questions
  - attribution: original
    label: Interview Compass Original Expansion to 1,500 — Batch A/B
followUps:
  - >-
    If a missing online feature is set to zero and denial rates suddenly change, what data would you check
    first?
  - How would you verify that training data does not use information unavailable at prediction time?
  - >-
    If training and serving cannot share the same computation code, how would you keep their results
    consistent?
relatedQuestions: []
---
