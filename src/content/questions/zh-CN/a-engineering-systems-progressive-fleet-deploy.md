---
questionId: "a-engineering-systems-progressive-fleet-deploy"
kind: "question"
status: "published"
locale: "zh-CN"
title: "一次发布需要覆盖数千个运行节点，但节点版本和网络状态并不一致。你会怎样设计分批发布、健康验证和暂停条件？"
question: "一次发布需要覆盖数千个运行节点，但节点版本和网络状态并不一致。你会怎样设计分批发布、健康验证和暂停条件？"
intent: "考察你是否能将大规模发布的风险控制落实到分组、观测和回退机制。"
signals: ["按故障域或风险特征划分发布批次", "验证新旧版本兼容与节点健康", "用明确指标触发暂停或自动回退", "处理离线节点和部分成功后的收敛"]
primaryCapability: "professional.engineering-systems"
topics: ["devops", "reliability", "risk-management"]
roles:
  - engineering
  - backend
  - ai-engineer
  - data
responsibilityScopes: ["multiple-teams"]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: ["interview", "hiring"]
formats: ["system-design", "case"]
followUps: []
source: [{"attribution": "inspired", "label": "DNXLabs DevOps 题库的主题覆盖；题面为本站独立编写", "url": "https://github.com/DNXLabs/DevOps-Interview-Questions"}]
---
