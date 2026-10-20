---
questionId: h-attribution-ai-assisted-work-disclosure
kind: question
status: published
locale: zh-CN
title: 使用 AI 协助完成工作后，怎样准确说明个人贡献？
question: 你交付了一份分析和方案，其中研究、代码草稿和文档大量由 AI 工具辅助生成，但问题定义、验证和最终决定由你负责。你会怎样向团队说明贡献？
intent: "考察你能否准确说明 AI 和协作者参与的边界，同时展示自己负责的问题定义、验证、最终判断及数据风险控制。"
signals: ["分别说明工具生成、自己修改、独立验证和最终决策的具体部分。", "用测试、来源核对或产物记录证明如何发现并纠正错误。", "说明输入数据、隐私、许可和安全边界如何检查。", "诚实呈现共同贡献，并对采用工具产物后的结果承担相应责任。"]
anchors:
  notPassing: "笼统说明使用了 AI，没有区分工作边界。"
  passing: "列出工具参与和本人审核的环节。"
  excellent: "提供验证证据、数据边界检查和责任说明。"
  exceptional: "透明披露不确定性与共同贡献，主动暂停无法解释的高风险产物，并确保可审计的验证和纠错责任。"
primaryCapability: work-responsibility.attribution
topics:
  - ethics
  - communication
  - ai-engineering
  - metrics
roles:
  - engineering
  - product
  - design
  - ai-engineer
  - frontend
  - backend
  - mobile
responsibilityScopes:
  - individual
  - team
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - hiring
  - promotion
formats:
  - case
  - behavioral
followUps: ["哪些任务或组织政策要求披露 AI 使用？你如何确认？", "如果工具产出的代码通过测试但你解释不了一个边界条件，接下来会做什么？"]
weakAnswer: "将工具生成内容说成完全独立完成，或以 AI 参与为由逃避最终验证和结果责任。"
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 J
  - attribution: original
    label: Interview Compass coverage-led original expansion batch 2026-10-17 C
perspective: "candidate"
perspectiveReview: "reviewed"
qualityTier: "core"

---
