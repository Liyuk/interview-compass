---
questionId: "a-framework-server-state-cache-invalidation"
kind: "question"
status: "published"
locale: "zh-CN"
title: "多个页面共用服务端数据，框架缓存减少请求，却在用户切换账号后暴露旧结果。你会怎样设计缓存键和失效边界？"
question: "多个页面共用服务端数据，框架缓存减少请求，却在用户切换账号后暴露旧结果。你会怎样设计缓存键和失效边界？"
intent: "考察能否在缓存收益与账号、租户、权限隔离之间设定正确的数据键和失效语义。"
signals: ["明确缓存键中的身份、权限、租户和查询参数","定义新鲜度、失效、重新验证和乐观更新规则","处理并发请求取消与账号切换","验证缓存不会跨权限上下文复用"]
primaryCapability: "professional.coding-abstraction"
topics: ["frameworks","frontend","security"]
roles:
  - frontend
  - engineering
  - mobile
responsibilityScopes: ["team","multiple-teams"]
careerTracks:
  - individual-contributor
scenarios: ["interview","hiring","promotion"]
formats: ["case","system-design"]
followUps: ["哪些数据不适合框架级缓存？","如何处理退出登录时仍在途的请求？"]
source: [{"attribution":"original","label":"Interview Compass 原创主题补充批次：客户端、框架、编译与技术规划"}]
---
