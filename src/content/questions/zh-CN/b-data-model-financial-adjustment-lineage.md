---
questionId: b-data-model-financial-adjustment-lineage
kind: question
status: published
locale: zh-CN
title: 财务月结后发生退款和更正，怎样保留报表可追溯性？
question: 月结报告已发送给管理层，几天后收到迟到退款和一笔价格更正。业务希望更新当前数字，财务还需要解释上次报告为何不同。你会如何建模？
intent: 考察能否同时保留事件发生时间、入账期间、版本和重述历史。
signals:
  - 区分交易时间、入账时间和报告快照时间。
  - 记录调整事件与被更正事实的关联和理由。
  - 支持当前重算与历史报告原样还原。
primaryCapability: domain-modeling.data-model
topics:
  - data-modeling
  - databases
  - metrics
roles:
  - data
  - backend
  - operations
  - engineering
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
  - 什么情况应该重开已关闭期间？
  - 如何让报表读者知道数字是重述值还是当时值？
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 J
---
