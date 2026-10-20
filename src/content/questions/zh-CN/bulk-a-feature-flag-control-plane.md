---
questionId: bulk-a-feature-flag-control-plane
kind: question
status: published
locale: zh-CN
title: 功能开关控制面
question: 多个服务在请求路径中读取功能开关和分群规则。如何设计控制面与本地求值，让控制服务故障时线上行为仍然可预期？
intent: 了解控制面更新、数据面执行和紧急变更之间的关系。
signals:
  - 区分规则发布与请求时求值的组件和故障域
  - 说明配置传播延迟及默认行为如何按风险选择
  - 考虑规则版本、审计、回滚和高基数分群
primaryCapability: professional.system-design
topics:
  - system-design
  - reliability
  - devops
  - security
roles:
  - backend
  - engineering
  - product
  - frontend
  - mobile
  - ai-engineer
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
  - operations-review
formats:
  - system-design
  - case
source:
  - attribution: inspired
    label: System Design Primer：缓存、可用性与故障隔离
    url: https://github.com/donnemartin/system-design-primer
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 H
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
followUps:
  - "涉及高风险写入的开关在控制面不可用时，已有实例和新实例分别应如何处理？"
  - "哪些类型的开关可以安全使用本地旧配置，哪些必须默认关闭？"
  - "怎样验证紧急关闭在目标时限内传播到所有相关实例？"
  - "如何让单个租户关闭风险功能，同时不阻塞其他租户或整个请求路径？"
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
