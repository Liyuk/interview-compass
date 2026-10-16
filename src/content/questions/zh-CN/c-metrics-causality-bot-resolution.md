---
questionId: c-metrics-causality-bot-resolution
kind: question
status: published
locale: zh-CN
title: 客服机器人“解决率”从 72% 升到 91%，能据此取消周末人工值守吗？
question: 机器人升级后，“没有转人工”的会话被算作已解决，解决率从 72% 升到 91%。同一周转人工入口移到了二级菜单，分母也改了。你今天会怎样回应取消周末人工值守的提议？
intent: 了解你能否识别指标测量的对象与决策所需的证据之间的差距，并提出可验证、不冒进的下一步。
signals:
  - 指出“没有转人工”不等于“任务完成”，并列出至少三种可能解释
  - 说明分母和入口同时变化使涨幅不可比，提出同定义重算或建立新基线（改动前的参照状态或数值）
  - 提出针对具体任务的小范围验证与护栏，而不是整体取消
primaryCapability: value-direction.metrics-causality
topics:
  - metrics
  - operations
  - risk-management
roles:
  - product
  - operations
  - data
  - manager
  - engineering
  - frontend
  - backend
  - mobile
  - ai-engineer
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
  - promotion
formats:
  - case
followUps:
  - 未确认的会话你会怎样标记，而不是算成成功？
  - 什么样的证据才足以让你支持减少某个时段的人工覆盖？
source:
  - attribution: inspired
    label: Engineering Decision Skills：metric-decision 示例
    url: >-
      https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/projects/2026/09/engineering-decision-skills/zh.md
---
