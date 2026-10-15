---
questionId: bulk-b-feature-03
kind: question
status: published
locale: zh-CN
title: 一个核心特征被多个模型和报表使用，原始业务定义已改变，如何治理？
question: 多个模型、运营规则和报表共用一个核心特征，但上游业务定义已经变化，部分消费者暂时无法迁移。你会如何管理新旧定义、所有权和迁移顺序？
intent: 观察候选人如何在定义演进与消费者稳定之间建立透明的兼容和治理机制。
signals:
  - 确认特征业务所有者及各消费方依赖和重要性
  - 区分保留旧口径、并行发布和强制切换的适用情形
  - 定义弃用通知、兼容期限与迁移完成证据
primaryCapability: domain-modeling.feature-model
topics:
  - feature-modeling
  - data-modeling
  - metrics
roles:
  - data
  - ai-engineer
  - product
responsibilityScopes:
  - team
  - multiple-teams
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - promotion
formats:
  - case
  - planning
source:
  - attribution: inspired
    label: dataskew-io/data-engineering-interview-questions：特征所有权与下游影响
    url: https://github.com/dataskew-io/data-engineering-interview-questions
---
