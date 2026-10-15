---
questionId: "b-data-model-safe-backfill"
kind: "question"
status: "published"
locale: "zh-CN"
title: "上游修复了一个影响过去两年数据的错误，业务希望尽快看到修正结果。你会怎样安排回填，避免影响当前生产报表？"
question: "上游修复了一个影响过去两年数据的错误，业务希望尽快看到修正结果。你会怎样安排回填，避免影响当前生产报表？"
intent: "了解你是否会把历史修复拆成可恢复、可校验、可逐步切换的变更。"
signals: ["先估算影响范围和资源占用", "按分区或时间段切片并支持断点续跑", "在隔离结果上比较行数、金额或关键指标", "规划切换、回退和下游通知"]
primaryCapability: "domain-modeling.model-evolution"
topics: ["data-modeling", "reliability", "risk-management"]
roles: ["data", "backend"]
responsibilityScopes: ["team", "multiple-teams"]
careerTracks: ["individual-contributor", "team-manager"]
scenarios: ["interview", "hiring"]
formats: ["planning", "case"]
followUps: []
source: [{"attribution": "inspired", "label": "Dataskew 数据工程题库的主题覆盖；题面为本站独立编写", "url": "https://github.com/dataskew-io/data-engineering-interview-questions"}]
---
