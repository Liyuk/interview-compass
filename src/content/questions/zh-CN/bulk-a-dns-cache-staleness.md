---
questionId: bulk-a-dns-cache-staleness
kind: question
status: published
locale: zh-CN
title: DNS 缓存与切流延迟
question: 服务已经切换到新地址，一部分用户仍访问旧节点。你会如何区分递归 DNS 缓存、客户端缓存和连接复用的影响？
intent: 考察 DNS 缓存语义及发布切流的网络排查。
signals:
  - 识别不同层级的缓存位置
  - 理解 TTL 不能保证所有客户端立即刷新
  - 提出按解析结果和连接生命周期拆分的验证办法
primaryCapability: professional.computer-science
topics:
  - computer-networks
roles:
  - engineering
responsibilityScopes:
  - individual
  - team
careerTracks:
  - individual-contributor
scenarios:
  - interview
  - campus
  - hiring
formats:
  - case
source:
  - attribution: inspired
    label: Coding Interview University — computer science foundations
    url: https://github.com/jwasham/coding-interview-university/blob/main/README.md
---
