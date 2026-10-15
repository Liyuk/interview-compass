---
questionId: "a-microservices-timeout-retry-amplification"
kind: "question"
status: "published"
locale: "zh-CN"
title: "一次依赖变慢引发多个服务同时重试，导致整体流量放大。你会如何设计超时、重试和熔断边界？"
question: "一次依赖变慢引发多个服务同时重试，导致整体流量放大。你会如何设计超时、重试和熔断边界？"
intent: "考察能否从端到端时限和故障传播链路控制重试放大，而不是各服务独立调参。"
signals: ["从用户请求预算向下分配调用时限","区分可安全重试的操作与非幂等操作","设置退避、抖动、重试预算和并发上限","定义熔断后的降级、恢复探测和告警"]
primaryCapability: "professional.system-design"
topics: ["microservices","distributed-systems","system-design"]
roles: ["backend","engineering","ai-engineer"]
responsibilityScopes: ["team","multiple-teams"]
careerTracks: ["individual-contributor","team-manager"]
scenarios: ["interview","hiring","promotion"]
formats: ["system-design","case"]
followUps: ["如何验证重试策略没有在故障时制造自激流量？","用户请求已超时后，后台任务还应继续吗？"]
source: [{"attribution":"original","label":"Interview Compass 原创主题补充批次：微服务"}]
---
