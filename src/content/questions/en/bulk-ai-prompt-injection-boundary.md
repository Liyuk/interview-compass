---
questionId: bulk-ai-prompt-injection-boundary
kind: question
status: published
locale: en
title: Retrieved content tries to redirect an agent
question: >-
  An agent reads external pages and can call internal tools; one page asks it to reveal data or change its instructions.
  How would you define trust boundaries and verify safeguards?
intent: Examine whether retrieved text is treated as untrusted input and tool privileges and consequences are bounded.
signals:
  - Distinguishes trust levels for system policy, user requests, and retrieved content
  - Limits tool authorization, parameter scope, and confirmation for sensitive actions
  - Designs tests for indirect injection and data-exfiltration paths
  - Treat tool output as data rather than instructions.
  - Limit information exposure, parameters, and side-effect scope.
  - Log policy decisions and test attack paths and safe failure.
primaryCapability: professional.quality-security-safety
topics:
  - ai-engineering
  - security
  - reliability
roles:
  - ai-engineer
  - backend
  - product
  - engineering
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
    label: Landed AI Engineer Interview：提示注入与工具安全
    url: https://github.com/landedjobs/awesome-ai-engineer-interview
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 A
followUps:
  - >-
    【How do you isolate malicious content returned by a tool?】An agent calls a web-search tool, and a page tries to
    induce it to send internal data. The tool service is trusted, but its returned content is not. How would you
    establish boundaries?
  - Can sensitive information be sent to an external tool after explicit user authorization?
  - How would you evaluate security blocks against task completion?
---
