---
questionId: a-ai-engineering-human-review-capacity
kind: question
status: published
locale: zh-CN
title: 如何划定 AI 自动处理与人工复核边界，并控制审核积压？
question: 一个文档处理助手在多数场景下可以自动提交，但错误代价差异很大。团队为高风险回答增加人工复核后，错误率下降，待审核队列却持续增长。你会怎样按不确定性、证据和错误影响划分自动处理与人工复核，并让流程在容量范围内持续运行？
intent: 考察你能否根据证据质量与错误代价设定自动化边界，并同时管理复核质量、用户影响和人力容量。
signals:
  - 区分模型置信度、证据充分性、任务风险和错误严重度，避免用单一置信阈值决定是否自动提交。
  - 按用户影响和错误代价设计自动处理、抽样观察、人工复核或阻断等分流路径。
  - 跟踪待审核量、等待时间、复核一致性、漏检与人工容量，并说明触发调整的阈值。
  - 考虑减少重复审核、改善上游质量或用复核结果校准规则，并验证质量与响应速度是否同时可持续。
  - 区分模型置信度、证据充分性与任务风险
  - 设计按错误代价和用户影响分层的复核路径
  - 考虑人工队列容量及复核结果反馈到系统
primaryCapability: professional.ai-engineering
topics:
  - ai-engineering
  - operations
  - risk-management
  - reliability
roles:
  - ai-engineer
  - operations
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
formats:
  - case
  - planning
followUps:
  - 如果高风险请求集中在短时间内到达，你会采用限流、延迟、降级还是临时增加审核容量？依据是什么？
  - 如果复核者之间经常意见不一致，你会先改进标准、证据界面还是培训？
  - 当积压回落但漏检率开始上升时，你会怎样决定是否扩大自动处理范围？
source:
  - attribution: inspired
    label: atryx AI 工程题库的主题覆盖；题面为本站独立编写
    url: https://github.com/atryx/ai-engineer-interview-questions
  - attribution: inspired
    label: Landed AI Engineer Interview：人机协同与不确定性处理
    url: https://github.com/landedjobs/awesome-ai-engineer-interview
relatedQuestions:
  - questionId: bulk-c-metrics-06
    relation: 相关问题进一步评估自动化流程带来的整体净价值。
    contrast: 本题聚焦单个结果如何分流以及人审容量；相关题聚焦速度、复核和高价值客户风险的整体结果。
---
