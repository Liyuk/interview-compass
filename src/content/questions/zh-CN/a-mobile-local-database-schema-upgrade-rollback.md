---
questionId: "a-mobile-local-database-schema-upgrade-rollback"
kind: "question"
status: "published"
locale: "zh-CN"
title: "客户端升级后需要迁移本地数据库，但启动失败时用户可能退回旧版。你会怎样设计数据迁移和回退？"
question: "客户端升级后需要迁移本地数据库，但启动失败时用户可能退回旧版。你会怎样设计数据迁移和回退？"
intent: "考察能否处理客户端本地数据跨版本迁移、进程中断以及旧版回退。"
signals: ["列出支持的升级跨度与数据格式版本","在副本或事务中执行可恢复迁移","验证迁移前后的约束和关键用户数据","定义失败恢复、旧版读取和清理策略"]
primaryCapability: "professional.engineering-systems"
topics: ["mobile","databases","reliability"]
roles: ["mobile","engineering"]
responsibilityScopes: ["team","multiple-teams"]
careerTracks: ["individual-contributor","team-manager"]
scenarios: ["interview","hiring","promotion"]
formats: ["case","system-design"]
followUps: ["应用在迁移中被系统结束时如何恢复？","怎样处理长期未升级造成的多版本跳跃？"]
source: [{"attribution":"original","label":"Interview Compass 原创主题补充批次：客户端、框架、编译与技术规划"}]
---
