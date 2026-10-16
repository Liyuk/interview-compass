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
  - 区分读取、写入、外发等操作的风险等级和权限主体
  - 采用任务级授权、最小权限、显式确认或双人审批
  - 校验参数和目标资源，避免模型文本直接成为未验证命令
  - 记录调用主体、意图、参数、结果和撤销路径
  - 识别“工具调用权限随上下文变化”涉及的关键机制、状态边界和失败条件，并指出需要补足的前提。
  - 比较可行方案在正确性、性能、兼容性、成本或可恢复性上的取舍。
  - 设计能复现边界故障并验证判断的测试、运行证据或回退条件。
  - 将授权限定到具体任务、对象、收件人和有效时间。
  - 按风险和可逆（可以安全撤回）性设置预览、确认或拒绝条件。
  - 记录模型建议与用户授权，提供执行状态、撤回补救和审计路径。
topics:
  - ai-engineering
  - security
  - boundaries
roles:
  - ai-engineer
  - backend
  - product
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
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
