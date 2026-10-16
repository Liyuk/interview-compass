---
questionId: a-distributed-queue-visibility-vs-processing
kind: question
status: published
locale: zh-CN
title: 消息队列显示已确认但下游没有结果时，怎样定位丢失边界？
question: 生产者日志显示事件已发布，Broker 也返回确认；消费者没有报错，但业务对象未变化。你会如何区分确认语义、处理失败的消息、过滤、反序列化和重复处理问题？
intent: 考察能否沿消息生命周期追踪证据，明确确认点与业务提交并不等价。
signals:
  - 串联生产、Broker、消费、业务提交的稳定事件标识。
  - 核对消费位点、死信队列、过滤规则和反序列化错误。
  - 界定确认发生在何时，并验证重放（重新处理历史消息或任务）的幂等（重复请求不会重复执行）安全。
primaryCapability: professional.system-design
topics:
  - distributed-systems
  - reliability
  - operations
roles:
  - backend
  - engineering
  - ai-engineer
  - data
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - hiring
formats:
  - system-design
  - debugging
followUps:
  - 消费者提交业务事务后、确认位点前崩溃会怎样？
  - 如何对多年积压的消息安全回放？
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 G
relatedQuestions: []
---
