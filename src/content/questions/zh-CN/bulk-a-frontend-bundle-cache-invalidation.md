---
questionId: bulk-a-frontend-bundle-cache-invalidation
kind: question
status: published
locale: zh-CN
title: 前端资源缓存失效
question: 用户更新后偶尔加载到新 HTML 和旧 JavaScript，页面因此报错。你会怎样设计静态资源命名、缓存策略和发布顺序来降低不一致？
intent: 考察前端构建产物缓存与版本切换机制。
signals:
  - 能区分 HTML 与带版本资源的缓存策略
  - 考虑旧客户端仍引用旧资源的窗口
  - 提出发布顺序、回滚和兼容策略
primaryCapability: professional.engineering-systems
topics:
  - frontend
  - engineering-systems
roles:
  - frontend
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
  - case
source:
  - attribution: inspired
    label: Front-end Interview Handbook — JavaScript and frontend interview topics
    url: https://github.com/yangshun/front-end-interview-handbook/blob/main/README.md
---
