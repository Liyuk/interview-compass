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
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - hiring
formats:
  - case
source:
  - attribution: inspired
    label: Landed AI Engineer Interview：提示注入与工具安全
    url: https://github.com/landedjobs/awesome-ai-engineer-interview
---
