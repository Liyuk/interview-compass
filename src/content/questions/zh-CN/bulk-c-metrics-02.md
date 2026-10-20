---
questionId: bulk-c-metrics-02
kind: question
status: published
locale: zh-CN
title: 多个营销渠道争抢同一批用户，如何估算各渠道的增量贡献？
question: 品牌广告、搜索和联盟渠道同时覆盖同一批潜在客户，归因平台把大部分转化都记给最后一次点击。你会如何估算各渠道的真实增量贡献，并说明结论边界？
intent: "考察你能否区分渠道记功和因果增量，针对真实预算决定选择可行证据，并坦诚说明渠道重叠、外溢和不可识别部分。"
signals: ["先明确需要分配报表功劳、优化边际预算还是判断是否新增需求，因为这些问题需要不同证据。", "检查渠道曝光重叠、触达顺序、归因窗口、自然需求、品牌外溢及用户自选择。", "比较随机留出、地域实验或准实验的可行性、污染风险、成本和识别假设。", "报告增量区间和敏感性，说明哪些结论只适用于特定周期或人群，以及何种证据会改变预算。"]
weakAnswer: "把末次点击或多触点分配直接称为渠道增量，未验证渠道重叠、自然转化或实验识别条件。"
anchors:
  notPassing: "复述平台归因数字，但混淆记功与增量。"
  passing: "指出渠道重叠并选择一种与预算决定相关的实验或比较方式。"
  excellent: "核验假设与污染，解释增量估计、区间及其人群和时间边界。"
  exceptional: "用多种证据做稳健性分析，区分可识别与不可识别部分，并把预算调整和后续验证阈值绑定。"
primaryCapability: value-direction.metrics-causality
topics:
  - metrics
  - growth-experiments
  - operations
roles:
  - marketing
  - operations
  - data
  - product
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
    label: 品牌与增长面试工具：渠道组合与营销效果衡量
    url: https://github.com/coryjburk/intv-playbook-marketing_brand-growth/
  - attribution: original
    label: Interview Compass Original Expansion to 1,500 — Batch C
followUps: ["如果渠道同时上线且用户跨渠道移动，实验对照被污染时你会怎样解释结果？", "你如何向管理层说明归因模型看起来精确、但因果结论仍然有限？"]
relatedQuestions: []
perspectiveReview: "reviewed"
qualityTier: "core"
perspective: "candidate"

---
