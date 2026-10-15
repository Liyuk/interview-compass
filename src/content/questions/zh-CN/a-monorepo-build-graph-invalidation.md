---
questionId: "a-monorepo-build-graph-invalidation"
kind: "question"
status: "published"
locale: "zh-CN"
title: "代码改动后，构建系统有时漏掉受影响应用，有时又重建整个仓库。你会怎样验证依赖图和缓存失效规则？"
question: "代码改动后，构建系统有时漏掉受影响应用，有时又重建整个仓库。你会怎样验证依赖图和缓存失效规则？"
intent: "考察能否在构建正确性与反馈速度之间建立可解释的依赖追踪。"
signals: ["说明源码、生成物、工具链和环境变量如何影响任务输出","检查隐式依赖、动态配置和跨包代码生成","用变更样本验证受影响任务集合","比较缓存命中率与错误复用造成的风险"]
primaryCapability: "professional.engineering-systems"
topics: ["monorepo","engineering-systems","devops"]
roles: ["engineering","frontend","backend"]
responsibilityScopes: ["team","multiple-teams"]
careerTracks: ["individual-contributor","team-manager"]
scenarios: ["interview","hiring","promotion"]
formats: ["case","planning"]
followUps: ["远程缓存来自不可信提交时怎样防止污染构建？","怎样证明跳过某个任务是安全的？"]
source: [{"attribution":"original","label":"Interview Compass 原创主题补充批次：Monorepo"}]
---
