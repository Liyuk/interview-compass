---
questionId: bulk-b-feature-02
kind: question
status: published
locale: zh-CN
title: 训练数据与线上服务的特征值为什么不同？
question: 训练数据里某个风险值大多完整，线上服务却常用默认值代替，模型效果也随之波动。你会怎样查明问题来自数据采集、计算时间、缺失处理还是实现差异？
intent: 考察能否沿数据来源、时间范围和计算过程，找出训练数据与线上服务采用不同值的原因。
signals:
  - 对照训练和线上使用的数据来源、筛选条件、关联方式、计算窗口及版本。
  - 区分真实的零值、没有数据和采集或计算失败。
  - 检查默认值比例及其对不同用户群体和模型结果的影响。
  - 提出可重复的样本核对、监控和发布验证方法。
primaryCapability: domain-modeling.feature-model
topics:
  - feature-modeling
  - data-modeling
  - ai-engineering
  - metrics
roles:
  - data
  - ai-engineer
  - engineering
  - backend
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
  - operations-review
  - hiring
  - promotion
formats:
  - case
  - system-design
source:
  - attribution: inspired
    label: dataskew-io/data-engineering-interview-questions：特征新鲜度与训练服务一致性
    url: https://github.com/dataskew-io/data-engineering-interview-questions
  - attribution: inspired
    label: GitHub 数据工程与 AI 工程题目主题调研；题目为本站独立编写
    url: https://github.com/dataskew-io/data-engineering-interview-questions
  - attribution: original
    label: Interview Compass Original Expansion to 1,500 — Batch A/B
followUps:
  - 线上特征缺失时自动填 0，但拒绝率突然变化；你会先核对哪些数据？
  - 怎样确认训练数据没有使用预测时点之后才能知道的信息？
  - 如果线上和训练环境无法共用同一段计算代码，如何持续验证两边结果一致？
relatedQuestions: []
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
