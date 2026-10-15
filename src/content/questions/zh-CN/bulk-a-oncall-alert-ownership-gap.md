---
questionId: bulk-a-oncall-alert-ownership-gap
kind: question
status: published
locale: zh-CN
title: 告警已触发，却因为交接不清无人确认，你会怎么查？
question: 一次跨时区交接期间，关键告警已发送，但原值班人以为新值班人会处理，新值班人又没有收到确认；故障因此延迟升级。你会怎样还原责任链，修复告警确认与交接机制，并验证改动有效？
intent: 考察候选人能否沿着告警触发、送达、确认、升级和交接的链路定位责任断点，并形成可验证的流程改进。
signals:
  - 按时间线核对告警是否触发、送达、确认及升级，而不是假定“发出即有人处理”
  - 区分个人疏漏、排班信息、工具路由和交接约定等可能原因
  - 提出明确的确认时限、超时升级与交接验收规则，并用演练或事件数据复核
primaryCapability: professional.debugging
topics:
  - debugging
  - reliability
  - operations
roles:
  - engineering
  - operations
  - manager
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - hiring
  - promotion
formats:
  - case
source:
  - attribution: inspired
    label: DevOps Interview Questions：监控与告警实践
    url: https://github.com/DNXLabs/DevOps-Interview-Questions
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 A
followUps:
  - 【值班交接时关键告警上下文丢失怎么办？】告警在换班前触发但未达到升级级别，接班人不知道此前排查结论，故障扩大。你会怎样设计交接机制？
  - 机器生成的上下文应保留哪些事实？
  - 接班人未确认时谁仍负责？
---
