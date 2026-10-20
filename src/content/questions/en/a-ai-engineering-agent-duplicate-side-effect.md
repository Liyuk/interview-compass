---
questionId: a-ai-engineering-agent-duplicate-side-effect
kind: question
status: published
locale: en
title: How can an AI assistant avoid duplicate or unauthorized actions after a refund request times out?
question: An AI assistant can create tickets, issue refunds, or change accounts on a user's behalf. A refund request times out, and the system cannot tell whether it completed; retrying may issue a second refund. How would you check the outcome, control retries, and ensure actions stay within the user's authorization?
intent: Assess whether you can separate an AI assistant's decisions from real actions and handle unknown outcomes, retries, and permission changes safely.
signals:
  - Distinguishes safe-to-retry queries from side effects such as refunds, and states the authorization each requires.
  - Uses an idempotency key for one user intent and explains how the service recognizes a network retry of that request.
  - Verifies timeouts, partial completion, or unknown status before acting; pauses and reconciles when the result cannot be confirmed.
  - Stops pending actions when authorization changes and assigns responsibility for compensating completed actions.
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
scenarios:
  - interview
  - hiring
  - operations-review
formats:
  - system-design
  - case
followUps:
  - If the partner supports neither duplicate protection nor a status query, how would you pause, verify, and recover the task?
  - How would you tell the user the task is still processing without presenting an unknown state as complete?
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
perspective: candidate
perspectiveReview: reviewed
qualityTier: core
weakAnswer: Retries every timeout and treats a refund initiated again by the model as a network retry.
anchors:
  notPassing: Treats retries after a timeout as safe and does not distinguish completed, failed, and unknown states.
  passing: Uses an idempotency key or status query to prevent duplicate refunds.
  excellent: Designs retries, pauses, and confirmation around authorization and side-effect severity.
  exceptional: Handles permission changes and unqueryable partner state with reconciliation and clear recovery ownership.
---
