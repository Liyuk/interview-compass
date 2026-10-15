---
questionId: a-programming-languages-ownership-transfer-async
kind: question
status: published
locale: zh-CN
title: 异步任务启动后，调用方立刻修改了传入对象，偶发结果因此变化。你会如何判断这是共享可变状态、复制语义还是所有权问题？
question: 异步任务启动后，调用方立刻修改了传入对象，偶发结果因此变化。你会如何判断这是共享可变状态、复制语义还是所有权问题？
intent: 考察你能否解释语言运行时如何处理对象引用和异步边界，并提出清晰的状态所有权约定。
signals:
  - 说明对象是按值复制、共享引用还是可转移所有权。
  - 定位并发读写、闭包捕获和生命周期导致的竞争窗口。
  - 比较不可变快照、深拷贝、所有权转移或同步保护的代价。
primaryCapability: professional.computer-science
topics:
  - programming-languages
  - concurrency
  - debugging
roles:
  - mobile
  - backend
  - engineering
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
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
followUps:
  - 如果对象很大，深拷贝会带来明显成本，你有哪些替代方案？
  - 怎样让 API 契约明确说明调用后谁仍可以修改该对象？
---
