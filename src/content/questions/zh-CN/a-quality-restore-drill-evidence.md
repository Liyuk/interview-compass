---
questionId: a-quality-restore-drill-evidence
kind: question
status: published
locale: zh-CN
title: 备份任务显示成功，但团队从未验证过恢复后的数据完整性和恢复时间，你会怎样建立可证明的恢复能力？
question: 备份任务显示成功，但团队从未验证过恢复后的数据完整性和恢复时间，你会怎样建立可证明的恢复能力？
intent: 考察能否将备份存在转化为经过演练的恢复能力，并验证业务可接受的恢复目标。
signals:
  - 与业务共同确定恢复点和恢复时间目标
  - 覆盖密钥、依赖、权限及数据一致性的恢复步骤
  - 定期执行隔离环境演练并测量结果
  - 记录失败项、责任人和复测关闭条件
  - 把“事故演练发现恢复能力不足”转成明确的业务恢复目标。
  - 验证数据、密钥、配置、依赖和人员能否在目标时间内恢复。
  - 比较冷备、温备、分层恢复与手动降级（关闭非核心功能以保住核心服务）的成本和覆盖范围。
  - 用重复演练证明 RTO/RPO 达标，并跟踪未达标项的负责人。
primaryCapability: professional.quality-security-safety
topics:
  - reliability
  - databases
  - devops
roles:
  - backend
  - data
  - operations
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - hiring
  - promotion
formats:
  - case
  - planning
followUps:
  - 演练成功但恢复时间超标时，先改什么？
  - 如何保证演练不暴露或覆盖生产数据？
  - 灾备演练发现冷备份可以恢复，但需要 30 小时，而业务目标要求 8 小时恢复。预算无法直接复制全部生产容量。你会如何改进？
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 D
  - attribution: inspired
    label: GitHub DevOps 与项目交付题目主题调研；题目为本站独立编写
    url: https://github.com/DNXLabs/DevOps-Interview-Questions
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 D
relatedQuestions: []
---
