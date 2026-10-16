---
questionId: b-commercial-rules-contract-exception-expiry
kind: question
status: published
locale: zh-CN
title: 大客户合同要求一项特殊费率，但合同续约时可能失效。系统和运营流程如何避免旧例外被永久沿用？
question: 大客户合同要求一项特殊费率，但合同续约时可能失效。系统和运营流程如何避免旧例外被永久沿用？
intent: 考察你能否将商业例外的适用对象、有效期、审批和退出机制建模到执行流程中。
signals:
  - 指出例外适用于哪些客户、产品、交易和时间范围。
  - 为批准、变更、续约和到期建立可追溯的责任与通知机制。
  - 提出到期后的自动回退、人工复核和误用检测方式。
  - 区分通用规则与有期限的合同例外。
  - 记录审批依据、适用客户/产品、责任人和生效/到期时间。
  - 建立临期提醒、续期证据和过期自动回归默认规则的策略。
primaryCapability: domain-modeling.commercial-rules
topics:
  - commercialization
  - risk-management
  - planning
roles:
  - product
  - operations
  - engineering
responsibilityScopes:
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
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
