---
questionId: bulk-b-feature-01
kind: question
status: published
locale: zh-CN
title: 两个特征都叫“近30天消费”，但计算边界不同，如何决定是否复用？
question: 推荐和风控团队都需要“近30天消费”特征，但一个以自然日为窗口、另一个以精确小时滚动，且退款处理不同。你会如何判断能否共享特征定义？
intent: 了解候选人是否把特征名称背后的时间语义、业务定义和消费场景作为契约的一部分。
signals:
  - 明确窗口边界、时区、退款与迟到数据处理规则
  - 区分概念相同但参数不同和实际上不同的特征
  - 设计可发现、可版本化且能追踪消费者的特征定义
  - 追问窗口是否包含当天，按下单时间还是支付时间计算
  - 说明取消、退款和测试订单是否计入，以及原因
  - 明确没有历史记录的新用户取值的含义，而不是默认补零
  - 区分固定自然日窗口与相对当前时刻的滑动窗口。
  - 明确时区、窗口端点、刷新周期和迟到数据规则。
  - 通过边界样本对账验证批处理与在线实现遵循同一契约。
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
  - attribution: derived
    label: 数据度量工作指南（四）：指标字典模板，把定义变成可复算的协作接口
    url: >-
      https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2021/04/metric-dictionary-template/zh.md
  - attribution: original
    label: Interview Compass Original Expansion to 1,500 — Batch B
followUps:
  - 两个团队各自实现后数不一样，你怎样定位差异出在哪个细节？
  - 这个定义改动之后，历史趋势还能和以前比较吗？
  - 如果实时更新成本过高，哪些近似刷新策略可接受？
  - 怎样向模型消费者说明特征值的截止时点？
relatedQuestions:
  - questionId: b-feature-model-time-semantics
    relation: 同样关注特征的定义，但关注点从时间点的正确性转到定义细节的完整性。
    contrast: 本题关注窗口、去重、排除与缺失值的细节；相关题关注截止时间与信息泄漏。
---
