---
questionId: bulk-a-flaky-test-triage
kind: question
status: published
locale: zh-CN
title: 偶尔失败的全流程测试拖慢合并
question: 一个关键完整流程测试偶尔失败，团队开始重跑直到通过。你会怎样确定它是否真实暴露产品风险，并改进测试流程？
intent: 考察如何区分产品缺陷、测试环境不稳定和测试本身的竞态。
signals:
  - 关联失败与浏览器、数据、并发和环境状态
  - 定义隔离测试的条件、责任人和期限
  - 衡量重跑对反馈时间及漏检风险的影响
  - 从输入、机制和故障表现中提出可验证的技术假设
  - 比较实现路径及其正确性、性能、安全或维护代价
  - 说明覆盖边界场景的测试或运行指标
primaryCapability: professional.quality-security-safety
topics:
  - engineering-systems
  - devops
  - reliability
  - debugging
  - concurrency
  - operations
roles:
  - engineering
  - frontend
  - backend
  - data
  - operations
responsibilityScopes:
  - team
  - multiple-teams
  - individual
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - hiring
  - campus
  - promotion
formats:
  - case
  - debugging
source:
  - attribution: inspired
    label: DevOps Interview Questions：CI 流程与自动化测试
    url: https://github.com/DNXLabs/DevOps-Interview-Questions
  - attribution: inspired
    label: GitHub 技术面试与工程体系调研；题目为本站独立编写
    url: https://github.com/yangshun/tech-interview-handbook
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
followUps:
  - 单个测试稳定通过，整套测试并行运行时偶发失败，而且重跑可能通过。你会怎样查找顺序依赖或共享状态？
  - 如果失败只发生在 CI（自动检查与构建流程），怎样判断是机器负载还是环境配置差异？
  - 将测试串行化可以暂时止损吗，何时必须修复根因？
---
