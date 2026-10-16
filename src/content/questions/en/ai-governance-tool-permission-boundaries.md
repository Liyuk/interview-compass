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
  - Classify read, write, and external-send operations by risk and authority
  - Use task-scoped grants, least privilege, explicit confirmation, or dual approval
  - Validate parameters and target resources instead of treating model text as commands
  - Log the actor, intent, parameters, result, and revocation path
  - >-
    Identify the key mechanisms, state boundaries, and failure conditions in “Tool permissions that vary with
    context,” including missing assumptions.
  - Compare feasible approaches across correctness, performance, compatibility, cost, and recoverability.
  - >-
    Design tests, runtime evidence, or rollback criteria that validate the diagnosis and cover boundary
    failures.
  - Scopes authorization to a task, object, recipient, and time window.
  - Sets preview, confirmation, or rejection requirements based on risk and reversibility.
  - >-
    Records model suggestions and user authorization and provides execution status, remediation, and audit
    trails.
topics:
  - ai-engineering
  - security
  - boundaries
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
