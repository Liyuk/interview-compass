---
questionId: bulk-b-data-01
kind: question
status: published
locale: en
title: >-
  A customer operates through several organization accounts. How would you define customer grain for
  analysis?
question: >-
  An enterprise customer has multiple organizations, departments, and members, and a member may act
  for different organizations. When designing customer activity analysis, how would you define the
  grain and relationships among customer, account, organization, and user?
intent: >-
  Assess whether the candidate first clarifies the analytical object and entity relationships
  instead of using unstable account counts as a proxy for business customers.
signals:
  - Distinguishes the business meaning of customer, organization, account, and person
  - Explains relationship cardinality, temporal validity, and merge or split cases
  - Chooses a fact grain that matches the decision and explains aggregation boundaries
primaryCapability: domain-modeling.data-model
topics:
  - data-modeling
  - metrics
  - product-thinking
roles:
  - data
  - product
  - operations
  - engineering
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - promotion
formats:
  - case
  - artifact-review
source:
  - attribution: derived
    label: 数据度量工作指南：先定义测量对象再讨论指标
    url: >-
      https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2021/03/define-the-measurement-before-arguing-about-metrics/zh.md
---
