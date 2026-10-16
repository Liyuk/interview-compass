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
  - Clarify service objectives, error-budget window, and burn rate
  - Match release freezes, throttling, or added monitoring to change risk
  - Assess reliability work against user impact and business commitments
  - Set evidence gates to resume releases and review exceptions
  - Confirm burn rate and user impact.
  - Make exception owners explicitly accept risk and duration.
  - Set verifiable service-restoration goals and review dates.
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
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
  - team-manager
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
---
