---
questionId: a-coding-abstraction-mobile-state-restore
kind: question
status: published
locale: zh-CN
title: 用户正在编辑内容时，App 被系统在后台回收。用户回来后，你怎样保证内容和页面状态不丢，又不会恢复出过期数据？
question: 用户正在编辑内容时，App 被系统在后台回收。用户回来后，你怎样保证内容和页面状态不丢，又不会恢复出过期数据？
intent: 了解你能否区分需要持久化和可以重建的状态，并为恢复路径设计清晰的边界和验证。
signals:
  - 区分短暂界面状态、必须持久化的草稿与可从服务端重建的事实。
  - 说明系统回收前保存机会有限时，何时保存、如何控制写入成本。
  - 用版本或时间依据处理草稿与新服务端事实冲突，避免恢复覆盖新数据。
  - 验证回收、重启、弱网和过期授权下的恢复及用户可见结果。
primaryCapability: professional.coding-abstraction
topics:
  - mobile
  - frameworks
roles:
  - mobile
  - engineering
responsibilityScopes:
  - individual
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - campus
formats:
  - coding
  - case
source:
  - attribution: inspired
    label: 博客《筛选人和面试官到底在看什么》中的编辑器草稿例子
    url: >-
      https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2022/07/campus-recruitment-training/zh.md
  - attribution: inspired
    label: Android Interview Questions — Android, Kotlin, lifecycle, and architecture topics
    url: https://github.com/MindorksOpenSource/android-interview-questions/blob/master/README.md
relatedQuestions: []
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
