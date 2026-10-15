---
questionId: "a-microservices-saga-compensation-boundary"
kind: "question"
status: "published"
locale: "zh-CN"
title: "跨服务流程包含扣款、库存预留和发货，后续步骤失败时你会怎样定义补偿动作和不可逆边界？"
question: "跨服务流程包含扣款、库存预留和发货，后续步骤失败时你会怎样定义补偿动作和不可逆边界？"
intent: "考察能否显式建模业务状态转换、补偿语义和无法回滚的外部副作用。"
signals: ["列清每步提交、超时和重复执行的状态","区分技术重试、业务补偿和人工处理","说明已发货等不可逆副作用的处置","保证流程可查询、幂等并能从中断处恢复"]
primaryCapability: "professional.system-design"
topics: ["microservices","distributed-systems","system-design"]
roles: ["backend","engineering","ai-engineer"]
responsibilityScopes: ["team","multiple-teams"]
careerTracks: ["individual-contributor","team-manager"]
scenarios: ["interview","hiring","promotion"]
formats: ["system-design","case"]
followUps: ["如果补偿本身失败，怎样避免状态长期不一致？","何时应设计为待处理而不是自动重试？"]
source: [{"attribution":"original","label":"Interview Compass 原创主题补充批次：微服务"}]
---
