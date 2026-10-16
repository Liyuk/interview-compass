# Interview Compass 题库去重与题面审查收尾

日期：2026-10-15。本文记录本轮最终串行候选扫描、补充复核与实际修订。此前的[去重与直白表达审计](./2026-10-15-question-dedup-plain-language-audit.md)和[追加审查](./2026-10-15-question-dedup-follow-up.md)保留为历史过程记录；其中的题量、候选数和“下一步”状态不代表当前状态，以本文及仓库检查结果为准。

## 当前结果

- 题库当前保留 1,334 道已发布中英配对题。重复题合并后的旧 ID 别名与跳转页已移除；旧链接不再保证可用。
- 最终相似度扫描按稳定 ID 串行比较 1,334 道中文题，共 889,111 组；阈值 0.12 得到 554 组候选，均可在本文、历史记录和追加审查中找到逐对判断。相似度只帮助找题，最终依据是客观问题、考察意图、可观察证据和必要的情境是否相同。
- 迭代扫描期间另复核了 78 组新出现的候选；下表记录这些补充判断，最终候选集中仍有的条目全部保留。五项重复合并已通过题面和内容校验：`exp1500-d-042 → exp1500-d-004`、`exp1500-g-010 → exp1500-g-011`、`bulk1000-c-041-v1 → c-prioritization-roi-matrix-three-demand-types`、`exp1500-g-012 → design-interaction-system-state-coverage`、`c-market-economics-market-entry-localization → exp1500-c-046`。第一组由当前题面对照确认；第二组在研究发现迁移范围、验证方法上考察同一能力，原题保留为更一般的主问题，导航投诉案例和表单状态提示案例作为追问情境；第五组都判断进入新地区的市场吸引力、本地化成本和分阶段投入，保留情境更具体的一题，并吸收另一题的支付、服务条件和退出门槛。
- 恢复了 90 道曾因语义过宽而被错误合并的不同问题。类别相同或术语相似不再单独作为合并依据。
- 修正了 10 组 `bulk1000` 中英文题卡的标题、意图和观察信号错配；其中 `bulk1000-d-062-v1` 原先问支付风控故障，却误写成恢复流量和交付管理，现在题面、意图、观察信号、责任范围和题型一致。
- 清除了 19 个空的可选 `followUps` 字段，避免 YAML 将其解析成 `null`，破坏内容集合校验。
- 可见题面做了直接表达检查：不把能用动作和后果表达的概念机械扩写成术语定义；保留 AI、系统设计等题目确实考察的必要技术词，并在具体情境中使用。

## 迭代扫描中新出现的候选对

以下候选对均逐对判断；每条仍是不同问题的保留理由。相似度表示词面接近程度，不等同于内容重复。

