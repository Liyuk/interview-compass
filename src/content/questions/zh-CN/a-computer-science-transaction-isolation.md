---
questionId: a-computer-science-transaction-isolation
kind: question
status: published
locale: zh-CN
title: 两个事务同时修改同一批数据，可能出现哪些异常？
question: 两个事务同时修改同一批数据，可能出现哪些异常？不同的隔离级别分别防住了什么，又付出了什么代价？
intent: 了解你是否能把隔离级别和它防止的异常对应起来，并理解提高隔离带来的代价。
signals:
  - 用并发时间线说明脏读、不可重复读、幻读及相关业务异常。
  - 在明确数据库和实现前提下比较隔离保证，不把隔离级别名称当跨产品完全相同的行为。
  - 比较锁、快照或冲突检测对吞吐、等待与重试的影响。
  - 用可重复的并发样例核验业务不变量，说明仅提高隔离仍不能解决的边界。
primaryCapability: professional.computer-science
topics: [databases, concurrency]
roles:
  - backend
  - engineering
  - data
  - ai-engineer
responsibilityScopes: [individual]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: [interview, campus]
formats: [knowledge]
followUps:
  - 你在项目里遇到过和隔离级别有关的问题吗？
  - 如果业务允许少量不一致，你会怎么选？
source:
  - attribution: inspired
    label: JavaGuide 的数据库与并发知识整理
    url: https://github.com/Snailclimb/JavaGuide/blob/main/README.md
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
