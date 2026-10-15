---
questionId: bulk-a-incident-recovery-validation
kind: question
status: published
locale: zh-CN
title: 事故恢复后如何确认真的恢复
question: 一次数据写入事故已停止，服务指标也回到常态，但仍有用户报告缺失记录。你会怎样组织恢复验证与后续沟通？
intent: 考察事故止损之后对数据完整性、用户影响和恢复证据的闭环责任。
signals:
  - 区分服务恢复、数据修复和用户问题关闭
  - 定义抽样、对账或重放来证明数据完整性
  - 说明更新对象、频率和仍未知事项
primaryCapability: delivery.reliability-incidents
topics:
  - reliability
  - operations
  - risk-management
roles:
  - engineering
  - operations
  - manager
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
  - attribution: original
    label: 原创：事故恢复验证与用户影响闭环
---
