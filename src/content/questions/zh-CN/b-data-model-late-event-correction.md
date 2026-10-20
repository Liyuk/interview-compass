---
questionId: b-data-model-late-event-correction
kind: question
status: published
locale: zh-CN
title: 移动端事件可能离线数天后才上传，报表又需要按事件发生时间统计。你会怎样建模和处理迟到、更正及重复事件？
question: 移动端事件可能离线数天后才上传，报表又需要按事件发生时间统计。你会怎样建模和处理迟到、更正及重复事件？
intent: 考察你是否分开事件时间与处理时间，并把重放（重新处理历史消息或任务）、去重和历史修正纳入管道语义。
signals:
  - 分别记录客户端发生时间、服务端接收时间、稳定事件标识及时间可信度。
  - 说明离线队列的重复、乱序和设备身份变化怎样影响去重与关联。
  - 定义迟到窗口、更正事件、冲销或替代关系以及受影响的重算范围。
  - 比较允许修订和冻结报表的条件，标明结果版本及何时稳定。
  - 用跨天上传、重复发送和更正样例核对事件事实与报表结果。
primaryCapability: domain-modeling.data-model
topics:
  - data-modeling
  - engineering-systems
roles:
  - data
  - backend
  - engineering
  - frontend
  - mobile
  - ai-engineer
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
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
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
