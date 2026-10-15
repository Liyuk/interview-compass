---
questionId: bulk-ai-agent-budget-and-loop
kind: question
status: published
locale: zh-CN
title: Agent 循环消耗预算
question: 一个多步骤 Agent 在部分任务上反复调用工具，导致延迟和 token 成本不可预测。你会设计哪些运行限制和停止条件？
intent: 观察如何平衡任务完成率、资源上限、循环检测和可解释的终止行为。
signals:
  - "按任务定义时长、工具调用数、步骤数和费用上限。"
  - "区分可恢复失败与无进展的重复调用，并定义停止条件。"
  - "找出冗余检索或步骤，验证优化没有降低任务成功率。"
  - "预算耗尽时说明部分结果、后续选项和审计记录。"
primaryCapability: professional.ai-engineering
topics:
  - ai-engineering
  - reliability
  - metrics
  - product-thinking
roles:
  - ai-engineer
  - backend
  - product
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
    label: Landed AI Engineer Interview：Agent 运行治理
    url: https://github.com/landedjobs/awesome-ai-engineer-interview
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 C
followUps:
  - Agent 能完成客户任务，但平均调用工具 18 次，成本和失败概率都较高。你会如何改进而不损害成功率？
---
