---
questionId: a-ai-engineering-traceable-release
kind: question
status: published
locale: zh-CN
title: 线上回答出现了错误引用，但当时的提示词、模型版本和检索结果都没有完整记录。你会补哪些观测信息，才能既排查问题又控制敏感数据暴露？
question: 线上回答出现了错误引用，但当时的提示词、模型版本和检索结果都没有完整记录。你会补哪些观测信息，才能既排查问题又控制敏感数据暴露？
intent: 考察你能否建立足够的追踪证据，同时明确日志保留、脱敏与访问边界。
signals:
  - 记录模型、提示、索引和工具版本等可复现信息
  - 对输入、输出和检索内容按敏感度脱敏
  - 提供关联请求的追踪 ID 与错误分类
  - 说明日志访问权限和保留周期
primaryCapability: professional.ai-engineering
topics:
  - ai-engineering
  - engineering-systems
  - reliability
roles:
  - ai-engineer
  - backend
  - engineering
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - hiring
formats:
  - debugging
  - case
followUps: []
source:
  - attribution: inspired
    label: atryx AI 工程题库的主题覆盖；题面为本站独立编写
    url: https://github.com/atryx/ai-engineer-interview-questions
  - attribution: original
    label: 原创：生成式 AI 观测与敏感数据边界
---
