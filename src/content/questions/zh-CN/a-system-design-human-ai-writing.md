---
questionId: a-system-design-human-ai-writing
kind: question
status: published
locale: zh-CN
title: 怎样设计一个人和 AI 一起写作的产品？
question: 怎样设计一个人和 AI 一起写作的产品？AI 的修改怎样呈现给用户、怎样接受或拒绝，人和 AI 同时编辑时怎样处理冲突？
intent: 了解你如何设计人与 AI 的协作边界，让用户始终保有控制，并能追溯每一处修改。
signals:
  - 把 AI 的修改做成可以逐条审阅、接受、拒绝和撤销的建议，而不是直接覆盖
  - 说明人和 AI 同时修改同一处时的冲突处理
  - 记录每处内容的来源，便于追溯和回退
  - 考虑上下文范围、隐私，以及怎样评估建议的质量
primaryCapability: professional.system-design
topics: [system-design, ai-engineering, frontend]
roles:
  - engineering
  - ai-engineer
  - frontend
  - product
  - backend
  - mobile
  - design
responsibilityScopes: [team]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: [interview, hiring]
formats: [system-design]
followUps:
  - 用户想知道哪些内容是 AI 写的，系统怎么回答？
  - AI 的建议大量被拒绝，你怎么判断问题出在哪里？
source:
  - attribution: original
    label: "作者的系统设计题：人与 AI 协作写作"
---
