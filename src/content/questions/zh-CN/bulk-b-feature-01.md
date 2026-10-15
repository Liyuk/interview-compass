---
questionId: bulk-b-feature-01
kind: question
status: published
locale: zh-CN
title: 两个特征都叫“近30天消费”，但计算边界不同，如何决定是否复用？
question: 推荐和风控团队都需要“近30天消费”特征，但一个以自然日为窗口、另一个以精确小时滚动，且退款处理不同。你会如何判断能否共享特征定义？
intent: 了解候选人是否把特征名称背后的时间语义、业务口径和消费场景作为契约的一部分。
signals:
  - 明确窗口边界、时区、退款与迟到数据处理规则
  - 区分概念相同但参数不同和实际上不同的特征
  - 设计可发现、可版本化且能追踪消费者的特征定义
primaryCapability: domain-modeling.feature-model
topics:
  - feature-modeling
  - metrics
  - data-modeling
roles:
  - data
  - ai-engineer
  - product
  - engineering
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
scenarios:
  - interview
  - promotion
formats:
  - case
  - artifact-review
source:
  - attribution: inspired
    label: dataskew-io/data-engineering-interview-questions：时间点一致性与特征可复算
    url: https://github.com/dataskew-io/data-engineering-interview-questions
---
