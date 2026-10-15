---
questionId: bulk-a-language-async-cancellation
kind: question
status: published
locale: zh-CN
title: 异步取消如何传播
question: 一个请求触发了多个并行异步任务，客户端断开后仍有下游工作继续消耗资源。请解释取消信号如何沿调用链传播，以及哪些资源必须协作式释放。
intent: 考察异步运行时取消语义和资源生命周期。
signals:
  - 区分取消请求与强制终止
  - 追踪父子任务或取消令牌的传播
  - 考虑 finally/清理逻辑与不可取消操作
primaryCapability: professional.computer-science
topics:
  - programming-languages
  - concurrency
roles:
  - engineering
  - backend
responsibilityScopes:
  - individual
  - team
careerTracks:
  - individual-contributor
scenarios:
  - interview
  - campus
  - hiring
formats:
  - knowledge
source:
  - attribution: inspired
    label: JavaGuide — backend, Java, database, concurrency, and distributed systems topics
    url: https://github.com/Snailclimb/JavaGuide/blob/main/README.md
---
