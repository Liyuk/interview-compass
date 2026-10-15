---
questionId: bulk-a-audit-log-query
kind: question
status: published
locale: zh-CN
title: 审计记录查询系统
question: 管理后台需要保留不可随意修改的操作记录，既支持按操作者和对象查询，也要应对数据量逐年增长。你会怎样设计写入、索引和保留策略？
intent: 考察审计语义、查询路径、存储成本和防篡改要求之间的取舍。
signals:
  - 明确哪些操作必须记录以及记录需要证明什么
  - 区分追加写入、查询索引和长期归档职责
  - 讨论权限、完整性校验、保留期限和导出负载
primaryCapability: professional.system-design
topics:
  - system-design
  - databases
  - security
roles:
  - backend
  - engineering
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
scenarios:
  - interview
  - hiring
formats:
  - system-design
source:
  - attribution: inspired
    label: System Design Primer：数据存储与访问模式
    url: https://github.com/donnemartin/system-design-primer
---
