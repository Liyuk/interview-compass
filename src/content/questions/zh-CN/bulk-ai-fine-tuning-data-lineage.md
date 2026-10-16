---
questionId: bulk-ai-fine-tuning-data-lineage
kind: question
status: published
locale: zh-CN
title: 微调数据的授权与删除
question: 团队混合使用用户反馈、人工标注和合成样本做微调，之后收到部分来源数据需要删除的请求。你会如何追踪数据影响并判断需要重训到什么范围？
intent: 考察训练语料来源、派生数据血缘和删除请求如何作用于模型发布流程。
signals:
  - 记录样本来源、许可、版本和参与的训练任务
  - 区分可删除原始记录与难以单条撤回的模型影响
  - 说明重建数据集、重训或限制模型用途的判断依据
primaryCapability: professional.ai-engineering
topics:
  - ai-engineering
  - data-modeling
  - security
roles:
  - ai-engineer
  - data
  - engineering
  - backend
responsibilityScopes:
  - team
  - organization
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - hiring
formats:
  - case
source:
  - attribution: inspired
    label: Landed AI Engineer Interview：训练数据治理
    url: https://github.com/landedjobs/awesome-ai-engineer-interview
---
