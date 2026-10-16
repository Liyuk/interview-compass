---
questionId: a-mfe-independent-deploy-boundary
kind: question
status: published
locale: zh-CN
title: 多个前端模块都能独立构建，但上线仍必须同步协调。你会用什么证据判断它们是否真正具备独立交付边界？
question: 多个前端模块都能独立构建，但上线仍必须同步协调。你会用什么证据判断它们是否真正具备独立交付边界？
intent: 考察能否区分构建拆分与团队、契约、运行时和回滚层面的真实独立性。
signals:
  - 追踪跨模块变更、联合发布与协调等待
  - 检查接口契约、共享状态和环境耦合
  - 评估单模块故障能否独立降级（关闭非核心功能以保住核心服务）和回滚
  - 提出用小范围变更验证边界的试点
primaryCapability: professional.engineering-systems
topics:
  - micro-frontends
  - frontend
  - engineering-systems
  - system-design
roles:
  - frontend
  - engineering
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - hiring
  - promotion
formats:
  - system-design
  - case
followUps:
  - 什么情况下独立部署只增加复杂度？
  - 如何量化团队自治带来的收益？
source:
  - attribution: original
    label: Interview Compass 原创主题补充批次：微前端
---
