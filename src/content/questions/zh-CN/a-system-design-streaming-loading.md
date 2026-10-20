---
questionId: a-system-design-streaming-loading
kind: question
status: published
locale: zh-CN
title: 流媒体的加载和请求策略应该怎么设计，才能既起播快又不卡？
question: 流媒体的加载和请求策略应该怎么设计，才能既起播快又不卡？分片、码率自适应、预加载和缓存之间怎样取舍？
intent: 了解你能否在起播速度、流畅度、带宽成本之间建立清晰的取舍，并根据网络变化调整策略。
signals:
  - 说明分片大小对起播、切换和请求数量的影响
  - 说明码率自适应怎样根据带宽和缓冲区做决策，并避免频繁切换
  - 说明预加载的收益和对带宽、流量的代价
  - 说明怎样用起播时间、卡顿率等指标评估策略
primaryCapability: professional.system-design
topics: [system-design, frontend, mobile, computer-networks]
roles:
  - engineering
  - frontend
  - mobile
  - backend
responsibilityScopes: [team]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: [interview, hiring]
formats: [system-design]
followUps:
  - 用户在地铁里网络时断时续，策略要怎么变？
  - 预加载浪费了用户的流量，你怎么控制？
source:
  - attribution: original
    label: "作者的系统设计题：流媒体加载与请求"
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
