---
questionId: a-engineering-systems-credential-rotation
kind: question
status: published
locale: zh-CN
title: 一个长期凭证被多个服务共享，安全要求尽快轮换，但无法一次性停掉所有依赖方。你会怎样推进？
question: 一个长期凭证被多个服务共享，安全要求尽快轮换，但无法一次性停掉所有依赖方。你会怎样推进？
intent: 了解你是否会先盘点依赖，再设计重叠过渡、验证和撤销机制。
signals:
  - 找出凭证使用者和调用路径
  - 采用新旧凭证短暂并行的迁移窗口
  - 验证依赖方完成切换后再撤销旧凭证
  - 准备泄露或切换失败时的紧急处置
  - 先清点凭据持有者、权限范围和最后使用时间
  - 讨论双凭据过渡、验证和撤销顺序
  - 说明泄漏紧急轮换与常规轮换的差异
  - 制定双密钥接受与单密钥签发的阶段。
  - 识别未迁移调用方和密钥泄露时的紧急路径。
  - 通过使用遥测确认旧密钥停止使用后再撤销。
primaryCapability: professional.engineering-systems
topics:
  - devops
  - security
  - reliability
  - engineering-systems
roles:
  - engineering
  - backend
responsibilityScopes:
  - multiple-teams
  - team
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - hiring
  - promotion
formats:
  - planning
  - case
followUps:
  - 【密钥轮换如何避免旧凭证继续生效？】多个服务使用同一签名密钥，轮换时不能同时停机。你会怎样安排新旧密钥并验证所有调用方完成切换？
  - 时钟偏差会如何影响密钥有效窗口？
  - 如何在泄露场景跳过常规平滑迁移？
source:
  - attribution: inspired
    label: DNXLabs DevOps 题库的主题覆盖；题面为本站独立编写
    url: https://github.com/DNXLabs/DevOps-Interview-Questions
  - attribution: inspired
    label: DevOps Interview Questions：安全与基础设施管理
    url: https://github.com/DNXLabs/DevOps-Interview-Questions
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 A
relatedQuestions: []
---
