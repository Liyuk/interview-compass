---
questionId: a-engineering-systems-anticorruption-layer
kind: question
status: published
locale: zh-CN
title: "新业务需要依赖老系统时，怎样隔离旧规则和数据模型？"
question: "老系统持续叠加新业务，代码越来越难维护。你会如何在新旧系统之间建立适配边界，避免旧规则和数据模型渗入新业务？请说明迁移步骤，以及必须接受的妥协和风险。"
intent: 了解你如何在不能推倒重来的前提下，用清晰的边界逐步隔离遗留系统，并诚实交代妥协。
signals:
  - 说明隔离层放在哪里、翻译什么，以及新旧模型之间的边界
  - 说明迁移是怎样分步进行的，期间怎样保证线上不受影响
  - 说出这次最核心的限制，例如时间、人手或不能停机，以及因此做的取舍
  - 坦率交代留下的已知风险和遗憾，而不是只讲成功
primaryCapability: professional.engineering-systems
topics: [engineering-systems, system-design, risk-management]
roles:
  - engineering
  - backend
  - frontend
  - manager
  - mobile
  - ai-engineer
  - data
responsibilityScopes: [team]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: [interview, promotion, hiring]
formats: [behavioral, case, system-design]
followUps:
  - 隔离层本身会不会变成新的负担？你怎么控制？
  - 新业务需要老系统里的一个能力，你怎么既复用又不被污染？
source:
  - attribution: original
    label: "作者的分级面试框架，高级工程师"
---
