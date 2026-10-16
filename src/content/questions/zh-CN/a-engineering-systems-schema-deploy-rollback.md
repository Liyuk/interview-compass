---
questionId: a-engineering-systems-schema-deploy-rollback
kind: question
status: published
locale: zh-CN
title: 应用发布可以回滚，但数据库迁移已经删除旧字段，旧版本因此无法启动。你会怎样重新设计发布顺序和回退策略？
question: 应用发布可以回滚，但数据库迁移已经删除旧字段，旧版本因此无法启动。你会怎样重新设计发布顺序和回退策略？
intent: 考察你是否理解应用与数据变更的兼容窗口，以及回滚并不等于恢复所有状态。
signals:
  - 采用扩展后收缩等阶段，让新旧应用版本与数据结构兼容共存。
  - 为迁移失败定义暂停扩量、关闭功能、回退或前向修复的条件。
  - 用演练和监控验证回退、数据修复及恢复路径。
  - 明确不可逆（可以安全撤回）变更的审批人、风险承担者和止损边界。
  - 列出支持的升级跨度与数据格式版本
  - 在副本或事务中执行可恢复迁移
  - 验证迁移前后的约束和关键用户数据
  - 定义失败恢复、旧版读取和清理策略
  - 把扩展与收缩阶段分开
  - 考虑新旧代码与数据形态的交叉组合
  - 定义验证、切换和移除旧结构的条件
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
  - 应用在迁移中被系统结束时如何恢复？
  - 怎样处理长期未升级造成的多版本跳跃？
source:
  - attribution: inspired
    label: DNXLabs DevOps 题库的主题覆盖；题面为本站独立编写
    url: https://github.com/DNXLabs/DevOps-Interview-Questions
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 C
  - attribution: original
    label: Interview Compass 原创主题补充批次：客户端、框架、编译与技术规划
  - attribution: inspired
    label: JavaGuide — backend, Java, database, concurrency, and distributed systems topics
    url: https://github.com/Snailclimb/JavaGuide/blob/main/README.md
relatedQuestions: []
---
