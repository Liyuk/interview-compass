---
questionId: bulk-a-frontend-accessibility-focus-order
kind: question
status: published
locale: zh-CN
title: 键盘焦点与弹层交互
question: 一个自定义弹层鼠标操作正常，但键盘用户无法可靠进入、关闭或返回原位置。你会检查哪些焦点管理行为，并如何验证修复？
intent: 考察前端交互可访问性与状态管理的实现细节。
signals:
  - 检查打开后焦点移动与关闭后焦点恢复
  - 考虑焦点陷阱及 Escape 等键盘行为
  - 提出键盘走查与辅助技术验证
  - 使用合适的实时区域和语义状态。
  - 决定焦点是否移动及移动到哪里。
  - 测试键盘顺序、读屏反馈与重复提交。
primaryCapability: professional.coding-abstraction
topics:
  - frontend
  - accessibility
  - product-thinking
roles:
  - frontend
  - design
  - engineering
responsibilityScopes:
  - individual
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
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
