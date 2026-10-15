---
questionId: a-computer-networks-http-cache-validator
kind: question
status: published
locale: zh-CN
title: 静态资源使用 ETag 后仍出现旧内容，清缓存后又导致流量峰值。你会怎样设计 HTTP 缓存验证与失效策略？
question: 静态资源使用 ETag 后仍出现旧内容，清缓存后又导致流量峰值。你会怎样设计 HTTP 缓存验证与失效策略？
intent: 考察你能否区分缓存新鲜度、条件请求、资源版本和部署切换时的行为。
signals:
  - 说明 Cache-Control、ETag/Last-Modified 与条件请求分别解决什么问题。
  - 处理资源内容变化、应用壳更新和 CDN/浏览器缓存层级。
  - 定义缓存失效的范围、回源负载保护和回滚方式。
primaryCapability: professional.computer-science
topics:
  - computer-networks
  - frontend
  - reliability
roles:
  - frontend
  - backend
  - engineering
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
  - knowledge
source:
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
followUps:
  - 如果 HTML 必须实时更新而带哈希静态资源可以长期缓存，如何配合部署？
  - 如何诊断浏览器缓存、Service Worker 和 CDN 三层行为不一致？
---
