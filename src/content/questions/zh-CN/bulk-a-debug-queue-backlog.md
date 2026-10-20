---
questionId: bulk-a-debug-queue-backlog
kind: question
status: published
locale: zh-CN
title: 队列积压持续恢复又反弹
question: 消息积压经常在扩容后下降，几小时后又反弹。你会检查哪些生产者、消费者和消息特征，以判断真正瓶颈在哪里？
intent: 考察是否从吞吐量、处理耗时、分区或热点和下游限制造成的反馈中找根因。
signals:
  - 同时比较生产速率、消费速率和单条处理分布
  - 检查并行度、热点键、毒消息与下游限流
  - 区分扩容带来的暂时清空与持续能力提升
primaryCapability: professional.debugging
topics:
  - debugging
  - reliability
  - devops
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
  - debugging
source:
  - attribution: inspired
    label: DevOps Interview Questions：容量与运行诊断
    url: https://github.com/DNXLabs/DevOps-Interview-Questions
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
