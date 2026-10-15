---
questionId: bulk-b-feature-04
kind: question
status: published
locale: zh-CN
title: 实时特征延迟从秒级降到分钟级，如何判断业务影响是否可接受？
question: 一组高成本特征因上游依赖调整，刷新延迟将从几秒增加到十分钟。你如何判断哪些决策会受影响、哪些特征需要保持实时，以及何时应采用降级值？
intent: 考察候选人能否将新鲜度作为业务契约来评估，兼顾决策时效、可靠性和维护成本。
signals:
  - 映射特征消费者、决策频率和过期数据的实际后果
  - 按业务影响而非统一技术标准划分时效要求
  - 提出明确的降级、告警或恢复条件
primaryCapability: domain-modeling.feature-model
topics:
  - feature-modeling
  - metrics
  - risk-management
roles:
  - data
  - ai-engineer
  - product
  - operations
responsibilityScopes:
  - team
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
    label: dataskew-io/data-engineering-interview-questions：特征新鲜度、成本与业务价值
    url: https://github.com/dataskew-io/data-engineering-interview-questions
---
