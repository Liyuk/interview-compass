---
questionId: b-commercial-rules-promotion-stacking
kind: question
status: published
locale: zh-CN
title: "优惠券与满减同时存在时，叠加和互斥规则怎样表达？"
question: "一笔订单可能同时满足优惠券、满减和会员折扣。你会怎样表达这些优惠的优先级、叠加和互斥关系，让运营能配置、研发能实现、客服能解释？"
intent: "了解你能否把一组相互牵制的商业规则整理成可枚举、可验证的模型，并预见规则冲突与例外。"
signals:
  - "给出了明确的计算顺序和互斥组，而不是笼统说取最优"
  - "用具体订单样例演示规则组合的结果"
  - "考虑了运营改规则时会出现的冲突，以及怎样提前发现"
primaryCapability: domain-modeling.commercial-rules
topics: [commercialization, data-modeling]
roles: [product, operations, backend]
responsibilityScopes: [team]
careerTracks: [individual-contributor]
scenarios: [interview, hiring]
formats: [case]
followUps:
  - "如果两条规则的优先级相同，系统应该怎么处理？"
  - "客服遇到用户质疑金额时，凭什么向用户解释？"
source:
  - attribution: original
    label: "基于常见电商优惠规则场景原创编写"
---
