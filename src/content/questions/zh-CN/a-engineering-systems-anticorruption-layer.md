---
questionId: a-engineering-systems-anticorruption-layer
kind: question
status: published
locale: zh-CN
title: 一个老系统不断叠加新业务、越来越难维护。你怎样设计隔离层，保护新业务不被老系统污染？
question: 一个老系统不断叠加新业务，代码越来越难维护。作为模块负责人，你怎样设计隔离层（防腐层），保护新业务代码不被老系统污染？说一次你主导的真实案例，以及你为了现实限制留下了什么妥协和风险。
intent: 了解你如何在不能推倒重来的前提下，用清晰的边界逐步隔离遗留系统，并诚实交代妥协。
signals:
  - 说明隔离层放在哪里、翻译什么，以及新旧模型之间的边界
  - 说明迁移是怎样分步进行的，期间怎样保证线上不受影响
  - 说出这次最核心的限制，例如时间、人手或不能停机，以及因此做的取舍
  - 坦率交代留下的已知风险和遗憾，而不是只讲成功
primaryCapability: professional.engineering-systems
topics: [engineering-systems, system-design, risk-management]
roles: [engineering, backend, frontend, manager]
responsibilityScopes: [team]
careerTracks: [individual-contributor, team-manager]
scenarios: [interview, promotion, hiring]
formats: [behavioral, case, system-design]
followUps:
  - 隔离层本身会不会变成新的负担？你怎么控制？
  - 新业务需要老系统里的一个能力，你怎么既复用又不被污染？
source:
  - attribution: original
    label: "作者的分级面试框架，高级工程师"
---
