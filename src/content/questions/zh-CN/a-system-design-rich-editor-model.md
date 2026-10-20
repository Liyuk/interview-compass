---
questionId: a-system-design-rich-editor-model
kind: question
status: published
locale: zh-CN
title: 要做一个类似 Doc、PPT 或 PS 的在线编辑器，核心的数据模型和渲染怎么设计？
question: 要做一个类似 Doc、PPT 或 PS 的在线编辑器，核心的数据模型和渲染怎么设计？撤销重做、选区和大文件的性能分别怎么处理？
intent: 了解你能否为复杂编辑器抽出稳定的数据模型，并把渲染、操作历史和性能放进同一个设计里。
signals:
  - 先区分文档模型、视图状态和渲染，并说明三者之间的边界
  - 用操作或命令表达修改，让撤销重做和协同有共同的基础
  - 说明大文件下的分块、虚拟化或增量渲染
  - 比较不同类型编辑器在模型上的差异，例如文本流与自由画布
primaryCapability: professional.system-design
topics: [system-design, frontend]
roles:
  - engineering
  - frontend
  - mobile
responsibilityScopes: [team]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: [interview, hiring]
formats: [system-design]
followUps:
  - 怎样让第三方扩展新增一种元素，又不破坏核心模型？
  - 文件格式要向后兼容多年，你怎么设计？
source:
  - attribution: original
    label: "作者的系统设计题：在线编辑器的数据模型"
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
