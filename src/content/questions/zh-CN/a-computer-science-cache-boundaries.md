---
questionId: a-computer-science-cache-boundaries
kind: question
status: published
locale: zh-CN
title: "缓存让读取变快，什么时候反而会出问题？"
question: "缓存能让读取变快，也可能让用户看到过期内容。你会怎样判断一份数据适不适合缓存，出错时又怎样发现？"
intent: "了解你是否把缓存当作有边界的机制：适用在哪里，失效怎么处理，代价落在哪里。"
signals:
  - "区分数据的变化频率与可容忍的陈旧程度"
  - "说明失效或版本策略，以及它带来的调试成本"
  - "提到如何观察命中率与过期读取，而不只是上线后等反馈"
primaryCapability: professional.computer-science
topics: [databases, backend, distributed-systems]
roles: [engineering, backend]
responsibilityScopes: [team]
careerTracks: [individual-contributor]
scenarios: [interview, hiring]
formats: [knowledge]
followUps:
  - "同一份数据被多个服务缓存时，失效应该由谁负责？"
source:
  - attribution: derived
    label: "筛选人和面试官到底在看什么（基础：知道答案的边界）"
    url: https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2022/07/campus-recruitment-training/zh.md
---
