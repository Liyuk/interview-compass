---
questionId: bulk-b-feature-02
kind: question
status: published
locale: zh-CN
title: 同一特征离线训练和在线服务的缺失率差异很大，你如何定位语义漂移？
question: 一个用户风险特征在线服务的缺失率和取值分布与训练数据差异显著，模型效果随之波动。你如何判断问题来自采集覆盖、计算窗口、默认值还是离线在线实现不一致？
intent: 考察候选人能否从特征定义及其实际生成链路建立一致性诊断，而不只关注模型指标。
signals:
  - 沿来源、过滤、连接、窗口和默认值检查定义偏差
  - 比较训练与服务时可用的数据及统计分布
  - 提出能分开识别语义差异与运行故障的验证办法
primaryCapability: domain-modeling.feature-model
topics:
  - feature-modeling
  - data-modeling
  - ai-engineering
roles:
  - data
  - ai-engineer
  - engineering
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - operations-review
formats:
  - case
source:
  - attribution: inspired
    label: dataskew-io/data-engineering-interview-questions：特征新鲜度与训练服务一致性
    url: https://github.com/dataskew-io/data-engineering-interview-questions
---
