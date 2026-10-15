---
questionId: d-incident-campaign-outage-business-fallback
kind: question
status: published
locale: zh-CN
title: 大促半夜上线后系统被打挂，用户领不到券在投诉。作为运营，你在研发止损的半小时里做什么？
question: 某次大促活动在半夜十二点上线后，系统因为高并发卡住，大量用户投诉领不到券。你作为一线运营，在配合研发止损的这半小时里，会采取哪些具体的业务兜底措施？
intent: 了解你在事故中如何用业务手段保护用户和信任，并与技术团队分工配合，而不是只等待修复。
signals:
  - 先确认影响范围和受影响的用户，并与研发对齐实时的状态和预期恢复时间
  - 给出具体的用户安抚，例如公告、客服口径和对受影响用户的补发
  - 考虑活动的暂停、延期或限流等业务层面的控制
  - 记录事实和影响，为事后的复盘和补偿提供依据
primaryCapability: delivery.reliability-incidents
topics: [operations, reliability, communication]
roles: [operations, marketing, product]
responsibilityScopes: [individual, team]
careerTracks: [individual-contributor]
scenarios: [interview, campus, operations-review]
formats: [case, behavioral]
followUps:
  - 补发的券数量远超预算，你怎么办？
  - 有媒体或用户在社交平台上扩散投诉，你怎么处理？
source:
  - attribution: original
    label: "作者的分级面试框架，运营方向"
---
