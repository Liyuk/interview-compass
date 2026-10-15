---
questionId: wave16-domain-023
kind: question
status: published
locale: zh-CN
title: 用户跨工作区切换时权限和数据上下文如何隔离？
question: 同一用户加入多个组织，浏览器保留上一个工作区的缓存，切换后偶尔短暂看到旧组织数据。你会如何设计边界？
intent: 考察租户上下文、授权检查和客户端缓存隔离。
signals:
  - 让工作区身份进入每次请求的授权决策。
  - 切换时清除或命名空间隔离缓存状态。
  - 验证直接链接、并发标签和过期令牌行为。
primaryCapability: domain-modeling.data-model
topics:
  - data-modeling
  - product-thinking
roles:
  - product
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
  - 如何处理链接分享给其他组织成员？
  - 服务端和客户端缓存谁负责隔离？
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 C
---
