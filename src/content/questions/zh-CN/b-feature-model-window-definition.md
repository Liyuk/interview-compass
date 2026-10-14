---
questionId: b-feature-model-window-definition
kind: question
status: published
locale: zh-CN
title: "“近 30 天下单次数”怎么定义才没有歧义？"
question: "有人要一个“近 30 天下单次数”特征。请说出你需要先确认的所有定义细节，并说明哪些选择会让同一个名字对应不同的数。"
intent: "了解你能否把一句口头指标追问成可复算的定义，覆盖对象、窗口、去重、排除和缺失值。"
signals:
  - "追问窗口是否包含当天，按下单时间还是支付时间计算"
  - "说明取消、退款和测试订单是否计入，以及原因"
  - "明确没有历史记录的新用户取值的含义，而不是默认补零"
primaryCapability: domain-modeling.feature-model
topics: [feature-modeling, metrics]
roles: [data, product, ai-engineer]
responsibilityScopes: [team]
careerTracks: [individual-contributor]
scenarios: [interview, campus]
formats: [case]
followUps:
  - "两个团队各自实现后数不一样，你怎样定位差异出在哪个细节？"
  - "这个定义改动之后，历史趋势还能和以前比较吗？"
relatedQuestions:
  - questionId: b-feature-model-time-semantics
    relation: "同样关注特征的定义，但关注点从时间点的正确性转到口径细节的完整性。"
    contrast: "本题关注窗口、去重、排除与缺失值的细节；相关题关注截止时间与信息泄漏。"
source:
  - attribution: derived
    label: "数据度量工作指南（四）：指标字典模板，把定义变成可复算的协作接口"
    url: https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2021/04/metric-dictionary-template/zh.md
---
