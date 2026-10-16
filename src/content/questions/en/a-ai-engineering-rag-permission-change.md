---
questionId: a-ai-engineering-rag-permission-change
kind: question
status: published
locale: en
title: "How can an internal Q&A assistant answer with evidence without overstepping access?"
question: "Your company wants an internal knowledge assistant, and document permissions change as people move around. How would you make it answer with evidence while keeping it from exposing what a user should not see?"
intent: "Understand how you build permissions, citations, and staleness into the design of a retrieval-augmented system."
signals:
  - "Filters by permission at retrieval time instead of patching after generation"
  - "Requires cited sources and declines when no evidence exists"
  - "Discusses permission-sync delay and auditing"
primaryCapability: professional.ai-engineering
topics: [ai-engineering, security, system-design]
roles:
  - ai-engineer
  - backend
  - engineering
  - frontend
  - mobile
  - data
responsibilityScopes: [team, multiple-teams]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: [interview, hiring]
formats: [system-design, case]
source:
  - attribution: inspired
    label: "AI-Engineer-Interview-Questions: enterprise RAG design case (scenario inspiration only; the prompt is original)"
    url: https://github.com/ombharatiya/AI-Engineer-Interview-Questions/blob/main/11-ai-system-design/case-studies/01-enterprise-rag-assistant.md
  - attribution: derived
    label: "Defining boundaries before bringing AI into an engineering organization (context boundary)"
    url: https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/research/2026/08/ai-engineering-capability-boundaries/zh.md
---
