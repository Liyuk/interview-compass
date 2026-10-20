---
questionId: "a-quality-dependency-supply-chain-control"
kind: "question"
status: "published"
locale: "zh-CN"
title: "一个广泛使用的依赖被披露存在高危漏洞，但升级可能带来兼容性问题，你会怎样安排处置顺序？"
question: "一个广泛使用的依赖被披露存在高危漏洞，但升级可能带来兼容性问题，你会怎样安排处置顺序？"
intent: "考察能否按可利用性、暴露范围和缓解措施排序风险，并控制升级带来的变更风险。"
signals: ["确认影响版本、调用路径、外部暴露和可利用条件","盘点受影响服务并设置临时缓解","在隔离环境验证升级及回归范围","分阶段修复、监测残余暴露并记录风险接受人"]
primaryCapability: "professional.quality-security-safety"
topics: ["security","engineering-systems","devops"]
roles:
  - engineering
  - backend
  - frontend
  - mobile
  - ai-engineer
  - data
responsibilityScopes: ["team"]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: ["interview","hiring","promotion"]
formats: ["case","planning"]
followUps: ["尚无补丁但服务正被扫描利用时，怎样选择临时控制？","如何证明所有实例都已修复？"]
source: [{"attribution":"original","label":"Interview Compass 原创扩充批次 2026-10-15 D"}]
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
