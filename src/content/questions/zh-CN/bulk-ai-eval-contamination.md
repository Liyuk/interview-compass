---
questionId: bulk-ai-eval-contamination
kind: question
status: published
locale: zh-CN
title: 评测集意外泄漏到训练数据
question: 团队发现模型可能在公开语料或微调数据中见过部分内部评测题。你会如何判断离线成绩还能说明什么，并重建可信评测？
intent: 了解数据污染风险、评测集隔离和结论边界。
signals:
  - 区分题目记忆、模板相似和真实能力变化
  - 追查评测数据的来源、访问和训练流水线
  - 提出分层保密、滚动留出或新任务验证方案
primaryCapability: professional.ai-engineering
topics:
  - ai-engineering
  - reliability
  - security
roles:
  - ai-engineer
  - data
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
scenarios:
  - interview
  - hiring
formats:
  - case
source:
  - attribution: inspired
    label: Landed AI Engineer Interview：评测集与数据质量
    url: https://github.com/landedjobs/awesome-ai-engineer-interview
relatedQuestions: []
---
