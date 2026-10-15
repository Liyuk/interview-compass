---
questionId: bulk-ai-model-provider-fallback
kind: question
status: published
locale: zh-CN
title: 模型供应商故障切换
question: 产品依赖外部模型 API，供应商可能限流或改变可用模型。你会如何设计路由和降级，使切换后质量变化可见而不是静默发生？
intent: 了解备用模型、质量契约、限流和依赖风险管理之间的关系。
signals:
  - 比较重试、排队、备用模型与明确失败各自的后果
  - 定义切换前后的质量和延迟观测维度
  - 考虑供应商变更、区域故障和人工关闭开关
primaryCapability: professional.ai-engineering
topics:
  - ai-engineering
  - reliability
  - devops
roles:
  - ai-engineer
  - backend
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
scenarios:
  - interview
  - hiring
formats:
  - system-design
source:
  - attribution: inspired
    label: Landed AI Engineer Interview：推理服务与模型路由
    url: https://github.com/landedjobs/awesome-ai-engineer-interview
---
