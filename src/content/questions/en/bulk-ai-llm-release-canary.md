---
questionId: bulk-ai-llm-release-canary
kind: question
status: published
locale: en
title: LLM canary release
question: >-
  A new model improves offline evaluation, but answer quality may fall for a small set of high-value
  users. How would you stage a canary, observe it, and decide when to expand traffic?
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
roles:
  - ai-engineer
  - backend
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
formats:
  - planning
source:
  - attribution: inspired
    label: Landed AI Engineer Interview：模型部署与发布评估
    url: https://github.com/landedjobs/awesome-ai-engineer-interview
---
