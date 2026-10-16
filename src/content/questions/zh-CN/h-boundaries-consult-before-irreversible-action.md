---
questionId: h-boundaries-consult-before-irreversible-action
kind: question
status: published
locale: zh-CN
title: 超出授权范围但可能造成难以恢复的影响时，先做什么？
question: 你值班时发现一个数据修复脚本可以快速恢复报表，但它也可能覆盖客户刚提交的修改。负责人暂时联系不上，业务方催你立即执行。你会怎样划分可先做的保护动作、需要授权的操作和升级路径？
intent: 了解你是否能在紧急压力下判断权限边界、控制不可逆风险，并采取与职责相称的保护行动。
signals:
  - 识别操作的可逆性、受影响对象、数据丢失风险和当前授权范围
  - 采取不会扩大损害的临时保护措施，并避免未经授权的不可逆写入
  - 记录事实、联系有权决策者，升级后验证恢复结果并交接责任
primaryCapability: work-responsibility.boundaries
topics:
  - risk-management
  - ethics
  - execution
roles:
  - engineering
  - operations
  - data
responsibilityScopes:
  - individual
  - team
careerTracks: [individual-contributor, team-manager, senior-manager]
scenarios:
  - interview
  - hiring
formats:
  - case
source:
  - attribution: original
    label: Interview Compass 原创题目扩充批次 600–626
followUps:
  - 如果等待授权本身会扩大损害，什么最小动作可以先执行？
  - 怎样保存证据以便后续区分原始数据、脚本影响和恢复动作？
---
