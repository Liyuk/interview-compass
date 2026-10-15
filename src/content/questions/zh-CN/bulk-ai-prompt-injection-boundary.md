---
questionId: bulk-ai-prompt-injection-boundary
kind: question
status: published
locale: zh-CN
title: 检索内容试图改变 Agent 行为
question: Agent 会读取外部网页并调用内部工具，一段网页文本包含要求泄露数据或改变指令的内容。你会如何划分信任边界并验证防护？
intent: 考察是否把检索文本视为不可信输入，并限制工具权限和可造成的后果。
signals:
  - 区分系统策略、用户请求和检索内容的信任级别
  - 限制工具授权、参数范围和敏感操作的确认要求
  - 设计覆盖间接注入及数据外泄路径的测试
primaryCapability: professional.ai-engineering
topics:
  - ai-engineering
  - security
  - reliability
roles:
  - ai-engineer
  - backend
  - product
  - engineering
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
source:
  - attribution: inspired
    label: Landed AI Engineer Interview：提示注入与工具安全
    url: https://github.com/landedjobs/awesome-ai-engineer-interview
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 A
followUps:
  - 【工具结果返回恶意内容时如何隔离？】Agent 调用网页检索工具后，页面内容试图诱导它发送内部数据。工具本身是可信服务，但返回内容不可信。你会如何设置边界？
  - 用户明确授权后是否能把敏感信息发送给外部工具？
  - 如何在安全拦截与任务完成率之间评估？
---
