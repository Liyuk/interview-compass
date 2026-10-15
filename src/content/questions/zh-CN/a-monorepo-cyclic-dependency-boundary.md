---
questionId: "a-monorepo-cyclic-dependency-boundary"
kind: "question"
status: "published"
locale: "zh-CN"
title: "两个产品包形成依赖环，拆分后又需要共享领域类型。你会怎样调整边界，避免用新公共包掩盖循环？"
question: "两个产品包形成依赖环，拆分后又需要共享领域类型。你会怎样调整边界，避免用新公共包掩盖循环？"
intent: "考察能否识别依赖方向和领域所有权，并验证抽象是否真正稳定。"
signals: ["梳理循环依赖中的运行时和类型依赖","确认共享类型由哪个业务上下文定义","比较依赖倒置、接口包、合并边界等方案","设置静态边界规则避免循环重新形成"]
primaryCapability: "professional.engineering-systems"
topics: ["monorepo","engineering-systems","devops"]
roles: ["engineering","frontend","backend"]
responsibilityScopes: ["team","multiple-teams"]
careerTracks: ["individual-contributor","team-manager"]
scenarios: ["interview","hiring","promotion"]
formats: ["case","planning"]
followUps: ["何时合并两个包比继续拆分更合理？","怎样避免“shared”包变成无边界杂物箱？"]
source: [{"attribution":"original","label":"Interview Compass 原创主题补充批次：Monorepo"}]
---
