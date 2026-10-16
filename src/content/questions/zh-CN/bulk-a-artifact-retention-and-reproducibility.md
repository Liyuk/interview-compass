---
questionId: bulk-a-artifact-retention-and-reproducibility
kind: question
status: published
locale: zh-CN
title: 制品清理与可回滚性
question: 构建仓库需要清理多年积累的镜像，但线上仍有服务依赖旧版本回滚。你会如何确定保留策略和制品可恢复要求？
intent: 了解发布产物保留、运行依赖和回滚窗口之间的关系。
signals:
  - 识别生产、待发布和历史回滚版本的引用关系
  - 定义保留期限、归档层级与可恢复验证
  - 避免清理任务破坏复现事故或安全调查所需证据
primaryCapability: professional.engineering-systems
topics:
  - engineering-systems
  - devops
  - reliability
roles:
  - engineering
  - backend
  - frontend
  - mobile
  - ai-engineer
  - data
responsibilityScopes:
  - team
  - organization
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - hiring
formats:
  - case
source:
  - attribution: inspired
    label: DevOps Interview Questions：制品管理与发布
    url: https://github.com/DNXLabs/DevOps-Interview-Questions
---
