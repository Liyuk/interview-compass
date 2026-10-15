---
questionId: bulk-b-feature-02
kind: question
status: published
locale: en
title: A feature has very different missingness offline and online. How would you locate semantic drift?
question: >-
  A user-risk feature has sharply different missing rates and value distributions in online serving
  versus training data, and model performance fluctuates. How would you determine whether the cause
  is collection coverage, computation windows, defaults, or inconsistent offline and online
  implementations?
intent: >-
  Assess whether the candidate diagnoses consistency from feature definition through its generation
  pipeline instead of focusing only on model metrics.
signals:
  - Checks definition differences across source, filters, joins, windows, and defaults
  - Compares data availability and statistical distributions between training and serving
  - Proposes validation that separates semantic mismatch from operational failure
primaryCapability: domain-modeling.feature-model
topics:
  - feature-modeling
  - data-modeling
  - ai-engineering
roles:
  - data
  - ai-engineer
  - engineering
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - operations-review
formats:
  - case
source:
  - attribution: inspired
    label: dataskew-io/data-engineering-interview-questions：特征新鲜度与训练服务一致性
    url: https://github.com/dataskew-io/data-engineering-interview-questions
---
