---
questionId: a-debugging-api-works-locally-frontend-disagrees
kind: question
status: published
locale: zh-CN
title: 你的接口本地测试正常，联调时前端说它报错或没返回数据。你怎样快速定位并证明问题在哪？
question: 你的接口本地测试正常，联调时前端同学坚持说接口报错或没返回数据。你会用哪些手段去定位，又怎样拿出让对方信服的证据？
intent: 了解你是否会用工具和事实而不是争论来定位跨端问题，并能把过程讲清楚。
signals:
  - 先复现对方看到的现象，确认请求、环境和参数是否真的一致
  - 使用抓包、日志、构造请求等手段逐段缩小范围，并说明各自能证明什么
  - 区分环境差异、数据差异和调用方式差异这几类常见原因
  - 用对方也能核对的证据沟通，而不是说"我这里是好的"
primaryCapability: professional.debugging
topics: [debugging, backend, frontend]
roles:
  - engineering
  - backend
  - frontend
  - mobile
  - ai-engineer
responsibilityScopes: [individual]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: [interview, campus]
formats: [debugging, case]
followUps:
  - 问题其实出在你这边，你怎么处理？
  - 线上日志里完全找不到那次请求，你怎么办？
source:
  - attribution: original
    label: "作者的分级面试框架，初级工程师"
---
