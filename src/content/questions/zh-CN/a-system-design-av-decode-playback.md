---
questionId: a-system-design-av-decode-playback
kind: question
status: published
locale: zh-CN
title: 一段视频从文件或网络到画面和声音播放出来，中间经历了哪些环节？
question: 一段视频从文件或网络到画面和声音播放出来，中间经历了哪些环节？解码、音画同步、卡顿和硬件加速分别怎样影响体验？
intent: 了解你对音视频播放管线的理解，以及能否从现象推回具体环节。
signals:
  - 说清解封装、解码、渲染和音画同步这条管线
  - 解释软解和硬件加速的取舍，以及兼容性问题
  - 把卡顿、花屏、音画不同步等现象对应到可能的环节
  - 说明怎样观测播放质量，例如首帧时间和卡顿率
primaryCapability: professional.computer-science
topics: [system-design, frontend, mobile]
roles:
  - engineering
  - frontend
  - mobile
responsibilityScopes: [individual]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: [interview, campus, hiring]
formats: [knowledge, debugging]
followUps:
  - 某一类机型上总是花屏，你怎么定位？
  - 倍速播放时，音频为什么需要特殊处理？
source:
  - attribution: original
    label: "作者的系统设计题：音视频解码与播放"
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
