---
questionId: bulk-a-tcp-retransmission-evidence
kind: question
status: published
locale: zh-CN
title: TCP 重传与应用超时
question: 客户端报告请求偶发超时，但服务端处理时间正常。你会怎样利用 TCP 重传、RTT 和连接状态等信息判断延迟发生在哪一段？
intent: 考察网络传输层机制与端到端定位。
signals:
  - 能说明重传与丢包或确认超时的关系
  - 会区分网络耗时与服务端处理耗时
  - 选择能够验证路径的抓包或指标
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
  - debugging
source:
  - attribution: inspired
    label: Coding Interview University — computer science foundations
    url: https://github.com/jwasham/coding-interview-university/blob/main/README.md
---
