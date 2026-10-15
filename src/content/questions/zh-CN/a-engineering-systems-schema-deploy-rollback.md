---
questionId: a-engineering-systems-schema-deploy-rollback
kind: question
status: published
locale: zh-CN
title: 应用发布可以回滚，但数据库迁移已经删除旧字段，旧版本因此无法启动。你会怎样重新设计发布顺序和回退策略？
question: 应用发布可以回滚，但数据库迁移已经删除旧字段，旧版本因此无法启动。你会怎样重新设计发布顺序和回退策略？
intent: 考察你是否理解应用与数据变更的兼容窗口，以及回滚并不等于恢复所有状态。
signals:
  - "采用扩展后收缩等阶段，让新旧应用版本与数据结构兼容共存。"
  - "为迁移失败定义暂停扩量、关闭功能、回退或前向修复的条件。"
  - "用演练和监控验证回退、数据修复及恢复路径。"
  - "明确不可逆变更的审批人、风险承担者和止损边界。"
primaryCapability: professional.engineering-systems
topics:
  - devops
  - databases
  - reliability
  - operations
  - risk-management
roles:
  - engineering
  - backend
  - data
  - operations
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
  - system-design
  - case
  - behavioral
followUps:
  - 新版本改变了数据结构，回滚应用本身很快，但已写入的新字段无法被旧版本识别。你会怎样设计发布闸门和恢复步骤？
source:
  - attribution: inspired
    label: DNXLabs DevOps 题库的主题覆盖；题面为本站独立编写
    url: https://github.com/DNXLabs/DevOps-Interview-Questions
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 C
---
