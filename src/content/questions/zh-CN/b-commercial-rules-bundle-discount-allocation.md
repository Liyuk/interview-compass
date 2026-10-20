---
questionId: b-commercial-rules-bundle-discount-allocation
kind: question
status: published
locale: zh-CN
title: 客户购买组合套餐后申请退掉其中一项，原订单享受的组合折扣该如何重新分摊？
question: 客户购买组合套餐后申请退掉其中一项，原订单享受的组合折扣该如何重新分摊？
intent: "考察你能否把组合折扣的商业承诺、单品退款与结算结果转成同一套可审计规则，并说明规则改变时如何保护客户与账务一致性。"
signals: ["先核对套餐构成、各项标价、折扣触发条件、退货资格及原订单适用的条款版本。", "比较按原订单分摊、剩余商品重算和合同约定等方式对退款、佣金、税费与收入确认的影响。", "说明订单、退款、财务与客服所需的同一计算依据，以及历史订单如何保持可追溯。", "提出边界案例、客户解释和上线验证，避免拆单或部分退款产生套利或账实差异。"]
weakAnswer: "只说按商品标价比例分摊折扣，没有确认合同规则、税费与佣金口径，也没有说明套餐资格变化或退款后的账务校验。"
anchors:
  notPassing: "能提出一种分摊方式，但未说明政策依据或退款边界。"
  passing: "核对套餐与退款条件，比较至少两种分摊规则并解释主要客户影响。"
  excellent: "把适用政策、计算口径、退款、佣金与财务对账连成可追溯流程，并覆盖部分退款边界。"
  exceptional: "进一步设计拆单、组合资格变化和历史重算的验证及例外治理，能量化规则对客户、公平性和业务指标的影响。"
primaryCapability: domain-modeling.commercial-rules
topics:
  - commercialization
  - data-modeling
  - metrics
roles:
  - product
  - data
  - operations
  - engineering
  - backend
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - operations-review
formats:
  - case
source:
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
followUps: ["如果移除一项后剩余商品不再满足套餐门槛，应该按什么规则重新定价，谁有权批准例外？", "如何用具体订单验证退款金额、平台收入和合作方佣金三方能够对账？"]
perspective: "candidate"
perspectiveReview: "reviewed"
qualityTier: "core"

---
