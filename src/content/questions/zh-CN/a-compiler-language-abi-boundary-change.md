---
questionId: "a-compiler-language-abi-boundary-change"
kind: "question"
status: "published"
locale: "zh-CN"
title: "编译器升级改变了结构体布局或调用约定，但部分插件仍按旧 ABI 构建。你会怎样管理兼容与迁移？"
question: "编译器升级改变了结构体布局或调用约定，但部分插件仍按旧 ABI 构建。你会怎样管理兼容与迁移？"
intent: "考察能否识别源代码与二进制兼容差异，并分阶段迁移编译器 ABI。"
signals: ["识别布局、符号、调用约定和运行时假设的变化","盘点插件构建版本与运行环境","选择 ABI 版本标识、适配层或双版本过渡","用兼容矩阵和真实插件验证切换与回退"]
primaryCapability: "professional.computer-science"
topics: ["compiler-design","programming-languages","engineering-systems"]
roles:
  - engineering
  - backend
  - mobile
  - ai-engineer
responsibilityScopes: ["team","multiple-teams"]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: ["interview","hiring","promotion"]
formats: ["case","system-design"]
followUps: ["无法升级的插件如何隔离运行风险？","什么时候应结束旧 ABI 支持？"]
source: [{"attribution":"original","label":"Interview Compass 原创主题补充批次：客户端、框架、编译与技术规划"}]
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
