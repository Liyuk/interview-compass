---
questionId: bulk-a-dependency-update-policy
kind: question
status: published
locale: zh-CN
title: 依赖更新积压
question: 数百个仓库都锁定了不同版本的第三方依赖，安全团队发现高危漏洞时很难知道影响范围。你会怎样建立依赖更新和风险处置机制？
intent: 考察能否建立依赖清单、判断漏洞影响、自动升级依赖并管理例外。
signals:
  - 建立依赖可见性并区分直接与传递依赖
  - 按可达性、暴露面和修复兼容性安排优先级
  - 定义自动更新、人工审查与临时豁免的责任
primaryCapability: professional.engineering-systems
topics:
  - engineering-systems
  - security
  - devops
roles:
  - engineering
  - backend
  - mobile
  - frontend
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
  - planning
source:
  - attribution: original
    label: 原创：依赖更新与漏洞响应机制
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
