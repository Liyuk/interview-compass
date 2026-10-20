---
questionId: b-data-model-financial-adjustment-lineage
kind: question
status: published
locale: en
title: How do you preserve traceability when refunds and corrections arrive after financial close?
question: >-
  A monthly close report was sent to leadership. Days later, a late refund and price correction arrive. The
  business wants current figures updated, while finance must explain the prior report. How would you model this?
intent: Assess whether you preserve event time, accounting period, version, and restatement history.
signals:
  - Distinguish transaction time, posting time, and report snapshot time.
  - Link adjustment events to corrected facts and record reasons.
  - Support current recomputation and exact reconstruction of the past report.
primaryCapability: domain-modeling.data-model
topics:
  - data-modeling
  - databases
  - metrics
roles:
  - data
  - backend
  - operations
  - engineering
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
  - behavioral
followUps:
  - When should a closed period be reopened?
  - How do report readers know whether a figure is restated or as originally reported?
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 J
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
