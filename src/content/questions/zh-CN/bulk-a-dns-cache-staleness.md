---
questionId: bulk-a-dns-cache-staleness
kind: question
status: published
locale: zh-CN
title: DNS 缓存为什么会拖慢故障切流？
question: 服务已经切到新地址，一些用户仍连着旧节点，不同网络的恢复时间也不同。你会怎样检查 DNS 缓存、客户端缓存和现有连接？
intent: 考察能否分清地址解析、各层缓存与连接复用的影响，并据此安排安全的故障切换。
signals:
  - 区分权威 DNS、递归解析器、客户端缓存和连接池各自保存什么。
  - 说明 TTL 到期不保证客户端或已有连接立即切换。
  - 用解析结果、连接生命周期、流量和错误证据判断旧节点是否仍在服务。
  - 在迁移窗口内保持新旧节点可用，并逐步退出旧节点。
primaryCapability: professional.computer-science
topics:
  - computer-networks
  - reliability
  - distributed-systems
roles:
  - engineering
  - backend
  - mobile
responsibilityScopes:
  - individual
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - campus
  - hiring
  - promotion
formats:
  - case
  - knowledge
source:
  - attribution: inspired
    label: Coding Interview University — computer science foundations
    url: https://github.com/jwasham/coding-interview-university/blob/main/README.md
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 A
  - attribution: original
    label: Interview Compass Original Expansion to 1,500 — Batch A
followUps:
  - 降低 TTL 后恢复时间仍未缩短，你会检查哪些缓存或连接？
  - 怎样确认长时间未活跃的客户端也已离开旧节点？
  - 为什么故障切换不能只依赖 DNS？
relatedQuestions: []
---
