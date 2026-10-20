---
questionId: bulk-b-data-02
kind: question
status: published
locale: en
title: How would you preserve consistent service-quality analysis when support cases are merged or split?
question: >-
  Support agents merge duplicate tickets and sometimes split a complex issue into several cases.
  When modeling service-quality data, how would you define the issue, ticket, contact, and
  resolution?
intent: >-
  Understand whether the candidate chooses analytical objects that are not distorted by workflow
  operations while preserving operational history.
signals:
  - Separates customer issues, ticket records, communication contacts, and final resolution
  - Preserves identity links and auditability across merges and splits
  - Explains which measurement unit fits different quality metrics
primaryCapability: domain-modeling.data-model
topics:
  - data-modeling
  - databases
  - metrics
roles:
  - data
  - product
  - engineering
  - backend
  - ai-engineer
responsibilityScopes:
  - team
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
  - artifact-review
source:
  - attribution: derived
    label: 指标字典模板：把定义变成可复算的协作接口
    url: >-
      https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2021/04/metric-dictionary-template/zh.md
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
