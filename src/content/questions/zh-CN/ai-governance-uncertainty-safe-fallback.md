---
questionId: "ai-governance-uncertainty-safe-fallback"
kind: "question"
status: "published"
primaryCapability: "professional.ai-evaluation-governance"
scenarios: ["interview","hiring","promotion"]
source: [{"attribution":"original","label":"Interview Compass 原创扩充批次 2026-10-15 A"}]
locale: "zh-CN"
title: "模型无法确认答案时，产品应该拒答、给出低置信结果还是转人工？你会依据什么区分？"
question: "模型无法确认答案时，产品应该拒答、给出低置信结果还是转人工？你会依据什么区分？"
intent: "考察是否能根据错误代价、证据质量和替代路径设计不同的安全退化行为。"
signals: ["按任务后果和可逆性区分错误成本","使用可校准的证据或置信信号，而非模型自述的确定语气","定义拒答、澄清、回退到确定性流程或人工接管条件","观察用户放弃、误用和转人工等后续结果"]
topics: ["ai-engineering","reliability","risk-management"]
roles: ["ai-engineer","product","operations"]
responsibilityScopes: ["team"]
careerTracks: ["individual-contributor","team-manager"]
formats: ["system-design","case"]
followUps: ["低置信判断本身不可靠时，怎样触发安全退化？","拒答过多导致用户转向更危险渠道时如何纳入评估？"]
---
