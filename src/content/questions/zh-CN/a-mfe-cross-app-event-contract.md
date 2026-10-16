---
questionId: "a-mfe-cross-app-event-contract"
kind: "question"
status: "published"
locale: "zh-CN"
title: 一个子应用发布“订单已完成”事件，其他模块各自解释不同，导致重复请求和页面状态分叉。你会怎样定义跨应用事件接口约定？
question: 一个子应用发布“订单已完成”事件，其他模块各自解释不同，导致重复请求和页面状态分叉。你会怎样定义跨应用事件接口约定？
intent: "考察能否定义事件所有者、版本、语义和订阅者行为，避免把事件总线变成隐式共享状态。"
signals: ["说明事件代表的业务事实、唯一标识和发生时机","区分通知与权威数据来源","定义版本兼容、重复投递和订阅清理","监测事件积压与订阅者错误"]
primaryCapability: "professional.engineering-systems"
topics: ["micro-frontends","frontend","engineering-systems","system-design"]
roles:
  - frontend
  - engineering
  - backend
responsibilityScopes: ["team","multiple-teams"]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: ["interview","hiring","promotion"]
formats: ["system-design","case"]
followUps: ["如果某个子应用错过事件，页面如何恢复一致？","什么时候应该使用共享 API 而不是事件？"]
source: [{"attribution":"original","label":"Interview Compass 原创主题补充批次：微前端"}]
---
