---
questionId: bulk-a-code-deep-equality-cyclic-objects
kind: question
status: published
locale: zh-CN
title: 循环对象的深度相等判断
question: 实现一个深度相等函数，输入可能包含嵌套数组、共享引用和循环引用。请先定义相等语义，再说明如何避免无限递归与错误地混淆引用结构。
intent: 考察抽象定义、图遍历和复杂输入处理。
signals:
  - 先界定类型、原型或特殊值的相等规则
  - 用访问状态跟踪循环引用
  - 区分共享子对象与内容相同但身份不同的结构
primaryCapability: professional.coding-abstraction
topics:
  - programming-languages
  - compiler-design
roles:
  - engineering
responsibilityScopes:
  - individual
  - team
careerTracks:
  - individual-contributor
scenarios:
  - interview
  - campus
  - hiring
formats:
  - coding
source:
  - attribution: inspired
    label: Front-end Interview Handbook — JavaScript and frontend interview topics
    url: https://github.com/yangshun/front-end-interview-handbook/blob/main/README.md
---
