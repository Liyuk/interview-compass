---
questionId: "ai-governance-model-version-behavior-drift"
kind: "question"
status: "published"
primaryCapability: "professional.ai-evaluation-governance"
scenarios: ["interview","hiring","promotion"]
source: [{"attribution":"original","label":"Interview Compass 原创扩充批次 2026-10-15 A"}]
locale: "zh-CN"
title: "更换基础模型后，怎样发现部分用户受到的影响？"
question: "更换基础模型后，整体指标相近但部分用户反馈明显变差。你会怎样发现模型行为发生了哪些变化，并判断是否需要回退？"
intent: "考察是否能把模型版本变化与具体用户任务、输出行为及下游结果关联起来。"
signals: ["记录模型、提示、检索语料、工具和参数的完整版本关系","按任务和用户群比较关键错误类型，而不只比较总分","用固定回归集与线上抽样复核寻找变化机制","提出分阶段切换、并行观察、回退和变更告知策略"]
topics: ["ai-engineering","reliability","metrics"]
roles:
  - ai-engineer
  - backend
  - data
  - engineering
  - frontend
  - mobile
responsibilityScopes: ["team"]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
formats: ["debugging","case"]
followUps: ["如果供应商静默更新模型，你怎样及时发现并保留可追溯性？","哪些变化需要重新审批，而不是普通回归测试？"]
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
