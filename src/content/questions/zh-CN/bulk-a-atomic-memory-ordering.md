---
questionId: bulk-a-atomic-memory-ordering
kind: question
status: published
locale: zh-CN
title: 原子操作与内存可见性
question: 两个线程通过一个标志位传递“数据已准备好”的信号。为什么仅把标志位声明为原子类型仍可能不足以保证数据可见？
intent: 考察原子性与内存顺序/同步关系是否被区分。
signals:
  - 能区分单次读写原子性和跨变量顺序
  - 能提及 happens-before 或等价同步关系
  - 会说明需使用匹配的发布/获取语义或锁
primaryCapability: professional.computer-science
topics:
  - concurrency
  - programming-languages
roles:
  - engineering
  - backend
  - mobile
  - ai-engineer
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
