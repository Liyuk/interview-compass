---
questionId: "a-microservices-read-model-freshness-contract"
kind: "question"
status: "published"
locale: "zh-CN"
title: "订单已成功更新，但跨服务报表数分钟后才反映变化，产品要求展示“实时状态”。你会怎样定义并实现一致性预期？"
question: "订单已成功更新，但跨服务报表数分钟后才反映变化，产品要求展示“实时状态”。你会怎样定义并实现一致性预期？"
intent: "考察能否把业务可接受的新鲜度转成明确的数据契约与用户体验。"
signals: ["先澄清状态对用户决策的影响和容忍延迟","标明事件产生、投递、消费和投影更新各阶段","选择同步读、读模型或状态提示并说明成本","监测延迟分布、丢失事件和对账修复"]
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
followUps: ["哪些状态必须强一致，哪些可以最终一致？","怎样向用户表达处理中而不是显示过时成功？"]
source: [{"attribution":"original","label":"Interview Compass 原创主题补充批次：微服务"}]
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
