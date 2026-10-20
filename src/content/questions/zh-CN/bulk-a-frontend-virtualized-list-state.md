---
questionId: bulk-a-frontend-virtualized-list-state
kind: question
status: published
locale: zh-CN
title: 虚拟列表中的状态归属
question: 请设计一个可复用的长列表虚拟化组件：滚动窗口只渲染可见项，但行内选择状态不能因回收和复用 DOM 而串到其他数据。你会怎样定义接口并测试？
intent: 考察组件抽象、稳定身份与 UI 状态归属。
signals:
  - 使用稳定数据标识而非可见位置作为状态键
  - 区分列表窗口状态与业务选择状态
  - 设计滚动边界、复用和重排测试
primaryCapability: professional.coding-abstraction
topics:
  - frontend
  - data-structures
roles:
  - frontend
  - engineering
  - mobile
responsibilityScopes:
  - individual
  - team
careerTracks:
  - individual-contributor
scenarios:
  - interview
  - campus
  - hiring
formats:
  - coding
source:
  - attribution: inspired
    label: Front-end Interview Handbook — JavaScript and frontend interview topics
    url: https://github.com/yangshun/front-end-interview-handbook/blob/main/README.md
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
