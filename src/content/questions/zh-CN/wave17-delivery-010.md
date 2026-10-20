---
questionId: wave17-delivery-010
kind: question
status: published
locale: zh-CN
title: 多个团队分别交付后，谁来验收完整流程？
question: 身份服务、前端登录和客服操作台分别按期交付，但新客户仍无法完成开户。你会怎样确定由谁负责整合并验收完整流程？
intent: "考察你能否穿过各组件“按期交付”的局部状态，定义用户完成开户的端到端结果，并明确整合、异常处理与验收责任。"
signals: ["从新客户触发开户到成功使用还原用户流程、系统交接和失败路径。", "明确唯一端到端负责人、各服务负责人和验收权限，避免“每个团队都完成但无人负责结果”。", "核实共享状态、接口契约、身份与前端假设，使用真实日志或场景定位断点。", "提出跨团队验收用例、上线门槛与未达标时的升级和回滚措施。"]
anchors:
  notPassing: "复述各组件完成状态，未描述用户旅程。"
  passing: "画出主要交接并提出端到端负责人和至少一项验收证据。"
  excellent: "用真实流程与接口证据定位责任断点，建立跨团队验收和异常处理。"
  exceptional: "覆盖恢复/重试和边界情况，明确有权限的责任人、发布门槛与持续监控，使局部交付承诺与开户结果对齐。"
primaryCapability: delivery.decomposition
topics:
  - execution
  - planning
roles:
  - engineering
  - frontend
  - backend
  - mobile
  - ai-engineer
responsibilityScopes:
  - individual
  - team
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - hiring
  - promotion
formats:
  - planning
followUps: ["如果身份服务返回成功但前端仍显示开户失败，你会怎样确定是哪一个团队需要采取下一步行动？", "由谁认可端到端验收标准；不同团队对“开户完成”定义不同时如何处理？"]
weakAnswer: "只检查各组件是否按期交付，没有定义用户结果、流程所有者或跨系统验收。"
source:
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-17 B
  - attribution: derived
    label: 产品资源排不上，研发接下项目后怎么推进？
    url: >-
      https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/consulting/2026/09/product-engineer-without-boundaries/zh.md
relatedQuestions: []
perspective: "candidate"
perspectiveReview: "reviewed"
qualityTier: "core"

---
