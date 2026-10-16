---
questionId: bulk-ai-rag-retrieval-diagnosis
kind: question
status: published
locale: zh-CN
title: 检索增强生成的答案为什么会漏掉关键证据？
question: 用户反馈答案听起来合理，却漏掉文档中的关键限制条件。你会怎样定位问题发生在解析、切分、召回、排序还是生成阶段？
intent: 考察将端到端错误拆成可观察阶段，并建立能复现真实失败的诊断材料。
signals:
  - 保留失败问题、期望证据和实际检索片段
  - 逐层比较解析文本、候选召回和最终上下文
  - 区分检索不到与模型未使用证据的情形
  - 区分召回率、排序相关性、上下文噪声和答案忠实度。
  - 按任务类型分析漏召回、重复、冲突和超长上下文的影响。
  - 通过分阶段对照和端到端任务指标验证优化，不只看单一检索指标。
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
  - attribution: original
    label: Interview Compass Original Expansion to 1,500 — Batch A
followUps:
  - 怎样构造能暴露重复证据与互相矛盾文档的评测样本？
  - 如果减少上下文提高忠实度却降低覆盖，如何决定取舍？
relatedQuestions: []
---
