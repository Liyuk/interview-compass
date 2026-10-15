---
questionId: a-mobile-offline-queue-auth-expiry
kind: question
status: published
locale: zh-CN
title: 移动端离线操作恢复时令牌已过期，怎样避免重复或越权提交？
question: 用户离线编辑并排队了多条变更，恢复网络时登录令牌已过期，且部分请求可能已经被服务端处理。你会怎样设计重认证、幂等和冲突处理？
intent: 考察能否同时处理离线队列生命周期、认证更新、不确定提交状态和数据冲突。
signals:
  - 为每个操作设计稳定标识与可重试状态。
  - 在重认证后重新验证权限，不复用过期授权。
  - 区分已确认、状态未知和冲突操作并提供用户可理解的恢复。
primaryCapability: professional.system-design
topics:
  - mobile
  - distributed-systems
  - security
roles:
  - mobile
  - backend
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
scenarios:
  - interview
  - hiring
formats:
  - system-design
  - debugging
followUps:
  - 如果操作包含不可逆支付或外发通知，怎样确认后再重放？
  - 本地队列保存期限和敏感数据保护如何设定？
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 G
---
