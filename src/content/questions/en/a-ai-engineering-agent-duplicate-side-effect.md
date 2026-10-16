---
questionId: a-ai-engineering-agent-duplicate-side-effect
kind: question
status: published
locale: en
title: How can an AI assistant avoid duplicate or unauthorized actions after a refund request times out?
question: >-
  An AI assistant can create tickets, issue refunds, or change accounts on a user's behalf. A refund request times out,
  and the system cannot tell whether it completed; retrying may issue a second refund. How would you check the outcome,
  control retries, and ensure actions stay within the user's authorization?
intent: Assess whether you can separate an AI assistant's decisions from real actions and handle unknown outcomes, retries, and permission changes safely.
signals:
  - Separates information lookup from actions that change data or charge money.
  - Gives each action a unique request ID and explains how to detect a duplicate, check its status, or ask a person before repeating it.
  - Sets confirmation requirements based on permission and potential harm.
  - Explains how to recover or pause after a timeout, partial completion, or unknown result.
  - Distinguishes retrying the same network request from the assistant deciding to take the action again.
  - Explains how changed permissions stop actions that have not run and how completed steps are handled.
primaryCapability: professional.ai-engineering
topics:
  - ai-engineering
  - reliability
  - security
  - distributed-systems
roles:
  - ai-engineer
  - backend
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
  - operations-review
formats:
  - system-design
  - case
followUps:
  - If a partner cannot detect duplicate requests and its status service is unavailable, how would you pause, verify, and resume the task?
  - How would you tell the user that a task is still in progress without claiming it has completed?
source:
  - attribution: inspired
    label: atryx AI 工程题库的主题覆盖；题面为本站独立编写
    url: https://github.com/atryx/ai-engineer-interview-questions
  - attribution: inspired
    label: Landed AI Engineer Interview：Agent 工具调用可靠性
    url: https://github.com/landedjobs/awesome-ai-engineer-interview
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 H
relatedQuestions: []
---
