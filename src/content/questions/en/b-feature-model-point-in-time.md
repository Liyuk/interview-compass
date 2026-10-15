---
questionId: b-feature-model-point-in-time
kind: question
status: published
locale: en
title: 'Temporal leakage: verifying features were available at prediction time'
question: >-
  Offline training looks strong, but the model performs much worse in production. Investigation suggests that
  features or labels may include information created or backfilled after the prediction time. How would you
  rebuild time-consistent snapshots, verify leakage, and fix it?
intent: >-
  Assesses whether you define prediction time and label windows, ensure each training example uses only
  information available then, and make offline evaluation reflect online decisions.
signals:
  - Reconstructs prediction time, feature availability, and label observation windows
  - Checks event and update timestamps, backfills, and join conditions
  - Recomputes results with point-in-time queries and compares performance before and after leakage is removed
  - Adds tests and data contracts that prevent future feature or label information from entering training
primaryCapability: domain-modeling.feature-model
topics:
  - feature-modeling
  - ai-engineering
  - data-modeling
roles:
  - data
  - ai-engineer
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - hiring
formats:
  - debugging
  - case
followUps:
  - >-
    If a historical backfill changes what appears available at an earlier time, how would you detect
    contaminated examples?
  - >-
    If offline metrics fall after fixing leakage, how would you distinguish the correction from a real model
    regression?
source:
  - attribution: inspired
    label: Dataskew 数据工程题库的主题覆盖；题面为本站独立编写
    url: https://github.com/dataskew-io/data-engineering-interview-questions
  - attribution: inspired
    label: GitHub 数据工程与 AI 工程题目主题调研；题目为本站独立编写
    url: https://github.com/dataskew-io/data-engineering-interview-questions
---
