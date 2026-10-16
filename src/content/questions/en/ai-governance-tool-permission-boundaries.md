---
questionId: ai-governance-tool-permission-boundaries
kind: question
status: published
primaryCapability: professional.ai-evaluation-governance
scenarios:
  - interview
  - hiring
  - promotion
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 A
  - attribution: inspired
    label: GitHub 技术面试与工程体系调研；题目为本站独立编写
    url: https://github.com/yangshun/tech-interview-handbook
  - attribution: original
    label: Interview Compass Original Expansion to 1,500 — Batch A
locale: en
title: >-
  An AI assistant can call internal tools, but tasks require different permissions. How would you design
  authorization and audit?
question: >-
  An AI assistant can call internal tools, but tasks require different permissions. How would you design
  authorization and audit?
intent: >-
  Assesses whether you can contain model uncertainty within least-privilege boundaries and control
  authorization, execution, and accountability.
signals:
  - >-
    Distinguishes read, write, and external-send actions and proposing, authorizing, and executing
    actors.
  - Scopes permission to tasks, resources, recipients, parameters, and time with runtime verification.
  - Compares previews, confirmation, dual approval, and refusal by risk and interaction cost.
  - >-
    Records intent, versions, authorization, results, and uncertainty with bounded reversal or
    remediation.
  - >-
    Tests unauthorized access, permission changes, duplicates, and timeouts for least privilege and safe
    pause.
topics:
  - ai-engineering
  - security
  - boundaries
roles:
  - ai-engineer
  - backend
  - product
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
formats:
  - system-design
  - case
followUps:
  - How could urgent automation reduce confirmation steps without expanding privilege?
  - How would you prevent prompt injection from abusing an authorized tool?
  - Which actions can be authorized in bulk, and which require item-by-item confirmation?
  - If the model chooses the wrong recipient, what remediation responsibility should the system carry?
relatedQuestions: []
---
