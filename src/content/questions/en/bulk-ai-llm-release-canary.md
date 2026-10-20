---
questionId: bulk-ai-llm-release-canary
kind: question
status: published
locale: en
title: LLM canary release
question: A new model improves offline evaluation, but answer quality may fall for a small set of high-value users. How would you stage a canary, observe it, and decide when to expand traffic?
intent: See whether offline results, segmented live behavior, cost, and rollback are considered together.
signals:
  - Chooses canary slices that represent high-risk tasks and user segments
  - Sets quality, latency, cost, and safety guardrails
  - Explains which evidence triggers expansion, pause, or rollback
primaryCapability: professional.ai-engineering
topics:
  - ai-engineering
  - devops
  - metrics
  - reliability
roles:
  - ai-engineer
  - backend
  - product
  - data
  - engineering
  - frontend
  - mobile
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
  - planning
  - case
source:
  - attribution: inspired
    label: Landed AI Engineer Interview：模型部署与发布评估
    url: https://github.com/landedjobs/awesome-ai-engineer-interview
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 D
followUps:
  - 【How do you control release risk when offline scores improve but the live cohort shifts?】A new model scores better on a fixed evaluation set, but an incoming customer cohort differs from training data and human review takes days. How would you stage, monitor, and expand rollout?
  - How do you establish launch confidence when high-risk samples are rare?
  - Which live signals can detect distribution shift?
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
