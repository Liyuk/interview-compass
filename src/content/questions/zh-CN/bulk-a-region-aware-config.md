---
questionId: bulk-a-region-aware-config
kind: question
status: published
locale: zh-CN
title: 区域化配置与数据边界
question: 一个全球服务需要按地区启用不同功能和数据保留规则，同时总部仍要观察整体运行情况。你会怎样划分配置、执行和汇总边界？
intent: 考察区域差异、配置治理、数据驻留和全局可观测性（通过日志、指标和调用链看清系统状态）之间的协调。
signals:
  - 识别必须区域化的数据与可以汇总的运行指标
  - 说明配置来源、变更权限和区域生效时间
  - 考虑跨区域故障时的默认策略与审计责任
primaryCapability: professional.system-design
topics:
  - system-design
  - distributed-systems
  - security
roles:
  - backend
  - engineering
  - product
responsibilityScopes:
  - multiple-teams
  - organization
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - hiring
formats:
  - system-design
source:
  - attribution: inspired
    label: System Design Primer：跨区域系统设计
    url: https://github.com/donnemartin/system-design-primer
---
