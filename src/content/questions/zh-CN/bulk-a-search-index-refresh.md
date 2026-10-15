---
questionId: bulk-a-search-index-refresh
kind: question
status: published
locale: zh-CN
title: 搜索索引重建
question: 一个搜索服务需要调整分词和排序特征，同时不能让重建过程造成长时间结果缺失或明显增加写入延迟。你会怎样安排索引演进？
intent: 了解索引生产、版本切换、数据新鲜度和资源竞争的整体设计。
signals:
  - 区分变更捕获、全量构建和增量追赶
  - 说明如何并行验证新旧索引并控制切换范围
  - 考虑重建资源对在线查询和主存储的影响
primaryCapability: professional.system-design
topics:
  - system-design
  - databases
  - reliability
roles:
  - backend
  - engineering
  - data
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
    label: System Design Primer：索引与读写路径
    url: https://github.com/donnemartin/system-design-primer
---
