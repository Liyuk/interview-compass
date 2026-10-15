---
questionId: a-engineering-systems-infrastructure-drift
kind: question
status: published
locale: zh-CN
title: 基础设施漂移的调查与安全恢复
question: 生产环境中的部分资源与代码声明不一致，其中一些差异来自未记录的紧急手工修复。你会怎样区分有意变更与未知漂移，评估覆盖风险，恢复可信状态并减少复发？
intent: 考察如何重新连接实际状态、配置来源、变更原因与生产责任，同时避免恢复操作引发二次故障。
signals:
  - 先区分有意变更、紧急修复和未知漂移
  - 避免直接覆盖可能承载重要数据的资源
  - 将确认后的实际状态纳入代码并评估影响
  - 补上审批、检测与紧急变更回写流程
primaryCapability: professional.engineering-systems
topics:
  - devops
  - reliability
  - engineering-systems
roles:
  - engineering
  - backend
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - hiring
formats:
  - debugging
  - case
followUps:
  - 什么证据能证明某项差异是有意变更？
  - 如果资源包含不可重建的数据，你会如何调整导入、修复或删除顺序？
  - 紧急手工修改后，如何让声明、审批和审计记录重新一致？
source:
  - attribution: inspired
    label: DNXLabs DevOps 题库的主题覆盖；题面为本站独立编写
    url: https://github.com/DNXLabs/DevOps-Interview-Questions
---
