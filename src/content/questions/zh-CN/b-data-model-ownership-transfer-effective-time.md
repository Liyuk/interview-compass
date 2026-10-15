---
questionId: b-data-model-ownership-transfer-effective-time
kind: question
status: published
locale: zh-CN
title: 业务对象月中转交团队时，绩效和责任应归到哪个时间段？
question: 客户账户在月中从销售转交客户成功团队，月度绩效既要体现当月结果，也要还原每个时点的负责人。你会怎样定义归属事件和统计规则？
intent: 考察能否同时处理有效时间、观察时间、责任边界和按历史时点还原。
signals:
  - 定义转交生效时间、时区和确认事件。
  - 明确指标按期末归属、时间比例还是事件责任计算。
  - 保留更正记录，支持还原当时已知和当前认可视图。
primaryCapability: domain-modeling.data-model
topics:
  - data-modeling
  - databases
  - operations
roles:
  - data
  - product
  - operations
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
  - 交接日期事后修正时，哪些报表应回算？
  - 如何处理共同负责或无人确认的交接区间？
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 F
---
