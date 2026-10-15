---
questionId: bulk-ai-human-review-routing
kind: question
status: published
locale: zh-CN
title: 模型何时转人工
question: 一个文档处理助手可自动完成多数请求，但错误成本在不同场景中差异很大。你会如何决定哪些结果自动提交、哪些转人工复核？
intent: 考察不确定性信号、错误代价和人工容量如何共同决定自动化边界。
signals:
  - 区分模型置信度、证据充分性与任务风险
  - 设计按错误代价和用户影响分层的复核路径
  - 考虑人工队列容量及复核结果反馈到系统
primaryCapability: professional.ai-engineering
topics:
  - ai-engineering
  - reliability
  - operations
roles:
  - ai-engineer
  - product
  - operations
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
scenarios:
  - interview
  - hiring
formats:
  - case
source:
  - attribution: inspired
    label: Landed AI Engineer Interview：人机协同与不确定性处理
    url: https://github.com/landedjobs/awesome-ai-engineer-interview
---
