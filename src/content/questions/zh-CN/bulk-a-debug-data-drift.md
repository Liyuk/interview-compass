---
questionId: bulk-a-debug-data-drift
kind: question
status: published
locale: zh-CN
title: 聚合结果逐渐偏离明细
question: 月度汇总与明细报表最初一致，几周后差异逐渐扩大。你会如何把问题缩小到规则变更、迟到数据、重复处理或历史回补？
intent: 考察能否从可复算的样本与数据血缘定位差异，而不是先改汇总结果。
signals:
  - 固定一批差异样本并追踪源事件到聚合结果
  - 比较处理水位、去重键和规则版本
  - 说明如何补数并验证影响范围没有扩大
primaryCapability: professional.debugging
topics:
  - debugging
  - data-modeling
  - reliability
roles:
  - data
  - backend
  - engineering
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
formats:
  - debugging
source:
  - attribution: original
    label: 原创：数据质量与生产问题定位
---
