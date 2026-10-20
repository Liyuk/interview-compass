---
questionId: a-security-download-url-authorization-lifetime
kind: question
status: published
locale: zh-CN
title: 系统用预签名 URL 让用户直接下载私有文件，链接可能被转发或长期留存。你会怎样设计授权与失效边界？
question: 系统用预签名 URL 让用户直接下载私有文件，链接可能被转发或长期留存。你会怎样设计授权与失效边界？
intent: 考察你能否把用户身份授权转换为受限的短期能力，同时处理资源范围、撤销和审计。
signals:
  - 限定链接的资源、操作、有效期和可选来源网络。
  - 说明权限变化或文件撤销后，既有链接如何失效或降低风险。
  - 设计生成、使用和异常访问的审计与监测，避免敏感信息进入日志。
primaryCapability: professional.system-design
topics:
  - security
  - computer-networks
  - risk-management
  - reliability
  - distributed-systems
roles:
  - backend
  - engineering
  - operations
  - frontend
  - mobile
  - ai-engineer
  - data
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - hiring
formats:
  - system-design
  - debugging
source:
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 G
followUps:
  - "离线下载需要更长有效期时，如何通过资源、用户或设备约束控制新增暴露风险？"
  - "CDN 或浏览器已经缓存文件或链接时，怎样执行撤销？"
  - "应记录哪些访问和失效证据，同时避免把签名密钥或完整敏感链接写入日志？"
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
