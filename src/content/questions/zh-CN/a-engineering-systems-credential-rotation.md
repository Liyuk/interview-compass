---
questionId: a-engineering-systems-credential-rotation
kind: question
status: published
locale: zh-CN
title: 一个长期凭证被多个服务共享，安全要求尽快轮换，但无法一次性停掉所有依赖方。你会怎样推进？
question: 一个长期凭证被多个服务共享，安全要求尽快轮换，但无法一次性停掉所有依赖方。你会怎样推进？
intent: 了解你是否会先盘点依赖，再设计重叠过渡、验证和撤销机制。
signals:
  - 盘点持有者、权限、调用路径和使用记录，区分常规轮换与疑似泄露。
  - 比较短暂双凭证、分批切换或立即撤销的条件，说明重叠窗口的风险与业务代价。
  - 明确签发、接受、切换和撤销的顺序，用使用证据确认迁移而非只看通知已发送。
  - 验证未迁移调用方、紧急封禁和切换失败的恢复，不让回退重新启用已泄露凭证。
primaryCapability: professional.quality-security-safety
topics:
  - devops
  - security
  - reliability
  - engineering-systems
roles:
  - engineering
  - backend
  - ai-engineer
  - data
responsibilityScopes:
  - multiple-teams
  - team
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - hiring
  - promotion
formats:
  - planning
  - case
followUps:
  - "确认凭证泄露后，即使完整迁移计划尚未准备好，哪些处置也应立即并行进行？"
  - "时钟偏差或客户端延迟会怎样影响凭证重叠窗口和撤销门槛？"
  - "什么证据能证明所有调用方都已切换？若仍有调用方未迁移，安全恢复方案是什么？"
source:
  - attribution: inspired
    label: DNXLabs DevOps 题库的主题覆盖；题面为本站独立编写
    url: https://github.com/DNXLabs/DevOps-Interview-Questions
  - attribution: inspired
    label: DevOps Interview Questions：安全与基础设施管理
    url: https://github.com/DNXLabs/DevOps-Interview-Questions
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 A
relatedQuestions: []
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
