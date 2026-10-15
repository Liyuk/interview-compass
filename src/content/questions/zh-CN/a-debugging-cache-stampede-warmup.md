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
  - operations
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
scenarios:
  - interview
  - hiring
formats:
  - debugging
source:
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
followUps:
  - 缓存中只有少量热点键时，是否需要全量预热？
  - 如果回源已过载，哪些请求应降级、排队或明确失败？
---
