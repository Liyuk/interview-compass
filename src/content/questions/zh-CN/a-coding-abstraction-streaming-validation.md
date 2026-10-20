---
questionId: a-coding-abstraction-streaming-validation
kind: question
status: published
locale: zh-CN
title: 需要校验一个很大的 CSV 文件，但不能把整份文件读入内存；遇到格式错误时还要报告行号并继续检查。你会怎样设计解析接口？
question: 需要校验一个很大的 CSV 文件，但不能把整份文件读入内存；遇到格式错误时还要报告行号并继续检查。你会怎样设计解析接口？
intent: 考察你能否在流式处理下平衡内存、错误聚合、部分结果和调用方责任。
signals:
  - 定义流式输入、内存上限、错误分类与部分结果契约，比较继续检查和终止的条件。
  - 准确记录行号、字段位置、编码与原始输入关联，明确引号内换行等格式边界。
  - 隔离解析、校验和结果消费，处理取消、背压、错误聚合及资源关闭。
  - 用大文件、跨块字符、截断、异常记录和取消测试验证诊断与空间边界。
primaryCapability: professional.coding-abstraction
topics:
  - programming-languages
  - engineering-systems
  - reliability
roles:
  - backend
  - data
  - engineering
  - ai-engineer
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
  - coding
source:
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 H
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 C
followUps:
  - "CSV 字段或带引号的记录跨越输入块时，解析器怎样保证内容和行号正确？"
  - "遇到格式错误的行时，依据什么决定继续或终止，如何说明被跳过的内容？"
  - "调用方取消或压缩输入异常膨胀时，怎样释放资源并限制内存和 CPU？"
relatedQuestions: []
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
