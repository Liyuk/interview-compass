---
questionId: "b-data-quality-blocking-threshold"
kind: "question"
status: "published"
locale: "zh-CN"
title: "一个质量检查偶尔误报，导致下游任务停摆；取消检查又曾让错误数据进入结算。你会怎样设计分级处置？"
question: "一个质量检查偶尔误报，导致下游任务停摆；取消检查又曾让错误数据进入结算。你会怎样设计分级处置？"
intent: "考察你能否按数据用途和错误影响设计阻断、告警与人工复核级别。"
signals: ["区分关键完整性约束与软性异常", "按下游影响设置阈值和处置级别", "明确人工放行的授权和留痕", "跟踪误报率、漏报和下游损失以调整规则"]
primaryCapability: "domain-modeling.data-model"
topics: ["data-modeling", "reliability", "operations"]
roles: ["data", "engineering", "operations"]
responsibilityScopes: ["team"]
careerTracks: ["individual-contributor", "team-manager"]
scenarios: ["interview", "hiring"]
formats: ["case"]
followUps: []
source: [{"attribution": "inspired", "label": "Dataskew 数据工程题库的主题覆盖；题面为本站独立编写", "url": "https://github.com/dataskew-io/data-engineering-interview-questions"}]
---
