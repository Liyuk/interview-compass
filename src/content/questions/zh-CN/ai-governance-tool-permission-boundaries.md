---
questionId: "ai-governance-tool-permission-boundaries"
kind: "question"
status: "published"
primaryCapability: "professional.ai-evaluation-governance"
scenarios: ["interview","hiring","promotion"]
source: [{"attribution":"original","label":"Interview Compass 原创扩充批次 2026-10-15 A"}]
locale: "zh-CN"
title: "AI 助手可以调用内部工具，但不同任务需要不同权限，你会怎样设计授权与审计？"
question: "AI 助手可以调用内部工具，但不同任务需要不同权限，你会怎样设计授权与审计？"
intent: "考察是否能把模型的不确定性隔离在最小权限边界内，并控制授权、执行和追责链路。"
signals: ["区分读取、写入、外发等操作的风险等级和权限主体","采用任务级授权、最小权限、显式确认或双人审批","校验参数和目标资源，避免模型文本直接成为未验证命令","记录调用主体、意图、参数、结果和撤销路径"]
topics: ["ai-engineering","security","boundaries"]
roles: ["ai-engineer","backend","product"]
responsibilityScopes: ["team","multiple-teams"]
careerTracks: ["individual-contributor","team-manager"]
formats: ["system-design","case"]
followUps: ["紧急自动化场景如何减少确认步骤而不扩大权限？","怎样防止提示注入借用已授权工具越权？"]
---
