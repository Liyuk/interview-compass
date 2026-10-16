---
questionId: bulk-b-model-evolution-02
kind: question
status: published
locale: en
title: A supplier splits “delivered” into “dispatched” and “received.” How would you handle historical meaning?
question: >-
  A supplier API replaces one “delivered” status with “dispatched” and “received,” but historical data has no
  basis for distinguishing them. How would you update the domain model, external contract, and related
  reporting?
intent: >-
  Assess whether the candidate separates newly available information from information that can be derived from
  old data and states the evidence boundary clearly.
signals:
  - Avoids fabricating historical status detail that was never observable
  - Designs a compatible transition and an upgrade path for downstream consumers
  - States comparability limits between old and new data and how reports will explain them
  - >-
    Define the business entities, grain, states, and time semantics involved in “Historical interpretation
    during state-model migration.”
  - >-
    Trace sources of truth, rule owners, historical changes, and exception paths without conflating concepts
    or responsibility.
  - >-
    Explain how examples, reconciliation, recomputation, or audit records would verify that the model
    preserves business meaning.
primaryCapability: domain-modeling.model-evolution
topics:
  - data-modeling
  - product-thinking
  - risk-management
roles:
  - product
  - data
  - engineering
  - operations
responsibilityScopes:
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - promotion
formats:
  - case
source:
  - attribution: inspired
    label: dataskew-io/data-engineering-interview-questions：数据契约变化与消费者兼容
    url: https://github.com/dataskew-io/data-engineering-interview-questions
  - attribution: inspired
    label: GitHub 数据工程与 AI 工程题目主题调研；题目为本站独立编写
    url: https://github.com/dataskew-io/data-engineering-interview-questions
relatedQuestions: []
---
