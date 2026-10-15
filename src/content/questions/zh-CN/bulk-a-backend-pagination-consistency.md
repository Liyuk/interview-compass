---
questionId: bulk-a-backend-pagination-consistency
kind: question
status: published
locale: zh-CN
title: 并发写入下的分页一致性
question: 管理后台按创建时间翻页时，新增和删除会让用户看到重复或漏项。你会比较 offset 与游标分页，并定义何种一致性预期？
intent: 考察分页协议、排序稳定性和并发数据变化。
signals:
  - 能指出非唯一排序键带来的歧义
  - 解释 offset 位移与游标边界行为
  - 根据交互需求说明快照或最终一致的取舍
primaryCapability: professional.system-design
topics:
  - backend
  - databases
roles:
  - backend
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
  - system-design
source:
  - attribution: inspired
    label: JavaGuide — backend, Java, database, concurrency, and distributed systems topics
    url: https://github.com/Snailclimb/JavaGuide/blob/main/README.md
---
