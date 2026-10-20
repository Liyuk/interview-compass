---
questionId: "a-microservices-service-ownership-oncall-gap"
kind: "question"
status: "published"
locale: "zh-CN"
title: 故障在服务交界处反复发生，每个团队都能证明自己的服务健康，但无人负责完整流程恢复。你会怎样修复责任链？
question: 故障在服务交界处反复发生，每个团队都能证明自己的服务健康，但无人负责完整流程恢复。你会怎样修复责任链？
intent: "考察能否明确端到端服务责任、用户流程和事故指挥方式。"
signals: ["沿用户影响路径标明服务依赖和责任人","定义端到端服务目标与跨团队升级机制","区分组件健康和用户结果健康","复盘后更新值班边界、运行手册和演练"]
primaryCapability: "professional.system-design"
topics: ["microservices","distributed-systems","system-design"]
roles:
  - backend
  - engineering
  - ai-engineer
  - frontend
  - mobile
  - data
responsibilityScopes: ["team","multiple-teams"]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: ["interview","hiring","promotion"]
formats: ["system-design","case"]
followUps: ["跨团队事故由谁担任指挥，依据是什么？","怎样避免把所有边界故障都升级给平台团队？"]
source: [{"attribution":"original","label":"Interview Compass 原创主题补充批次：微服务"}]
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
