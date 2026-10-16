---
questionId: a-coding-abstraction-streaming-validation
kind: question
status: published
locale: zh-CN
title: 需要校验一个很大的 CSV 文件，但不能把整份文件读入内存；遇到格式错误时还要报告行号并继续检查。你会怎样设计解析接口？
question: 需要校验一个很大的 CSV 文件，但不能把整份文件读入内存；遇到格式错误时还要报告行号并继续检查。你会怎样设计解析接口？
intent: 考察你能否在流式处理下平衡内存、错误聚合、部分结果和调用方责任。
signals:
  - 明确按行迭代、错误是否致命及结果的部分可用性契约。
  - 保持行号、字段错误和输入编码等诊断信息准确。
  - 用大文件、截断输入、异常行和取消场景验证内存上限与资源释放。
  - 为值保留来源跨度和展开关系。
  - 区分语法错误、引用错误和类型错误。
  - 确保错误信息能回到用户原始输入。
primaryCapability: professional.coding-abstraction
topics:
  - programming-languages
  - engineering-systems
  - reliability
roles:
  - backend
  - data
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
  - coding
source:
  - attribution: original
    label: Interview Compass 原创扩充（2026-10-14）
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 H
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-16 C
followUps:
  - 如果某些规则需要读取前后行，如何避免重新载入全部输入？
  - 调用方在读取中途取消时，底层文件或网络资源由谁关闭？
  - 如何防止压缩炸弹耗尽 CPU 或磁盘？
  - 怎样让解析器支持取消、超时和背压？
  - 引用链过长时怎样避免递归溢出？
  - 多个来源都参与同一值时怎样显示？
relatedQuestions: []
---
