---
questionId: a-backend-read-replica-consistency-window
kind: question
status: published
locale: zh-CN
title: 写入后读副本短暂返回旧数据时，接口接口约定该如何设计？
question: 用户更新账户设置后立即刷新，服务从只读副本读取到旧值。切主读会增加数据库负载，等待同步又可能超时。你会怎样设计一致性体验？
intent: 考察能否根据业务读写语义选择一致性窗口、路由和退化策略。
signals:
  - 从具体字段和用户动作定义读己之写、单调读取或可容忍陈旧窗口。
  - 比较会话粘滞、版本令牌、短暂主读或明确等待的容量、延迟和复杂度。
  - 让用户能理解未同步或失败状态，避免成功提示后静默展示旧值。
  - 用复制滞后、主库故障和跨端访问测试验证语义与保护指标。
primaryCapability: professional.system-design
topics:
  - databases
  - distributed-systems
  - reliability
roles:
  - backend
  - data
  - engineering
  - frontend
  - mobile
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
  - promotion
formats:
  - system-design
  - debugging
  - case
followUps:
  - 并发修改时怎样避免版本令牌掩盖冲突？
  - 哪些查询可以明确接受最终一致？
  - 【读己之写要求会怎样改变副本路由？】用户提交更新后立即刷新页面，却偶尔看到旧值。系统使用异步副本且不能全局改为强一致。你会怎样定义并实现所需的一致性？
  - 同一用户跨设备操作时，会话粘性还够吗？
  - 怎样给读取等待设置上限？
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 G
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 A
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
