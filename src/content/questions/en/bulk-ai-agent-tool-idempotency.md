---
questionId: bulk-ai-agent-tool-idempotency
kind: question
status: published
locale: en
title: Agent repeats an external action
question: >-
  An agent sometimes creates duplicate tickets or sends duplicate notifications after a tool times
  out. How would you design the call protocol so retries do not repeat side effects?
intent: Examine idempotency and recovery where model uncertainty meets distributed-call semantics.
signals:
  - Separates a new model decision from a network retry of the same tool request
  - Discusses idempotency keys, operation-status lookup, and result acknowledgment
  - Explains how to pause or ask for human handling when execution status is unknown
primaryCapability: professional.ai-engineering
topics:
  - ai-engineering
  - distributed-systems
  - reliability
roles:
  - ai-engineer
  - backend
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
scenarios:
  - interview
  - hiring
formats:
  - system-design
source:
  - attribution: inspired
    label: Landed AI Engineer Interview：Agent 工具调用可靠性
    url: https://github.com/landedjobs/awesome-ai-engineer-interview
---
