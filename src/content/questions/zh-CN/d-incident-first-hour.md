---
questionId: d-incident-first-hour
kind: question
status: published
locale: zh-CN
title: 线上大面积失败的第一个小时
question: 线上服务突然大面积失败，你在第一个小时里会按什么顺序行动？
intent: 了解你如何在信息不全时先止损、再定位，并把进展同步给需要作决定的人。
signals:
  - 先止损，再解释原因
  - 区分已确认的事实与推测
  - 明确同步对象、频率和需要对方决定的事
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
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
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
