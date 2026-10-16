---
questionId: a-microservices-team-boundary-change
kind: question
status: published
locale: zh-CN
title: 多个服务由不同团队维护，但一次小改动常需要三四个团队同步发布，你会怎样判断服务边界是否失效？
question: 多个服务由不同团队维护，但一次小改动常需要三四个团队同步发布，你会怎样判断服务边界是否失效？
intent: 考察是否能把变更耦合、业务能力边界、团队责任和独立演进放在一起评估。
signals:
  - 统计跨服务变更与联合发布的频率
  - 追踪共享数据模型和隐式运行时依赖
  - 比较拆分、合并或重划责任的迁移成本
  - 用可逆（可以安全撤回）试点验证边界调整是否减少协调
primaryCapability: professional.system-design
topics:
  - microservices
  - distributed-systems
  - system-design
roles:
  - backend
  - engineering
  - ai-engineer
  - frontend
  - mobile
  - data
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - hiring
  - promotion
formats:
  - system-design
  - case
followUps:
  - 什么证据能说明问题来自组织边界而非代码结构？
  - 如何避免一次大规模重写？
source:
  - attribution: original
    label: Interview Compass 原创主题补充批次：微服务
---
