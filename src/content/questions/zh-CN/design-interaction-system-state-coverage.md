---
questionId: design-interaction-system-state-coverage
kind: question
status: published
locale: zh-CN
title: 多个产品流程共享交互模式时，你怎样定义一套可复用的系统？
question: 一个产品的创建、编辑和审核流程由不同团队负责，但都出现了相似的表单与状态反馈。你会怎样判断哪些交互应该统一成系统模式，哪些需要保留场景差异？请说明你会如何覆盖加载、空态、错误和恢复等状态。
intent: 考察能否把交互模式作为跨流程系统来设计，在一致性、可复用性和具体任务需求之间建立清晰边界。
signals:
  - 从用户任务与跨流程差异出发定义模式，而不是只按视觉相似度抽取组件
  - 说明关键状态、异常路径和恢复行为如何进入设计规范或原型
  - 考虑模式采用、例外治理及后续迭代的维护方式
primaryCapability: professional.system-design
topics:
  - system-design
  - frontend
  - engineering-systems
roles:
  - design
  - frontend
  - product
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
scenarios:
  - interview
  - promotion
formats:
  - case
  - artifact-review
source:
  - attribution: inspired
    label: Designer Interview Questions（仅作主题启发；本站独立原创，不复制原问题）
    url: https://github.com/briannhinton/designer-interview-questions
---
