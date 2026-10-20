---
questionId: bulk-a-page-fault-working-set
kind: question
status: published
locale: zh-CN
title: "常驻内存稳定但缺页和尾延迟上升，怎样定位原因？"
question: "服务常驻内存保持稳定，但 major page fault、磁盘 I/O 和尾延迟同时上升。你会怎样区分工作集变化、内存映射行为、内存压力和应用访问模式？"
intent: "判断回答者能否结合系统指标和应用行为，将工作集抖动与其他内存压力来源区分开来。"
signals:
  - "区分 major 与 minor fault，并解释它们对延迟的不同影响。"
  - "关联工作集、可用内存、映射变化、换页活动与尾延迟的时间线。"
  - "设计对照观测以区分应用访问模式变化与主机内存压力。"
  - "确认压力来源和影响范围后再选择应用层或系统层缓解措施。"
primaryCapability: professional.computer-science
topics:
  - operating-systems
  - data-structures
  - computer-networks
  - databases
  - concurrency
  - distributed-systems
  - compiler-design
roles:
  - engineering
  - backend
  - mobile
  - data
  - ai-engineer
responsibilityScopes:
  - individual
  - team
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
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
  - attribution: inspired
    label: GitHub 技术面试与工程体系调研；题目为本站独立编写
    url: https://github.com/yangshun/tech-interview-handbook
followUps:
  - "常驻内存稳定时，哪些映射或工作集变化仍会增加 major fault？"
  - "你会怎样设计实验，区分应用访问变化与主机内存压力？"
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
