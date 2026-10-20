# 题目逐题复核：批次 04

日期：2026-10-20
范围：按 `questionId` 排序的第 201–300 道 extended 题，共 100 道。每项同时核对英文和简体中文记录。
结论：86 PASS，14 REVISE。只记录审阅结论；未修改已发布题目。

## 逐题结论

| # | questionId | 结论 | 复核意见 |
|---:|---|---|---|
| 1 | `bulk-a-framework-dependency-injection-scope` | PASS | 依赖注入与作用域问题边界清楚，能追问生命周期和共享状态风险。 |
| 2 | `bulk-a-framework-middleware-order` | PASS | 能从中间件执行事实定位顺序问题，并要求验证副作用和错误处理。 |
| 3 | `bulk-a-framework-react-state-identity` | PASS | 组件身份、状态保留与重置的情境明确，双语一致。 |
| 4 | `bulk-a-frontend-accessibility-focus-order` | PASS | 聚焦顺序与可访问性行为可观察，包含验证方式。 |
| 5 | `bulk-a-frontend-bundle-cache-invalidation` | PASS | 能区分缓存键、部署和失效问题，并衡量用户影响。 |
| 6 | `bulk-a-frontend-event-loop-starvation` | PASS | 情境可引出主线程阻塞的证据、诊断和调优验证。 |
| 7 | `bulk-a-frontend-hydration-mismatch` | PASS | 水合不一致的事实、可能原因和验证路径明确。 |
| 8 | `bulk-a-frontend-layout-thrashing` | PASS | 布局抖动诊断可联系读写交错、性能证据及修复效果。 |
| 9 | `bulk-a-frontend-render-waterfall` | PASS | 渲染瀑布的定位与减少关键路径等待的思路明确。 |
| 10 | `bulk-a-frontend-virtualized-list-state` | PASS | 虚拟列表中的身份、状态与滚动行为范围清楚。 |
| 11 | `bulk-a-gc-pause-latency` | PASS | GC 暂停与延迟的观测、归因及缓解取舍可判断。 |
| 12 | `bulk-a-incident-recovery-validation` | PASS | 事故恢复后的验证与复发风险检查完整，双语一致。 |
| 13 | `bulk-a-incremental-data-migration` | PASS | 渐进迁移的兼容、回滚和完成标准可核实。 |
| 14 | `bulk-a-language-async-cancellation` | PASS | 异步取消涉及的资源释放和竞态边界清晰。 |
| 15 | `bulk-a-language-closure-capture` | PASS | 闭包捕获语义及其实际行为能形成具体判断。 |
| 16 | `bulk-a-language-compiler-optimization-observable` | REVISE | 优化和并发保证依赖具体语言及内存模型。要求候选人选择或说明语言，并讨论数据竞争时的保证，避免泛化。 |
| 17 | `bulk-a-language-equality-hash-contract` | PASS | 相等与哈希契约及其集合行为边界明确。 |
| 18 | `bulk-a-language-type-erasure-api` | REVISE | 类型擦除因语言而异；题目应指定/要求选择语言，再讨论反射、重载、序列化等受影响行为及 API 方案。 |
| 19 | `bulk-a-live-collaboration-presence` | PASS | 在线状态问题能联系准确性、延迟、隐私和产品取舍。 |
| 20 | `bulk-a-notification-fanout` | PASS | 扇出扩展问题有明确的容量、可靠性及用户影响维度。 |
| 21 | `bulk-a-oncall-alert-ownership-gap` | REVISE | 中文“没有收到确认”与英文“接班人未确认告警”含义不同；改为“接班人也未确认告警”等同义表述。 |
| 22 | `bulk-a-page-fault-working-set` | REVISE | 中文缺少英文给出的常驻内存稳定、尾延迟升高两个诊断前提；应补齐以保持题目证据一致。 |
| 23 | `bulk-a-region-aware-config` | PASS | 区域配置的作用域与一致性约束明确，能引出安全发布策略。 |
| 24 | `bulk-a-retry-amplification` | PASS | 重试放大问题明确涉及负载、退避和恢复验证。 |
| 25 | `bulk-a-search-index-refresh` | PASS | 索引刷新问题能区分数据新鲜度、延迟和一致性目标。 |
| 26 | `bulk-a-subscription-entitlements` | PASS | 权益判定的事实、边界和订阅状态处理可讨论。 |
| 27 | `bulk-a-tcp-retransmission-evidence` | PASS | 要求依据网络证据定位重传原因，而非直接猜测。 |
| 28 | `bulk-a-test-data-lifecycle` | PASS | 测试数据的生成、隔离、复用和清理边界明确。 |
| 29 | `bulk-a-usage-metering-pipeline` | PASS | 计量链路可追问完整性、重放和账务影响。 |
| 30 | `bulk-a-virtual-memory-isolation` | PASS | 虚拟内存隔离的机制与进程边界表达清楚。 |
| 31 | `bulk-a-webhook-delivery` | PASS | 投递语义、重试和幂等处理的判断范围完整。 |
| 32 | `bulk-ai-embedding-migration` | PASS | 向量迁移有兼容、质量比较及回退等可验证问题。 |
| 33 | `bulk-ai-eval-contamination` | PASS | 评测污染问题能定位数据泄漏并验证评估可信度。 |
| 34 | `bulk-ai-fine-tuning-data-lineage` | PASS | 微调数据来源、追溯和影响范围明确。 |
| 35 | `bulk-ai-llm-release-canary` | PASS | 发布门槛、灰度信号和回滚判断可操作。 |
| 36 | `bulk-ai-model-provider-fallback` | PASS | 模型服务商降级有质量、延迟与成本等取舍。 |
| 37 | `bulk-ai-rag-retrieval-diagnosis` | PASS | 能拆分检索诊断环节并要求用证据验证改进。 |
| 38 | `bulk-b-commercial-01` | PASS | 商业场景事实和判断目标完整，中英文主旨一致。 |
| 39 | `bulk-b-commercial-02` | PASS | 问题可从业务约束进入方案权衡与影响判断。 |
| 40 | `bulk-b-commercial-03` | PASS | 关键假设、决策依据与结果验证可追问。 |
| 41 | `bulk-b-commercial-04` | PASS | 商业决策问题范围清楚，双语表达一致。 |
| 42 | `bulk-b-context-01` | PASS | 上下文和约束可支持候选人说明判断过程。 |
| 43 | `bulk-b-context-02` | PASS | 背景事实与待解决问题区分合理，双语一致。 |
| 44 | `bulk-b-context-03` | PASS | 情境边界清楚，可继续询问行动和证据。 |
| 45 | `bulk-b-context-04` | PASS | 问题能从上下文引出明确的决策与结果。 |
| 46 | `bulk-b-data-01` | PASS | 数据问题能关联定义、质量和业务用途。 |
| 47 | `bulk-b-data-02` | REVISE | 英文 `contact` 指沟通接触记录，中文“接触次数”误成计数；改为“沟通接触记录/触点”。 |
| 48 | `bulk-b-data-03` | PASS | 数据定义与业务解释范围清楚，中英文对应。 |
| 49 | `bulk-b-data-05` | REVISE | 第四条信号抽象且与前三条部分重复；改成可观察的共享核心定义、衍生定义、来源系统、负责人及对账机制，中英文同义。 |
| 50 | `bulk-b-feature-01` | REVISE | 英文追问要求说明复用证据及保留独立定义的条件，中文没有对应项；补齐中文追问。 |
| 51 | `bulk-b-feature-02` | PASS | 中英文均覆盖来源、时间窗口、缺失值和实现差异。 |
| 52 | `bulk-b-feature-03` | PASS | 新旧定义、消费者迁移和兼容治理清楚且双语一致。 |
| 53 | `bulk-b-feature-04` | REVISE | 英文询问何时接受降级值，中文只提较慢数据；补充“较慢的数据或降级值”及告警、恢复条件。 |
| 54 | `bulk-b-model-evolution-01` | PASS | 历史条款与未来逻辑的边界清楚，双语一致。 |
| 55 | `bulk-b-model-evolution-02` | REVISE | 中文标题把历史含义/模型演进收窄为统计规则；建议改为“供应商拆分交付状态后，如何保留历史含义？” |
| 56 | `bulk-c-metrics-01` | PASS | 区分注册量与可服务价值，并考虑分群及前置条件。 |
| 57 | `bulk-c-metrics-04` | PASS | 区分回访、功能使用和续约，并把定义连接到决策。 |
| 58 | `bulk-c-metrics-05` | PASS | 同时考察频次、客单价、毛利与长期价值，双语一致。 |
| 59 | `bulk-c-metrics-06` | PASS | 覆盖效率收益、错误损失和高风险用户影响，决策依据明确。 |
| 60 | `bulk-c-product-03` | PASS | 区分口头反馈与实际行为，并要求低成本验证；双语信号对应。 |
| 61 | `bulk-c-product-04` | PASS | 前两周调研与投入决策相连，事实和假设边界明确。 |
| 62 | `bulk-c-product-05` | PASS | 给出共同目标、约束、收益、风险和复议条件等比较依据。 |
| 63 | `bulk-c-product-06` | PASS | 兼顾客户声音、竞争风险与证据，不预设照搬竞品。 |
| 64 | `bulk-d-critical-path-uncertain-estimates` | PASS | 通过预测、变化记录和实际耗时区分误差来源，并验证流程改进。 |
| 65 | `bulk-d-pmo-signal-vs-metric` | PASS | 题卡聚焦发起人影响项目排序，并要求透明标准、证据和例外记录。 |
| 66 | `bulk-d-pmo-status-integrity` | PASS | 风险分层与治理负担相平衡，内容具体且双语一致。 |
| 67 | `bulk-d-portfolio-dependency-release` | REVISE | 中文标题“跨项目接口接口约定变化”有重复词，删除一个“接口”。 |
| 68 | `bulk-d-project-exit-criteria` | PASS | 区分交付与收益责任，并提出基线、责任证据和验证窗口。 |
| 69 | `bulk-d-recovery-plan-after-missed-milestone` | REVISE | ID/slug 指向错过里程碑后的恢复计划，实际双语题目是上线后的运营交接；改 ID/slug 或调整题目场景。 |
| 70 | `bulk-d-resource-commitment-overlap` | PASS | 量化容量变化、厘清决策权并避免隐性加班。 |
| 71 | `bulk-d-risk-trigger-escalation` | PASS | 评估风险叠加、说明假设并设置缓解和升级条件。 |
| 72 | `bulk-d-scope-change-after-contract` | PASS | 考虑未来价值、外部义务、收尾和资源交接，双语一致。 |
| 73 | `bulk-e-conflict-repair-after-escalation` | PASS | 同时考察关系修复与风险透明，信号具体且双语一致。 |
| 74 | `bulk-e-disagree-publicly-with-lead` | PASS | 情境约束明确，可权衡即时提示、外部受众和责任人决策。 |
| 75 | `bulk-e-feedback-defensive-peer` | PASS | 先核实行为及影响，再找重复模式、调整行为并回访。 |
| 76 | `bulk-e-influence-no-authority-experiment` | PASS | 影响力问题有明确实验和可验证结果，双语一致。 |
| 77 | `bulk-e-negotiate-fair-workload` | PASS | 负荷协商覆盖事实核对、优先级和公平性取舍。 |
| 78 | `bulk-e-remote-collaboration-information-gap` | REVISE | 中英文信号均有 8 项且后 5 项重复异步/同步边界、负责人、记录和升级规则；合并冗余项，聚焦瓶颈、决策协议和延迟/参与度度量。 |
| 79 | `bulk-e-stakeholder-changing-expectations` | PASS | 能从不断变化的期望查明事实、权衡范围并重新确认结果。 |
| 80 | `bulk-f-early-performance-mismatch` | PASS | 能比较角色预期、实际证据和支持/改进措施。 |
| 81 | `bulk-f-hiring-interview-loop-coverage` | PASS | 面试环节覆盖可联系岗位要求、重复信号和决策质量。 |
| 82 | `bulk-f-manage-manager-data-discrepancy` | PASS | 面对经理间数据差异，要求核实来源并改进管理判断。 |
| 83 | `bulk-f-manager-boundary-between-coaching-and-performance` | REVISE | ID 表示辅导与绩效边界，实际中英文题目都是公平分配客户展示机会；需将 ID/题名改为对应内容或换成真正的辅导/绩效题。 |
| 84 | `bulk-f-manager-coach-without-taking-over` | REVISE | 中文是负责人两次忽略用户迁移风险的授权场景；英文标题、问题改成泛化的反复低绩效授权场景。需对齐主问题、标题和评价信号。 |
| 85 | `bulk-f-manager-of-managers-local-incentives` | PASS | 讨论增加管理层级的目的，并对照审批瓶颈与目标冲突，双语一致。 |
| 86 | `bulk-f-manager-talent-retention-counteroffer` | PASS | 留任判断能考察离职原因、反报价公平性及团队影响。 |
| 87 | `bulk-f-succession-emergency-readiness` | PASS | 紧急继任准备范围清楚，关注责任连续性和准备证据。 |
| 88 | `bulk-f-team-goals-drift` | PASS | 能检查目标偏移的事实、成因与重新校准效果。 |
| 89 | `bulk-f-team-structure-after-product-line-split` | PASS | 组织调整场景可追问依赖、责任边界和协作成本。 |
| 90 | `bulk-g-learn-without-formal-course` | PASS | 学习方式问题强调目标、实践和结果证据。 |
| 91 | `bulk-g-recovery-sustainable-boundary` | PASS | 恢复与可持续边界的取舍明确，双语一致。 |
| 92 | `bulk-g-repeated-setback-adjust-approach` | PASS | 反复受挫后调整方法有事实、假设和反馈回路。 |
| 93 | `bulk-g-self-direction-unowned-improvement` | PASS | 主动改进问题可验证影响，并区分无授权范围。 |
| 94 | `bulk-growth-01` | PASS | 成长情境和行为证据清晰，双语对应。 |
| 95 | `bulk-growth-02` | PASS | 成长目标可联系实际行动与效果反馈。 |
| 96 | `bulk-growth-03` | PASS | 题目范围明确，可依据事实判断学习与调整。 |
| 97 | `bulk-growth-04` | PASS | 关注成长中的真实行为变化，双语一致。 |
| 98 | `bulk-growth-05` | PASS | 能从目标、尝试和结果判断成长成效。 |
| 99 | `bulk-growth-06` | PASS | 成长问题不预设单一答案，评价方向可观察。 |
| 100 | `bulk-growth-07` | PASS | 问题与评价重点相符，中英文主旨一致。 |
