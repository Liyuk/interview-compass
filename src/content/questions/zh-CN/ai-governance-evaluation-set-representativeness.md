---
questionId: "ai-governance-evaluation-set-representativeness"
kind: "question"
status: "published"
primaryCapability: "professional.ai-evaluation-governance"
scenarios: ["interview","hiring","promotion"]
source: [{"attribution":"original","label":"Interview Compass 原创扩充批次 2026-10-15 A"}]
locale: "zh-CN"
title: "离线评估集覆盖不了真实用户请求时，你怎样判断上线风险？"
question: "离线评估集覆盖不了真实用户请求时，你怎样判断上线风险？"
intent: "考察是否能识别评估样本与真实使用分布的差距，并把覆盖盲区转成有边界的上线决策。"
signals: ["先按用户、任务、语言、输入长度和风险等级拆解真实流量","说明样本来源、更新周期、代表性偏差与无法覆盖的长尾","提出分层评估、线上影子流量或受控灰度等补证方式","明确证据不足时的限制、回滚条件和责任人"]
topics: ["ai-engineering","metrics","risk-management"]
roles: ["ai-engineer","data","product"]
responsibilityScopes: ["team"]
careerTracks: ["individual-contributor","team-manager"]
formats: ["case","planning"]
followUps: ["如果真实流量包含敏感信息，怎样在不扩大隐私暴露的前提下抽样？","哪些盲区可以接受，哪些必须阻止发布？"]
---
