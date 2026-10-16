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
  - >-
    Defines prediction time, feature cutoff, and observation window instead of only saying “the last seven
    days”
  - Checks event time, update time, label window, and joins for future information leakage
  - Recomputes with point-in-time queries and compares training results
  - Keeps online and offline semantics aligned and reproducible
  - Adds tests that prevent future information from entering training data
  - >-
    Feature snapshots and label leakage：Defines core entities, grain, state, or time semantics without
    conflating concepts
  - Identifies sources of truth, historical retention, and exception paths for the rules
  - Explains how to reconcile, recompute, or validate the model against business meaning
  - Distinguishes event time, ingestion time, and model-visible time
  - Rebuilds examples as of prediction time and tests that backfills stay out
  - Defines the prediction time for each sample and the availability time of each field.
  - Uses point-in-time joins or historical snapshots to prevent future information entering past samples.
  - Compares offline replay with serving logs and identifies features behind inflated metrics.
primaryCapability: domain-modeling.feature-model
topics:
  - feature-modeling
  - data-modeling
roles:
  - data
  - ai-engineer
  - backend
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
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
