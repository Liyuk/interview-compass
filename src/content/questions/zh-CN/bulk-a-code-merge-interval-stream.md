---
questionId: bulk-a-code-merge-interval-stream
kind: question
status: published
locale: zh-CN
title: 动态区间合并
question: 请实现一个数据结构，持续接收闭区间并合并相交或相邻区间，同时支持查询当前区间数和有序结果。你会如何选择结构并验证边界？
intent: 考察数据结构选择、实现正确性和复杂度意识。
signals:
  - 明确相邻区间是否合并的规则
  - 能维护有序且互不相交的状态不变量
  - 测试空集、嵌套、相交边界和大输入
  - 从输入、机制和故障表现中提出可验证的技术假设
  - 比较实现路径及其正确性、性能、安全或维护代价
  - 说明覆盖边界场景的测试或运行指标
primaryCapability: professional.coding-abstraction
topics:
  - data-structures
  - programming-languages
  - backend
  - frontend
  - concurrency
roles:
  - engineering
  - backend
  - frontend
  - mobile
responsibilityScopes:
  - individual
  - team
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - campus
  - hiring
  - promotion
formats:
  - coding
source:
  - attribution: inspired
    label: Coding Interview University — computer science foundations
    url: https://github.com/jwasham/coding-interview-university/blob/main/README.md
  - attribution: inspired
    label: GitHub 技术面试与工程体系调研；题目为本站独立编写
    url: https://github.com/yangshun/tech-interview-handbook
followUps: []
---
