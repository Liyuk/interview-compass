---
questionId: a-ai-engineering-eval-disagreement
kind: question
status: published
locale: zh-CN
title: 两个评审者对同一批 AI 输出的好坏经常意见相反，你会怎样判断这是标注分歧、评价标准含糊，还是模型本身不稳定？
question: 两个评审者对同一批 AI 输出的好坏经常意见相反，你会怎样判断这是标注分歧、评价标准含糊，还是模型本身不稳定？
intent: 了解你能否把主观质量判断拆成可复查的评价标准，并定位分歧来自哪里。
signals:
  - 先定义任务目标和可接受错误，而非直接取多数票
  - 检查样本切片、标注说明和评审者一致性
  - 区分固定输入的模型波动与评价定义差异
  - 提出仲裁、复标或补充样本的验证动作
primaryCapability: professional.ai-engineering
topics:
  - ai-engineering
  - metrics
roles:
  - ai-engineer
  - data
  - engineering
  - product
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - hiring
formats:
  - case
followUps:
  - 如果分歧集中在少数高风险场景，你会怎样处理？
  - 若评审者仍无法达成一致，你会用什么证据决定是否补充标准或样本？
source:
  - attribution: inspired
    label: atryx AI 工程题库的主题覆盖；题面为本站独立编写
    url: https://github.com/atryx/ai-engineer-interview-questions
perspective: candidate
perspectiveReview: reviewed
qualityTier: core
weakAnswer: 用多数票决定模型输出好坏，没有统一任务标准或查明评审者为何分歧。
anchors:
  notPassing: 把评审分歧简单交给多数票，没有统一任务标准。
  passing: 定义目标、错误类型和可接受质量。
  excellent: 检查样本切片、评审一致性和固定输入下的模型波动，区分分歧来源。
  exceptional: 为高风险分歧设复标/仲裁规则，并验证标准改变后结论是否稳定。
---
