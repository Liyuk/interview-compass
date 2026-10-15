---
questionId: bulk-ai-agent-budget-and-loop
kind: question
status: published
locale: en
title: Agent loops and budget control
question: >-
  A multi-step agent repeatedly calls tools on some tasks, making latency and token cost unpredictable. What runtime
  limits and stopping conditions would you design?
intent: See how task completion, resource caps, loop detection, and explainable termination are balanced.
signals:
  - "Set per-task limits for duration, tool calls, steps, and cost."
  - "Distinguish recoverable failures from repeated calls without progress, and define stopping conditions."
  - "Identify redundant retrieval or steps and verify that optimization preserves task success."
  - "Explain partial results, next steps, and audit records when a budget is exhausted."
primaryCapability: professional.ai-engineering
topics:
  - ai-engineering
  - reliability
  - metrics
  - product-thinking
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
  - promotion
formats:
  - case
source:
  - attribution: inspired
    label: Landed AI Engineer Interview：Agent 运行治理
    url: https://github.com/landedjobs/awesome-ai-engineer-interview
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 C
followUps:
  - >-
    An agent completes customer tasks but averages 18 tool calls, raising cost and failure probability. How would you
    improve efficiency without harming success?
---
