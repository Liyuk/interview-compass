---
questionId: b-commercial-rules-contract-exception-expiry
kind: question
status: published
locale: zh-CN
title: 大客户合同要求一项特殊费率，但合同续约时可能失效。系统和运营流程如何避免旧例外被永久沿用？
question: 大客户合同要求一项特殊费率，但合同续约时可能失效。系统和运营流程如何避免旧例外被永久沿用？
intent: 考察你能否将商业例外的适用对象、有效期、审批和退出机制建模到执行流程中。
signals:
  - 区分默认费率与合同例外，明确适用客户、产品、交易和有效期。
  - 保留批准依据、责任人、版本和变更通知，说明续约是否延续例外。
  - 比较到期回归默认、暂停或人工复核的条件，不将自动回退当作无条件正确。
  - 用到期前后交易和续约样例验证误用检测、客户解释与历史核对。
primaryCapability: domain-modeling.commercial-rules
topics:
  - commercialization
  - risk-management
  - planning
roles:
  - product
  - operations
  - engineering
  - backend
responsibilityScopes:
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - hiring
formats:
  - case
source:
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
  - attribution: original
    label: Interview Compass Original Expansion to 1,500 — Batch B
followUps:
  - 如果客户在续约谈判期间继续下单，使用哪个费率依据什么决定？
  - 怎样发现已经过期却仍在生效的特殊配置？
  - 如果例外必须续期但业务负责人无法及时确认，系统如何处理？
  - 如何发现散落在代码中的历史客户特判？
relatedQuestions: []
---
