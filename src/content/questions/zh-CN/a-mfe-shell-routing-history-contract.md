---
questionId: "a-mfe-shell-routing-history-contract"
kind: "question"
status: "published"
locale: "zh-CN"
title: "多个子应用共享浏览器地址栏，浏览器前进后退、深链和登录重定向行为不一致。你会怎样定义路由契约？"
question: "多个子应用共享浏览器地址栏，浏览器前进后退、深链和登录重定向行为不一致。你会怎样定义路由契约？"
intent: "考察能否将导航所有权、URL 语义和跨应用生命周期设计为清晰的运行时契约。"
signals: ["规定路由命名空间、默认入口和未知路由处理","定义前进后退、深链和刷新行为","明确认证回跳与应用挂载顺序","为跨应用跳转建立可测试的契约"]
primaryCapability: "professional.engineering-systems"
topics: ["micro-frontends","frontend","engineering-systems","system-design"]
roles: ["frontend","engineering","design"]
responsibilityScopes: ["team","multiple-teams"]
careerTracks: ["individual-contributor","team-manager"]
scenarios: ["interview","hiring","promotion"]
formats: ["system-design","case"]
followUps: ["谁应拥有全局导航和 404 处理？","怎样避免子应用路由变更破坏别的团队？"]
source: [{"attribution":"original","label":"Interview Compass 原创主题补充批次：微前端"}]
---
