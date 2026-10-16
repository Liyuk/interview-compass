---
questionId: bulk-c-metrics-03
kind: question
status: published
locale: en
title: An experiment improves the primary metric while complaints and refunds rise. How would you evaluate it?
question: >-
  A checkout experiment improves payment completion, but complaints and refunds also increase. How would you
  judge whether the experiment succeeded, and how long would you wait before deciding?
intent: >-
  Understand whether the candidate evaluates primary, guardrail, and delayed negative outcomes within one
  decision framework.
signals:
  - >-
    Verify payment, complaint, and refund definitions, segments, and windows, separating immediate gains
    from delayed harm.
  - >-
    Check samples, allocation, amounts, and task severity, comparing counts and rates rather than
    treating concurrent change as causation.
  - >-
    Examine mechanisms and alternatives for gains, refunds, and trust losses, stating which outcomes
    remain immature.
  - >-
    Use guardrails and risk to continue, limit, pause, or adjust, with follow-up windows and decision
    authority.
primaryCapability: value-direction.metrics-causality
topics:
  - metrics
  - growth-experiments
  - risk-management
roles:
  - product
  - data
  - operations
  - marketing
  - engineering
  - frontend
  - backend
  - mobile
  - ai-engineer
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - operations-review
formats:
  - case
source:
  - attribution: derived
    label: 指标分级：先服务最重要的决策
    url: >-
      https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2021/04/metric-tiers-prioritize-decisions/zh.md
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 D
followUps:
  - How should short-term training cost compare with longer-term gains?
  - How do you avoid improving metrics by under-recording complaints?
relatedQuestions: []
---
