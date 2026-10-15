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
roles:
  - backend
  - engineering
  - operations
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
scenarios:
  - interview
  - hiring
formats:
  - system-design
source:
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
followUps:
  - 如果移动端离线下载需要更长时间，如何平衡可用性和泄露风险？
  - 如何防止链接被代理缓存、浏览器历史或分析系统意外保留？
---
