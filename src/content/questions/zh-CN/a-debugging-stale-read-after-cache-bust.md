---
questionId: a-debugging-stale-read-after-cache-bust
kind: question
status: published
locale: zh-CN
title: 清除缓存后用户仍读到旧值，怎样追踪陈旧数据的来源？
question: 缓存键已失效，应用日志显示重新读取数据库，但部分用户仍看到旧资料；切换到主库后问题减少却没有消失。你会怎样沿缓存、副本和客户端定位？
intent: 考察能否区分多层缓存、复制延迟、身份键不一致和客户端状态。
signals:
  - 根据请求标识串联 CDN、应用缓存、数据库路由和客户端版本。
  - 检查缓存键规范化、失效传播和复制滞后。
  - 设计可复现样例与分层清除，避免全局缓存风暴。
primaryCapability: professional.debugging
topics:
  - debugging
  - databases
  - reliability
roles:
  - backend
  - operations
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - hiring
  - operations-review
formats:
  - system-design
  - case
followUps:
  - 如何证明是读副本而不是客户端状态造成？
  - 怎样给缓存调试加入可观测但不暴露敏感值的元数据？
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 H
---
