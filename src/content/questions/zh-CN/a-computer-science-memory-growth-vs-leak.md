---
questionId: a-computer-science-memory-growth-vs-leak
kind: question
status: published
locale: zh-CN
title: 一个长时间运行的进程内存持续增长，但没人能指出明显的泄漏。你怎样区分真正的泄漏、正常的缓存增长和内存碎片？
question: 一个长时间运行的进程内存持续增长，但没人能指出明显的泄漏。你怎样区分真正的泄漏、正常的缓存增长和内存碎片？
intent: 了解你对内存管理的理解，以及能否用观察而不是猜测来区分几种解释。
signals:
  - 对齐负载、堆、原生分配、映射页与进程总内存的时间曲线。
  - 用增长上界、回收后变化和对象保留证据区分泄漏、缓存与碎片。
  - 比较受控负载、抽样剖析和转储的诊断价值及线上成本，不把同期增长直接当因果。
  - 先限制影响，再用可复现负载核验修复与内存稳定条件。
primaryCapability: professional.computer-science
topics:
  - operating-systems
  - debugging
  - reliability
  - operations
  - backend
roles:
  - backend
  - mobile
  - engineering
  - frontend
  - data
  - ai-engineer
responsibilityScopes:
  - individual
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - hiring
  - promotion
  - campus
formats:
  - debugging
  - knowledge
  - case
source:
  - attribution: original
    label: 本站原创
  - attribution: inspired
    label: GitHub 技术面试与工程体系调研；题目为本站独立编写
    url: https://github.com/yangshun/tech-interview-handbook
  - attribution: inspired
    label: Tech Interview Handbook：将问题拆成可验证证据
    url: https://github.com/yangshun/tech-interview-handbook
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 C
followUps:
  - 低流量下仍逐日增长、重启后暂时恢复时，你会怎样安排采样和实验？
  - 堆对象数量下降但进程内存没有回落时，下一步检查什么？
  - 服务内存占用持续增长，堆对象采样基本稳定，但容器 RSS 不断增加。你会怎样区分堆外分配、碎片和缓存？
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
