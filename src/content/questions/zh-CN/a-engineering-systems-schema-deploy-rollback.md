---
questionId: "a-engineering-systems-schema-deploy-rollback"
kind: "question"
status: "published"
locale: "zh-CN"
title: "应用发布可以回滚，但数据库迁移已经删除旧字段，旧版本因此无法启动。你会怎样重新设计发布顺序和回退策略？"
question: "应用发布可以回滚，但数据库迁移已经删除旧字段，旧版本因此无法启动。你会怎样重新设计发布顺序和回退策略？"
intent: "考察你是否理解应用与数据变更的兼容窗口，以及回滚并不等于恢复所有状态。"
signals: ["采用扩展后收缩或兼容双读写等阶段", "明确新旧版本并存时的约束", "验证迁移失败与回退路径", "说明何时需要前向修复而不是降级"]
primaryCapability: "professional.engineering-systems"
topics: ["devops", "databases", "reliability"]
roles: ["engineering", "backend", "data"]
responsibilityScopes: ["team"]
careerTracks: ["individual-contributor", "team-manager"]
scenarios: ["interview", "hiring"]
formats: ["system-design", "case"]
followUps: []
source: [{"attribution": "inspired", "label": "DNXLabs DevOps 题库的主题覆盖；题面为本站独立编写", "url": "https://github.com/DNXLabs/DevOps-Interview-Questions"}]
---
