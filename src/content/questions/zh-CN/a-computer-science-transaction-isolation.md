---
questionId: a-computer-science-transaction-isolation
kind: question
status: published
locale: zh-CN
title: 两个事务同时修改同一批数据，可能出现哪些异常？
question: 两个事务同时修改同一批数据，可能出现哪些异常？不同的隔离级别分别防住了什么，又付出了什么代价？
intent: 了解你是否能把隔离级别和它防止的异常对应起来，并理解提高隔离带来的代价。
signals:
  - 能用具体场景解释脏读、不可重复读、幻读等异常
  - 把隔离级别和它防住的异常对应起来
  - 说明提高隔离级别对并发和性能的代价
primaryCapability: professional.computer-science
topics: [databases, concurrency]
roles: [backend, engineering, data]
responsibilityScopes: [individual]
careerTracks: [individual-contributor]
scenarios: [interview, campus]
formats: [knowledge]
followUps:
  - 你在项目里遇到过和隔离级别有关的问题吗？
  - 如果业务允许少量不一致，你会怎么选？
source:
  - attribution: inspired
    label: JavaGuide 的数据库与并发知识整理
    url: https://github.com/Snailclimb/JavaGuide/blob/main/README.md
---
