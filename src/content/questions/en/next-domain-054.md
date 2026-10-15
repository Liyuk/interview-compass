---
questionId: next-domain-054
kind: question
status: published
locale: en
title: What if model consumers need historical feature values but serving keeps only the latest?
question: Risk teams need to reproduce decision inputs from three months ago, but the online feature store keeps only the latest state to save cost. How would you balance reproducibility and storage cost?
intent: Assesses point-in-time feature access, retention policy, and accountability needs.
signals:
  - Separate needs for inference, training replay, and audit.
  - Compare full history, sampled snapshots, and recomputation.
  - Set retention, cost budget, and missing-history behavior.
primaryCapability: domain-modeling.feature-model
topics:
  - feature-modeling
  - data-modeling
roles:
  - data
  - product
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - hiring
  - promotion
formats:
  - case
followUps:
  - Which high-risk decisions require exact input retention?
  - How would you verify recoverability after compression or archival?
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 B
---
