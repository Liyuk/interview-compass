---
questionId: bulk-ai-rag-retrieval-diagnosis
kind: question
status: published
locale: zh-CN
title: RAG 答案缺少关键证据
question: 用户反馈答案听起来合理，却漏掉文档中的关键限制条件。你会怎样定位问题发生在解析、切分、召回、排序还是生成阶段？
intent: 考察将端到端错误拆成可观察阶段，并建立能复现真实失败的诊断材料。
signals:
  - 保留失败问题、期望证据和实际检索片段
  - 逐层比较解析文本、候选召回和最终上下文
  - 区分检索不到与模型未使用证据的情形
primaryCapability: professional.ai-engineering
topics:
  - ai-engineering
  - debugging
  - data-modeling
roles:
  - ai-engineer
  - data
  - product
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
scenarios:
  - interview
  - hiring
formats:
  - debugging
source:
  - attribution: inspired
    label: Landed AI Engineer Interview：检索与 RAG 评估
    url: https://github.com/landedjobs/awesome-ai-engineer-interview
---
