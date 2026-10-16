---
questionId: bulk-ai-embedding-migration
kind: question
status: published
locale: zh-CN
title: 向量模型升级与索引迁移
question: 更换嵌入模型后，新旧向量不可直接比较，但重建全量向量需要数天。你会怎样设计迁移和查询切换？
intent: 关注向量空间版本、在线重建、召回一致性和资源成本。
signals:
  - 将嵌入模型版本显式纳入文档和查询索引元数据
  - 设计双索引或分批回填（补算历史数据）期间的检索策略
  - 定义质量对照、切换窗口和旧索引退役条件
primaryCapability: professional.ai-engineering
topics:
  - ai-engineering
  - databases
  - reliability
roles:
  - ai-engineer
  - data
  - backend
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
scenarios:
  - interview
  - hiring
formats:
  - system-design
source:
  - attribution: inspired
    label: Landed AI Engineer Interview：向量检索与索引演进
    url: https://github.com/landedjobs/awesome-ai-engineer-interview
---
