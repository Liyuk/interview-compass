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
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
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
  - 如果移动端离线下载需要更长时间，如何平衡可用性和泄露风险？
  - 如何防止链接被代理缓存、浏览器历史或分析系统意外保留？
  - 【短时下载链接发出后权限被撤销，怎样界定仍可访问的窗口？】服务用签名 URL 分享敏感报告，链接有效期为 24 小时。用户被移出组织后，旧链接仍可访问；缩短有效期会增加服务压力。你会如何设计撤销和访问校验？
  - 如何在 CDN 缓存下执行即时撤销？
  - 跨组织转发链接时应该如何归属审计责任？
---
