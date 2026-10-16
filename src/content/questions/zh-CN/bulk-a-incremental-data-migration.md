---
questionId: bulk-a-incremental-data-migration
kind: question
status: published
locale: zh-CN
title: 在线数据模型迁移
question: 一个高流量服务需要把关键表从旧结构迁移到新模型，期间不能暂停读写。你会怎样组织迁移阶段并验证切换安全？
intent: 考察兼容性、数据一致性、回滚窗口和迁移完成判据。
signals:
  - 把新旧读写兼容阶段拆成可观察步骤
  - 说明双写或回填（补算历史数据）期间如何发现并修复差异
  - 定义切换、回滚和停止旧路径所需的证据
primaryCapability: professional.system-design
topics:
  - system-design
  - databases
  - distributed-systems
roles:
  - backend
  - engineering
  - data
  - ai-engineer
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
formats:
  - system-design
source:
  - attribution: inspired
    label: System Design Primer：数据迁移与演进
    url: https://github.com/donnemartin/system-design-primer
---
