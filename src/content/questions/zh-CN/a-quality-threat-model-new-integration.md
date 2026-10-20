---
questionId: "a-quality-threat-model-new-integration"
kind: "question"
status: "published"
locale: "zh-CN"
title: "新接入的外部服务会接触用户数据并触发内部操作，你会怎样做轻量但有效的威胁建模？"
question: "新接入的外部服务会接触用户数据并触发内部操作，你会怎样做轻量但有效的威胁建模？"
intent: "考察能否识别信任边界、重要资产、攻击路径和相称的控制措施。"
signals: ["标明数据和指令跨越的信任边界及权限主体","列出滥用场景、影响范围和可能攻击者","优先采用最小权限、输入验证、密钥隔离和审计","明确残余风险、负责人和上线前验证项"]
primaryCapability: "professional.quality-security-safety"
topics: ["security","system-design","risk-management"]
roles:
  - backend
  - ai-engineer
  - engineering
  - frontend
  - mobile
  - data
responsibilityScopes: ["team"]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: ["interview","hiring","promotion"]
formats: ["case","planning"]
followUps: ["时间有限时，如何选择必须验证的攻击路径？","哪些风险需要设计变更而非增加监控？"]
source: [{"attribution":"original","label":"Interview Compass 原创扩充批次 2026-10-15 D"}]
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
