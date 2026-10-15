---
questionId: "a-microservices-contract-version-rollout"
kind: "question"
status: "published"
locale: "zh-CN"
title: "一个服务要新增字段并改变字段含义，但多个旧消费者无法同时升级，你会怎样安排契约演进？"
question: "一个服务要新增字段并改变字段含义，但多个旧消费者无法同时升级，你会怎样安排契约演进？"
intent: "考察能否管理生产者与消费者的兼容窗口、迁移顺序和弃用证据。"
signals: ["区分新增字段、语义改变和破坏性变化","盘点消费者及其真实使用方式","设计双读写、版本适配或渐进迁移步骤","用兼容测试和流量证据决定何时移除旧契约"]
primaryCapability: "professional.system-design"
topics: ["microservices","distributed-systems","system-design"]
roles: ["backend","engineering","ai-engineer"]
responsibilityScopes: ["team","multiple-teams"]
careerTracks: ["individual-contributor","team-manager"]
scenarios: ["interview","hiring","promotion"]
formats: ["system-design","case"]
followUps: ["如果有未知消费者，如何安全弃用？","如何控制过渡期双写造成的数据分歧？"]
source: [{"attribution":"original","label":"Interview Compass 原创主题补充批次：微服务"}]
---
