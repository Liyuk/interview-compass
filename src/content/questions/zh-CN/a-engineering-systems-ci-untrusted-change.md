---
questionId: a-engineering-systems-ci-untrusted-change
kind: question
status: published
locale: zh-CN
title: "如何隔离不可信代码的执行、凭证和发布制品？"
question: "仓库接受外部贡献，CI 会运行构建脚本、复用缓存、读取测试凭证并生成发布制品。你会怎样隔离不可信执行、凭证权限和缓存边界，防止代码读取秘密或污染受信任制品？"
intent: 了解你能否区分不可信代码与受保护环境，并限制凭证和发布权限。
signals:
  - 追踪fork代码、依赖脚本和构建步骤的执行权限，区分检查与受信任发布。
  - 比较隔离执行、最小权限凭证和分离发布任务的条件，不让不可信产物直接获得生产权限。
  - 核验缓存、制品和跨任务数据怎样影响受保护流程，记录来源和批准。
  - 用恶意变更与权限失败样例验证秘密不可读、发布不可越权及审计可追溯。
primaryCapability: professional.engineering-systems
topics:
  - devops
  - security
  - engineering-systems
  - monorepo
  - micro-frontends
roles:
  - engineering
  - backend
  - frontend
  - mobile
  - ai-engineer
  - data
responsibilityScopes:
  - team
  - individual
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - hiring
  - campus
  - promotion
formats:
  - case
  - planning
followUps:
  - "如果必须共享缓存，怎样避免外部贡献者写入受信任发布任务会消费的数据？"
  - "哪些检查可以在不可信环境运行，哪些必须在受保护环境中重新执行？"
source:
  - attribution: inspired
    label: DNXLabs DevOps 题库的主题覆盖；题面为本站独立编写
    url: https://github.com/DNXLabs/DevOps-Interview-Questions
  - attribution: inspired
    label: GitHub 技术面试与工程体系调研；题目为本站独立编写
    url: https://github.com/yangshun/tech-interview-handbook
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
