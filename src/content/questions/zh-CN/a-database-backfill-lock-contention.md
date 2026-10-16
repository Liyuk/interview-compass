---
questionId: a-database-backfill-lock-contention
kind: question
status: published
locale: zh-CN
title: 大规模补算历史数据引发线上锁等待，怎样安全执行？
question: 新字段需要补算数亿行历史数据，首轮脚本运行后线上锁等待和复制延迟都上升。你会怎样决定暂停、分批、限速或改用在线迁移？
intent: 考察能否把数据库迁移、服务目标、停止条件和恢复计划作为一个运维变更管理。
signals:
  - 测量锁等待、复制滞后、查询负载和单批耗时。
  - 设计小批量、可断点续跑、限速和并发控制。
  - 定义自动暂停阈值、进度校验和回滚或补偿方式。
primaryCapability: professional.system-design
topics:
  - databases
  - reliability
  - operations
roles:
  - backend
  - data
  - engineering
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
  - operations-review
formats:
  - system-design
  - case
followUps:
  - 如何确保重复运行不会改坏已处理数据？
  - 回填期间应用代码怎样兼容新旧记录？
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 H
---
