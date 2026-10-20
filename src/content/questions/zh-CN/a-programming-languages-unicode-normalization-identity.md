---
questionId: a-programming-languages-unicode-normalization-identity
kind: question
status: published
locale: zh-CN
title: 两个看起来相同的用户名在系统里却被判断为不同，或两个不同写法被误认为相同。你会怎样分析 Unicode 规范化与身份比较？
question: 两个看起来相同的用户名在系统里却被判断为不同，或两个不同写法被误认为相同。你会怎样分析 Unicode 规范化与身份比较？
intent: 考察你能否区分字节、码点、字形和规范化形式，并把比较规则放在安全边界上处理。
signals:
  - 解释组合字符、规范化形式和视觉相似字符之间的区别。
  - 按用户名、搜索、签名或密码等用途分别定义规范化与比较策略。
  - 说明规范化发生在何处、如何保持索引一致以及避免身份碰撞。
primaryCapability: professional.computer-science
topics:
  - programming-languages
  - security
  - data-modeling
roles:
  - backend
  - frontend
  - engineering
  - mobile
  - ai-engineer
responsibilityScopes:
  - individual
  - team
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - campus
  - hiring
formats:
  - debugging
source:
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
followUps:
  - 如果既有账号按旧规则创建，变更规范化策略如何兼容？
  - 怎样防止同形异义字符被用于冒充账号或混淆审计记录？
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
