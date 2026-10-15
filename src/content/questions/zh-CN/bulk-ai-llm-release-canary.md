---
questionId: bulk-ai-llm-release-canary
kind: question
status: published
locale: zh-CN
title: LLM 版本灰度发布
question: 新模型离线评测提升，但少数高价值用户的回答质量可能下降。你会怎样安排灰度、观测和扩大流量的条件？
intent: 观察是否把离线结果、分群线上表现、成本和回退机制结合起来。
signals:
  - 选择能代表高风险任务和用户分群的灰度切片
  - 设置质量、延迟、成本和安全护栏
  - 说明扩量、暂停或回退由哪些证据触发
primaryCapability: professional.ai-engineering
topics:
  - ai-engineering
  - devops
  - metrics
  - reliability
roles:
  - ai-engineer
  - backend
  - product
  - data
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - hiring
  - promotion
formats:
  - planning
  - case
source:
  - attribution: inspired
    label: Landed AI Engineer Interview：模型部署与发布评估
    url: https://github.com/landedjobs/awesome-ai-engineer-interview
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 D
followUps:
  - 【离线评测提升但线上客群变化时，怎样控制模型发布风险？】新模型在固定评测集上得分更高，但即将进入的客户群与训练数据差异明显，人工复核需要数日。你会如何安排灰度、观察和扩量？
  - 高风险样本稀少时，如何建立上线信心？
  - 哪些实时信号可发现分布漂移？
---
