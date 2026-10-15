---
questionId: bulk-a-flaky-test-triage
kind: question
status: published
locale: zh-CN
title: 不稳定测试拖慢合并
question: 一个关键端到端测试偶尔失败，团队开始重跑直到通过。你会怎样确定它是否真实暴露产品风险，并改进测试流程？
intent: 考察如何区分产品缺陷、测试环境不稳定和测试本身的竞态。
signals:
  - 关联失败与浏览器、数据、并发和环境状态
  - 定义隔离测试的条件、责任人和期限
  - 衡量重跑对反馈时间及漏检风险的影响
primaryCapability: professional.engineering-systems
topics:
  - engineering-systems
  - devops
  - reliability
roles:
  - engineering
  - frontend
  - backend
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - hiring
formats:
  - case
source:
  - attribution: inspired
    label: DevOps Interview Questions：CI 流程与自动化测试
    url: https://github.com/DNXLabs/DevOps-Interview-Questions
  - attribution: inspired
    label: GitHub 技术面试与工程体系调研；题目为本站独立编写
    url: https://github.com/yangshun/tech-interview-handbook
---
