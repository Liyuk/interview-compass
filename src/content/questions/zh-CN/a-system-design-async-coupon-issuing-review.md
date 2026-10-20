---
questionId: a-system-design-async-coupon-issuing-review
kind: question
status: published
locale: zh-CN
title: "把同步发券改成异步重试，你最担心什么？"
question: "付款后发券原本是同步执行，现在要改成异步队列加重试。请审查这个改动：你最担心哪些失败过程，上线前要演练什么？"
intent: "了解你能否沿着具体的失败过程审查方案，而不是对照文档清单找缺项。"
signals:
  - "追问超时后其实已经发券的结果不确定状态"
  - "关注回滚时存量消息与执行中请求会发生什么"
  - "给出可以复演的上线前场景，而不是笼统的“多测一测”"
primaryCapability: professional.system-design
topics: [system-design, reliability, backend, distributed-systems]
roles:
  - engineering
  - backend
  - ai-engineer
  - data
responsibilityScopes: [team, multiple-teams]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: [interview, hiring, promotion]
formats: [artifact-review, case]
relatedQuestions:
  - questionId: a-engineering-systems-release-rollback
    relation: "都涉及“写了回滚就真的能退回去吗”。"
    contrast: "本题聚焦一个具体方案的失败过程；另一题聚焦发布与回退的整体做法。"
source:
  - attribution: derived
    label: "Engineering Decision Skills：tech-review 的上线前审查示例"
    url: https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/projects/2026/09/engineering-decision-skills/zh.md
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
