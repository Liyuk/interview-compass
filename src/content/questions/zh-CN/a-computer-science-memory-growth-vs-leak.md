---
questionId: a-computer-science-memory-growth-vs-leak
kind: question
status: published
locale: zh-CN
title: 一个长时间运行的进程内存持续增长，但没人能指出明显的泄漏。你怎样区分真正的泄漏、正常的缓存增长和内存碎片？
question: 一个长时间运行的进程内存持续增长，但没人能指出明显的泄漏。你怎样区分真正的泄漏、正常的缓存增长和内存碎片？
intent: 了解你对内存管理的理解，以及能否用观察而不是猜测来区分几种解释。
signals:
  - 提出能区分几种解释的观察，如增长是否有上界、释放后是否回落
  - 知道应该比较哪几类内存指标，而不是只盯着一个总数
  - 在动手改代码之前先缩小范围
primaryCapability: professional.computer-science
topics: [operating-systems, debugging]
roles: [backend, mobile, engineering]
responsibilityScopes: [individual, team]
careerTracks: [individual-contributor]
scenarios: [interview]
formats: [debugging, knowledge]
source:
  - attribution: original
    label: 本站原创
---
