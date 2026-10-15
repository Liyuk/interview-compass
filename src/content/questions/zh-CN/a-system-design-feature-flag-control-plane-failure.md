---
questionId: a-system-design-feature-flag-control-plane-failure
kind: question
status: published
locale: zh-CN
title: 新功能依赖远程 Feature Flag 服务，但控制面不可用时用户请求也被阻塞。你会怎样设计默认值、缓存和紧急关闭路径？
question: 新功能依赖远程 Feature Flag 服务，但控制面不可用时用户请求也被阻塞。你会怎样设计默认值、缓存和紧急关闭路径？
intent: 考察你能否把动态配置可用性、错误默认值、配置传播时延和故障隔离纳入系统设计。
signals:
  - 区分安全默认值、功能默认值和可恢复的陈旧配置。
  - 定义配置缓存期限、版本校验、变更传播和失效策略。
  - 设计不依赖同一故障控制面的紧急关闭方式，并说明其权限与审计。
primaryCapability: professional.system-design
topics:
  - system-design
  - reliability
  - security
roles:
  - engineering
  - frontend
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
formats:
  - system-design
source:
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
followUps:
  - 如果某个租户必须立即关闭风险功能，而其他租户可继续使用，如何隔离配置？
  - 怎样验证配置服务故障不会导致全站同步阻塞或雪崩？
---
