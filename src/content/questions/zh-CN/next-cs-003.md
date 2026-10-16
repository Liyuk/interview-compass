---
questionId: next-cs-003
kind: question
status: published
locale: zh-CN
title: 大事务被拆分后如何保证业务原子性？
question: 一笔跨数百万记录的迁移无法放进单个事务。业务要求用户不能看到半完成状态。你会如何设计分批写入、可见性和恢复？
intent: 考察能否把数据库原子性转化为业务状态、版本切换和可恢复流程。
signals:
  - 定义迁移中的可见状态和读取规则。
  - 使用检查点、幂等（重复请求不会重复执行）批次和明确的回滚或前滚方案。
  - 验证部分失败时读写仍符合业务不变量。
primaryCapability: professional.computer-science
topics:
  - databases
  - reliability
roles:
  - backend
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
  - promotion
formats:
  - case
followUps:
  - 双写期间如何避免新旧版本互相覆盖？
  - 什么证据允许切换读路径？
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 A
---
