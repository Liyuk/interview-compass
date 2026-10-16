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
  - 【功能开关控制面故障时，线上实例应该继续使用哪种配置？】控制面不可用时，部分服务实例拿到旧配置，另一些新实例没有任何配置。某个开关涉及高风险数据写入。你会如何定义本地缓存、默认值和故障时行为？
  - 哪些开关不应依赖集中控制面实时访问？
  - 如何验证紧急关闭能在目标时限内生效？
  - 【新功能依赖远程 Feature Flag 服务，但控制面不可用时用户请求也被阻塞。你会怎样设计默认值、缓存和紧急关闭路径？】新功能依赖远程 Feature Flag 服务，但控制面不可用时用户请求也被阻塞。你会怎样设计默认值、缓存和紧急关闭路径？
  - 如果某个租户必须立即关闭风险功能，而其他租户可继续使用，如何隔离配置？
  - 怎样验证配置服务故障不会导致全站同步阻塞或雪崩？
---
