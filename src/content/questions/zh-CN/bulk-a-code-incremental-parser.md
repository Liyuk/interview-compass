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
  - 如果输入规模扩大十倍且内存预算不变，你会优先调整哪项假设或设计？
  - 如果旧版本客户端或依赖无法同步升级，你会如何维持兼容并界定退出时间？
  - 如果问题只在少数时间窗口出现且本地难以复现，你会先增加什么证据？
  - 如果上线日期固定而验证时间减少，你会定义哪些发布门槛和回退条件？
  - 如果运行成本超出预算但核心可靠性目标不变，你会如何重新权衡？
---
