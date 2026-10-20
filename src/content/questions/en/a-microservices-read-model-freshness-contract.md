---
questionId: "a-microservices-read-model-freshness-contract"
kind: "question"
status: "published"
locale: "en"
title: "An order is updated successfully, but a cross-service report reflects it minutes later. The product asks for “real-time status.” How would you define and implement consistency expectations?"
question: "An order is updated successfully, but a cross-service report reflects it minutes later. The product asks for “real-time status.” How would you define and implement consistency expectations?"
intent: "Assesses whether you can translate acceptable business freshness into an explicit data contract and user experience."
signals: ["Clarify how status affects user decisions and tolerated delay","Trace event creation, delivery, consumption, and projection updates","Choose synchronous reads, a read model, or a status cue and explain the cost","Monitor latency distribution, lost events, and reconciliation"]
primaryCapability: "professional.system-design"
topics: ["microservices","distributed-systems","system-design"]
roles:
  - backend
  - engineering
  - ai-engineer
  - frontend
  - mobile
  - data
  - product
responsibilityScopes: ["team","multiple-teams"]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: ["interview","hiring","promotion"]
formats: ["system-design","case"]
followUps: ["Which states require strong consistency and which may be eventual?","How would you show processing instead of stale success to users?"]
source: [{"attribution":"original","label":"Interview Compass 原创主题补充批次：微服务"}]
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
