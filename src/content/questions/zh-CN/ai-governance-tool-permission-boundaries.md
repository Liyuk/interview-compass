---
questionId: ai-governance-tool-permission-boundaries
kind: question
status: published
primaryCapability: professional.ai-evaluation-governance
scenarios:
  - interview
  - hiring
  - promotion
source:
  - attribution: original
    label: Interview Compass 原创扩充批次 2026-10-15 A
  - attribution: inspired
    label: GitHub 技术面试与工程体系调研；题目为本站独立编写
    url: https://github.com/yangshun/tech-interview-handbook
  - attribution: original
    label: Interview Compass Original Expansion to 1,500 — Batch A
locale: zh-CN
title: AI 助手可以调用内部工具，但不同任务需要不同权限，你会怎样设计授权与审计？
question: AI 助手可以调用内部工具，但不同任务需要不同权限，你会怎样设计授权与审计？
intent: 考察是否能把模型的不确定性隔离在最小权限边界内，并控制授权、执行和追责链路。
signals:
  - 区分读取、写入、外发等动作，以及模型建议者、授权者与执行主体。
  - 把许可限定到任务、资源、收件人、参数和时间，运行时重新核验而不信任模型文本。
  - 比较预览、显式确认、双人审批或拒绝的风险和交互成本，不为所有动作使用同一门槛。
  - 记录意图、版本、授权、实际执行结果和不确定状态，说明撤回或补救的适用边界。
  - 测试越权、权限变化、重复调用和超时，验证最小权限与安全暂停。
topics:
  - ai-engineering
  - security
  - boundaries
roles:
  - ai-engineer
  - backend
  - product
  - engineering
  - frontend
  - mobile
  - data
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
formats:
  - system-design
  - case
followUps:
  - 紧急自动化场景如何减少确认步骤而不扩大权限？
  - 怎样防止提示注入借用已授权工具越权？
  - 哪些操作可以批量授权，哪些必须逐项确认？
  - 如果模型对收件人判断错误，系统应承担哪些补救责任？
relatedQuestions: []
---
