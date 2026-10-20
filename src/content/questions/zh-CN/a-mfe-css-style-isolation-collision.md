---
questionId: "a-mfe-css-style-isolation-collision"
kind: "question"
status: "published"
locale: "zh-CN"
title: "独立开发的子应用集成后出现样式覆盖、主题不一致和弹层被裁剪，你会如何选择样式隔离策略？"
question: "独立开发的子应用集成后出现样式覆盖、主题不一致和弹层被裁剪，你会如何选择样式隔离策略？"
intent: "考察能否围绕隔离强度、共享设计系统、调试成本和弹层语义选择适当边界。"
signals: ["定位全局选择器、CSS 变量和层叠顺序的冲突来源","比较命名空间、CSS Modules、Shadow DOM 等方案的约束","定义主题令牌和弹层挂载约定","通过代表性页面和可访问性场景验证策略"]
primaryCapability: "professional.engineering-systems"
topics: ["micro-frontends","frontend","engineering-systems","system-design"]
roles:
  - frontend
  - engineering
  - design
responsibilityScopes: ["team","multiple-teams"]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: ["interview","hiring","promotion"]
formats: ["system-design","case"]
followUps: ["弹层必须跨越 Shadow DOM 边界时，怎样处理？","怎样避免每个子应用重复维护一套视觉系统？"]
source: [{"attribution":"original","label":"Interview Compass 原创主题补充批次：微前端"}]
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
