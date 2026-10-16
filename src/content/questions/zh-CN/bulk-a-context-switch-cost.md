---
questionId: bulk-a-context-switch-cost
kind: question
status: published
locale: zh-CN
title: 上下文切换的代价
question: 一个服务把工作线程数从 16 提到 256 后，吞吐没有提升，CPU 使用率反而更高。你会怎样解释上下文切换可能造成的影响，并用什么证据验证？
intent: 考察对调度、线程状态保存和性能证据的理解。
signals:
  - 能解释切换需要保存与恢复执行状态
  - 会区分线程等待与可运行竞争
  - 提出可观测的调度或性能证据
primaryCapability: professional.computer-science
topics:
  - operating-systems
roles:
  - engineering
  - backend
  - ai-engineer
  - data
responsibilityScopes:
  - individual
  - team
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - campus
  - hiring
formats:
  - case
source:
  - attribution: inspired
    label: Coding Interview University — computer science foundations
    url: https://github.com/jwasham/coding-interview-university/blob/main/README.md
---
