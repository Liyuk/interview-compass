---
questionId: b-model-evolution-schema-unknown-enum
kind: question
status: published
locale: zh-CN
title: 下游系统遇到新增枚举值就失败时，怎样演进跨团队契约？
question: 生产者新增一个订单状态后，旧消费者因严格枚举校验拒绝整条消息。团队认为应由消费者更新，但多个消费者由不同组织维护。你会怎样设计兼容性和发布顺序？
intent: 考察能否将未知值处理、版本策略、消费者契约测试和部署协调作为演进问题处理。
signals:
  - 明确新增、弃用和未知字段在契约中的语义。
  - 让消费者能够安全忽略、保留或隔离未知值。
  - 设计先兼容后扩展的发布顺序与跨团队验证。
primaryCapability: domain-modeling.model-evolution
topics:
  - data-modeling
  - programming-languages
  - reliability
  - operations
roles:
  - backend
  - data
  - product
  - engineering
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - hiring
  - operations-review
  - promotion
formats:
  - system-design
  - case
followUps:
  - 哪些状态变化会影响业务流程，不能静默忽略？
  - 如何对多个独立消费者做兼容性检查？
  - 【序列化格式如何面对未知字段和未知枚举？】服务需要滚动升级，旧消费者可能收到新版本增加的字段或枚举值。你会如何设计兼容策略并验证升级顺序？
  - 枚举未知值能否静默映射为默认值？
  - 数据库里已写入新值后如何回滚？
  - 【枚举状态新增后，旧报表把它归为其他正常状态怎么办？】系统新加了“待人工核验”状态，旧消费者将未知值映射为“已完成”，运营指标因此虚高。你会怎样治理状态演进？
  - 哪些读取路径应该在未知状态时停止处理？
  - 怎样通知并验证所有消费者完成升级？
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 H
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 A
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 B
---
