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
  - 说明线上线下如何保持同一口径，并且结果可以复算
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
source:
  - attribution: original
    label: 基于特征模型时间语义的常见建模问题原创编写
  - attribution: inspired
    label: Dataskew 数据工程题库的主题覆盖；题面为本站独立编写
    url: https://github.com/dataskew-io/data-engineering-interview-questions
  - attribution: inspired
    label: GitHub 数据工程与 AI 工程题目主题调研；题目为本站独立编写
    url: https://github.com/dataskew-io/data-engineering-interview-questions
relatedQuestions: []
---
