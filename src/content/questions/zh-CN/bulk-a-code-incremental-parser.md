---
questionId: bulk-a-code-incremental-parser
kind: question
status: published
locale: zh-CN
title: 增量解析器与长日志流的边界设计
question: 实现一个逐块接收 UTF-8 数据的增量日志解析器：输入块可能截断多字节字符、字段顺序变化，也可能包含多条记录或超长单行。请定义解析状态、错误恢复策略和内存上限，并实现可重复解析的核心逻辑。
intent: 考察增量解析、状态建模、错误恢复与资源边界设计。
signals:
  - 明确跨块状态、字段顺序、字符解码与记录结束的接口约定。
  - 正确处理多字节字符被切断、多条记录、空块及结束输入。
  - 比较错误终止或恢复策略，限定超长单行和缓存的内存成本。
  - 通过不同分块方式、截断、异常格式和重复调用验证结果及错误位置一致。
primaryCapability: professional.coding-abstraction
topics:
  - programming-languages
  - compiler-design
  - backend
  - frontend
  - concurrency
  - data-structures
roles:
  - engineering
  - backend
  - frontend
  - mobile
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
followUps:
  - "多字节 UTF-8 字符被拆在不同输入块中时，解析器怎样还原字符并报告原始位置？"
  - "发现格式错误或截断记录时，采用什么恢复规则才能继续处理后续记录而不补造数据？"
  - "超长单行应设什么上限？调用方取消时怎样释放缓存和输入资源？"
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
