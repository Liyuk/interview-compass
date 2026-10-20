---
questionId: a-quality-error-budget-release-policy
kind: question
status: published
locale: en
title: "Service failures exceed the allowed range. How should releases and reliability work change?"
question: "Service failures have exceeded the target range, but the business has firm feature commitments. How would you adjust the release pace and investment in reliability?"
intent: >-
  Assesses whether you can turn reliability goals, incident risk, and delivery commitments into a transparent
  release policy.
signals:
  - Checks objectives, windows, burn trends, and user impact beyond current compliance.
  - Compares pauses, traffic limits, stronger checks, and necessary fixes by change risk.
  - States user, reliability, and delivery costs with exception owners and expiry.
  - >-
    Defines recovery gates, review times, and learning beyond indefinite freezes or unconditional
    release.
primaryCapability: professional.quality-security-safety
topics:
  - reliability
  - devops
  - risk-management
roles:
  - engineering
  - backend
  - operations
  - manager
  - frontend
  - mobile
  - ai-engineer
  - data
responsibilityScopes:
  - team
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
  - planning
followUps:
  - >-
    How would you supplement an error-budget metric that misses failures affecting a few high-impact
    customers?
  - Who may approve releases after the budget is exhausted?
  - When might releases continue after budget exhaustion?
  - How do you avoid treating the SLO as an operations-only metric?
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 D
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 A
relatedQuestions: []
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
