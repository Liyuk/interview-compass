---
questionId: bulk-a-distributed-clock-ordering
kind: question
status: published
locale: zh-CN
title: 分布式事件的时间顺序
question: 两个数据中心的日志时间戳显示事件 A 早于事件 B，但网络消息表明 B 触发了 A。你会如何解释这种矛盾，并为因果排序选择什么信息？
intent: 考察时钟偏差与因果顺序的区别。
signals:
  - 指出物理时钟可能偏移或漂移
  - 区分时间戳排序与因果关系
  - 提出逻辑时钟、消息因果标记或追踪上下文等方案
primaryCapability: professional.computer-science
topics:
  - distributed-systems
roles:
  - backend
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
  - case
source:
  - attribution: inspired
    label: System Design Primer — requirements, constraints, and trade-offs
    url: https://github.com/donnemartin/system-design-primer/blob/master/README.md
---
