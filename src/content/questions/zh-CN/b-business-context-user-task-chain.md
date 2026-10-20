---
questionId: b-business-context-user-task-chain
kind: question
status: published
locale: zh-CN
title: 你负责的模块服务谁，又如何影响业务结果？
question: 请选一个你负责的模块，说明它服务谁、接收什么输入、提供什么输出，并沿着用户任务讲到业务结果。
intent: 了解你能否把自己的工作放进用户任务与业务结果之间的因果链，而不是只描述实现了什么。
signals:
  - 指出的是用户或合作方要完成的任务，而不是功能名称
  - 说明了上下游依赖，以及自己的模块能影响的那一环
  - 区分了已有证据与仍待验证的假设
primaryCapability: domain-modeling.business-context
topics:
  - product-thinking
roles:
  - engineering
  - backend
  - product
  - frontend
  - mobile
  - ai-engineer
responsibilityScopes:
  - individual
  - team
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - promotion
  - self-reflection
formats:
  - case
followUps:
  - 如果这个模块的指标变好而最终结果没有变，可能是链条的哪一环断了？
  - 你的模块明确不影响哪些环节？
source:
  - attribution: derived
    label: 工程师为什么需要产品判断：产品认知阶段与业务因果链
    url: https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2022/02/engineer-product-judgment/zh.md
perspective: candidate
perspectiveReview: reviewed
qualityTier: core
weakAnswer: 把模块指标上升直接说成业务成功，没有说明用户任务链中的中间环节。
anchors:
  notPassing: 只说模块功能或内部指标，没有用户任务与结果联系。
  passing: 指出用户要完成什么，以及模块负责的环节。
  excellent: 说明依赖链和可观测证据，并区分相关性与因果判断。
  exceptional: 设计能证伪当前解释的验证，指出模块明确影响不到的结果。
---
