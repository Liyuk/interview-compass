---
questionId: a-system-design-immersive-feed
kind: question
status: published
locale: zh-CN
title: 怎样设计一个沉浸式的音视频信息流，让上下滑动时几乎没有等待？
question: 怎样设计一个沉浸式的音视频信息流，让上下滑动时几乎没有等待？预加载、播放器复用、内存和流量怎样平衡？
intent: 了解你能否为一个对流畅度要求极高的场景设计预加载和资源管理，并处理它带来的成本。
signals:
  - 说明预加载多少、加载到什么程度，以及依据滑动行为如何调整
  - 说明播放器实例的复用和释放，以及内存上限
  - 平衡首帧速度和流量消耗，并考虑弱网和省流量模式
  - 说明怎样用首帧时间、滑动卡顿等指标验证体验
primaryCapability: professional.system-design
topics: [system-design, mobile, frontend]
roles: [engineering, mobile, frontend, backend]
responsibilityScopes: [team]
careerTracks: [individual-contributor]
scenarios: [interview, hiring]
formats: [system-design]
followUps:
  - 用户快速连续滑过十几条，预加载应该怎么处理？
  - 低端机内存不够，体验和成本怎么取舍？
source:
  - attribution: original
    label: "作者的系统设计题：沉浸式信息流"
---
