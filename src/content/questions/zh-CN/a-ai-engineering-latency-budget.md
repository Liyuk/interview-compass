---
questionId: "a-ai-engineering-latency-budget"
kind: "question"
status: "published"
locale: "zh-CN"
title: "一个生成式功能的回答质量不错，但高峰时延和单次成本都超过产品约定。你会如何判断问题出在模型、上下文、检索还是调用链？"
question: "一个生成式功能的回答质量不错，但高峰时延和单次成本都超过产品约定。你会如何判断问题出在模型、上下文、检索还是调用链？"
intent: "考察你是否能把质量、响应时间和成本拆成可测的系统约束，再据此定位优化点。"
signals: ["先定义端到端时延和成本的统计口径", "将排队、检索、生成、工具调用分别计时", "区分平均值与尾延迟以及不同请求类型", "提出优化后仍能保护质量的对照验证"]
primaryCapability: "professional.ai-engineering"
topics: ["ai-engineering", "resource-allocation", "system-design"]
roles: ["ai-engineer", "backend", "product"]
responsibilityScopes: ["team"]
careerTracks: ["individual-contributor", "team-manager"]
scenarios: ["interview", "hiring"]
formats: ["case", "system-design"]
followUps: []
source: [{"attribution": "inspired", "label": "atryx AI 工程题库的主题覆盖；题面为本站独立编写", "url": "https://github.com/atryx/ai-engineer-interview-questions"}]
---
