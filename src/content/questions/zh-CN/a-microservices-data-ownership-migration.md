---
questionId: "a-microservices-data-ownership-migration"
kind: "question"
status: "published"
locale: "zh-CN"
title: "两个服务都直接写同一张业务表，短期内不能停机改造，你会怎样逐步建立单一数据所有者？"
question: "两个服务都直接写同一张业务表，短期内不能停机改造，你会怎样逐步建立单一数据所有者？"
intent: "考察能否规划共享存储解耦、写入权迁移和数据一致性验证。"
signals: ["确认各写入方的业务规则与数据责任","指定权威写入入口并设计兼容阶段","用影子校验、双读或变更日志比较数据差异","规定切换条件、回退窗口和旧写入停止证据"]
primaryCapability: "professional.system-design"
topics: ["microservices","distributed-systems","system-design"]
roles:
  - backend
  - engineering
  - ai-engineer
  - data
responsibilityScopes: ["team","multiple-teams"]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: ["interview","hiring","promotion"]
formats: ["system-design","case"]
followUps: ["过渡期双写出现分歧时，谁的值为准？","如何证明所有旧客户端已迁移？"]
source: [{"attribution":"original","label":"Interview Compass 原创主题补充批次：微服务"}]
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
