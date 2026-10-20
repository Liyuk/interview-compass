---
questionId: a-computer-science-process-vs-thread
kind: question
status: published
locale: zh-CN
title: 服务现在用多线程处理请求，同事建议改成多进程。你会从哪些方面比较两者，什么情况下你会反对？
question: 服务现在用多线程处理请求，同事建议改成多进程。你会从哪些方面比较两者，什么情况下你会反对？
intent: 了解你能否从隔离、通信、开销和故障影响等机制层面比较两种并发模型，而不是背诵定义。
signals:
  - 能把差异落到具体机制上，如地址空间、通信方式以及创建与切换的成本
  - 会结合这个服务的负载与故障模式给出判断，而不是泛泛地谈优劣
  - 能指出自己的判断依赖哪些前提，比如状态是否需要共享
primaryCapability: professional.computer-science
topics: [operating-systems, concurrency, backend]
roles:
  - backend
  - engineering
  - ai-engineer
  - data
  - mobile
responsibilityScopes: [individual, team]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: [interview, campus]
formats: [knowledge, case]
source:
  - attribution: original
    label: 本站原创
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
