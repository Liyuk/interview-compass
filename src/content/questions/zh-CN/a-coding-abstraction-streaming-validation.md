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
followUps:
  - 如果某些规则需要读取前后行，如何避免重新载入全部输入？
  - 调用方在读取中途取消时，底层文件或网络资源由谁关闭？
---
