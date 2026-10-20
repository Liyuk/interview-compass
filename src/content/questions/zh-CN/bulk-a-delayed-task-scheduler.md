---
questionId: bulk-a-delayed-task-scheduler
kind: question
status: published
locale: zh-CN
title: 延迟任务调度器
question: 设计一个供多个业务团队提交“在某个时间之后执行”的任务服务，任务可能被取消、改期或重复提交。你会怎样划分数据模型和执行组件？
intent: 考察任务状态、调度精度、水平扩展和并发修改如何共同影响系统边界。
signals:
  - 区分任务定义、到期索引和执行尝试的状态
  - 讨论时间精度、分片方式与调度器故障后的恢复
  - 说明取消或改期与已经开始执行之间的竞争如何处理
primaryCapability: professional.system-design
topics:
  - system-design
  - distributed-systems
  - concurrency
roles:
  - backend
  - engineering
  - ai-engineer
  - data
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - hiring
formats:
  - system-design
source:
  - attribution: inspired
    label: System Design Primer：队列与分布式任务处理
    url: https://github.com/donnemartin/system-design-primer
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
