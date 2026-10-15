---
questionId: bulk-ai-agent-budget-and-loop
kind: question
status: published
locale: zh-CN
title: Agent 循环消耗预算
question: 一个多步骤 Agent 在部分任务上反复调用工具，导致延迟和 token 成本不可预测。你会设计哪些运行限制和停止条件？
intent: 观察如何平衡任务完成率、资源上限、循环检测和可解释的终止行为。
signals:
  - 为单次任务定义时间、调用次数和费用预算
  - 区分可恢复重试与无进展的循环
  - 说明预算耗尽后的部分结果、用户提示和审计记录
primaryCapability: professional.ai-engineering
topics:
  - ai-engineering
  - reliability
  - metrics
roles:
  - ai-engineer
  - backend
  - product
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
scenarios:
  - interview
  - hiring
formats:
  - case
source:
  - attribution: inspired
    label: Landed AI Engineer Interview：Agent 运行治理
    url: https://github.com/landedjobs/awesome-ai-engineer-interview
---
