---
questionId: bulk-d-risk-trigger-escalation
kind: question
status: published
locale: zh-CN
title: 多个风险相关但单项都未越线时如何处理
question: 一个发布项目的容量、供应商交付和数据质量风险分别都低于各自升级阈值，但三者可能在同一周叠加。你会怎样判断组合风险，并决定采取什么行动？
intent: 考察风险关联、组合暴露和提前采取可逆（可以安全撤回）动作的判断。
signals:
  - 识别风险之间的共同时间窗口与放大关系。
  - 估计组合影响并说明假设，而非机械套单项阈值。
  - 选择低成本缓解动作并规定何时升级或撤回。
primaryCapability: delivery.reliability-incidents
topics:
  - risk-management
  - execution
  - communication
roles:
  - pmo
  - engineering
  - operations
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
  - promotion
formats:
  - case
source:
  - attribution: inspired
    label: Sourcegraph engineering leadership interview themes
    url: >-
      https://github.com/sourcegraph/handbook/blob/main/content/departments/engineering/dev/hiring/engineering-leadership.md
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
