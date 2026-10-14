---
questionId: a-engineering-systems-release-rollback
kind: question
status: published
locale: zh-CN
title: "“我们可以回滚”这句话怎么验证？"
question: "一次发布后出现问题，团队说“我们可以回滚”。你会怎样检验这句话是真的，而不只是方案里写了回滚？"
intent: "了解你是否理解回滚在数据、存量任务和依赖上的真实边界。"
signals:
  - "区分代码回退与数据、状态回退"
  - "指出灰度与回退条件需要事先约定"
  - "要求看到演练记录，而不是只接受文字承诺"
primaryCapability: professional.engineering-systems
topics: [devops, reliability, engineering-systems]
roles: [engineering, backend, frontend, mobile]
responsibilityScopes: [team, multiple-teams]
careerTracks: [individual-contributor, team-manager]
scenarios: [interview, operations-review]
formats: [case]
relatedQuestions:
  - questionId: a-system-design-async-coupon-issuing-review
    relation: "都涉及“写了回滚就真的能退回去吗”。"
    contrast: "本题聚焦发布与回退的整体做法；另一题聚焦一个具体方案的失败过程。"
source:
  - attribution: derived
    label: "Engineering Decision Skills：回滚与存量消息的评审示例"
    url: https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/projects/2026/09/engineering-decision-skills/zh.md
---
