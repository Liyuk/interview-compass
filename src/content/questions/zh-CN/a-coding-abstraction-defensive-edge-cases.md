---
questionId: a-coding-abstraction-defensive-edge-cases
kind: question
status: published
locale: zh-CN
title: 写代码时，你怎样处理各种边界和非法输入？说一次你因为没做前置校验而出的问题。
question: 写代码时，你通常怎样处理空值、空字符串、越界和非法输入？说一次你因为没做前置校验，在测试或线上出了问题的经历，你从中改变了什么习惯？
intent: 了解你是否有防御性编码的习惯，并能从自己的失误中形成具体、可执行的做法。
signals:
  - 说明处理边界的具体做法，例如在入口校验、明确约定和统一的错误处理
  - 讲一次真实的失误，包括原因、影响和当时怎么发现的
  - 说出之后具体改变了什么习惯，例如补测试或用检查清单，而不只是"更仔细"
  - 区分哪些该在边界处拦截，哪些交给内部约定，避免处处重复校验
primaryCapability: professional.coding-abstraction
topics:
  - programming-languages
  - debugging
roles:
  - engineering
  - backend
  - frontend
  - mobile
  - ai-engineer
responsibilityScopes:
  - individual
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - campus
formats:
  - behavioral
  - coding
followUps:
  - "当时是哪种输入没有被拦住，造成了什么故障或用户影响？"
  - "你现在用哪项测试或边界检查，在发布前发现同类输入？"
source:
  - attribution: original
    label: 作者的分级面试框架，初级工程师
perspective: candidate
perspectiveReview: reviewed
qualityTier: core
weakAnswer: 只承诺以后更仔细，却讲不出边界失误如何影响用户或怎样防止复发。
anchors:
  notPassing: 只说会多加校验，讲不出真实失误或边界。
  passing: 描述一次输入边界导致的失败和影响。
  excellent: 说明将校验放在何处、如何用测试覆盖同类边界。
  exceptional: 用真实失误调整接口约定或共享检查，同时避免重复防御掩盖错误。
---
