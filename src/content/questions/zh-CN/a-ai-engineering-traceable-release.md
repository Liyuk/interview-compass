---
questionId: a-ai-engineering-traceable-release
kind: question
status: published
locale: zh-CN
title: "线上回答出现错误引用或质量退化时，怎样观测并控制敏感数据暴露？"
question: "线上回答出现错误引用或质量退化，但提示词和检索上下文可能包含敏感数据，默认不能记录原文。你会补充哪些观测信息来区分检索、模型和工具故障，同时控制数据暴露？"
intent: 考察你能否建立足够的追踪证据，同时明确日志保留、脱敏与访问边界。
signals:
  - 用关联ID和模型、提示、索引、工具及参数版本重建请求路径。
  - 从具体错误确定最小必要输入、检索和输出证据，不默认完整原文都应保留。
  - 比较脱敏、抽样、统计与受控临时采集的诊断价值、局限和敏感暴露。
  - 规定访问、用途、保留和删除，并用故障样例验证仍能区分检索模型与工具退化。
primaryCapability: professional.ai-engineering
topics:
  - ai-engineering
  - engineering-systems
  - reliability
  - security
roles:
  - ai-engineer
  - backend
  - engineering
  - frontend
  - mobile
  - data
responsibilityScopes:
  - team
  - organization
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - hiring
formats:
  - debugging
  - case
followUps:
  - "不保留提示词原文时，哪些安全摘要仍能帮助诊断错误引用？"
  - "什么情况下可以临时采集敏感内容，由谁访问，并在何时删除？"
source:
  - attribution: inspired
    label: atryx AI 工程题库的主题覆盖；题面为本站独立编写
    url: https://github.com/atryx/ai-engineer-interview-questions
  - attribution: original
    label: 原创：生成式 AI 观测与敏感数据边界
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
