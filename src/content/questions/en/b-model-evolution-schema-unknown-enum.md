---
questionId: b-model-evolution-schema-unknown-enum
kind: question
status: published
locale: en
title: How do you evolve a cross-team contract when consumers fail on a new enum value?
question: A producer adds an order status, and an old consumer rejects the whole message because enum validation is strict. Teams disagree over who must update, and consumers have different owners. How would you design compatibility and rollout order?
intent: Assess whether you handle unknown values, versioning, consumer contract tests, and deployment coordination as an evolution problem.
signals:
  - Specify semantics for new, deprecated, and unknown values.
  - Allow consumers to safely ignore, retain, or quarantine unknown values.
  - Use a compatible-first rollout and cross-team verification.
primaryCapability: domain-modeling.model-evolution
topics:
  - data-modeling
  - programming-languages
  - reliability
  - operations
roles:
  - backend
  - data
  - product
  - engineering
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - hiring
  - operations-review
  - promotion
formats:
  - system-design
  - case
followUps:
  - Which status changes affect business flow and cannot be silently ignored?
  - How do you check compatibility across independently owned consumers?
  - 【How should a serialization format handle unknown fields and enum values?】A service needs a rolling upgrade, and older consumers may receive fields or enum values added by a newer version. How would you design compatibility and verify rollout order?
  - Can an unknown enum be silently mapped to a default?
  - How would you roll back after new values are persisted?
  - 【What if old reports misclassify a newly added enum state?】The system adds a “pending human review” state, while older consumers map unknown values to “complete,” inflating operations metrics. How would you govern state evolution?
  - Which read paths should stop processing on an unknown state?
  - How should consumers be notified and upgrades verified?
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 H
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 A
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 B
---
