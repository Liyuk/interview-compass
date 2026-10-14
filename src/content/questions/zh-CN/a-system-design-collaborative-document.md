---
questionId: a-system-design-collaborative-document
kind: question
status: published
locale: zh-CN
title: 怎样设计一个多人实时协同编辑的文档系统？
question: 怎样设计一个多人实时协同编辑的文档系统？多人同时修改同一段文字时，怎样保证最终一致，离线编辑后又怎样合并？
intent: 了解你能否澄清协同场景的约束，并在冲突合并方案之间做出有依据的取舍。
signals:
  - 先澄清并发人数、离线需求和一致性要求，再选方案
  - 比较操作转换和 CRDT 等合并思路，并说明各自的代价
  - 考虑历史版本、撤销重做和权限，而不只是同步算法
  - 说明怎样验证并发下的正确性，例如随机操作回放
primaryCapability: professional.system-design
topics: [system-design, distributed-systems, frontend]
roles: [engineering, frontend, backend]
responsibilityScopes: [team]
careerTracks: [individual-contributor]
scenarios: [interview, hiring]
formats: [system-design]
followUps:
  - 文档变得很大时，加载和同步怎么处理？
  - 两个人离线改了同一句话，用户最终看到什么？
source:
  - attribution: original
    label: "作者的系统设计题：协同文档"
---
