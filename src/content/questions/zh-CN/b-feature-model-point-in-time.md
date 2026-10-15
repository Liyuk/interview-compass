---
questionId: b-feature-model-point-in-time
kind: question
status: published
locale: zh-CN
title: 离线训练效果很好，模型上线后却明显变差；排查发现训练特征可能使用了预测时点之后才产生的信息。你会怎样验证并修复？
question: 离线训练效果很好，模型上线后却明显变差；排查发现训练特征可能使用了预测时点之后才产生的信息。你会怎样验证并修复？
intent: 了解你是否能识别时间穿越，并让训练与线上特征使用同一时点可见的信息。
signals:
  - 重建样本的预测时点与标签观察窗口
  - 检查特征事件时间、更新时间及 join 条件
  - 用 point-in-time 查询重算并比较效果
  - 增加防止未来信息进入训练集的测试
primaryCapability: domain-modeling.feature-model
topics:
  - feature-modeling
  - ai-engineering
  - data-modeling
roles:
  - data
  - ai-engineer
responsibilityScopes:
  - team
careerTracks:
  - individual-contributor
  - team-manager
scenarios:
  - interview
  - hiring
formats:
  - debugging
  - case
followUps: []
source:
  - attribution: inspired
    label: Dataskew 数据工程题库的主题覆盖；题面为本站独立编写
    url: https://github.com/dataskew-io/data-engineering-interview-questions
  - attribution: inspired
    label: GitHub 数据工程与 AI 工程题目主题调研；题目为本站独立编写
    url: https://github.com/dataskew-io/data-engineering-interview-questions
---
