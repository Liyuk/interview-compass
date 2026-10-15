---
questionId: wave17-domain-003
kind: question
status: published
locale: zh-CN
title: 同一客户在多个系统里有不同身份，怎样避免重复计算？
question: 销售、客服和计费系统分别使用不同客户 ID。合并身份后，历史活动、合同和权限仍需追溯。你会怎样定义身份映射和查询边界？
intent: 考察能否建立可追溯的主身份与别名关系，同时保留各业务系统的历史事实。
signals:
  - 明确身份匹配依据、冲突处理和人工校正路径
  - 保留原 ID、映射生效时间及历史归属证据
primaryCapability: domain-modeling.data-model
topics:
  - data-modeling
  - databases
roles:
  - data
  - engineering
responsibilityScopes:
  - individual
  - team
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - hiring
  - promotion
formats:
  - system-design
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-17 B
---
