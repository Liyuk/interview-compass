---
questionId: "a-framework-form-state-validation-boundary"
kind: "question"
status: "published"
locale: "zh-CN"
title: "复杂表单同时有字段校验、跨字段规则和服务端错误，用户编辑时状态彼此覆盖。你会怎样划分框架状态与业务状态？"
question: "复杂表单同时有字段校验、跨字段规则和服务端错误，用户编辑时状态彼此覆盖。你会怎样划分框架状态与业务状态？"
intent: "考察能否为表单交互状态、服务端事实和领域校验划清责任，并解决异步更新竞态。"
signals: ["区分临时输入、派生校验、服务端事实和业务规则","定义唯一事实来源及状态转换","处理异步校验竞态和过期结果","用可测试边界减少组件间隐式耦合"]
primaryCapability: "professional.coding-abstraction"
topics: ["frameworks","frontend","programming-languages"]
roles:
  - frontend
  - engineering
  - mobile
responsibilityScopes: ["team","multiple-teams"]
careerTracks:
  - individual-contributor
scenarios: ["interview","hiring","promotion"]
formats: ["case","system-design"]
followUps: ["跨字段规则应归组件、表单库还是领域层？","如何证明并发校验不会显示过期错误？"]
source: [{"attribution":"original","label":"Interview Compass 原创主题补充批次：客户端、框架、编译与技术规划"}]
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
