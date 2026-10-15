---
questionId: wave16-ai-011
kind: question
status: published
locale: zh-CN
title: 模型能生成 SQL 时，怎样限制查询影响范围？
question: 数据助手可生成只读 SQL，但查询可能扫描全库、连接敏感表或产生高成本。你会怎样设计执行沙箱和审批？
intent: 考察工具能力边界、查询治理与可审计授权。
signals:
  - 在执行前解析并验证查询计划、权限和资源上限。
  - 把只读与低风险等概念分开评估。
  - 记录生成、改写、审批和执行结果。
primaryCapability: professional.ai-engineering
topics:
  - ai-engineering
  - security
roles:
  - ai-engineer
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - hiring
  - promotion
formats:
  - case
followUps:
  - 用户允许查询是否等同于允许访问所有字段？
  - 超时取消后如何确认后台查询已停止？
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 C
---
