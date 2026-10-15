---
questionId: d-operations-release-rollback-cost
kind: question
status: published
locale: zh-CN
title: 回滚会丢失用户数据时，怎样制定发布止损策略？
question: 新版本改变了数据结构，回滚应用本身很快，但已写入的新字段无法被旧版本识别。你会怎样设计发布闸门和恢复步骤？
intent: 考察能否把代码回滚与数据兼容、写入隔离和恢复责任一起规划。
signals:
  - 分析新旧版本同时运行时的数据读写兼容性。
  - 定义暂停扩量、关闭功能、反向迁移和数据修复选项。
  - 验证恢复演练、监控信号和负责决策的人。
primaryCapability: delivery.operational-execution
topics:
  - operations
  - reliability
  - risk-management
roles:
  - operations
  - engineering
  - product
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - hiring
  - promotion
formats:
  - case
  - behavioral
followUps:
  - 哪些迁移必须采用扩展后收缩的分阶段方式？
  - 如果无法无损回滚，如何让业务方明确接受风险？
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 C
---
