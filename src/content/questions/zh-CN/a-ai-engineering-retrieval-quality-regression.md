---
questionId: "a-ai-engineering-retrieval-quality-regression"
kind: "question"
status: "published"
locale: "zh-CN"
title: "知识问答助手的用户满意度下降，但离线检索指标没有变化。你会从哪些环节拆查这次退化？"
question: "知识问答助手的用户满意度下降，但离线检索指标没有变化。你会从哪些环节拆查这次退化？"
intent: "考察你是否能把用户结果和单点离线指标联系起来，追踪检索、生成与产品交互的误差。"
signals: ["区分召回相关、答案有据、任务完成等不同结果", "按查询类型、文档来源、用户群或版本切片", "设计能区分检索问题与生成问题的抽样复核", "说明指标不变时仍可能发生的分布变化"]
primaryCapability: "professional.ai-engineering"
topics: ["ai-engineering", "metrics", "debugging"]
roles:
  - ai-engineer
  - backend
  - data
  - engineering
  - frontend
  - mobile
  - product
responsibilityScopes: ["team"]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: ["interview", "hiring"]
formats: ["debugging", "case"]
followUps: []
source: [{"attribution": "inspired", "label": "atryx AI 工程题库的主题覆盖；题面为本站独立编写", "url": "https://github.com/atryx/ai-engineer-interview-questions"}]
---
