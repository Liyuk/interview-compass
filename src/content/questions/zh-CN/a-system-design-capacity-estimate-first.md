---
questionId: a-system-design-capacity-estimate-first
kind: question
status: published
locale: zh-CN
title: "画架构图之前，先用哪几个数字？"
question: "在画任何架构图之前，你会用哪几个数字来判断一个服务要不要拆分、要不要加缓存？请用一个你熟悉的服务来说明。"
intent: "了解你能否用粗略的容量估算来约束设计，而不是先选组件。"
signals:
  - "说出读写比、峰值、数据量等估算输入，并交代假设"
  - "用估算结果解释为什么需要或不需要某个组件"
  - "承认估算有误差，并指出什么证据会修正它"
primaryCapability: professional.system-design
topics: [system-design, distributed-systems, databases]
roles: [engineering, backend, data]
responsibilityScopes: [team, multiple-teams]
careerTracks: [individual-contributor, team-manager]
scenarios: [interview, hiring]
formats: [system-design, knowledge]
source:
  - attribution: inspired
    label: "system-design-primer：先澄清需求与容量再选组件的思路（题面为原创）"
    url: https://github.com/donnemartin/system-design-primer/blob/master/README.md
---
