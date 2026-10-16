---
questionId: a-quality-error-budget-release-policy
kind: question
status: published
locale: zh-CN
title: "服务故障超过允许范围时，怎样调整发布和稳定性投入？"
question: "服务故障已超过目标允许范围，但业务又有明确的功能交付承诺。你会怎样调整发布节奏和可靠性投入？"
intent: 考察能否把可靠性目标、故障风险和交付承诺转化为透明且可执行的发布策略。
signals:
  - 核对服务目标、窗口、消耗趋势与真实用户影响，不仅看当前是否达标。
  - 按变更风险比较暂停、限制流量、加强验证或保留必要修复发布的条件。
  - 说明对用户、可靠性修复和业务承诺的成本，明确例外接受人和期限。
  - 给出恢复发布的验证门槛、复审时间及后续复盘，不无限冻结或无条件继续。
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
  - frontend
  - mobile
  - ai-engineer
  - data
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
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
