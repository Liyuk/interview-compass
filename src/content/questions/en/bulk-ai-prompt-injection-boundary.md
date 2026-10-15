---
questionId: bulk-ai-prompt-injection-boundary
kind: question
status: published
locale: en
title: Retrieved content tries to redirect an agent
question: >-
  An agent reads external pages and can call internal tools; one page asks it to reveal data or
  change its instructions. How would you define trust boundaries and verify safeguards?
intent: >-
  Examine whether retrieved text is treated as untrusted input and tool privileges and consequences
  are bounded.
signals:
  - Distinguishes trust levels for system policy, user requests, and retrieved content
  - Limits tool authorization, parameter scope, and confirmation for sensitive actions
  - Designs tests for indirect injection and data-exfiltration paths
primaryCapability: professional.ai-engineering
topics:
  - ai-engineering
  - security
  - reliability
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
  - case
source:
  - attribution: inspired
    label: Landed AI Engineer Interview：提示注入与工具安全
    url: https://github.com/landedjobs/awesome-ai-engineer-interview
---
