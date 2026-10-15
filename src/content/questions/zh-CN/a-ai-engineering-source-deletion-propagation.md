---
questionId: a-ai-engineering-source-deletion-propagation
kind: question
status: published
locale: zh-CN
title: 一份内部文档被撤回或改为限权后，检索索引、缓存和已生成的引用可能仍保留旧内容。你会怎样设计更新与验证机制？
question: 一份内部文档被撤回或改为限权后，检索索引、缓存和已生成的引用可能仍保留旧内容。你会怎样设计更新与验证机制？
intent: 了解你是否把删除、权限变化和缓存失效当成检索系统的生命周期要求。
signals:
  - 追踪原文到切片、向量、缓存和引用的依赖
  - 说明撤权传播的时限与失败补偿
  - 定义可审计的删除确认和抽样验证
  - 考虑索引重建期间如何避免继续暴露旧数据
primaryCapability: professional.ai-engineering
topics:
  - ai-engineering
  - security
  - engineering-systems
roles:
  - ai-engineer
  - backend
  - data
responsibilityScopes:
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - hiring
formats:
  - system-design
  - case
followUps: []
source:
  - attribution: inspired
    label: atryx AI 工程题库的主题覆盖；题面为本站独立编写
    url: https://github.com/atryx/ai-engineer-interview-questions
  - attribution: inspired
    label: Landed AI Engineer Interview：RAG 与知识库更新
    url: https://github.com/landedjobs/awesome-ai-engineer-interview
---
