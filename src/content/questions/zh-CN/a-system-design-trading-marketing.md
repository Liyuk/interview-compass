---
questionId: a-system-design-trading-marketing
kind: question
status: published
locale: zh-CN
title: 在交易系统里，营销活动应该怎样接入，才不会拖垮主交易链路？
question: 在交易系统里，营销活动（优惠券、满减、秒杀）应该怎样接入，才不会拖垮主交易链路？优惠怎样计算、叠加和对账？
intent: 了解你能否把营销规则和交易主链路解耦，并处理叠加规则、库存和资损风险。
signals:
  - 说明营销计算与交易主链路之间的边界，以及营销故障时的降级
  - 说明优惠的叠加、互斥和优先级怎样表达，使结果可复算
  - 处理秒杀的库存、并发和超卖，以及未支付订单的回补
  - 说明怎样对账，让每一笔优惠都能追溯
primaryCapability: professional.system-design
topics: [system-design, commercialization, concurrency, backend]
roles: [engineering, backend, product]
responsibilityScopes: [team, multiple-teams]
careerTracks: [individual-contributor]
scenarios: [interview, hiring]
formats: [system-design]
followUps:
  - 营销服务挂了，订单还能不能下？按什么规则？
  - 一张券被两个订单同时使用，怎么防止？
source:
  - attribution: original
    label: "作者的系统设计题：交易系统中的营销活动"
---
