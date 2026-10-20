---
questionId: a-ai-engineering-rag-permission-change
kind: question
status: published
locale: zh-CN
title: "内部知识问答，如何答得有依据又不越权？"
question: "公司要做一个内部知识问答助手，而文档权限会随人员变动。你会怎样让它既答得有依据，又不泄露不该看到的内容？"
intent: "了解你如何把权限、引用来源和失效问题放进检索增强系统的设计里。"
signals:
  - "说明权限在检索阶段过滤，而不是生成之后再补救"
  - "要求给出引用来源，并在没有依据时拒答"
  - "讨论权限变更的同步延迟与审计"
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
    label: "AI-Engineer-Interview-Questions：企业 RAG 设计案例（仅作情境启发，题面为原创）"
    url: https://github.com/ombharatiya/AI-Engineer-Interview-Questions/blob/main/11-ai-system-design/case-studies/01-enterprise-rag-assistant.md
  - attribution: derived
    label: "把 AI 能力放进工程组织前，先定义哪些边界（上下文边界）"
    url: https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/research/2026/08/ai-engineering-capability-boundaries/zh.md
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
