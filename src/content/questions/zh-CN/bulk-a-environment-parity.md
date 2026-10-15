---
questionId: bulk-a-environment-parity
kind: question
status: published
locale: zh-CN
title: 开发环境与线上差异
question: 一个缺陷只在线上出现，开发和预发环境都无法复现。你会如何判断问题来自环境差异、流量形态还是数据特征，并改进环境设计？
intent: 了解候选人如何找到可复现边界，同时控制复制生产数据和基础设施的风险。
signals:
  - 比较运行时、配置、依赖和流量形态的差异
  - 提出安全复制或合成数据的验证方式
  - 说明哪些差异应消除、哪些应通过测试覆盖
primaryCapability: professional.engineering-systems
topics:
  - engineering-systems
  - devops
  - reliability
roles:
  - engineering
  - backend
  - frontend
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - hiring
formats:
  - case
source:
  - attribution: inspired
    label: DevOps Interview Questions：环境与部署自动化
    url: https://github.com/DNXLabs/DevOps-Interview-Questions
---
