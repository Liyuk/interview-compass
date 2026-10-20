---
questionId: b-commercial-rules-cancellation-fee
kind: question
status: published
locale: zh-CN
title: 服务取消费与退款政策冲突时，系统应如何解释应退金额？
question: 客户在服务开始前取消订单，但合同、产品页面和客服系统对取消费的描述不一致。你会怎样确定应退金额，并让类似订单按同一规则处理？
intent: 考察你能否识别政策来源、适用版本和交易状态，厘清退款与取消费的依据及执行边界。
signals:
  - 区分退款权利、已履约部分、取消费和不可退费用的业务含义。
  - 确定哪份政策具有权威性、适用何种客户或订单及其生效时间。
  - 设计冲突升级、客户解释、账务调整和规则修订后的验证。
primaryCapability: domain-modeling.commercial-rules
topics:
  - commercialization
  - data-modeling
  - risk-management
roles:
  - product
  - operations
  - engineering
  - frontend
  - backend
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
formats:
  - case
followUps:
  - 若政策在客户下单后更新，旧订单应适用哪一版？
  - 如何发现客服承诺、产品界面与结算实现之间的新分歧？
source:
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
