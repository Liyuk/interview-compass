---
questionId: b-feature-model-time-semantics
kind: question
status: published
locale: zh-CN
title: 构造特征时，怎样保证没有使用“未来”的信息？
question: 为一个预测用户次日是否流失的模型构造“近 7 天活跃天数”特征。你怎样定义这个特征的时间语义，使训练时和线上预测时拿到的是同一个含义？
intent: 了解你是否把特征当作带时间语义的业务定义，而不仅是一列数，并能识别信息泄漏。
signals:
  - 明确预测时点、特征截止点、近七天窗口和标签观察期，不只写相对日期。
  - 区分事件发生、入库和模型可见时间，追踪每个来源字段及关联条件。
  - 用时点关联或历史快照等方法防止未来事实及事后回补进入过去样本，并说明取舍。
  - 核对训练样本与线上日志的定义和数值，调查离线指标虚高或线上缺值。
  - 以窗口边界、迟到回补和未来标签样例验证可复算与训练服务一致性。
primaryCapability: domain-modeling.feature-model
topics:
  - feature-modeling
  - data-modeling
roles:
  - data
  - ai-engineer
  - backend
  - engineering
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
  - team-manager
  - senior-manager
scenarios:
  - interview
formats:
  - case
followUps:
  - 用户当天的行为在预测时刻是否已经可用？数据延迟会带来什么影响？
  - 你怎样验证线上与离线算出来的是同一个值？
  - 模型在每天零点预测违约，但有些业务事件会在次日回补。你会如何定义特征可见时间、标签观察窗和训练样本截止点？
  - 如果数据源只有更新时间没有事件时间，怎样评估风险？
  - 如何确保回填任务不会改变模型训练时的历史可观测信息？
source:
  - attribution: original
    label: 基于特征模型时间语义的常见建模问题原创编写
  - attribution: inspired
    label: Dataskew 数据工程题库的主题覆盖；题面为本站独立编写
    url: https://github.com/dataskew-io/data-engineering-interview-questions
  - attribution: inspired
    label: GitHub 数据工程与 AI 工程题目主题调研；题目为本站独立编写
    url: https://github.com/dataskew-io/data-engineering-interview-questions
  - attribution: original
    label: Interview Compass Original Expansion Batch 2026-10-17 B
  - attribution: original
    label: Interview Compass Original Expansion to 1,500 — Batch B
relatedQuestions: []
perspective: candidate
perspectiveReview: inferred
qualityTier: extended
---
