---
questionId: bulk-a-frontend-accessibility-focus-order
kind: question
status: published
locale: zh-CN
title: 键盘焦点与弹层交互
question: 一个自定义弹层鼠标操作正常，但键盘用户无法可靠进入、关闭或返回原位置。你会检查哪些焦点管理行为，并如何验证修复？
intent: 考察前端交互可访问性与状态管理的实现细节。
signals:
  - 明确弹层打开后的初始焦点、可达控件与关闭后恢复位置。
  - 根据模态或非模态任务判断焦点约束，验证Tab顺序与Escape行为。
  - 核对语义名称、状态和必要的读屏反馈，不把所有变化都设成强制播报。
  - 用键盘和辅助技术走查打开、操作、关闭、重复开启及触发元素消失等边界。
primaryCapability: professional.coding-abstraction
topics:
  - frontend
  - accessibility
  - product-thinking
roles:
  - frontend
  - design
  - engineering
  - mobile
responsibilityScopes:
  - individual
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - campus
  - hiring
  - promotion
formats:
  - artifact-review
  - case
source:
  - attribution: inspired
    label: Front-end Interview Handbook — JavaScript and frontend interview topics
    url: https://github.com/yangshun/front-end-interview-handbook/blob/main/README.md
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 B
followUps:
  - 【动态内容更新后，键盘焦点跑到了页面顶部怎么办？】提交操作后页面局部刷新，鼠标用户能看到成功消息，但键盘和屏幕阅读器用户不知道状态变化。你会怎样修复？
  - 哪些消息需要立即播报，哪些不应打断？
  - 如何避免同一消息被重复朗读？
relatedQuestions: []
---
