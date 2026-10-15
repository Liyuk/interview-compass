---
questionId: "a-engineering-systems-credential-rotation"
kind: "question"
status: "published"
locale: "zh-CN"
title: "一个长期凭证被多个服务共享，安全要求尽快轮换，但无法一次性停掉所有依赖方。你会怎样推进？"
question: "一个长期凭证被多个服务共享，安全要求尽快轮换，但无法一次性停掉所有依赖方。你会怎样推进？"
intent: "了解你是否会先盘点依赖，再设计重叠过渡、验证和撤销机制。"
signals: ["找出凭证使用者和调用路径", "采用新旧凭证短暂并行的迁移窗口", "验证依赖方完成切换后再撤销旧凭证", "准备泄露或切换失败时的紧急处置"]
primaryCapability: "professional.engineering-systems"
topics: ["devops", "security", "reliability"]
roles: ["engineering", "backend"]
responsibilityScopes: ["multiple-teams"]
careerTracks: ["individual-contributor", "team-manager"]
scenarios: ["interview", "hiring"]
formats: ["planning", "case"]
followUps: []
source: [{"attribution": "inspired", "label": "DNXLabs DevOps 题库的主题覆盖；题面为本站独立编写", "url": "https://github.com/DNXLabs/DevOps-Interview-Questions"}]
---
