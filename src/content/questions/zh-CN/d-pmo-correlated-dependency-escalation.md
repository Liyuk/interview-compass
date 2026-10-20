---
questionId: d-pmo-correlated-dependency-escalation
kind: question
status: published
locale: zh-CN
title: 多个项目同时依赖同一平台团队时，何时升级组合层面决策？
question: 五个项目都报告同一平台依赖可能延期，但各自仍显示绿色。你会用什么证据判断应该调整项目组合，而不是继续逐项跟进？
intent: 判断能否把共享依赖风险汇总为组合风险，并转化成资源与决策动作。
signals:
  - "梳理共享依赖、各项目关键路径日期和交付估算置信度。"
  - "量化组合层面的相关暴露，包括风险价值、共享容量及可能同时失效的结果。"
  - "设置可观察的组合决策触发点，例如依赖延期或总容量缺口，并明确决策责任人。"
  - "比较重新排序或调整范围的选项，记录影响、负责人和复查节点。"
primaryCapability: delivery.project-management
topics:
  - planning
  - execution
  - risk-management
roles:
  - pmo
  - manager
  - product
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
  - hiring
  - promotion
formats:
  - case
  - planning
followUps: ["如何避免统一状态表掩盖各项目采用不同估算方法？","哪些依赖的完成时间或工作量最不确定？","发生延误时，哪些项目需要由组合负责人重新排序？"]
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 D
relatedQuestions: []
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
