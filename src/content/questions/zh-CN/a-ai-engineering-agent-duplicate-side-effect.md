---
questionId: "a-ai-engineering-agent-duplicate-side-effect"
kind: "question"
status: "published"
locale: "zh-CN"
title: "一个代理可以创建工单、退款或修改账户。调用超时后系统无法判断动作是否成功，代理开始重试；你会怎样避免重复或越权的副作用？"
question: "一个代理可以创建工单、退款或修改账户。调用超时后系统无法判断动作是否成功，代理开始重试；你会怎样避免重复或越权的副作用？"
intent: "考察你能否把模型决策与真实世界的写操作隔离，并设计安全的失败语义。"
signals: ["把只读和有副作用的工具区分开", "用幂等键、状态查询或人工确认处理不确定结果", "按权限、金额或风险设置确认门槛", "说明重试、超时和部分成功时的状态恢复"]
primaryCapability: "professional.ai-engineering"
topics: ["ai-engineering", "reliability", "security"]
roles: ["ai-engineer", "backend"]
responsibilityScopes: ["team"]
careerTracks: ["individual-contributor", "team-manager"]
scenarios: ["interview", "hiring"]
formats: ["system-design", "case"]
followUps: []
source: [{"attribution": "inspired", "label": "atryx AI 工程题库的主题覆盖；题面为本站独立编写", "url": "https://github.com/atryx/ai-engineer-interview-questions"}]
---
