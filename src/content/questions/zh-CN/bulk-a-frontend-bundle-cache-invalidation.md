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
  - reliability
  - devops
  - computer-networks
roles:
  - frontend
  - engineering
  - backend
  - mobile
responsibilityScopes:
  - individual
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - campus
  - hiring
formats:
  - case
  - system-design
  - debugging
  - knowledge
source:
  - attribution: inspired
    label: Front-end Interview Handbook — JavaScript and frontend interview topics
    url: https://github.com/yangshun/front-end-interview-handbook/blob/main/README.md
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 G
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
followUps:
  - 【发布后用户拿到新 HTML 和旧资源时，怎样设计缓存与部署顺序？】CDN 已缓存新 HTML，但部分边缘节点仍保存旧 JavaScript；页面启动失败，清缓存又造成请求峰值。你会怎样调整资源命名、发布和回收顺序？
  - 如何处理浏览器长期打开的旧页面加载延迟资源？
  - 什么时候可以删除上一版本静态资源？
  - 【静态资源使用 ETag 后仍出现旧内容，清缓存后又导致流量峰值。你会怎样设计 HTTP 缓存验证与失效策略？】静态资源使用 ETag 后仍出现旧内容，清缓存后又导致流量峰值。你会怎样设计 HTTP 缓存验证与失效策略？
  - 如果 HTML 必须实时更新而带哈希静态资源可以长期缓存，如何配合部署？
  - 如何诊断浏览器缓存、Service Worker 和 CDN 三层行为不一致？
---
