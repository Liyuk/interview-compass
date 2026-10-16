---
questionId: ai-governance-uncertainty-safe-fallback
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
locale: en
title: >-
  When the model cannot establish an answer, should the product refuse, return a low-confidence result, or
  escalate to a person? What distinguishes the choices?
question: >-
  When the model cannot establish an answer, should the product refuse, return a low-confidence result, or
  escalate to a person? What distinguishes the choices?
intent: >-
  Assesses whether you can design safe degradation based on error cost, evidence quality, and available
  alternatives.
signals:
  - Differentiate error costs by task consequence and reversibility
  - Use calibrated evidence or confidence signals, not the model’s confident tone
  - Define when to refuse, clarify, fall back to deterministic workflows, or hand off
  - Monitor downstream outcomes such as abandonment, misuse, and escalation
  - >-
    Identify the key mechanisms, state boundaries, and failure conditions in “Uncertainty boundaries in model
    output,” including missing assumptions.
  - Compare feasible approaches across correctness, performance, compatibility, cost, and recoverability.
  - >-
    Design tests, runtime evidence, or rollback criteria that validate the diagnosis and cover boundary
    failures.
topics:
  - ai-engineering
  - reliability
  - risk-management
roles:
  - ai-engineer
  - product
  - operations
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
  - team-manager
formats:
  - system-design
  - case
followUps:
  - How should the system degrade safely if its low-confidence estimate is itself unreliable?
  - How should excessive refusal be evaluated if users turn to riskier channels?
relatedQuestions: []
---
