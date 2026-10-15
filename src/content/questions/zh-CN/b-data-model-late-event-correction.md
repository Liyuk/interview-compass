---
questionId: "b-data-model-late-event-correction"
kind: "question"
status: "published"
locale: "zh-CN"
title: "移动端事件可能离线数天后才上传，报表又需要按事件发生时间统计。你会怎样建模和处理迟到、更正及重复事件？"
question: "移动端事件可能离线数天后才上传，报表又需要按事件发生时间统计。你会怎样建模和处理迟到、更正及重复事件？"
intent: "考察你是否分开事件时间与处理时间，并把重放、去重和历史修正纳入管道语义。"
signals: ["明确事件 ID、事件时间和入库时间", "解释迟到窗口、幂等写入及重算范围", "讨论更正事件如何替代或冲销原记录", "说明报表何时稳定以及如何标记修订"]
primaryCapability: "domain-modeling.data-model"
topics: ["data-modeling", "engineering-systems"]
roles: ["data", "backend"]
responsibilityScopes: ["team"]
careerTracks: ["individual-contributor", "team-manager"]
scenarios: ["interview", "hiring"]
formats: ["system-design", "case"]
followUps: []
source: [{"attribution": "inspired", "label": "Dataskew 数据工程题库的主题覆盖；题面为本站独立编写", "url": "https://github.com/dataskew-io/data-engineering-interview-questions"}]
---
