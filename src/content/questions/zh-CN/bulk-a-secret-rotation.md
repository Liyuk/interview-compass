---
questionId: bulk-a-secret-rotation
kind: question
status: published
locale: zh-CN
title: 服务凭据轮换
question: 组织需要轮换一批被多个服务使用的凭据，部分消费者无法同时升级。你会怎样设计轮换过程以缩短暴露窗口并避免大范围中断？
intent: 观察凭据生命周期治理、消费者发现和分阶段撤销的系统性。
signals:
  - 先清点凭据持有者、权限范围和最后使用时间
  - 讨论双凭据过渡、验证和撤销顺序
  - 说明泄漏紧急轮换与常规轮换的差异
primaryCapability: professional.engineering-systems
topics:
  - engineering-systems
  - devops
  - security
roles:
  - engineering
  - backend
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - hiring
formats:
  - case
source:
  - attribution: inspired
    label: DevOps Interview Questions：安全与基础设施管理
    url: https://github.com/DNXLabs/DevOps-Interview-Questions
---
