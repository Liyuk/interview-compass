---
questionId: wave17-domain-013
kind: question
status: published
locale: zh-CN
title: 一个报表数字无法追溯到原始业务事件，怎样补数据血缘？
question: 不同团队手工修正过汇总表，后来无法解释数字为何变化。你会怎样记录来源、转换、版本、责任人和重算依据？
intent: 考察能否让指标沿数据链路可追溯，并把人工修正纳入治理而非隐藏在结果里。
signals:
  - 串联源事件、转换逻辑、运行版本和最终指标
  - 让修正具备原因、审批、影响范围和重算记录
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