| # | 题目 ID | 决定 | 区分依据 |
|---:|---|---|---|
| 1 | design-postlaunch-outcome-attribution / exp1500-h-022 | 保留 | 前者判断改版对不同用户群和多项结果的影响并决定下一步；后者在文案、性能、培训同时变化时识别设计贡献。 |
| 2 | a-engineering-systems-ci-untrusted-change / a-monorepo-migration-repo-split-sequence | 保留 | 前者审查不可信代码触达凭证和发布产物的信任边界；后者规划仓库拆分的历史、发布和所有权迁移。 |
| 3 | bulk-a-debug-partial-dependency-outage / exp1500-a-009 | 保留 | 前者隔离区域性依赖故障并保护核心功能；后者隔离慢下游，避免请求堆积拖垮入口。 |
| 4 | exp1500-a-028 / exp1500-b-073 | 保留 | 前者涉及跨服务历史数据修正、追踪和外部副作用；后者迁移事件去重规则并安全重放。 |
| 5 | a-ai-engineering-retrieval-quality-regression / a-ai-rag-source-freshness-contract | 保留 | 前者诊断用户满意度下降、离线指标不变的检索质量问题；后者定义来源更新后内容新鲜度的责任与目标。 |
| 6 | bulk-a-ci-migration-sequencing / exp1500-a-019 | 保留 | 前者迁移多仓共用构建检查流程；后者排查本地通过、自动检查间歇失败。 |
| 7 | bulk-a-backend-backpressure-queue-growth / bulk1000-a-018-v1 | 保留 | 前者控制生产者与消费者失衡造成的消息队列增长；后者处理实时协作慢客户端的更新合并、丢弃和重新同步。 |
| 8 | bulk1000-a-010-v1 / next-ai-014 | 保留 | 前者定位跨租户的高分位慢请求和资源隔离；后者拆解 AI 推理请求链路中的排队与模型耗时。 |
| 9 | exp1500-b-038 / exp1500-b-073 | 保留 | 前者避免修正历史事件时重复触发外部动作；后者变更去重规则后正确重放历史事件。 |
| 10 | c-metrics-causality-business-result-attribution / exp1500-c-052 | 保留 | 前者归因项目带来的业务结果；后者确认结果在交付后是否持续发生。 |
| 11 | bulk-ai-rag-retrieval-diagnosis / wave18-asking-008 | 保留 | 前者诊断检索增强回答漏证据的系统环节；后者训练面试者针对缺少证据的回答继续追问。 |
| 12 | bulk1000-b-035-v1 / wave16-domain-024 | 保留 | 前者发现跨模型特征刷新延迟；后者判断默认值是否掩盖在线特征采集故障。 |
| 13 | c-investment-choices-research-capacity-allocation / exp1500-c-012 | 保留 | 前者分配有限研究资源和时机；后者按决策可撤回程度安排小实验与大投入。 |
| 14 | exp1500-c-016 / exp1500-c-042 | 保留 | 前者评估平台减少重复人工工作的收益；后者估算无障碍改造的用户权益、合规与维护收益。 |
| 15 | a-monorepo-migration-repo-split-sequence / exp1500-a-034 | 保留 | 前者迁移拆仓过程；后者验证构建产物能否证明来自可信源码和流程。 |
| 16 | a-monorepo-migration-repo-split-sequence / bulk1000-a-019-v1 | 保留 | 前者处理拆仓迁移；后者在单仓库内部划分团队所有权和发布节奏。 |
| 17 | a-engineering-systems-ci-untrusted-change / exp1500-a-019 | 保留 | 前者保护流水线免受不可信贡献者读取凭证；后者处理自动检查不稳定。 |
| 18 | a-monorepo-migration-repo-split-sequence / a-monorepo-selective-ci-change-detection | 保留 | 前者规划拆仓；后者在大仓库中准确选择受影响的检查范围。 |
| 19 | bulk-a-framework-angular-change-detection-boundary / wave16-d-057 | 保留 | 前者是前端变更检测与外部回调；后者是多级缓存刷新顺序及暂态数据正确性。 |
| 20 | c-outcomes-baseline-shift-during-delivery / wave18-asking-008 | 保留 | 前者在参照数据变化时重新评估项目结果；后者针对缺少证据的回答设计追问。 |
| 21 | a-monorepo-selective-ci-change-detection / bulk-a-dependency-update-policy | 保留 | 前者选择变更影响范围内的测试；后者管理积压依赖的更新政策。 |
| 22 | a-engineering-systems-ci-untrusted-change / bulk-a-ci-migration-sequencing | 保留 | 前者是供应链安全；后者是跨仓库流水线迁移。 |
| 23 | a-database-backfill-lock-contention / next-domain-027 | 保留 | 前者控制大规模历史数据补算造成的线上锁等待；后者判断特征计算应沿用历史口径还是采用新口径。 |
| 24 | bulk1000-a-010-v1 / exp1500-a-006 | 保留 | 前者从多租户高分位变慢定位隔离或竞争；后者从长时间运行、重启恢复和资源增长定位泄漏或积累。 |
| 25 | bulk-a-debug-partial-dependency-outage / bulk-ai-model-provider-fallback | 保留 | 前者处理跨区域依赖故障并保护核心功能；后者在模型供应商不可用时设计替代服务和功能边界。 |
| 26 | a-ai-engineering-agent-duplicate-side-effect / exp1500-a-011 | 保留 | 前者保护退款等有副作用的工具调用免于重复或越权；后者限制 Agent 工具调用的级联成本。 |
| 27 | exp1500-c-016 / next-product-035 | 保留 | 前者核算平台建设替代重复劳动的实际收益；后者在多个平台提案间验证真实需求并排序。 |
| 28 | bulk1000-c-045-v1 / exp1500-d-004 | 保留 | 前者把依赖未验证假设的年度规划拆成承诺和学习节点；后者把具体转化目标拆成漏斗诊断和阶段验证。 |
| 29 | bulk1000-b-035-v1 / exp1500-b-077 | 保留 | 前者发现特征数据刷新落后于业务事件；后者确保新特征版本发布后仍可回退。 |
| 30 | exp1500-c-038 / exp1500-h-022 | 保留 | 前者解释推荐分和负面评论反向变化；后者从多个同时变化的因素中识别设计贡献。 |
| 31 | c-product-judgment-exit-metric / exp1500-h-022 | 保留 | 前者在完成率上升但退出受阻时保护用户选择；后者归因改版中的设计效果。 |
| 32 | bulk1000-a-019-v1 / exp1500-a-010 | 保留 | 前者明确单仓库内团队所有权和发布节奏；后者处理共享库升级导致多仓库停摆。 |
| 33 | a-mfe-cross-app-event-contract / a-mfe-shell-routing-history-contract | 保留 | 前者约定跨应用业务事件语义；后者统一浏览器路由、前进后退和重定向行为。 |
| 34 | bulk-d-critical-path-uncertain-estimates / exp1500-d-025 | 保留 | 前者校准多个项目的预测偏差；后者把值班容量纳入团队交付预测。 |
| 35 | d-project-management-recover-dependency-baseline / exp1500-e-035 | 保留 | 前者在外部日期不可信时重建计划；后者与不愿承担延期责任的供应商协商恢复方案。 |
| 36 | a-engineering-systems-ci-untrusted-change / a-monorepo-selective-ci-change-detection | 保留 | 前者限制不可信代码和凭证的交互；后者减少大仓库无关检查且避免漏测。 |
| 37 | a-engineering-systems-ci-untrusted-change / exp1500-a-034 | 保留 | 前者设定流水线信任边界；后者建立产物来源证明。 |
| 38 | bulk1000-d-056-v1 / d-project-management-recover-dependency-baseline | 保留 | 前者响应范围变化并调整原承诺；后者因外部依赖日期失真重建时间基线。 |
| 39 | bulk1000-a-016-v1 / exp1500-d-040 | 保留 | 前者记录事件版本并审慎重处理历史消息；后者在积压恢复后控制旧消息对下游的冲击。 |
| 40 | a-ai-engineering-ship-ai-output-gate / a-compiler-diagnostic-source-map-macro-expansion | 保留 | 前者决定 AI 生成内容是否满足发布门槛；后者改善宏和代码生成后的编译错误定位。 |
| 41 | exp1500-e-010 / exp1500-e-013 | 保留 | 前者处理共同结果指标的责任归属冲突；后者对齐团队对质量标准的不同理解。 |
| 42 | exp1500-c-012 / wave18-plan-001 | 保留 | 前者按可撤回性安排试验和投资；后者区分季度目标变化造成的计划失效与执行偏差。 |
| 43 | c-product-judgment-settings-switch / wave17-value-004 | 保留 | 前者审查单个设置开关是否解决真实用户任务；后者判断持续累积的细分配置是否反映稳定需求或产品抽象失效。 |
| 44 | bulk-a-backend-backpressure-queue-growth / exp1500-d-062 | 保留 | 前者在处理能力不足时控制消息生产速率；后者在依赖恢复后依据健康度逐步恢复流量。 |
| 45 | bulk-f-team-goals-drift / exp1500-c-023 | 保留 | 前者纠正已经偏离业务目标的团队局部目标；后者把公司方向转成团队可影响的结果。 |
| 46 | b-data-model-industry-interop / c-metrics-causality-industry-definition-unify | 保留 | 前者设计内部业务模型与外部行业模型的映射关系；后者统一指标计算口径并解释可比性。 |
| 47 | bulk-b-model-evolution-01 / exp1500-b-027 | 保留 | 前者迁移促销规则变化后旧订单的解释方式；后者定义重复账号和家庭共享下的试用资格。 |
| 48 | exp1500-f-001 / next-delivery-099 | 保留 | 前者由一线经理建立清晰团队目标；后者把“提升研发效率”这一模糊表述拆成可行动问题。 |
| 49 | bulk1000-d-056-v1 / wave18-plan-007 | 保留 | 前者处理项目范围变化后的承诺更新；后者在预算冻结时改写年度计划与条件承诺。 |
| 50 | bulk-growth-05 / bulk1000-d-059-v1 | 保留 | 前者分析活动参与未转化为持续使用的原因；后者解决活动结束后的运营交接无人负责。 |
| 51 | bulk-b-model-evolution-01 / wave17-domain-002 | 保留 | 前者处理促销语义变化后的历史订单解释；后者建模免费额度、阶梯价格和封顶价格的组合规则。 |
| 52 | exp1500-b-073 / exp1500-d-040 | 保留 | 前者迁移事件去重规则；后者控制消息积压恢复后的下游冲击。 |
| 53 | bulk1000-d-060-v1 / wave16-design-061 | 保留 | 前者补齐人工运营动作的审计记录；后者降低多人共享工作台的信息过载。 |
| 54 | a-ai-engineering-agent-duplicate-side-effect / exp1500-c-004 | 保留 | 前者处理超时后退款重复执行与授权边界；后者在自动完成率提高但用户核查增加时判断产品价值。 |
| 55 | bulk-a-ci-migration-sequencing / exp1500-a-034 | 保留 | 前者制定流水线迁移顺序；后者验证生成产物对应的源代码和构建过程。 |
| 56 | exp1500-h-029 / next-growth-090 | 保留 | 前者与请求方协商拒绝不合理承诺并给出选项；后者重新排序已挤压原职责的额外工作。 |
| 57 | g-learning-transfer-practice-check / wave16-growth-046 | 保留 | 前者验证新方法是否改善工作结果；后者在方法与团队工具不兼容时规划迁移。 |
| 58 | exp1500-b-039 / wave17-domain-009 | 保留 | 前者分析用户增长伴随单位服务成本恶化；后者评估订单增长与履约能力不匹配的质量。 |
| 59 | b-model-evolution-schema-unknown-enum / bulk-a-debug-after-schema-rollout | 保留 | 前者处理接口新增枚举值导致旧消费者失败的兼容性；后者定位数据库变更后的间歇故障。 |
| 60 | exp1500-h-015 / h-attribution-team-vs-personal | 保留 | 前者纠正同事夸大个人贡献的事实；后者由候选人如实说明团队成果中的个人责任。 |
| 61 | a-mfe-auth-session-cross-app / wave16-domain-023 | 保留 | 前者共享子应用登录认证上下文；后者隔离跨工作区的权限和数据边界。 |
| 62 | exp1500-g-042 / next-product-039 | 保留 | 前者在没有明确需求时主动发现体验机会；后者处理路线图已无容量但仍有外部承诺的情况。 |
| 63 | bulk-c-metrics-02 / next-product-038 | 保留 | 前者在渠道争抢相同用户时估计增量贡献；后者在实验中外部政策变化时判断因果结果。 |
| 64 | c-investment-choices-advocate-for-tech-time / c-investment-choices-tech-debt-vs-features | 保留 | 前者向业务争取重构时间并说明依据；后者直接分配新功能与技术债的季度投入。 |
| 65 | c-product-judgment-outcome-vs-output-metric / wave16-ai-018 | 保留 | 前者纠正交付量增长但用户结果未变的目标；后者解释拒答转人工比例上升所代表的质量或策略变化。 |
| 66 | exp1500-e-053 / exp1500-e-056 | 保留 | 前者回应自己认为不准确的负面反馈；后者处理团队成员对晋升标准透明度的质疑。 |
| 67 | exp1500-d-026 / wave16-c-007 | 保留 | 前者把跨团队等待折算为项目容量需求；后者诊断 CPU 不高但请求排队的系统瓶颈。 |
| 68 | bulk1000-c-047-v1 / design-postlaunch-outcome-attribution | 保留 | 前者解释整体改善与目标群体恶化的指标分歧；后者评估改版、客服和性能等多因素对结果的影响。 |
| 69 | exp1500-b-073 / wave17-domain-010 | 保留 | 前者安全迁移事件去重规则；后者确保一个业务事件影响多个账本时不重复记账。 |
| 70 | bulk-a-feature-flag-control-plane / exp1500-d-010 | 保留 | 前者治理功能开关自身的管理控制面；后者应对应用商店审核不确定性安排发布计划。 |
| 71 | exp1500-b-038 / wave17-domain-010 | 保留 | 前者防止历史数据修正重复触发外部动作；后者维护多个账本对同一业务事件的记账一致性。 |
| 72 | c-investment-choices-stop-loss-wrong-direction / c-outcomes-null-result-decision | 保留 | 前者复盘自己推动的方向并止损；后者在实验结果不确定时决定继续、调整或停止。 |
| 73 | a-compiler-diagnostic-source-map-macro-expansion / a-system-design-large-file-upload | 保留 | 前者处理生成代码后的错误来源映射；后者设计大文件上传产品能力。 |
| 74 | exp1500-d-013 / exp1500-d-029 | 保留 | 前者因串行依赖造成组合周期过长而重排项目；后者在依赖团队没有承诺时建立风险和决策视图。 |
| 75 | a-monorepo-selective-ci-change-detection / exp1500-a-034 | 保留 | 前者选择大仓库的受影响检查；后者证明构建产物的来源可信。 |
| 76 | bulk-e-conflict-repair-after-escalation / exp1500-e-014 | 保留 | 前者在争议升级后修复协作且不掩盖事实；后者核实贡献归属争议中的事实。 |
| 77 | bulk1000-b-030-v1 / exp1500-b-035 | 保留 | 前者定义订阅中途升级、降档或暂停的账单和收入确认；后者保留规则发布前后旧合同账单的可解释性。 |
| 78 | bulk1000-a-017-v1 / wave16-delivery-069 | 保留 | 前者处理区域故障期间的数据冲突风险、可用功能和恢复策略；后者处理第三方回调丢失后的客户数据核对和沟通。 |

