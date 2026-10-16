---
questionId: a-system-design-av-editor
kind: question
status: published
locale: zh-CN
title: 怎样设计一个音频或视频的在线编辑器？
question: 怎样设计一个音频或视频的在线编辑器？时间线、素材、非破坏性编辑、预览和最终导出，各自应该怎样设计？
intent: 了解你能否为时间线类编辑器设计模型，并区分实时预览和离线导出这两条不同要求的路径。
signals:
  - 用轨道、片段和时间范围表达时间线，并让编辑不改动原始素材
  - 区分预览要求低延迟和导出要求高质量，并说明各自的实现路径
  - 考虑素材的转码、代理文件、缓存和内存压力
  - 说明导出任务的排队、进度和失败恢复
primaryCapability: professional.system-design
topics: [system-design, frontend, backend]
roles:
  - engineering
  - frontend
  - backend
  - mobile
  - ai-engineer
responsibilityScopes: [team]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: [interview, hiring]
formats: [system-design]
followUps:
  - 用户拖动时间线要立刻看到画面，你怎么做到？
  - 一个很长的项目导出到一半失败，怎样恢复？
source:
  - attribution: original
    label: "作者的系统设计题：音视频编辑器"
---
