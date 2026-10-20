---
questionId: "ai-governance-release-gate-risk-thresholds"
kind: "question"
status: "published"
primaryCapability: "professional.ai-evaluation-governance"
scenarios: ["interview","hiring","promotion"]
source: [{"attribution":"original","label":"Interview Compass 原创扩充批次 2026-10-15 A"}]
locale: "en"
title: "Average AI quality meets the target, but a few high-risk errors can cause harm. How would you set the release gate?"
question: "Average AI quality meets the target, but a few high-risk errors can cause harm. How would you set the release gate?"
intent: "Assesses whether you include severity, likelihood, detectability, and mitigation in a release decision instead of relying on an average score."
signals: ["Separate error classes by impact and reversibility so averages cannot hide severe tails","Set distinct quality floors, risk ceilings, human-review rules, and blocking conditions","Estimate incidence from realistic cases and explain statistical uncertainty","Name who may accept residual risk and how monitoring and rollback will work"]
topics: ["ai-engineering","risk-management","metrics"]
roles:
  - ai-engineer
  - product
  - manager
  - engineering
  - frontend
  - backend
  - mobile
  - data
responsibilityScopes: ["team","multiple-teams"]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
formats: ["planning","case"]
followUps: ["What evidence could justify an exception when the business asks to ship on time?","How would you decide when the sample is too small to establish low risk?"]
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
