---
questionId: bulk-a-release-policy-for-emergency-fix
kind: question
status: published
locale: zh-CN
title: 紧急修复的发布边界
question: 一个安全漏洞需要当天修复，但完整回归需要两天。你会如何定义这次发布可接受的验证范围、审批和后续补测？
intent: 考察风险分级与紧急路径是否仍保留可审计的质量控制。
signals:
  - 明确漏洞影响、暴露窗口和未覆盖的回归范围
  - 按风险选择独立审查、定向测试或逐步放量
  - 安排发布后的补测、监测和退出条件
primaryCapability: professional.engineering-systems
topics:
  - engineering-systems
  - devops
  - risk-management
roles:
  - engineering
  - operations
responsibilityScopes:
  - team
  - organization
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - hiring
formats:
  - case
source:
  - attribution: original
    label: 原创：紧急修复的发布控制
---
