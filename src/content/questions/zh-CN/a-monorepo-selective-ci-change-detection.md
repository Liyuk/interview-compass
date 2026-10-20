---
questionId: a-monorepo-selective-ci-change-detection
kind: question
status: published
locale: zh-CN
title: 仓库有数百个包时，怎样只检查受变更影响的部分并避免漏测？
question: 仓库有数百个包，完整自动检查与构建耗时很长，团队准备只测试受变更影响的部分。你会怎样证明选择性测试没有漏掉关键依赖？
intent: "考察能否确认变更检测没有漏掉受影响的任务，并用完整检查作为最后保障。"
signals:
  - "明确源码、生成代码、配置和工具链变化会影响哪些任务，以及依赖关系不清时如何扩大检查范围。"
  - "用历史提交重新运行变更检测，对比当时实际失败的任务与检测选出的任务。"
  - "比较按文件路径、依赖关系或构建缓存选择任务的差异，并说明各自可能漏掉什么。"
  - "对关键路径保留强制检查，定期运行完整检查，避免选择性检查长期漏测。"
  - "记录漏检、误检、耗时和修复成本，依据结果调整规则。"
primaryCapability: professional.engineering-systems
topics:
  - monorepo
  - engineering-systems
  - devops
roles:
  - engineering
  - frontend
  - backend
  - mobile
  - ai-engineer
  - data
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - hiring
  - promotion
formats:
  - case
  - planning
followUps:
  - 依赖图不完整时先扩大选择还是修复图？
  - 哪些变化应始终触发全量测试？
  - 工具链版本变化为何可能使路径过滤不可靠？
  - 如何度量增量构建节省的时间和漏检风险？
source:
  - attribution: original
    label: Interview Compass 原创主题补充批次：Monorepo
  - attribution: original
    label: Interview Compass Original Expansion to 1,500 — Batch A
relatedQuestions: []
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
