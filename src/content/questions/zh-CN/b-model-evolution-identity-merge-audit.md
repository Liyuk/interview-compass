---
questionId: b-model-evolution-identity-merge-audit
kind: question
status: published
locale: zh-CN
title: 两个客户实体被合并后，历史操作和权限应如何解释？
question: 重复注册导致两个客户实体后来被确认属于同一家公司。合并后报表要统一展示，但历史合同、审批、权限和个人操作仍需保留原始责任。你会怎样设计合并关系？
intent: 考察能否区分实体解析、业务主键、历史事实和授权继承。
signals:
  - 核实别名、真实合并或误关联的证据，区分稳定实体、来源标识与匹配候选。
  - 逐项判断合同、审批、权限和历史事实是仅关联展示还是允许迁移，不默认授权随合并继承。
  - 保留原始标识、决策人、依据、生效时间和合并拆分事件，避免不可撤销地覆盖历史。
  - 验证跨系统引用、报表与权限边界，并说明误合并如何停止传播、回退和纠正。
primaryCapability: domain-modeling.model-evolution
topics:
  - data-modeling
  - operations
  - reliability
roles:
  - data
  - backend
  - product
  - engineering
  - frontend
  - mobile
  - ai-engineer
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
  - behavioral
followUps:
  - 合并判断后来被推翻时，如何撤销而不篡改历史？
  - 哪些下游指标会因实体合并而发生变化？
  - 【合并两个实体后如何保存旧标识的可追溯性？】客户并购后两个企业账号需要合并为一个主体，但审计、合同和历史活动仍引用旧 ID。你会怎样设计映射和查询？
  - 拆分合并后的实体时如何恢复边界？
  - 哪些引用应该动态解析到主实体？
  - 如果两个档案分别存在互相冲突的身份字段，如何决定是否合并？
  - 怎样让下游系统逐步迁移而不在切换期间创建更多重复档案？
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 A
relatedQuestions: []
---
