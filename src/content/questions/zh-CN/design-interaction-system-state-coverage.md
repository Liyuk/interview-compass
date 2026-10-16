---
questionId: design-interaction-system-state-coverage
kind: question
status: published
locale: zh-CN
title: 多个产品流程共享交互模式时，你怎样定义一套可复用的系统？
question: "创建、编辑和审核由不同团队负责，表单反馈逐渐不一致。你会如何决定哪些模式统一、哪些保留差异？怎样检查加载、空白、错误和恢复状态？"
intent: 考察能否把交互模式作为跨流程系统来设计，在一致性、可复用性和具体任务需求之间建立清晰边界。
signals:
  - 从用户任务与跨流程差异出发定义模式，而不是只按视觉相似度抽取组件
  - 说明关键状态、异常路径和恢复行为如何进入设计规范或原型
  - 考虑模式采用、例外治理及后续迭代的维护方式
primaryCapability: professional.system-design
topics:
  - "system-design"
  - "frontend"
  - "engineering-systems"
  - "product-discovery"
roles:
  - design
  - frontend
  - product
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
scenarios:
  - "interview"
  - "promotion"
  - "self-reflection"
formats:
  - case
  - artifact-review
followUps:
  - "设计评审多次指出表格筛选操作不一致，但各页面任务不同。你会怎样判断是否应建立通用规范，并验证它没有限制必要差异？"
source:
  - attribution: inspired
    label: Designer Interview Questions（仅作主题启发；本站独立原创，不复制原问题）
    url: https://github.com/briannhinton/designer-interview-questions
---
