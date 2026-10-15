---
questionId: bulk-a-debug-clock-skew
kind: question
status: published
locale: zh-CN
title: 跨服务事件顺序错乱
question: 对账任务发现同一业务对象的事件时间顺序偶尔倒置，日志又分布在多个区域。你会如何判断是时钟偏差、异步延迟还是业务排序规则的问题？
intent: 了解如何区分物理时间、处理时间和业务顺序，并据此设计诊断证据。
signals:
  - 核对事件时间、接收时间与处理时间各自来源
  - 寻找时钟同步偏差和跨服务关联标识
  - 说明业务顺序应由何种版本或因果信息表达
primaryCapability: professional.debugging
topics:
  - debugging
  - distributed-systems
  - databases
roles:
  - backend
  - data
  - engineering
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
scenarios:
  - interview
  - hiring
formats:
  - debugging
source:
  - attribution: inspired
    label: System Design Primer：分布式系统时序问题
    url: https://github.com/donnemartin/system-design-primer
---
