---
questionId: b-feature-model-time-semantics
kind: question
status: published
locale: zh-CN
title: 构造特征时，怎样保证没有使用“未来”的信息？
question: 为一个预测用户次日是否流失的模型构造“近 7 天活跃天数”特征。你怎样定义这个特征的时间语义，使训练时和线上预测时拿到的是同一个含义？
intent: 了解你是否把特征当作带时间语义的业务定义，而不仅是一列数，并能识别信息泄漏。
signals:
  - 明确特征的截止时间点与观察窗口，而不是只写“近 7 天”
  - 指出训练样本构造中可能泄漏未来信息的具体环节
  - 说明线上线下如何保持同一套定义，并且结果可以复算
  - 特征快照与标签穿越：定义核心对象、粒度、状态或时间定义，避免概念混用
  - 指出规则对应的事实来源、历史保留和异常路径
  - 说明如何对账、回算或验证模型与业务含义一致
  - 区分事件发生时间、入库时间与模型可见时间
  - 按预测时点重建样本并验证回补数据不会越界
  - 明确样本预测时间及每个字段的可用时间。
  - 通过 point-in-time join 或历史快照阻止未来信息进入过去样本。
  - 比较离线回放与线上日志，并查明指标虚高的特征来源。
primaryCapability: domain-modeling.feature-model
topics:
  - feature-modeling
  - data-modeling
roles:
  - data
  - ai-engineer
  - backend
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
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
---
