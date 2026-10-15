---
questionId: bulk-a-feature-flag-control-plane
kind: question
status: published
locale: zh-CN
title: 功能开关控制面
question: 多个服务在请求路径中读取功能开关和分群规则。如何设计控制面与本地求值，让控制服务故障时线上行为仍然可预期？
intent: 了解控制面更新、数据面执行和紧急变更之间的关系。
signals:
  - 区分规则发布与请求时求值的组件和故障域
  - 说明配置传播延迟及默认行为如何按风险选择
  - 考虑规则版本、审计、回滚和高基数分群
primaryCapability: professional.system-design
topics:
  - system-design
  - reliability
  - devops
roles:
  - backend
  - engineering
  - product
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
scenarios:
  - interview
  - hiring
formats:
  - system-design
source:
  - attribution: inspired
    label: System Design Primer：缓存、可用性与故障隔离
    url: https://github.com/donnemartin/system-design-primer
---
