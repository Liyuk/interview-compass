---
questionId: a-engineering-systems-infrastructure-drift
kind: question
status: published
locale: zh-CN
title: "生产环境配置偏离代码声明时，怎样安全恢复？"
question: 生产环境中的部分资源与代码声明不一致，其中一些差异来自未记录的紧急手工修复。你会怎样区分有意变更与无法解释的配置差异，评估覆盖风险，恢复可信状态并减少复发？
intent: 考察如何重新连接实际状态、配置来源、变更原因与生产责任，同时避免恢复操作引发二次故障。
signals:
  - 先区分有意变更、紧急修复和无法解释的配置差异
  - 避免直接覆盖可能承载重要数据的资源
  - 将确认后的实际状态纳入代码并评估影响
  - 补上审批、检测与紧急变更回写流程
  - 先比对声明、真实状态和变更记录
  - 评估直接覆盖漂移是否会造成二次故障
  - 说明如何导入、修复或有计划地移除偏差
primaryCapability: professional.engineering-systems
topics:
  - devops
  - reliability
  - engineering-systems
roles:
  - engineering
  - backend
  - operations
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
  - attribution: inspired
    label: DevOps Interview Questions：基础设施即代码
    url: https://github.com/DNXLabs/DevOps-Interview-Questions
---
