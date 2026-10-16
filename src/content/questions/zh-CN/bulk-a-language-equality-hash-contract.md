---
questionId: bulk-a-language-equality-hash-contract
kind: question
status: published
locale: zh-CN
title: 相等性与哈希接口约定
question: 某对象重写了相等判断，却仍使用默认哈希实现，放入哈希集合后出现查找失败。请解释相等与哈希接口约定，并说明如何构造测试。
intent: 考察语言对象契约和哈希容器的正确使用。
signals:
  - 说明相等对象需满足一致哈希要求
  - 指出可变键对集合查找的风险
  - 提出相等/不等及集合往返测试
primaryCapability: professional.computer-science
topics:
  - programming-languages
  - data-structures
roles:
  - engineering
  - backend
  - frontend
  - mobile
  - ai-engineer
  - data
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
  - knowledge
source:
  - attribution: inspired
    label: JavaGuide — backend, Java, database, concurrency, and distributed systems topics
    url: https://github.com/Snailclimb/JavaGuide/blob/main/README.md
---
