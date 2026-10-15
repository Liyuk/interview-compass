---
questionId: a-debugging-concurrent-test-flake-order-dependence
kind: question
status: published
locale: zh-CN
title: 单个测试稳定通过，整套测试并行运行时偶发失败，而且重跑可能通过。你会怎样查找顺序依赖或共享状态？
question: 单个测试稳定通过，整套测试并行运行时偶发失败，而且重跑可能通过。你会怎样查找顺序依赖或共享状态？
intent: 考察你能否用可重复证据区分真实竞争、测试隔离不足、时钟依赖和资源争用。
signals:
  - 收集失败顺序、并行度、运行时长和测试环境差异。
  - 检查全局状态、共享端口/文件、随机种子、时间和异步清理。
  - 先构造可稳定复现的最小测试，再验证隔离修复与并行运行。
primaryCapability: professional.debugging
topics:
  - debugging
  - concurrency
  - engineering-systems
roles:
  - engineering
  - backend
  - frontend
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
scenarios:
  - interview
  - hiring
formats:
  - debugging
source:
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
followUps:
  - 如果失败只发生在 CI，怎样判断是机器负载还是环境配置差异？
  - 将测试串行化可以暂时止损吗，何时必须修复根因？
---