## 校验边界

本轮通过相似度候选和人工逐对判断控制重复，并修复发现的题面与评分信号错配。相似度算法不能证明题库没有任何遗漏的语义重复；低于 0.12 的词面不同题目仍可能考察相近能力。今后新增题目应先查找同一客观问题和证据目标，再确定是否新增或扩展现有题卡。


## 最终题面对照与直白表达补充

本次在题面和标题改写后重新串行扫描 1,334 道中文题，共 889,111 组比较、554 个相似候选。与既有审查逐行核对后，补充判断以下 44 组；相似不等于重复。前一轮中，短期收入与基础投入的取舍已合并到优先级题，设计评审重复意见题也已作为交互系统题的追问保留。

| # | 候选题目 | 决定 | 区分依据 |
|---:|---|---|---|
| 1 | bulk-a-notification-fanout / bulk-a-webhook-delivery | 保留 | 前者决定怎样尊重用户通知偏好并区分事务与营销消息；后者保证平台向客户系统投递事件并处理重试。 |
| 2 | a-mfe-runtime-failure-isolation / exp1500-a-009 | 保留 | 前者隔离浏览器工作台中的子应用启动故障；后者隔离后端慢下游，避免入口请求耗尽。 |
| 3 | bulk-ai-llm-release-canary / exp1500-g-020 | 保留 | 前者设计新模型的小范围发布和扩量条件；后者复盘一次移动端发布中已发生的误判。 |
| 4 | exp1500-c-032 / exp1500-h-012 | 保留 | 前者保持指标定义变化前后的趋势可比；后者在数据未按新规则重算时更正对外报告。 |
| 5 | c-metrics-causality-core-metric-definition / h-ownership-proudest-work | 保留 | 一个定义业务指标及计算边界，一个回顾个人最自豪的工作及本人贡献，词面相似不代表考察同一目标。 |
| 6 | bulk1000-d-052-v1 / exp1500-d-004 | 保留 | 前者处理模糊的客户体验目标并纳入依赖延期；后者围绕购买转化设计漏斗诊断、先行信号和阶段决策。 |
| 7 | a-mfe-runtime-failure-isolation / bulk-a-debug-partial-dependency-outage | 保留 | 一个隔离子应用自身启动异常；另一个处理外部依赖的区域性故障。 |
| 8 | c-market-economics-subsidy-side-effects-marketplace / d-operations-two-sided-imbalance | 保留 | 前者判断停止补贴后市场能否持续；后者诊断局部供需瓶颈并及时恢复服务。 |
| 9 | next-delivery-041 / wave18-succession-009 | 保留 | 前者解决项目完成时验收责任人缺失；后者在团队合并时交接客户承诺、例外和风险。 |
| 10 | a-ai-engineering-human-review-capacity / exp1500-c-004 | 保留 | 前者分配自动处理与人工复核并控制审核队列；后者判断自动化是否真正降低用户完成任务的总成本。 |
| 11 | c-metrics-causality-algorithm-vs-manual-control / next-product-058 | 保留 | 前者评估模型提升转化与减少人工控制之间的产品取舍；后者评估推荐系统对实验对照组的干扰。 |
| 12 | exp1500-f-045 / next-delivery-041 | 保留 | 前者验证交接材料能否支持接手者独立工作；后者确定项目验收、交接和遗留风险的责任。 |
| 13 | d-operations-campaign-landing / e-conflict-three-alignments | 保留 | 前者按既定策略准备活动上线；后者查明跨团队冲突中的事实、目标和承诺。 |
| 14 | next-delivery-041 / wave17-domain-001 | 保留 | 项目验收和责任交接与合同履约、验收及收入确认属于不同业务问题。 |
| 15 | e-influence-cross-functional-shared-success-measure / exp1500-h-010 | 保留 | 前者建立跨职能团队共同承担的结果指标；后者为具体的跨团队用户问题指定协调责任。 |
| 16 | exp1500-d-019 / exp1500-d-037 | 保留 | 前者在小样本下判断崩溃率升高是否足以暂停发布；后者定位弱网和旧系统中的网络错误并响应事故。 |
| 17 | d-operations-manual-to-automated-lifecycle / wave18-bpm-002 | 保留 | 前者把人工运营转为自动化策略；后者为产品、运营、财务建立用户生命周期阶段和转换规则。 |
| 18 | c-metrics-causality-pm-hit-the-target / h-integrity-metric-definition-change | 保留 | 前者拆解目标指标并持续判断能否达成；后者发现指标计算定义变更后纠正已发布的达成结论。 |
| 19 | bulk-c-product-05 / exp1500-e-046 | 保留 | 前者在有限容量中组合选择增长和基础能力项目；后者为没有单一业务归属的基础设施建设争取投入。 |
| 20 | b-data-model-industry-interop / c-metrics-causality-core-metric-definition | 保留 | 前者映射内部与外部领域模型及字段语义；后者定义核心指标的计算方式和用途。 |
| 21 | bulk1000-b-035-v1 / exp1500-d-057 | 保留 | 前者解决不同模型使用特征时的规则和刷新差异；后者让一线人员按更新后的业务政策一致执行。 |
| 22 | exp1500-e-037 / exp1500-f-011 | 保留 | 前者推动多个团队采用共同技术接口；后者在公司目标变化时协调各团队调整计划和资源。 |
| 23 | e-influence-cross-functional-shared-success-measure / f-hiring-cross-functional-joint-interview | 保留 | 前者在实际工作中建立共同结果责任；后者设计联合面试以观察候选负责人如何协作。 |
| 24 | d-project-late-change-request / d-project-management-cut-to-mvp | 保留 | 前者判断临近上线新增需求是否进入范围；后者在交付延误时削减既定功能以保住最小可用版本。 |
| 25 | bulk-b-feature-03 / bulk1000-b-035-v1 | 保留 | 前者治理共享特征的定义变更、所有权和迁移；后者校验两个模型对同一特征的规则和结果是否一致。 |
| 26 | exp1500-e-037 / exp1500-e-044 | 保留 | 前者促使团队采用共同接口；后者让决策者看到短期成功背后的长期维护和用户风险。 |
| 27 | bulk-b-feature-03 / next-domain-027 | 保留 | 一个规划共享特征的新旧定义迁移；另一个确定历史重算应保留原规则还是展示修正结果。 |
| 28 | bulk-a-atomic-memory-ordering / next-cs-003 | 保留 | 前者考察线程间原子操作和内存可见性；后者在大规模数据迁移中维持业务层面的完成状态。 |
| 29 | d-pmo-correlated-dependency-escalation / exp1500-d-007 | 保留 | 前者从多个项目看同一依赖风险是否需要组合层升级；后者在资源已不足时对多个项目排序。 |
| 30 | exp1500-e-015 / wave17-collab-008 | 保留 | 前者处理协作团队反复错过交付承诺；后者处理对方把判断责任推给自己而妨碍能力建立。 |
| 31 | exp1500-h-012 / next-domain-027 | 保留 | 前者解释转化指标定义变化后的历史报表可比性；后者保留历史特征原版本以支持训练复现和修正后的业务分析。 |
| 32 | bulk1000-b-033-v1 / exp1500-b-008 | 保留 | 前者传播客户删除事件并验证下游汇总视图清理；后者在字段退役时迁移仍在读取旧字段的消费者。 |
| 33 | exp1500-g-025 / next-design-067 | 保留 | 前者判断是否采纳评审建议及其是否改善用户结果；后者把审美意见转成围绕用户目标和证据的评审讨论。 |
| 34 | c-product-judgment-pseudo-demand-infra / exp1500-e-046 | 保留 | 前者复盘大型技术平台改造为何投入后使用和业务收益都不足；后者为没有单一直接收益归属的共享基础能力争取资源，侧重事前立项和组织协调。 |
| 35 | bulk-growth-04 / c-marketing-brand-search-vs-demand-capture | 保留 | 前者在活动预算有限、目标人群看到广告不足时调整投放；后者估算品牌广告创造的新需求，并区分自然搜索与效果广告截获的转化。 |
| 36 | c-investment-choices-advocate-for-tech-time / c-product-judgment-pseudo-demand-infra | 保留 | 前者说明产品负责人如何为解决技术债争取重构时间；后者复盘一个技术平台项目的需求验证和投资判断。 |
| 37 | bulk-growth-11 / c-prioritization-stop-work-early-evidence | 保留 | 前者决定如何帮助优惠活动带来的低意向注册用户，并筛选后续投入对象；后者依据产品探索试点证据决定项目继续投入还是停止。 |
| 38 | bulk-c-metrics-02 / c-marketing-campaign-holdout-contamination | 保留 | 前者估算多个营销渠道覆盖同一用户时各渠道的增量；后者检查随机留出组被其他渠道影响后，某一活动实验的结果还能否解释。 |
| 39 | c-metrics-causality-business-result-attribution / c-product-judgment-moat-over-short-term-metrics | 保留 | 前者是跨项目的业务结果归因；后者复盘一项短期指标变差、预期长期价值的产品决策，重点检查当时的依据和后来的证据。 |
| 40 | c-product-judgment-pseudo-demand-infra / exp1500-c-016 | 保留 | 前者复盘平台改造上线后使用率和收益不足，检验此前的需求假设；后者在投入前比较平台收益、业务功能机会成本和投入边界。 |
| 41 | bulk1000-d-057-v1 / bulk1000-h-092-v1 | 保留 | 前者改进项目状态报告，使关键迁移风险在上线前显现；后者在没人负责迁移时明确执行、风险批准、数据核验和后续维护责任。 |
| 42 | bulk-growth-11 / bulk1000-d-059-v1 | 保留 | 前者按用户意向决定活动后联系谁、提供什么帮助；后者在活动前后安排客服、审核、容量和交接责任。 |
| 43 | bulk1000-h-092-v1 / wave18-succession-002 | 保留 | 前者明确数据迁移的执行和维护责任；后者为多个内部接班候选人确定公平的培养机会和评审标准。 |
| 44 | c-investment-choices-advocate-for-tech-time / exp1500-e-046 | 保留 | 前者争取时间解决累积的技术问题，并说明重构对产品迭代的影响；后者为多个团队共享、没有单一收益归属的基础能力争取共同投入。 |

对用户可见中文标题和题面做了全量结构扫描：1,334 道题没有完全重复的标题或题面；题面长度中位数 55 字、95 分位 79 字、最长 95 字，6 道超过 90 字。复核长题和多问句后，保留确实需要描述系统约束或数据模型的细节，改写了几类不必要的长句：把“算法还是人工”的暗示性二选一改成实验与判断规则；将市场探索题收敛到 30 天内要学习、验证和决定的内容；移除绩效题中与岗位能力无关的年龄资历与“消极情绪”标签；将“埋下种子”“生路”等隐喻改成可验证的判断与行动。

直白表达扫描采用“先给动作和对象，专业词仅在题目确实考察该概念时保留”的规则。已把“问题漂移”“未知漂移”“假对齐”“推动闭环”“更新链路”等作者概括改成讨论偏离决定、无法解释的配置差异、确认是否接受决定、指定责任人与验证时间、安排索引更新等具体说法。灰度发布、错误预算、SLO 等必要工程概念在题面首次出现时补上“分批发布”或服务目标允许的故障额度等解释；API、DNS、RAG、CI、p99 等在对应技术题中保留，因为它们是被考察的领域概念。未将必要术语机械替换成泛化描述。
