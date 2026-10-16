---
questionId: a-ai-tool-permission-change-mid-run
kind: question
status: published
locale: en
title: How do you prevent tool overreach when user permissions change during an agent run?
question: >-
  A multi-step agent reads project permissions at startup. Before step three, the user is removed from the project,
  but the task still holds a tool token. How would you design authorization checks and cancellation semantics?
intent: >-
  Assess whether your tool design includes identity, short-lived credentials, runtime revocation, and side-effect
  boundaries.
signals:
  - Specify whether permissions are checked at task start or every tool call.
  - Shorten credential lifetime and restrict reachable resources and actions.
  - Define revocation propagation, in-flight cancellation, and remediation for completed side effects.
primaryCapability: professional.ai-engineering
topics:
  - ai-engineering
  - security
  - distributed-systems
roles:
  - ai-engineer
  - backend
  - engineering
  - frontend
  - mobile
  - data
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
  - case
  - behavioral
followUps:
  - Which tool calls should require step-by-step confirmation?
  - How do you audit agent actions before and after an authorization change?
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 E
---
