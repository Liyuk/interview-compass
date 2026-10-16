---
questionId: a-quality-error-budget-release-policy
kind: question
status: published
locale: zh-CN
title: "服务故障超过允许范围时，怎样调整发布和稳定性投入？"
question: "服务故障已超过目标允许范围，但业务又有明确的功能交付承诺。你会怎样调整发布节奏和可靠性投入？"
intent: 考察能否把可靠性目标、故障风险和交付承诺转化为透明且可执行的发布策略。
signals:
  - 明确服务目标、错误预算窗口和当前消耗速度
  - 按变更风险区分发布冻结、限流或加强监控等措施
  - 评估可靠性工作对用户和业务承诺的影响
  - 设定恢复发布的证据门槛并复盘例外决策
  - 确认预算消耗速率与用户影响。
  - 让例外承担者明确接受风险与期限。
  - 设置可验证的恢复服务目标和复审时间。
primaryCapability: professional.quality-security-safety
topics:
  - reliability
  - devops
  - risk-management
roles:
  - engineering
  - backend
  - operations
  - manager
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - hiring
  - promotion
formats:
  - case
  - planning
followUps:
  - 如果错误预算无法反映少数高影响客户的故障，怎样补充？
  - 谁有权批准预算耗尽后继续发布？
  - 什么情况下可在预算耗尽后继续发布？
  - 如何避免把 SLO 当成只属于运维团队的指标？
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 D
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 A
relatedQuestions: []
---
