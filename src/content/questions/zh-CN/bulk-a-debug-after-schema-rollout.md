---
questionId: bulk-a-debug-after-schema-rollout
kind: question
status: published
locale: zh-CN
title: 数据库变更后下游间歇性失败
question: 数据库字段变更完成后，只有部分下游任务间歇性失败。你会怎样找出仍在使用旧契约的消费者，并确定回滚还是兼容修复？
intent: 考察契约依赖清点、失败样本定位和变更可逆性的证据使用。
signals:
  - 通过查询、消费者清单或模式注册追踪字段使用方
  - 比较失败是否集中在旧版任务、缓存或回填作业
  - 明确选择回滚的安全条件与兼容修复验证方法
primaryCapability: professional.debugging
topics:
  - debugging
  - databases
  - reliability
roles:
  - backend
  - data
  - engineering
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
scenarios:
  - interview
  - hiring
formats:
  - debugging
source:
  - attribution: original
    label: 原创：渐进式数据库变更诊断
---
