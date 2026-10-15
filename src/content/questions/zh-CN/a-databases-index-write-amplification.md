---
questionId: a-databases-index-write-amplification
kind: question
status: published
locale: zh-CN
title: 新增索引后查询变快了，但写入延迟和存储增长明显恶化。你会怎样判断索引是否值得保留？
question: 新增索引后查询变快了，但写入延迟和存储增长明显恶化。你会怎样判断索引是否值得保留？
intent: 考察你能否把查询收益与写放大、存储、维护窗口和真实访问模式一起评估。
signals:
  - 识别索引覆盖的查询、命中率、选择性和读写比例。
  - 量化索引增加的写入成本、空间占用和维护影响。
  - 用代表性负载验证删除、合并或调整索引后的效果。
primaryCapability: professional.computer-science
topics:
  - databases
  - debugging
  - reliability
roles:
  - backend
  - data
  - engineering
responsibilityScopes:
  - individual
  - team
careerTracks:
  - individual-contributor
scenarios:
  - interview
  - campus
  - hiring
formats:
  - debugging
source:
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
followUps:
  - 如果查询只在月末批处理时变慢，是否应为它保留常驻索引？
  - 如何区分索引无效与统计信息、缓存或查询计划变化？
---
