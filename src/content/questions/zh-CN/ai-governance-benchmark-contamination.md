---
questionId: "ai-governance-benchmark-contamination"
kind: "question"
status: "published"
primaryCapability: "professional.ai-evaluation-governance"
scenarios: ["interview","hiring","promotion"]
source: [{"attribution":"original","label":"Interview Compass 原创扩充批次 2026-10-15 A"}]
locale: "zh-CN"
title: "模型在公开基准上持续提升，但内部任务表现停滞，你会如何排查评估失真？"
question: "模型在公开基准上持续提升，但内部任务表现停滞，你会如何排查评估失真？"
intent: "考察是否能发现基准污染、指标迎合或样本泄漏，并建立可信的独立验证。"
signals: ["区分模型能力提升与对已知题型、提示模板或评测规则的适配","检查数据重叠、版本变更、标注标准和评测代码","设计隔离的留出集、盲测或新任务回放，并保护测试集","说明何种证据会推翻“模型变好”的结论"]
topics: ["ai-engineering","metrics","ethics"]
roles:
  - ai-engineer
  - data
  - manager
  - engineering
  - backend
responsibilityScopes: ["team","multiple-teams"]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
formats: ["debugging","case"]
followUps: ["如果基准题已被训练数据污染，怎样恢复可比较的趋势？","谁应能访问隐藏评测集，如何留审计记录？"]
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
