---
questionId: a-coding-abstraction-performance-pitfalls
kind: question
status: published
locale: zh-CN
title: 写代码和做代码评审时，你有哪些防止性能坑的习惯？
question: 写代码和做代码评审时，你有哪些已经形成习惯的检查点，用来防止循环里查数据库、大对象长期不释放这类性能问题？你怎样知道它们真的有效？
intent: 了解你是否把常见的性能陷阱变成自己的检查习惯，并能用数据验证，而不是凭感觉优化。
signals:
  - 列出具体的检查点，例如循环中的查询、批量与分页、对象生命周期和缓存
  - 说明这些习惯来自哪次具体的问题，而不只是通用的清单
  - 说明怎样在评审和测试中发现，例如查看查询次数和压测
  - 知道什么时候不该过早优化，并能说明依据
primaryCapability: professional.coding-abstraction
topics: [backend, databases, programming-languages]
roles:
  - backend
  - engineering
  - frontend
  - mobile
  - ai-engineer
responsibilityScopes: [individual, team]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: [interview, hiring]
formats: [behavioral, case]
followUps:
  - 你负责的模块每天的请求量、峰值和平均响应时间大概是多少？
  - 单表数据量增长十倍后，你最先担心什么？
source:
  - attribution: original
    label: "作者的分级面试框架，中级工程师"
---
