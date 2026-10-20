---
questionId: bulk-a-retry-amplification
kind: question
status: published
locale: zh-CN
title: 重试放大故障
question: 一次下游抖动后，上游流量没有明显增加，但请求数和队列长度翻倍，多个服务开始超时。你会怎样判断是否出现重试放大？
intent: 考察从症状关联到调用链策略、队列积压和止损手段的定位过程。
signals:
  - 关联重试次数、超时和原始请求量的变化
  - 检查重试层级、退避、抖动及请求截止时间
  - 讨论如何停止放大并安全排空积压
primaryCapability: professional.debugging
topics:
  - debugging
  - reliability
  - distributed-systems
roles:
  - backend
  - engineering
  - frontend
  - mobile
  - ai-engineer
responsibilityScopes:
  - team
  - multiple-teams
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
    label: System Design Primer：故障模式与重试
    url: https://github.com/donnemartin/system-design-primer
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
