---
questionId: bulk-c-metrics-03
kind: question
status: published
locale: zh-CN
title: 实验主指标改善，但投诉与退款同步上升，你如何评价结果？
question: 一项结账体验实验提高了支付完成率，但投诉和退款也上升。你会如何判断实验是否成功，以及需要等待多久才能作出决定？
intent: "考察你能否在实验主指标改善但退款与投诉恶化时，按风险和结果成熟度判断是否继续，而不是只看显著性或把同时变化都归因于实验。"
signals: ["核实支付完成、退款和投诉的定义、分母、用户任务严重度、随机分流与样本代表性。", "区分实验造成的变化、用户/订单构成变化和季节等替代解释，检查金额与人数的绝对量和比例。", "考虑退款、重复支付、信任损失的滞后窗口，并评估是否已有足够样本观察这些结果。", "用预先确定的风险护栏决定继续、限流、暂停或回滚，并指定负责人和继续观察的期限。"]
weakAnswer: "以支付完成率统计显著为由继续发布，忽略投诉和退款的严重程度、滞后窗口、随机化质量与止损权限。"
anchors:
  notPassing: "只比较主指标的实验前后变化，未检查数据质量或负面结果。"
  passing: "核验实验分流和主/护栏指标，提出一个可能的滞后观察窗口。"
  excellent: "分析样本、严重度、替代解释与延迟结果，并按明确风险规则决定发布状态。"
  exceptional: "量化尾部风险与收益权衡，设计可逆发布、监控触发器和责任人，并说明何时补充证据可改变决定。"
primaryCapability: value-direction.metrics-causality
topics:
  - metrics
  - growth-experiments
  - risk-management
roles:
  - product
  - data
  - operations
  - marketing
  - engineering
  - frontend
  - backend
  - mobile
  - ai-engineer
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - operations-review
formats:
  - case
source:
  - attribution: derived
    label: 指标分级：先服务最重要的决策
    url: >-
      https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2021/04/metric-tiers-prioritize-decisions/zh.md
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 D
followUps: ["如果投诉数量少但每起都涉及高金额或重复扣款，怎样设定风险护栏？", "实验结束后退款仍可能增加，你会如何决定是否恢复全面发布？"]
relatedQuestions: []
perspective: "candidate"
perspectiveReview: "reviewed"
qualityTier: "core"

---
