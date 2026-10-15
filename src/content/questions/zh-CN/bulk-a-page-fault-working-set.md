---
questionId: bulk-a-page-fault-working-set
kind: question
status: published
locale: zh-CN
title: 缺页风暴与工作集
question: 一台机器开始频繁发生 major page fault，同时磁盘 I/O 升高。你会怎样判断工作集变化、内存压力和应用访问模式各自的作用？
intent: 考察虚拟内存缺页机制与系统级诊断。
signals:
  - 能区分 major 与 minor fault 的含义
  - 会关联工作集、可用内存和换页活动
  - 提出应用与系统两侧的对照观测
primaryCapability: professional.computer-science
topics:
  - operating-systems
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
  - attribution: inspired
    label: GitHub 技术面试与工程体系调研；题目为本站独立编写
    url: https://github.com/yangshun/tech-interview-handbook
---
