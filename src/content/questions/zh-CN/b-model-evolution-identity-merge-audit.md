---
questionId: b-model-evolution-identity-merge-audit
kind: question
status: published
locale: zh-CN
title: 两个客户实体被合并后，历史操作和权限应如何解释？
question: 重复注册导致两个客户实体后来被确认属于同一家公司。合并后报表要统一展示，但历史合同、审批、权限和个人操作仍需保留原始责任。你会怎样设计合并关系？
intent: 考察能否区分实体解析、业务主键、历史事实和授权继承。
signals:
  - 判断是别名、合并还是误关联，并保留来源证据。
  - 明确哪些历史事实只做关联展示，哪些可重算或迁移。
  - 逐项定义合同、权限、审批和审计日志的继承边界。
  - 区分主实体、别名和历史归属关系。
  - 避免覆盖旧标识或误合并不可逆记录。
  - 验证跨系统引用、权限和审计查询。
primaryCapability: domain-modeling.model-evolution
topics:
  - data-modeling
  - operations
  - reliability
roles:
  - data
  - backend
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
  - 合并判断后来被推翻时，如何撤销而不篡改历史？
  - 哪些下游指标会因实体合并而发生变化？
  - 【合并两个实体后如何保存旧标识的可追溯性？】客户并购后两个企业账号需要合并为一个主体，但审计、合同和历史活动仍引用旧 ID。你会怎样设计映射和查询？
  - 拆分合并后的实体时如何恢复边界？
  - 哪些引用应该动态解析到主实体？
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 A
---
