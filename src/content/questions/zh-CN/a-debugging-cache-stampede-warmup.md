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
  - multiple-teams
careerTracks:
  - individual-contributor
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
  - 缓存中只有少量热点键时，是否需要全量预热？
  - 如果回源已过载，哪些请求应降级、排队或明确失败？
  - 【缓存故障恢复后数据库仍被打满，怎样定位二次拥塞？】缓存节点恢复后，大量请求同时回源，数据库连接池耗尽；扩容后流量仍周期性冲高。你会怎样判断是缓存预热、请求合并、限流还是查询退化问题？
  - 如何避免预热过程本身造成第二次雪崩？
  - 哪些缓存数据不适合批量预热？
---
