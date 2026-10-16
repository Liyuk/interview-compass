---
questionId: b-data-model-late-event-correction
kind: question
status: published
locale: zh-CN
title: 移动端事件可能离线数天后才上传，报表又需要按事件发生时间统计。你会怎样建模和处理迟到、更正及重复事件？
question: 移动端事件可能离线数天后才上传，报表又需要按事件发生时间统计。你会怎样建模和处理迟到、更正及重复事件？
intent: 考察你是否分开事件时间与处理时间，并把重放（重新处理历史消息或任务）、去重和历史修正纳入管道语义。
signals:
  - 明确事件 ID、事件时间和入库时间
  - 解释迟到窗口、幂等（重复请求不会重复执行）写入及重算范围
  - 讨论更正事件如何替代或冲销原记录
  - 说明报表何时稳定以及如何标记修订
  - 分别记录客户端发生时间、服务端接收时间和可信度来源。
  - 为离线队列中的顺序、重复提交和设备身份定义稳定标识。
  - 明确权限变更前后离线操作的接受、拒绝或待审规则。
primaryCapability: domain-modeling.data-model
topics:
  - data-modeling
  - engineering-systems
roles:
  - data
  - backend
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - hiring
formats:
  - system-design
  - case
followUps:
  - 如果设备时钟偏差很大，哪些排序结论仍然可信？
  - 怎样避免离线事件在账号停用后执行不可逆（可以安全撤回）副作用（重复执行、越权等额外影响）？
source:
  - attribution: inspired
    label: Dataskew 数据工程题库的主题覆盖；题面为本站独立编写
    url: https://github.com/dataskew-io/data-engineering-interview-questions
  - attribution: original
    label: Interview Compass Original Expansion to 1,500 — Batch B
relatedQuestions: []
---
