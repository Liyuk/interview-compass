---
questionId: bulk-a-test-data-lifecycle
kind: question
status: published
locale: zh-CN
title: 跨环境测试数据治理
question: 多个团队把脱敏数据复制到开发、预发和性能环境，数据刷新频率各不相同。你会怎样设计测试数据的权限、生命周期和可复现性？
intent: 观察能否同时处理敏感信息风险和测试数据陈旧、漂移的问题。
signals:
  - 区分合成、脱敏和直接生产数据的风险及适用场景
  - 定义访问权限、刷新期限和删除责任
  - 说明如何固定测试快照或记录数据版本以复现问题
primaryCapability: professional.engineering-systems
topics:
  - engineering-systems
  - databases
  - security
roles:
  - engineering
  - data
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
  - attribution: original
    label: 原创：测试数据治理与隔离
---
