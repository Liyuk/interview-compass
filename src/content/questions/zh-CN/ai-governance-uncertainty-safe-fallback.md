---
questionId: ai-governance-uncertainty-safe-fallback
kind: question
status: published
primaryCapability: professional.ai-evaluation-governance
scenarios:
  - interview
  - hiring
  - promotion
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 A
  - attribution: inspired
    label: GitHub 技术面试与工程体系调研；题目为本站独立编写
    url: https://github.com/yangshun/tech-interview-handbook
locale: zh-CN
title: 模型无法确认答案时，产品应该拒答、给出低置信结果还是转人工？你会依据什么区分？
question: 模型无法确认答案时，产品应该拒答、给出低置信结果还是转人工？你会依据什么区分？
intent: 考察是否能根据错误代价、证据质量和替代路径设计不同的安全退化行为。
signals:
  - 按任务后果、可恢复性和替代路径分析错误代价，不只看总体置信值。
  - 比较可校准证据、检索支撑和未知信号，不把模型自述语气当可靠概率。
  - 权衡拒答、澄清、有限回答、确定性流程或人工接管，明确接受风险与转换条件。
  - 跟踪误用、任务失败、放弃和人工负担，以分群证据复核策略及恢复门槛。
topics:
  - ai-engineering
  - reliability
  - risk-management
roles:
  - ai-engineer
  - product
  - operations
  - engineering
  - frontend
  - backend
  - mobile
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
formats:
  - system-design
  - case
followUps:
  - 低置信判断本身不可靠时，怎样触发安全退化？
  - 拒答过多导致用户转向更危险渠道时如何纳入评估？
relatedQuestions: []
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
