---
questionId: "a-mfe-shared-dependencies-version-governance"
kind: "question"
status: "published"
locale: "zh-CN"
title: "多个子应用依赖不同版本的 React 和组件库，重复下载与运行时冲突同时出现，你会怎样治理共享依赖？"
question: "多个子应用依赖不同版本的 React 和组件库，重复下载与运行时冲突同时出现，你会怎样治理共享依赖？"
intent: "考察能否以兼容范围、发布节奏和故障隔离决定哪些依赖共享、哪些由子应用自带。"
signals: ["盘点体积、版本分布、共享频率和冲突影响","区分平台稳定依赖与团队快速迭代依赖","制定兼容窗口、升级策略和例外规则","测量加载收益并验证回滚路径"]
primaryCapability: "professional.engineering-systems"
topics: ["micro-frontends","frontend","engineering-systems","system-design"]
roles:
  - frontend
  - engineering
responsibilityScopes: ["team","multiple-teams"]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: ["interview","hiring","promotion"]
formats: ["system-design","case"]
followUps: ["共享依赖升级导致单一子应用故障时如何止损？","如何避免共享平台成为发布瓶颈？"]
source: [{"attribution":"original","label":"Interview Compass 原创主题补充批次：微前端"}]
---
