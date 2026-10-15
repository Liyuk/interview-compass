---
questionId: a-ai-engineering-traceable-release
kind: question
status: published
locale: en
title: Observability for AI failures with sensitive data controls
question: >-
  Production answers contain incorrect citations or degrade in quality, but prompts and retrieval context may include
  sensitive data and cannot be logged by default. What telemetry would help distinguish retrieval, model, and tool
  failures while controlling data exposure?
intent: >-
  Assesses whether you can build enough traceability and reproduction evidence while applying data minimization,
  redaction, controlled access, and retention limits.
signals:
  - Records reproducible details such as model, prompt template, index, tool versions, and correlated request IDs
  - Uses retrieval statistics, error classes, and safe summaries instead of defaulting to raw prompts
  - Defines redaction, sampling, access, retention, and approval for temporary capture
  - Verifies telemetry can still distinguish retrieval, model, and tool regressions without exposing sensitive content
  - Selects minimal fields such as request IDs, model versions, retrieval statistics, and error classes
  - Defines redaction, sampling, retention, and conditions for controlled temporary capture
  - Verifies telemetry can still distinguish retrieval, model, and tool-chain regressions
primaryCapability: professional.ai-engineering
topics:
  - ai-engineering
  - engineering-systems
  - reliability
  - security
roles:
  - ai-engineer
  - backend
  - engineering
responsibilityScopes:
  - team
  - organization
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - hiring
formats:
  - debugging
  - case
followUps:
  - Without raw prompts, what safe summaries could still help diagnose an incorrect citation?
  - When could temporary sensitive capture be justified, who can access it, and when must it be deleted?
source:
  - attribution: inspired
    label: atryx AI 工程题库的主题覆盖；题面为本站独立编写
    url: https://github.com/atryx/ai-engineer-interview-questions
  - attribution: original
    label: 原创：生成式 AI 观测与敏感数据边界
---
