---
questionId: a-debugging-cache-stampede-warmup
kind: question
status: published
locale: zh-CN
title: 缓存失效后，大量请求同时回源，服务恢复时又出现第二次流量尖峰。你会怎样定位并抑制缓存击穿与预热风暴？
question: 缓存失效后，大量请求同时回源，服务恢复时又出现第二次流量尖峰。你会怎样定位并抑制缓存击穿与预热风暴？
intent: 考察你能否区分单键击穿、整体冷缓存、重试放大和服务恢复时的负载转移。
signals:
  - 通过键分布、回源速率、失效时间和重试轨迹定位主要放大路径。
  - 比较请求合并、随机过期、分层缓存、限流和渐进预热。
  - 设置不会把缓存保护转化为数据陈旧或单点瓶颈的校验指标。
primaryCapability: professional.debugging
topics:
  - debugging
  - reliability
  - distributed-systems
roles:
  - backend
  - engineering
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
formats:
  - debugging
  - system-design
source:
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 G
followUps:
  - "只有少量热点键时，你会怎样预热这些键而不一次性加载整个缓存？"
  - "回源服务已经过载时，哪些请求应排队、降级或拒绝，怎样让调用方获知？"
  - "用什么指标确认请求合并、随机过期或渐进预热减少了流量放大，同时没有造成不可接受的数据陈旧？"
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
