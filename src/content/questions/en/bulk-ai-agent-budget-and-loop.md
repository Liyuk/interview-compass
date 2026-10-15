---
questionId: bulk-ai-agent-budget-and-loop
kind: question
status: published
locale: en
title: Agent loops and budget control
question: >-
  A multi-step agent repeatedly calls tools on some tasks, making latency and token cost
  unpredictable. What runtime limits and stopping conditions would you design?
intent: See how task completion, resource caps, loop detection, and explainable termination are balanced.
signals:
  - Defines time, call-count, and cost budgets per task
  - Distinguishes recoverable retries from loops that make no progress
  - Explains partial results, user messaging, and audit records when budgets are exhausted
primaryCapability: professional.ai-engineering
topics:
  - ai-engineering
  - reliability
  - metrics
roles:
  - ai-engineer
  - backend
  - product
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
scenarios:
  - interview
  - hiring
formats:
  - case
source:
  - attribution: inspired
    label: Landed AI Engineer Interview：Agent 运行治理
    url: https://github.com/landedjobs/awesome-ai-engineer-interview
---
