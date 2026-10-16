---
questionId: b-feature-model-time-semantics
kind: question
status: published
locale: en
title: How do you make sure a feature never uses information from the future?
question: >-
  You are building a 'days active in the last 7 days' feature for a model that predicts next-day churn. How do
  you define its time semantics so training and online prediction mean the same thing?
intent: >-
  Understand whether you treat a feature as a business definition with time semantics rather than just a
  column of numbers, and can spot information leakage.
signals:
  - Defines prediction time, feature cutoff, seven-day window, and label window.
  - Separates event, ingestion, and model-availability times for source fields and joins.
  - >-
    Compares point-in-time joins, snapshots, or alternatives against future and backfilled information
    leakage.
  - >-
    Reconciles training examples with serving logs and investigates inflated offline metrics or missing
    online values.
  - >-
    Tests window boundaries, late backfills, and future labels for reproducibility and serving
    consistency.
primaryCapability: domain-modeling.feature-model
topics:
  - feature-modeling
  - data-modeling
roles:
  - data
  - ai-engineer
  - backend
  - engineering
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
formats:
  - case
followUps:
  - Was activity from the prediction day available at prediction time, and what effect would data delay have?
  - How would you use point-in-time queries to verify that online and offline values match?
  - >-
    If offline performance is much better than online performance, how would you distinguish time leakage from
    distribution shift?
  - >-
    A model predicts default at midnight, but some business events arrive the next day. How would you define
    feature availability, the label window, and the training cutoff?
  - If a source has update time but no event time, how would you assess the risk?
  - How would you ensure backfills do not change what was historically observable during training?
source:
  - attribution: original
    label: Written from common feature time-semantics modeling problems
  - attribution: inspired
    label: Dataskew 数据工程题库的主题覆盖；题面为本站独立编写
    url: https://github.com/dataskew-io/data-engineering-interview-questions
  - attribution: inspired
    label: GitHub 数据工程与 AI 工程题目主题调研；题目为本站独立编写
    url: https://github.com/dataskew-io/data-engineering-interview-questions
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-17 B
  - attribution: original
    label: Interview Compass Original Expansion to 1,500 — Batch B
relatedQuestions: []
---
