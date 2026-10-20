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
  - Defines evidence behind new and old states without inventing historical shipment or receipt details.
  - Inventories API and report consumers and compares unknown states, mappings, and parallel versions.
  - >-
    Marks comparability and ownership, validating migration with historical examples and consumer
    confirmation.
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
  - frontend
  - backend
  - mobile
  - ai-engineer
responsibilityScopes:
  - multiple-teams
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
  - attribution: inspired
    label: dataskew-io/data-engineering-interview-questions：数据契约变化与消费者兼容
    url: https://github.com/dataskew-io/data-engineering-interview-questions
  - attribution: inspired
    label: GitHub 数据工程与 AI 工程题目主题调研；题目为本站独立编写
    url: https://github.com/dataskew-io/data-engineering-interview-questions
relatedQuestions: []
perspective: interviewer
perspectiveReview: inferred
qualityTier: extended
---
