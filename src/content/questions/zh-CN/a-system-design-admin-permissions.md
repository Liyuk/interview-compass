---
questionId: a-system-design-admin-permissions
kind: question
status: published
locale: zh-CN
title: 一个大型运营后台的权限系统应该怎样设计？
question: 一个大型运营后台的权限系统应该怎样设计？角色、数据范围、审批和审计怎样组织，权限越来越多时怎样不失控？
intent: 了解你能否为权限设计清晰的模型，并在安全、可用和可维护之间取舍。
signals:
  - 区分功能权限和数据权限，并说明角色、资源和范围的建模
  - 说明高风险操作的审批、二次确认和审计
  - 说明权限的申请、回收和定期复核，避免权限只增不减
  - 考虑权限校验的性能和一致性，以及越权的排查方式
primaryCapability: professional.system-design
topics: [system-design, security, backend]
roles:
  - engineering
  - backend
  - frontend
  - product
  - mobile
  - ai-engineer
  - data
responsibilityScopes: [team, multiple-teams]
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios: [interview, hiring]
formats: [system-design]
followUps:
  - 一个人调岗后，怎样保证旧权限被收回？
  - 角色已经上千个且互相重叠，你怎么治理？
source:
  - attribution: original
    label: "作者的系统设计题：运营后台的权限系统"
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
