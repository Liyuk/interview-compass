---
questionId: "a-compiler-diagnostic-source-map-macro-expansion"
kind: "question"
status: "published"
locale: "zh-CN"
title: "宏和代码生成经过多层展开后，编译错误只指向生成文件，使用者无法定位原始代码。你会怎样设计诊断信息？"
question: "宏和代码生成经过多层展开后，编译错误只指向生成文件，使用者无法定位原始代码。你会怎样设计诊断信息？"
intent: "考察能否在宏和代码生成链中保留准确来源映射，让错误指向可修改的原始代码。"
signals: ["区分原始位置、生成位置和宏展开调用链","保留多轮变换后的来源映射准确性","指出可修改的源码位置和上下文","处理映射缺失或多个候选位置的回退"]
primaryCapability: "professional.computer-science"
topics: ["compiler-design","programming-languages","debugging"]
roles: ["engineering","backend"]
responsibilityScopes: ["team","multiple-teams"]
careerTracks: ["individual-contributor","team-manager"]
scenarios: ["interview","hiring","promotion"]
formats: ["case","system-design"]
followUps: ["如何避免诊断泄露生成代码中的敏感路径？","怎样验证来源映射在优化后仍准确？"]
source: [{"attribution":"original","label":"Interview Compass 原创主题补充批次：客户端、框架、编译与技术规划"}]
---
