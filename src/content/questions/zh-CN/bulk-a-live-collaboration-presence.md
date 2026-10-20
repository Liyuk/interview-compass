---
questionId: bulk-a-live-collaboration-presence
kind: question
status: published
locale: zh-CN
title: 实时协作中的在线状态
question: 一个多人协作工具需要展示成员在线状态和正在编辑的位置；短暂延迟可以接受，但离线成员不能长期显示为在线。你会怎样设计状态更新和过期机制？
intent: 考察临时状态与持久业务数据的区分，以及网络中断下的过期语义。
signals:
  - 明确状态刷新频率、过期时间和允许的误差
  - 区分持久编辑内容与易失的在线状态
  - 讨论断线检测、重连风暴和大房间扇出成本
primaryCapability: professional.system-design
topics:
  - system-design
  - distributed-systems
  - concurrency
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
  - system-design
source:
  - attribution: inspired
    label: System Design Primer：实时系统与一致性
    url: https://github.com/donnemartin/system-design-primer
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
