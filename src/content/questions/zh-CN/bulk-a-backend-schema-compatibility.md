---
questionId: bulk-a-backend-schema-compatibility
kind: question
status: published
locale: zh-CN
title: 滚动发布中的接口与表结构兼容
question: 新版本服务要增加字段并改变读取逻辑，但旧版本实例仍会运行数分钟。你会如何安排数据库变更和应用发布，使部署期间双方可共存？
intent: 考察兼容性迁移和渐进式发布顺序。
signals:
  - 把扩展与收缩阶段分开
  - 考虑新旧代码与数据形态的交叉组合
  - 定义验证、切换和移除旧结构的条件
primaryCapability: professional.engineering-systems
topics:
  - backend
  - databases
  - engineering-systems
roles:
  - backend
responsibilityScopes:
  - individual
  - team
careerTracks:
  - individual-contributor
scenarios:
  - interview
  - campus
  - hiring
formats:
  - case
source:
  - attribution: inspired
    label: JavaGuide — backend, Java, database, concurrency, and distributed systems topics
    url: https://github.com/Snailclimb/JavaGuide/blob/main/README.md
---
