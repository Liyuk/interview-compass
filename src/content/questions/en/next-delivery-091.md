---
questionId: next-delivery-091
kind: question
status: published
locale: en
title: What if downstream systems report success on delayed source data?
question: Upstream events are delayed by hours, while downstream reports still show success and customers make incorrect decisions. How would you design freshness states and notifications?
intent: Assesses data freshness, service commitments, and user-risk communication.
signals:
  - Distinguish successful, partial, stale, and unknown states.
  - Set freshness objectives by data-product use.
  - Expose impact scope and recovery expectations during incidents.
primaryCapability: delivery.reliability-incidents
topics:
  - reliability
  - data-modeling
roles:
  - data
  - operations
  - engineering
  - frontend
  - backend
  - mobile
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
  - hiring
  - promotion
formats:
  - case
followUps:
  - Is displaying old data safer than hiding it?
  - How do you prevent users from interpreting “no change” as “no delay”?
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 B
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
