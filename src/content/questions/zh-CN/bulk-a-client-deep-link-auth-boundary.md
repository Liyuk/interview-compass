---
questionId: bulk-a-client-deep-link-auth-boundary
kind: question
status: published
locale: zh-CN
title: "外部链接直达页面时，怎样保护登录和访问权限？"
question: 用户通过外部链接直接打开需要登录的订单详情页。你会怎样设计路由解析、登录回跳和权限校验，避免深链绕过应用内流程？
intent: 考察客户端深链、安全边界与导航状态处理。
signals:
  - 将深链解析与权限决策分离
  - 登录后保留受验证的目标地址
  - 不把客户端隐藏入口当作访问控制
primaryCapability: professional.system-design
topics:
  - mobile
  - security
roles:
  - mobile
  - engineering
  - frontend
  - backend
responsibilityScopes:
  - individual
  - team
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - campus
  - hiring
formats:
  - system-design
source:
  - attribution: inspired
    label: Android Interview Questions — Android, Kotlin, lifecycle, and architecture topics
    url: https://github.com/MindorksOpenSource/android-interview-questions/blob/master/README.md
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
