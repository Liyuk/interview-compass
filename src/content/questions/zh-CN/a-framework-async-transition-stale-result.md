---
questionId: "a-framework-async-transition-stale-result"
kind: "question"
status: "published"
locale: "zh-CN"
title: "框架允许界面在后台并发更新，但慢请求的旧结果偶尔覆盖新选择。你会怎样设计并发状态更新？"
question: "框架允许界面在后台并发更新，但慢请求的旧结果偶尔覆盖新选择。你会怎样设计并发状态更新？"
intent: "考察能否区分并发渲染与请求竞态，并防止较早的异步结果覆盖当前用户意图。"
signals: ["关联每次用户意图与请求的稳定标识","决定取消旧任务还是忽略过期响应","区分待处理、失败和当前有效结果","测试快速连续输入、切换和返回场景"]
primaryCapability: "professional.coding-abstraction"
topics: ["frameworks","frontend","debugging"]
roles: ["frontend","engineering"]
responsibilityScopes: ["team","multiple-teams"]
careerTracks: ["individual-contributor","team-manager"]
scenarios: ["interview","hiring","promotion"]
formats: ["case","system-design"]
followUps: ["取消操作不可靠时，如何确保旧响应不会提交？","界面应如何表示新旧结果的过渡状态？"]
source: [{"attribution":"original","label":"Interview Compass 原创主题补充批次：客户端、框架、编译与技术规划"}]
---
