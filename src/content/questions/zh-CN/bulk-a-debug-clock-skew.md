---
questionId: bulk-a-debug-clock-skew
kind: question
status: published
locale: zh-CN
title: 跨服务事件顺序错乱
question: 对账任务发现同一业务对象的事件时间顺序偶尔倒置，日志又分布在多个区域。你会如何判断是时钟偏差、异步延迟还是业务排序规则的问题？
intent: 了解如何区分物理时间、处理时间和业务顺序，并据此设计诊断证据。
signals:
  - 核对事件发生、接收和处理时间的来源及可信度，先定义业务需要的顺序。
  - 用跨服务标识、时钟同步和延迟分布区分偏差、漂移、异步到达及真实业务顺序。
  - 比较业务版本、因果标记或逻辑时钟等方式的适用性，不假设时间戳排序能证明因果。
  - 以区域差异、乱序和重放样例验证判断，并说明证据仍不能确定的部分。
primaryCapability: professional.debugging
topics:
  - debugging
  - distributed-systems
  - databases
roles:
  - backend
  - data
  - engineering
  - ai-engineer
responsibilityScopes:
  - team
  - multiple-teams
  - individual
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - hiring
  - campus
formats:
  - debugging
  - case
source:
  - attribution: inspired
    label: System Design Primer：分布式系统时序问题
    url: https://github.com/donnemartin/system-design-primer
  - attribution: inspired
    label: System Design Primer — requirements, constraints, and trade-offs
    url: https://github.com/donnemartin/system-design-primer/blob/master/README.md
relatedQuestions: []
followUps: []
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
