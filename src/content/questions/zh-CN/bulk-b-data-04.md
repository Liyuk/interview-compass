---
questionId: bulk-b-data-04
kind: question
status: published
locale: zh-CN
title: 门店补录历史销售后，报表应显示当时记录还是最新修正？
question: 门店会迟到数天补录销售，也会更正商品归属和金额。业务报表既要反映当前认可的结果，也需要解释某个历史日期当时看到的数。你会怎样建模？
intent: 观察候选人能否区分事件发生时间、记录到达时间和业务认定时间，并服务不同查询目的。
signals:
  - 区分发生时间、入库时间和更正生效时间
  - 保留修订历史并定义当前有效值的生成方式
  - 说明历史重述与当时快照查询各自适用的分析问题
primaryCapability: domain-modeling.data-model
topics:
  - data-modeling
  - databases
  - operations
roles:
  - data
  - operations
  - product
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
    label: dataskew-io/data-engineering-interview-questions：数据质量与变化记录主题
    url: https://github.com/dataskew-io/data-engineering-interview-questions
---
