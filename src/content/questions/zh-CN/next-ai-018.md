---
questionId: next-ai-018
kind: question
status: published
locale: zh-CN
title: 缓存模型结果会不会复用错误答案？
question: 为降低推理成本，团队按问题文本缓存答案。但用户权限、知识库版本和地区规则可能不同。你会如何确定缓存键与失效机制？
intent: 考察是否能识别模型输出依赖并避免跨权限、跨版本复用。
signals:
  - 列出影响答案的权限、上下文、模型和策略维度。
  - 定义版本化键、时效与主动失效。
  - 通过隔离测试证明缓存不会越权或返回过期事实。
primaryCapability: professional.ai-engineering
topics:
  - ai-engineering
  - reliability
roles:
  - ai-engineer
  - backend
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
  - 语义相近但问题措辞不同能否复用？
  - 缓存命中率与正确性如何共同监控？
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 A
---
