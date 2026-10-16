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
  - 从输入、机制和故障表现中提出可验证的技术假设
  - 比较实现路径及其正确性、性能、安全或维护代价
  - 说明覆盖边界场景的测试或运行指标
  - 追踪源文档版本到检索片段和回答引用
  - 说明更新、删除传播及缓存失效的完成判据
  - 处理索引失败期间的旧知识隔离或降级（关闭非核心功能以保住核心服务）
  - 列出原文、分块、向量、缓存和备份副本。
  - 区分请求受理、停止新检索和彻底清理状态。
  - 设计可重试的删除事件与抽样验证。
primaryCapability: professional.ai-engineering
topics:
  - ai-engineering
  - security
  - engineering-systems
  - data-modeling
  - metrics
  - databases
  - reliability
roles:
  - ai-engineer
  - backend
  - data
  - engineering
  - product
responsibilityScopes:
  - multiple-teams
  - individual
  - team
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - hiring
  - campus
  - promotion
formats:
  - system-design
  - case
  - debugging
followUps:
  - 清理期间如何避免回答继续引用旧材料？
  - 失败的下游如何告警和补偿？
source:
  - attribution: inspired
    label: atryx AI 工程题库的主题覆盖；题面为本站独立编写
    url: https://github.com/atryx/ai-engineer-interview-questions
  - attribution: inspired
    label: Landed AI Engineer Interview：RAG 与知识库更新
    url: https://github.com/landedjobs/awesome-ai-engineer-interview
  - attribution: inspired
    label: GitHub 技术面试与工程体系调研；题目为本站独立编写
    url: https://github.com/yangshun/tech-interview-handbook
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 C
---
