---
questionId: a-quality-data-retention-deletion-proof
kind: question
status: published
locale: zh-CN
title: 用户要求删除个人数据，但部分记录进入了备份、分析仓库和下游系统，你会怎样设计可验证的删除流程？
question: 用户要求删除个人数据，但部分记录进入了备份、分析仓库和下游系统，你会怎样设计可验证的删除流程？
intent: 考察能否沿数据生命周期识别副本和依赖，并证明删除请求在策略边界内完成。
signals:
  - 绘制数据来源、派生副本、处理方和保留例外
  - 区分在线删除、备份过期、匿名化和依法留存
  - 提供请求状态、失败重试和下游确认记录
  - 设计抽样审计与逾期升级机制
  - 建立数据流和派生副本清单，明确删除与匿名化的区别。
  - 为备份过期、法定保留和异步任务规定可解释的时限与例外。
  - 验证删除完成度，并能发现失败、重放（重新处理历史消息或任务）和重新写入路径。
primaryCapability: professional.quality-security-safety
topics:
  - security
  - databases
  - risk-management
roles:
  - backend
  - data
  - product
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - hiring
  - promotion
formats:
  - case
  - planning
followUps:
  - 删除备份会影响灾难恢复时，如何平衡并向用户说明？
  - 怎样发现下游副本仍可被查询？
  - 如果分析数据不能逐条删除，怎样降低可识别性并说明边界？
  - 如何防止延迟到达的事件重新创建已删除用户的数据？
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 D
  - attribution: original
    label: Interview Compass Original Expansion to 1,500 — Batch A/B
relatedQuestions: []
---
