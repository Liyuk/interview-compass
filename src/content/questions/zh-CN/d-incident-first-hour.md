---
questionId: d-incident-first-hour
kind: question
status: published
locale: zh-CN
title: 线上大面积失败的第一个小时
question: 线上服务突然大面积失败，你在第一个小时里会按什么顺序行动？
intent: 了解你如何在信息不全时先止损、再定位，并把进展同步给需要作决定的人。
signals:
  - 先核验影响和安全边界，在已有权限或指导下采取可回退的缓解；无权或不确定时及时升级。
  - 并行保留现场证据与调查，不因急于解释而拖延必要止损，也不把止损等同于盲目回滚。
  - 区分事实、假设与未知，并确认事故协调、技术执行、业务风险和通报职责。
  - 按明确节奏更新受影响方，将需要有权者决定的选项、代价和时限讲清楚。
primaryCapability: delivery.reliability-incidents
topics:
  - reliability
  - risk-management
  - communication
  - debugging
roles:
  - engineering
  - backend
  - mobile
  - ai-engineer
  - pmo
  - frontend
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - operations-review
formats:
  - case
  - debugging
source:
  - attribution: derived
    label: 管理复盘：从执行到系统的八个判断
    url: https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2026/08/management-retrospective/zh.md
---
