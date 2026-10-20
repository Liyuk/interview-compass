---
questionId: a-engineering-systems-schema-deploy-rollback
kind: question
status: published
locale: zh-CN
title: 应用发布可以回滚，但数据库迁移已经删除旧字段，旧版本因此无法启动。你会怎样重新设计发布顺序和回退策略？
question: 应用发布可以回滚，但数据库迁移已经删除旧字段，旧版本因此无法启动。你会怎样重新设计发布顺序和回退策略？
intent: 考察你是否理解应用与数据变更的兼容窗口，以及回滚并不等于恢复所有状态。
signals:
  - 列出新旧应用与数据格式的兼容组合，区分扩展、切换和收缩。
  - 比较回退、暂停、关闭功能和前向修复，明确已删字段或不可撤销状态的限制。
  - 为回填和清理定义校验、责任、批准及旧路径退出证据。
  - 通过副本演练和混合版本测试验证关键用户数据、失败恢复及业务连续性。
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
  - product
  - ai-engineer
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
perspective: candidate
perspectiveReview: reviewed
qualityTier: core
weakAnswer: 假设回滚应用就能恢复已删除的数据结构，没有识别迁移的不可逆阶段。
anchors:
  notPassing: 只提“回滚”或“备份”，没有处理新旧应用与数据兼容。
  passing: 按扩展、迁移、收缩说明发布顺序。
  excellent: 列出混合版本兼容条件、闸门及字段不可逆时的恢复路径。
  exceptional: 用中断和回退演练验证数据完整性，并明确何时停止清理旧字段。
---
