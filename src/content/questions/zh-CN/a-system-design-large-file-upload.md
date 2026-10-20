---
questionId: a-system-design-large-file-upload
kind: question
status: published
locale: zh-CN
title: "大文件可恢复上传、扫描与安全发布"
question: "设计一个协作产品，支持大文件断点续传；文件通过校验和安全扫描后，其他成员才能访问。你会先澄清哪些约束，并怎样设计上传、临时存储、扫描、发布、权限和清理边界？"
intent: "考察能否设计在网络故障后可恢复、且未经验证的内容不会提前对协作者可见的端到端流程。"
signals:
  - "澄清文件大小、网络条件、访问权限、滥用防护与可用性目标。"
  - "区分临时上传对象、扫描状态、校验结果和已发布对象。"
  - "设计分片续传、完整性校验、重试与重复上传处理。"
  - "考虑恶意内容、扫描延迟、访问控制、故障恢复及未完成文件清理。"
primaryCapability: professional.system-design
topics:
  - system-design
  - backend
  - frontend
roles:
  - engineering
  - frontend
  - backend
  - mobile
  - ai-engineer
  - data
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
formats:
  - system-design
followUps:
  - "用户上传中途切换网络时，哪一层恢复进度并避免生成重复对象？"
  - "扫描器不可用或超时时，文件是否可见，状态如何最终收敛？"
  - "你会怎样证明协作者只能访问已通过检查且仍有权限的文件？"
source:
  - attribution: derived
    label: 筛选人和面试官到底在看什么（用场景练习系统设计）
    url: >-
      https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2022/07/campus-recruitment-training/zh.md
  - attribution: inspired
    label: System Design Primer：对象存储与内容分发
    url: https://github.com/donnemartin/system-design-primer
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
