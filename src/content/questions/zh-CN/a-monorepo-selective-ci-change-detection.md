---
questionId: "a-monorepo-selective-ci-change-detection"
kind: "question"
status: "published"
locale: "zh-CN"
title: "仓库有数百个包，完整 CI 时间很长，团队准备只测试“受影响”的部分。你会怎样证明选择性测试没有漏掉关键依赖？"
question: "仓库有数百个包，完整 CI 时间很长，团队准备只测试“受影响”的部分。你会怎样证明选择性测试没有漏掉关键依赖？"
intent: "考察能否校验变更检测的保守性、依赖图质量和全量验证兜底。"
signals: ["定义直接、传递和工具链变化的影响规则","用历史提交回放比较选择结果与实际失败范围","保留定期全量运行和关键路径强制测试","监控漏选、误选、耗时和修复成本"]
primaryCapability: "professional.engineering-systems"
topics: ["monorepo","engineering-systems","devops"]
roles: ["engineering","frontend","backend"]
responsibilityScopes: ["team","multiple-teams"]
careerTracks: ["individual-contributor","team-manager"]
scenarios: ["interview","hiring","promotion"]
formats: ["case","planning"]
followUps: ["依赖图不完整时先扩大选择还是修复图？","哪些变化应始终触发全量测试？"]
source: [{"attribution":"original","label":"Interview Compass 原创主题补充批次：Monorepo"}]
---
