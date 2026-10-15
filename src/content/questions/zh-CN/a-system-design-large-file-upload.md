---
questionId: a-system-design-large-file-upload
kind: question
status: published
locale: zh-CN
title: 设计一个支持大文件上传的产品能力
question: 请设计一个支持大文件上传的产品能力。你会先澄清哪些约束，再怎样逐层展开？
intent: 了解你是否从问题与约束出发做设计，并能讲清每个选择解决什么、带来什么代价。
signals:
  - 先问文件大小、网络环境、访问权限与滥用防护
  - 区分客户端分片重试、服务端校验合并与状态记录
  - 说明失败怎样恢复，以及用什么观察成功率与耗时
primaryCapability: professional.system-design
topics:
  - system-design
  - backend
  - frontend
roles:
  - engineering
  - frontend
  - backend
  - mobile
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
scenarios:
  - interview
formats:
  - system-design
followUps:
  - 用户在上传到一半时换了网络，哪一层负责恢复？
source:
  - attribution: derived
    label: 筛选人和面试官到底在看什么（用场景练习系统设计）
    url: >-
      https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2022/07/campus-recruitment-training/zh.md
  - attribution: inspired
    label: System Design Primer：对象存储与内容分发
    url: https://github.com/donnemartin/system-design-primer
---
