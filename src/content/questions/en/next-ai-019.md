---
questionId: next-ai-019
kind: question
status: published
locale: en
title: What if an offline evaluation set contains many near-duplicate cases?
question: The evaluation set has grown, but many items are slight rewrites of one template, making model scores look stable. How would you audit sample quality?
intent: Assesses evaluation coverage, independence, and confidence rather than sample count alone.
signals:
  - Cluster samples by task goal, scenario, and failure mode.
  - Estimate how duplication affects metrics and confidence intervals.
  - Add independent sources, hard cases, and minority-group cases.
primaryCapability: professional.ai-engineering
topics:
  - ai-engineering
  - metrics
roles:
  - ai-engineer
  - product
  - engineering
  - data
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - hiring
  - promotion
formats:
  - case
followUps:
  - How would you distinguish useful variants from near-duplicates?
  - Who should review evaluation-set representativeness?
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 A
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
