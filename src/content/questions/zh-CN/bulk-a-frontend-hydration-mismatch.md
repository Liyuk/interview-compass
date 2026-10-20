---
questionId: bulk-a-frontend-hydration-mismatch
kind: question
status: published
locale: zh-CN
title: 服务端渲染水合不一致
question: 某页面服务端 HTML 正常，但水合后出现内容闪动并伴随控制台警告。你会如何定位服务端与客户端渲染结果的差异来源？
intent: 考察 SSR/水合机制与可重复调试。
signals:
  - 理解初始 HTML 与客户端首次渲染需匹配
  - 排查时间、随机值、环境或数据差异
  - 提出最小复现和服务端/客户端输出对照
primaryCapability: professional.debugging
topics:
  - frontend
  - frameworks
roles:
  - frontend
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
  - debugging
source:
  - attribution: inspired
    label: Front-end Interview Handbook — JavaScript and frontend interview topics
    url: https://github.com/yangshun/front-end-interview-handbook/blob/main/README.md
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
