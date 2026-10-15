---
questionId: a-engineering-systems-ci-untrusted-change
kind: question
status: published
locale: zh-CN
title: 仓库允许外部贡献者提交代码，CI 会读取测试凭证并构建发布包。你会怎样检查流水线中信任边界和凭证暴露风险？
question: 仓库允许外部贡献者提交代码，CI 会读取测试凭证并构建发布包。你会怎样检查流水线中信任边界和凭证暴露风险？
intent: 了解你能否区分不可信代码与受保护环境，并限制凭证和发布权限。
signals:
  - 识别来自 fork、依赖脚本和构建步骤的执行风险
  - 按任务拆分最小权限凭证
  - 避免不可信构建直接访问发布秘密
  - 描述审计、隔离和安全发布的验证方法
primaryCapability: professional.engineering-systems
topics:
  - devops
  - security
  - engineering-systems
roles:
  - engineering
  - backend
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - hiring
formats:
  - case
followUps: []
source:
  - attribution: inspired
    label: DNXLabs DevOps 题库的主题覆盖；题面为本站独立编写
    url: https://github.com/DNXLabs/DevOps-Interview-Questions
  - attribution: inspired
    label: GitHub 技术面试与工程体系调研；题目为本站独立编写
    url: https://github.com/yangshun/tech-interview-handbook
---
