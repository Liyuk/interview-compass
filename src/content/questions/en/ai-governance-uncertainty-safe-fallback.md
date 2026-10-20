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
  - >-
    Assesses error costs by consequences, recoverability, and alternatives rather than one confidence
    value.
  - Compares calibrated evidence, retrieval support, and unknowns instead of model certainty language.
  - >-
    Weighs refusal, clarification, bounded answers, deterministic paths, and handoff with explicit risk
    thresholds.
  - Reviews misuse, failures, abandonment, and human burden through segment evidence.
topics:
  - ai-engineering
  - reliability
  - risk-management
roles:
  - ai-engineer
  - product
  - operations
  - engineering
  - frontend
  - backend
  - mobile
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
formats:
  - system-design
  - case
followUps:
  - How should the system degrade safely if its low-confidence estimate is itself unreliable?
  - How should excessive refusal be evaluated if users turn to riskier channels?
relatedQuestions: []
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
