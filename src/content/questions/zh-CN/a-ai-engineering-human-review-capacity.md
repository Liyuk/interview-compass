---
questionId: a-ai-engineering-human-review-capacity
kind: question
status: published
locale: zh-CN
title: 如何划定 AI 自动处理与人工复核边界，并控制审核积压？
question: "文档助手在多数场景下可以自动提交，但不同错误的后果差异很大。增加人工复核后，错误减少了，待审核任务却持续积压。你会怎样决定哪些任务自动处理、哪些交给人工，并让审核量不超过团队处理能力？"
intent: 考察你能否根据证据质量与错误代价设定自动化边界，并同时管理复核质量、用户影响和人力容量。
signals:
  - 区分模型置信、证据质量、错误严重性、用户影响和可恢复性。
  - 比较自动处理、澄清、事前审批、抽样或事后复核与阻断，不设所有任务统一门槛。
  - 估算到达量、专业审核容量与时限，监测积压、等待、误拦、漏检及绕过。
  - 明确容量不足的限制或暂停条件、风险接受人，并用复核理由和结果校准上游质量。
primaryCapability: professional.ai-engineering
topics:
  - ai-engineering
  - operations
  - risk-management
  - reliability
roles:
  - ai-engineer
  - operations
  - product
  - engineering
  - frontend
  - backend
  - mobile
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - hiring
formats:
  - case
  - planning
followUps:
  - 如果高风险请求集中在短时间内到达，你会采用限流、延迟、降级（关闭非核心功能以保住核心服务）还是临时增加审核容量？依据是什么？
  - 如果复核者之间经常意见不一致，你会先改进标准、证据界面还是培训？
  - 当积压回落但漏检率开始上升时，你会怎样决定是否扩大自动处理范围？
  - 什么情况下应该暂停功能，而不是降低审核比例？
  - 如何防止审核人员长期疲劳造成形式化点击？
  - 当人工队列超载时，如何保持高风险请求得到处理？
  - 怎样避免复核者因自动化偏见只做形式确认？
source:
  - attribution: inspired
    label: atryx AI 工程题库的主题覆盖；题面为本站独立编写
    url: https://github.com/atryx/ai-engineer-interview-questions
  - attribution: inspired
    label: Landed AI Engineer Interview：人机协同与不确定性处理
    url: https://github.com/landedjobs/awesome-ai-engineer-interview
  - attribution: original
    label: Interview Compass Original Expansion to 1,500 — Batch A
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 A
relatedQuestions:
  - questionId: bulk-c-metrics-06
    relation: 相关问题进一步评估自动化流程带来的整体净价值。
    contrast: 本题聚焦单个结果如何分流以及人审容量；相关题聚焦速度、复核和高价值客户风险的整体结果。
---
