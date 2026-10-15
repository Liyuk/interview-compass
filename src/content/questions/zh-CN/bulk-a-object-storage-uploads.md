---
questionId: bulk-a-object-storage-uploads
kind: question
status: published
locale: zh-CN
title: 不可信文件上传链路
question: 一个协作产品允许用户上传压缩包和媒体文件，文件需要扫描后才能被其他成员访问。你会怎样设计上传、检查和发布的边界？
intent: 观察能否把文件传输效率、不可信输入、安全扫描和可见性状态组合起来。
signals:
  - 区分临时上传对象、扫描结果和已发布对象
  - 说明大文件续传、校验与重复上传如何处理
  - 考虑恶意内容、访问控制、扫描延迟和清理机制
primaryCapability: professional.system-design
topics:
  - system-design
  - distributed-systems
  - security
roles:
  - backend
  - engineering
  - frontend
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
  - attribution: inspired
    label: System Design Primer：对象存储与内容分发
    url: https://github.com/donnemartin/system-design-primer
---
