---
questionId: next-ai-011
kind: question
status: published
locale: en
title: How should a RAG system respond when retrieved sources conflict?
question: Two currently valid policies in the knowledge base conflict, with similar retrieval scores. The assistant must not choose whichever is more convenient. What response and escalation path would you design?
intent: Assesses explicit handling of conflicts, source authority, and abstention boundaries.
signals:
  - Distinguish content conflicts from retrieval-ranking errors.
  - Use authority, version, and effective scope to assess evidence.
  - Design a cited clarification, abstention, or escalation path.
primaryCapability: professional.ai-engineering
topics:
  - ai-engineering
  - security
roles:
  - ai-engineer
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
  - promotion
formats:
  - case
followUps:
  - How can the system explain a conflict without exposing sensitive internal information?
  - Who owns resolving authority conflicts in the knowledge base?
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 A
---
