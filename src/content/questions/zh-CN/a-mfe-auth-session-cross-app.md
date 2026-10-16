---
questionId: "a-mfe-auth-session-cross-app"
kind: "question"
status: "published"
locale: "zh-CN"
title: "用户在一个子应用完成登录后，切换到另一个应用却丢失权限或会话状态。你会如何设计认证上下文的共享边界？"
question: "用户在一个子应用完成登录后，切换到另一个应用却丢失权限或会话状态。你会如何设计认证上下文的共享边界？"
intent: "考察能否在一致的身份体验与最小权限、令牌安全和应用隔离之间建立清楚的协议。"
signals: ["区分身份认证、会话管理和资源授权责任","明确主应用与子应用可读取的身份信息","避免通过不安全的浏览器存储共享高权限凭证","覆盖登出、续期、权限变化和跨标签页行为"]
primaryCapability: "professional.engineering-systems"
topics: ["micro-frontends","frontend","engineering-systems","system-design"]
roles:
  - frontend
  - engineering
  - design
  - backend
responsibilityScopes: ["team","multiple-teams"]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: ["interview","hiring","promotion"]
formats: ["system-design","case"]
followUps: ["跨域子应用如何安全共享登录状态？","权限被撤销时怎样及时传播？"]
source: [{"attribution":"original","label":"Interview Compass 原创主题补充批次：微前端"}]
---
