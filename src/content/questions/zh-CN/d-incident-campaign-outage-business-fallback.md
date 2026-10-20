---
questionId: d-incident-campaign-outage-business-fallback
kind: question
status: published
locale: zh-CN
title: "大促故障时，工程师如何与运营协同保障用户权益？"
question: "一次大促在夜间上线后因请求过多而卡住，大量用户无法领取优惠券并开始投诉。作为参与活动的工程师，在恢复系统的同时，你会怎样与运营和客服协同，评估并落实临时业务措施？"
intent: "考察工程师能否理解事故对用户和业务的影响，提供技术事实并与运营明确分工、授权和恢复条件。"
signals: ["先确认故障影响范围、受影响用户和预计恢复时间，并及时更新事实。","提供用户安抚措施，例如公告、客服统一说法和对受影响用户的补偿。","比较暂停、延期或限制新活动流量等方案及其业务影响。","记录处置过程和用户影响，为后续复盘与补偿提供依据。"]
primaryCapability: delivery.reliability-incidents
topics: [operations, reliability, communication]
roles:
  - operations
  - marketing
  - product
  - engineering
  - frontend
  - backend
  - mobile
  - ai-engineer
  - data
responsibilityScopes: [individual, team]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: [interview, campus, operations-review]
formats: [case, behavioral]
followUps:
  - 补发的券数量远超预算，你怎么办？
  - 有媒体或用户在社交平台上扩散投诉，你怎么处理？
source:
  - attribution: original
    label: "作者的分级面试框架，运营方向"
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
