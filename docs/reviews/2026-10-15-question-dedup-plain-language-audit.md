# 题库去重与直白表达审计

> 历史过程记录。当前题量、去重结论及审查状态以[最终审查收尾记录](./2026-10-15-question-dedup-final-review.md)为准。

日期：2026-10-15。当前题库：1,500 道中文题及 1,500 道英文配对题。目标是减少真正重复的问题，并把妨碍理解的行话改成直白、准确的表达；相似度仅用于找候选，不作为删除依据。候选按固定 ID 顺序串行比较，人工判断题目要解决的客观问题、考察意图、作答证据和适用上下文。

## 当前进度

- 全量题面对比：1,500 道题共 1,124,250 个无序题目对，使用中文词与字符二元组 TF-IDF 候选排序。
- 已完成 0.18 阈值全部 136 对人工判断；每对已记录合并或保留理由。
- 0.15 阈值候选共 323 对；0.15–0.18 的 187 对也已完成逐对判断。
- 323 对候选已逐对记录初步决定，其中 158 对建议合并、165 对建议保留。当前形成 114 个暂定重复簇；传递关系可能把不同考察目标串在一起，簇级复核仍在进行，数字还不是最终去重量。
- 实际题卡合并、双语配对、来源、相关题链接和精选集迁移尚未完成；候选审计不能当成已完成去重。
- 已对 1,500 道中文题的标题和题面做长度、缩写和术语扫描；直白表达的逐题复核与双语改写尚未完成。

## 语言表达初筛

- 题面长度：中位数 54 字，90 分位 73 字，95 分位 78 字，最长 108 字。长题不一定难懂，但多重背景、目标和限制条件会遮住核心提问，需要逐题检查能否拆成“情境 + 一个主要决策”。
- 题面中出现较多的工程术语：API 11、SLA 5、p99 4、幂等 6、回填 4、错误预算 4、降级 11、重放 5、灰度 7、可观测性 2、基线 11、可逆 9、一致性 6。常见缩写还包括 AI 42、PMO 2、HRBP 1、TA 2、RAG 3、DNS 2、SDK 3、SQL 2、CI 12。
- 初步编辑口径：若术语本身就是岗位要考的概念，可以保留并给出具体对象/情境；若只是作者的概括，就改成行动和结果。例如“幂等”可写成“同一请求重试不会重复退款”，“回填”可写成“补算历史数据”，“错误预算”可写成“服务目标允许的故障额度”，“基线”可写成“改动前的现状或数据”。
- 缩写首次出现时用中文说明角色或含义；题面尽量避免连续堆叠缩写。尚不能仅凭词频判断题目难懂，后续会按完整句子核实语境并记录改写。

## 高相似候选人工判断（0.18 及以上、扩展至 0.15，1–323）

| # | 题目 ID | 决定 | 判断与编辑方向 |
|---:|---|---|---|
| 1 | bulk-a-dns-cache-staleness / exp1500-a-002 | 合并 | 都考察 DNS/客户端缓存与连接复用如何延迟故障切流；保留一题，将网络差异作为上下文追问。 |
| 2 | exp1500-e-024 / exp1500-e-031 | 合并 | 都是在日期固定、完整范围无法交付时协商范围和风险；合并，并保留后续补齐作为追问。 |
| 3 | bulk-a-language-async-cancellation / exp1500-a-001 | 合并 | 都考察异步取消如何跨调用链停止资源消耗；保留超时与客户端断开两种触发方式为追问。 |
| 4 | exp1500-b-036 / exp1500-b-055 | 合并 | 都要兼容历史分类与新分类口径；保留“分类新增”和“分类合并”作为迁移案例。 |
| 5 | a-quality-data-retention-deletion-proof / exp1500-a-014 | 合并 | 同为用户删除请求在备份、分析仓库和异步副本中的范围、验证与例外处理。 |
| 6 | exp1500-a-012 / next-design-063 | 合并 | 都考察用户访谈中如何从功能建议回到真实经历和困难；保留提问顺序与验证作为追问。 |
| 7 | exp1500-a-038 / wave16-ai-011 | 合并 | 都考察自然语言生成 SQL 的权限、扫描范围和成本控制；将审批作为一种可选控制方式。 |
| 8 | bulk-b-feature-02 / exp1500-b-007 | 合并 | 都考察同一特征离线训练与线上服务不一致；保留缺失值、时间窗口和计算实现等排查维度。 |
| 9 | a-monorepo-package-ownership-contract / bulk1000-a-019-v1 | 保留 | 一个聚焦公共包所有权与兼容性契约，另一个聚焦多团队仓库中的发布节奏、影响分析和阻塞；需在题面上把边界说清。 |
| 10 | bulk-b-commercial-05 / exp1500-b-015 | 合并 | 同属多种优惠叠加后的资格、顺序、承担方与结算解释；保留渠道、合同和地区例外。 |
| 11 | exp1500-d-040 / wave16-d-054 | 合并 | 都考察服务恢复后积压消息重放的速率控制与下游保护；保留不同副作用作为风险追问。 |
| 12 | a-engineering-systems-technical-gain / c-metrics-causality-business-result-attribution | 保留 | 一个衡量工程改进及其维护成本，一个核验业务结果归因；需将题名和说明分别锚定技术指标与业务结果。 |
| 13 | exp1500-f-048 / wave18-succession-004 | 保留 | 一个复盘授权边界、培训和检查点为何设计不足；另一个在出现偏差时决定收回授权或调整检查点，时间点和主要判断不同。 |
| 14 | a-ai-tool-permission-change-mid-run / bulk-ai-agent-budget-and-loop | 保留 | 一个考察权限撤销后如何阻止越权，一个考察循环调用的成本与停止条件；共享 Agent 术语但目标不同。 |
| 15 | a-ai-engineering-model-change-release / ai-governance-model-version-behavior-drift | 保留 | 一个考察模型变更的发布/回退决策，一个考察如何发现分群行为漂移；需明确“如何检测”与“检测后如何决策”的边界。 |
| 16 | bulk-a-client-offline-write-conflict / exp1500-a-008 | 合并 | 同为离线编辑后与服务端/其他设备更改冲突，需防止静默覆盖并设计合并或确认。 |
| 17 | ai-governance-tool-permission-boundaries / bulk1000-a-023-v1 | 合并 | 都考察 AI 工具授权如何绑定用户、任务上下文和执行审计。 |
| 18 | bulk-a-build-provenance / exp1500-a-034 | 合并 | 同为证明生产制品来自可信源码、依赖和构建/发布流程；保留哈希不一致作为场景追问。 |
| 19 | bulk-f-manager-boundary-between-coaching-and-performance / exp1500-f-027 | 合并 | 都在不同成员需要不同支持时公平分配高曝光成长机会；把辅导差异与长期机会偏差保留为追问。 |
| 20 | exp1500-g-009 / exp1500-g-015 | 保留 | 一个检验新工具是否改善单项移动性能定位，另一个评估原型工具是否适配团队流程；使用目标和迁移成本不同。 |
| 21 | bulk1000-f-079-v1 / exp1500-f-022 | 合并 | 同为面试官标准不一致导致候选人评价冲突，考察问题设计、证据标准和校准机制。 |
| 22 | f-frontline-management-judge-member-conflict / f-manager-of-managers-conflict-between-leads | 保留 | 一个处理团队成员冲突，一个处理多个一线管理者之间的冲突；管理者的授权、升级和组织影响范围不同。 |
| 23 | exp1500-g-020 / exp1500-h-001 | 保留 | 一个以事后事故复盘为主，一个要求现场处理异常和业务继续扩量的压力；题面应明确时间点差异。 |
| 24 | bulk1000-b-026-v1 / exp1500-c-055 | 合并 | 都要求在收入达标/增长时核验回款、折扣、退款或坏账等收入质量，避免只看名义收入。 |
| 25 | d-project-management-biggest-challenge / h-ownership-take-on-extra | 保留 | 一个复盘项目中最困难的问题，一个考察主动承担职责外工作及其代价；经历可重叠但考察意图不同。 |
| 26 | e-conflict-triad-blame-vs-shared-language / f-hiring-cross-functional-joint-interview | 保留 | 一个处理真实跨职能协作中的互相归责，一个设计联合面试来评估协作方式；应明确“解决协作问题”与“设计招聘评估”的区别。 |
| 27 | exp1500-d-027 / f-team-design-single-expert-continuity | 保留 | 一个计算知识转移占用多少当前交付容量，一个设计关键专家休假或离职时的连续性；时间预算与组织备份安排不同。 |
| 28 | a-quality-data-retention-deletion-proof / b-data-model-erasure-audit-history | 保留 | 一个要求执行并证明跨系统删除，一个处理法律审计必须保留记录时的删除、匿名化和可追溯边界。需避免题面都泛化成“删除数据”。 |
| 29 | bulk1000-b-037-v1 / exp1500-b-035 | 合并 | 都涉及规则变更后新旧合同/账单的适用口径、历史解释与重算边界；保留不应重算的合同作为例外。 |
| 30 | exp1500-c-009 / exp1500-c-013 | 保留 | 一个权衡少量用户无法完成关键任务的无障碍阻断，一个权衡低频但可能不可恢复的数据事故；风险类型和责任依据不同。 |
| 31 | exp1500-c-029 / next-product-038 | 合并 | 都考察随机实验受到渠道、设备或外部政策差异干扰时，哪些因果结论仍成立。 |
| 32 | d-capacity-overdraft-signals / g-resilience-ask-for-support-before-crisis | 保留 | 一个判断团队持续加班是否源于容量与管理机制，一个讨论个人在过载时如何识别风险和求助；组织与个人层级不同。 |
| 33 | exp1500-a-049 / next-ai-013 | 合并 | 都要在模型排障/复现需要日志时控制输入或输出中的个人信息采集、脱敏、访问和保留风险。 |
| 34 | a-system-design-search-system / bulk-a-search-index-refresh | 保留 | 一个考察搜索系统整体设计，一个考察索引结构变更时如何迁移而不造成服务中断；题面要清楚区分系统设计与演进。 |
| 35 | bulk-ai-prompt-injection-boundary / exp1500-a-040 | 合并 | 都考察把检索或上传内容当作不可信数据，避免其中指令获得工具权限。 |
| 36 | bulk-a-usage-metering-pipeline / exp1500-b-016 | 合并 | 都考察按用量计费的事件计量、重复/迟到数据、关账与账单更正。 |
| 37 | exp1500-g-006 / exp1500-g-013 | 合并 | 都考察如何把一次无障碍审查的发现转成团队日常设计与开发能力。 |
| 38 | b-commercial-rules-promotion-stacking / exp1500-b-015 | 合并 | 与第 10 组同属优惠叠加规则；保留互斥、优先级和运营配置等细节，不重复保留一张题卡。 |
| 39 | bulk1000-g-089-v1 / exp1500-g-041 | 合并 | 都考察连续受挫时如何调整行动、判断求助时机并恢复推进。 |
| 40 | e-feedback-receiving-hard / f-hiring-pressure-questions-boundary | 保留 | 一个是候选人接收不舒服反馈后的改变，一个是面试官提问时如何避免越界；角色与考察目标不同。 |
| 41 | exp1500-h-017 / wave18-attrib-005 | 合并 | 都用于作品集讲述团队成果中的个人贡献；保留原提案、实际采纳和最终结果被多方修改之间的区别。 |
| 42 | e-communication-customer-impact-notice / h-integrity-disclose-data-incident | 保留 | 一个是故障范围未明时及时更新受影响客户，一个是疑似数据暴露时的内部升级、诚信披露和客户通知；伦理责任不同。 |
| 43 | exp1500-c-036 / next-delivery-091 | 保留 | 一个在上游延迟时判断当前指标能否支撑业务决定，一个设计下游数据新鲜度状态与通知；决策与系统机制不同。 |
| 44 | a-engineering-systems-repo-strategy / bulk1000-a-019-v1 | 保留 | 一个决定是否把多个仓库合并，一个治理仓库合并后的所有权、发布节奏和影响范围；须明确决策阶段。 |
| 45 | d-project-management-dependency-buffer-reallocation / exp1500-d-047 | 合并 | 都是多个项目争用同一平台团队，PMO需让依赖冲突可比较并重订可信承诺；保留监管需求作为优先级追问。 |
| 46 | ai-governance-human-review-escalation / exp1500-a-048 | 合并 | 两题都考察 AI 自动处理与人工复核的风险分级及队列容量；保留错误代价、审核积压和业务绕过审核为场景追问。 |
| 47 | exp1500-e-054 / wave18-feedback-011 | 合并 | 都把“缺少影响力”这类笼统反馈追问成具体场景、可观察行为和练习目标。 |
| 48 | a-ai-engineering-human-review-capacity / exp1500-a-048 | 合并 | 与第 46 组同属人工复核门槛和队列容量问题；保留风险分级、错误代价及审核容量约束。 |
| 49 | b-data-model-late-event-correction / exp1500-b-065 | 合并 | 都建模事件发生时间与上传时间及迟到/重复情况；保留账号停用、设备序列和权限生效时间作为追问。 |
| 50 | exp1500-f-005 / f-frontline-management-one-on-one-alignment | 合并 | 都要让一对一沟通超越进度追问，连接成员需要、交付障碍和管理者期待；保留哪些决定不在一对一中单独作出。 |
| 51 | a-system-design-cost-model / c-investment-choices-roi-arr | 保留 | 一个估算系统的计算、存储和运维成本随规模如何变化，一个比较产品方向的人员投入、收入和回报；工程成本模型与投资判断不同。 |
| 52 | a-quality-accessible-keyboard-screen-reader-release / design-accessibility-submit-recovery-priority | 合并 | 都讨论辅助技术用户无法完成核心流程时是否允许发布；把键盘、屏幕阅读器和错误恢复问题放在同一发布门槛下。 |
| 53 | a-system-design-tech-choice-tradeoffs / c-metrics-causality-business-result-attribution | 保留 | 一个解释技术方案为何优于备选方案，一个核验项目带来的业务结果及替代解释；选择理由与事后因果归因不同。 |
| 54 | bulk-a-object-storage-uploads / exp1500-a-047 | 合并 | 都设计不可信文件上传及安全解析边界；保留压缩包炸弹、路径越权、隔离扫描等作为风险追问。 |
| 55 | c-prioritization-hindsight-not-worth / e-conflict-then-and-now | 保留 | 一个回看哪些工作不值得投入，一个复盘冲突及现在会如何处理；反事实问题不同。 |
| 56 | bulk-b-commercial-04 / c-market-economics-bundle-cannibalization | 合并 | 都考察新套餐扩大转化却蚕食原有高价套餐时，如何衡量新增价值和收入结构；保留商业模型与观察期。 |
| 57 | bulk-b-data-01 / exp1500-b-012 | 保留 | 一个确定客户活跃度分析的统计粒度，一个区分组织、合同账号、个人身份及授权关系；分析粒度与领域实体边界不同。 |
| 58 | exp1500-d-010 / exp1500-g-017 | 保留 | 一个在审核时间不确定时安排发布，一个在版本被拒后复盘准备与验证；事前计划与事后学习不同。 |
| 59 | ai-governance-evaluation-set-representativeness / exp1500-a-015 | 合并 | 都考察离线评估与真实用户结果不一致时，如何识别评估集和发布判断的盲区；保留总体提升但分群退化作为例子。 |
| 60 | c-market-economics-subsidy-side-effects-marketplace / exp1500-b-001 | 合并 | 都判断补贴带来的交易增长是否改善买卖双方真实匹配并可持续；保留停止补贴后的回落及两侧体验信号。 |
| 61 | bulk1000-d-061-v1 / exp1500-d-058 | 合并 | 都考察小规模运营试点有效、扩区后效果下降时如何定位复制条件和执行瓶颈。 |
| 62 | bulk-a-debug-queue-backlog / exp1500-d-040 | 保留 | 一个定位队列积压反复出现的长期瓶颈，一个控制故障恢复后的旧消息重放速度；稳态排障与恢复保护不同。 |
| 63 | e-communication-context-handoff / h-ownership-take-on-extra | 保留 | 一个确保跨地域交接保留背景和决策原因，一个讲述主动承担职责外挑战；交接质量与个人主动性不同。 |
| 64 | a-ai-rag-source-freshness-contract / exp1500-a-018 | 合并 | 都处理源知识更新后答案仍引用旧内容，考察索引更新、缓存、版本与时效验证；保留文档责任人和过渡策略。 |
| 65 | wave18-attrib-003 / wave18-plan-006 | 保留 | 一个分辨共同增长结果的个人贡献，一个协调渠道、产品和销售计划接口与依赖；归因与前置计划不同。 |
| 66 | bulk-c-product-01 / c-outcomes-user-value-vs-monetization | 合并 | 都考察产品指标上升但核心任务完成受损时是否继续；保留使用率、付费转化和用户任务成功作为需权衡的不同信号。 |
| 67 | bulk-ai-agent-budget-and-loop / bulk-ai-prompt-injection-boundary | 保留 | 一个限制循环调用的预算、延迟和停止条件，一个阻止不可信内容改变指令或权限；资源治理与安全边界不同。 |
| 68 | exp1500-f-038 / wave16-people-045 | 合并 | 都在负责人离开后团队无法自主决策的情形下检查代理授权、知识和流程是否真实有效。 |
| 69 | exp1500-d-010 / exp1500-g-030 | 保留 | 一个制定发布窗口和跨端降级计划，一个处理连续审核阻塞时的团队恢复与可控行动；发布计划与团队韧性不同。 |
| 70 | a-quality-data-retention-deletion-proof / exp1500-b-066 | 保留 | 一个验证用户请求已从副本和下游系统删除，一个设计事件、索引和备份中的主体映射、加密擦除及审计保留例外；流程验证与数据模型不同。 |
| 71 | c-marketing-brand-search-vs-demand-capture / next-product-057 | 保留 | 一个区分品牌增量需求与效果广告截流，一个在长销售周期下决定是否继续观察品牌投入；归因方法与时间窗口决策不同。 |
| 72 | exp1500-d-010 / exp1500-g-008 | 保留 | 一个处理具体商店审核和跨端发布时间，一个把其他团队的灰度/回滚方法迁移到移动端；具体计划与实践迁移不同。 |
| 73 | exp1500-a-028 / exp1500-b-038 | 合并 | 都在跨服务修正历史数据时区分数据重算与外部副作用，避免通知或回调被重复触发。 |
| 74 | b-data-model-source-of-truth-conflict / exp1500-b-029 | 保留 | 一个确定 CRM、计费和产品状态不一致时的事实来源，一个把客户、合同和设备等不同标识映射到同一生命周期；权威值与实体匹配不同。 |
| 75 | a-ai-eval-customer-harm-weighting / ai-governance-user-segment-harm-disparity | 保留 | 一个给高损害错误设置模型发布门槛，一个发现并处理特定语言/群体错误率更高；错误严重度与群体差异不同。 |
| 76 | exp1500-e-014 / exp1500-h-015 | 保留 | 一个让管理者核实团队成员间的贡献争议并修复合作，一个处理公开汇报夸大个人贡献；冲突调解与纠正失真陈述的责任不同。 |
| 77 | bulk-c-product-02 / exp1500-c-002 | 合并 | 都判断高价值客户提出的定制需求是否代表可扩展产品机会，并比较定制、配置、长期维护与拒绝。 |
| 78 | a-ai-engineering-source-deletion-propagation / exp1500-a-018 | 保留 | 一个在文档撤回或权限收回后清理已失效的内容和引用，另一个处理规则内容更新后的新鲜度；安全删除与一般更新不同。 |
| 79 | exp1500-e-046 / wave18-attrib-007 | 保留 | 一个争取没有单一收益归属的基础能力投入，一个说明跨团队复用后的真实贡献和归因边界；立项支持与事后归因不同。 |
| 80 | bulk-h-expectations-role-incentives / exp1500-h-030 | 保留 | 都用于判断岗位条件与个人工作期待是否匹配，但一个关注试错节奏/流程，一个核实夜间值班频率；可作为不同尽调题保留，题名须具体。 |
| 81 | a-engineering-systems-alert-noise-slo / exp1500-d-018 | 合并 | 都问告警多却仍漏掉真实风险，合并为如何按用户影响、服务目标和可行动性整理告警；保留漏报与误报的平衡。 |
| 82 | a-engineering-systems-repo-strategy / a-monorepo-package-ownership-contract | 保留 | 一个决定是否合并代码仓库，另一个处理合并后公共包由谁负责及如何保持兼容，决策阶段不同。 |
| 83 | exp1500-d-029 / wave17-delivery-003 | 合并 | 都处理关键依赖方没有明确承诺、多个项目各自显示正常时如何呈现和管理组合风险；保留跨项目影响。 |
| 84 | bulk-b-feature-02 / wave16-domain-024 | 合并 | 都围绕线上特征缺失及默认值掩盖采集问题；保留离线与线上缺失率对比、默认值和数据源排查。 |
| 85 | c-investment-choices-short-vs-long-term / d-project-management-biggest-challenge | 保留 | 一个比较短期与长期收益，一个询问项目挑战，回答目标、判断证据和适用范围不同。 |
| 86 | exp1500-d-045 / wave18-capacity-002 | 合并 | 都处理线上支持挤占计划容量导致无法兑现承诺；保留真实预留容量、调整承诺和复核比例。 |
| 87 | bulk-a-retry-amplification / exp1500-a-029 | 合并 | 两题都问重试如何扩大局部故障，合并为故障时怎样限制自动重试及避免请求风暴。 |
| 88 | bulk1000-b-034-v1 / bulk1000-b-035-v1 | 保留 | 一个是训练时使用预测时点之后才可见的数据，一个是不同模型采用了不同特征刷新口径；数据泄漏与特征一致性不同。 |
| 89 | e-influence-peer-team-evidence-of-impact / exp1500-e-037 | 保留 | 一个通过证据推动依赖团队调整优先级，一个推动多个团队采用共同接口；改变资源安排与统一技术约定不同。 |
| 90 | b-data-model-effective-dated-ownership / exp1500-b-005 | 合并 | 都要求组织或实体归属变更后仍能还原历史责任；保留生效时间和历史报表场景。 |
| 91 | c-prioritization-three-things-worth-it / c-prioritization-top-three-stop-two | 合并 | 都让人回顾重要事项并作取舍，合并为回顾一段时期内最重要及应该停止的工作；保留回顾经历与当前计划两种时间视角。 |
| 92 | f-manager-of-managers-conflict-between-leads / f-manager-of-managers-manage-through-leads | 保留 | 一个处理管理者之间的冲突，一个设计通过一线管理者运行团队的管理机制，不能合并。 |
| 93 | exp1500-a-014 / exp1500-b-066 | 保留 | 一个验证注销后的副本清理和完成证据，一个设计事件模型中的删除、匿名化与审计留存；执行验证与数据模型责任不同。 |
| 94 | f-hiring-structured-interview-time-allocation / next-people-078 | 保留 | 一个设计面试轮次分工以减少重复考察，一个处理面试官已形成结论后的确认偏误；流程覆盖与判断偏差不同。 |
| 95 | c-marketing-promo-incrementality-margin / c-metrics-causality-campaign-net-lift | 保留 | 都涉及活动效果归因，但一个判断订单增量是否值得毛利损失，一个测量留存增量；结果指标和经营取舍不同。 |
| 96 | bulk1000-f-081-v1 / next-people-074 | 保留 | 一个核验晋升材料是否覆盖目标责任，一个处理晋升名额目标与岗位实际需求冲突；个人证据与组织需求不同。 |
| 97 | c-market-economics-customer-acquisition-payback / wave16-domain-026 | 合并 | 都判断折扣渠道带来的客户增长是否有长期价值；保留获客成本回收期、客户留存和渠道质量。 |
| 98 | a-monorepo-package-release-independent-versioning / bulk1000-a-019-v1 | 保留 | 一个选择包的独立版本与发布策略，一个管理多团队仓库中的所有权和发布协调；版本策略与协作治理不同。 |
| 99 | a-ai-engineering-resume-claim-verification / next-delivery-099 | 合并 | 都把笼统的“提升效率”拆成可核验的经历和追问；保留目标、基线、行动、结果及个人贡献证据。 |
| 100 | bulk1000-c-042-v1 / exp1500-d-007 | 合并 | 都处理多个事项同时被标成最高优先级时的取舍；保留共享容量、价值、时限、依赖与延迟代价。 |
| 101 | f-frontline-management-conflict-with-report / f-frontline-management-judge-member-conflict | 保留 | 一个处理管理者与下属之间的冲突，一个诊断团队成员之间的冲突；管理责任和介入方式不同。 |
| 102 | bulk1000-e-065-v1 / exp1500-e-005 | 合并 | 都处理异步交接或跨时区沟通中背景丢失的问题；保留决策背景、负责人、时限和接收方确认。 |
| 103 | bulk1000-d-054-v1 / exp1500-d-006 | 合并 | 与第 45、83、110 对共同涉及多个项目争用关键共享资源；本题补充唯一领域专家这一资源类型，统一归入组合容量与依赖管理。 |
| 104 | exp1500-a-007 / exp1500-d-037 | 保留 | 一个定位只在特定网络环境发生的功能故障，一个在移动端发布后处理网络错误上升且服务端正常的线上事件；现场排查与发布事故响应不同。 |
| 105 | bulk-e-influence-no-authority-experiment / wave17-collab-004 | 合并 | 都处理会议表面达成一致、会后却无人落实或各做各的情况；保留承诺、负责人和执行版本不一致两类追问。 |
| 106 | a-quality-error-budget-release-policy / next-delivery-048 | 合并 | 都围绕错误预算持续消耗或即将耗尽时的发布取舍；保留谁有决策权、暂停范围、可靠性投入和恢复门槛。 |
| 107 | g-learning-transfer-practice-check / g-learning-transfer-teach-and-check | 保留 | 一个验证自己学会的方法是否改善工作，一个验证教给他人的方法是否被正确采用；个人迁移与团队传播不同。 |
| 108 | exp1500-e-005 / next-growth-088 | 合并 | 与第 102 对属同一跨时区异步协作问题；统一覆盖上下文丢失、决策延迟和团队工作约定。 |
| 109 | a-microservices-contract-version-rollout / b-model-evolution-schema-unknown-enum | 合并 | 都处理跨团队契约演进导致旧消费者失败；保留字段变化与新增枚举值作为兼容性场景。 |
| 110 | d-pmo-correlated-dependency-escalation / exp1500-d-047 | 合并 | 与第 45、83、103 对共同处理多个项目争用平台团队或关键依赖；合并保留何时需要组合层面升级决策。 |
| 111 | c-market-economics-customer-concentration-risk / exp1500-c-002 | 保留 | 一个评估大客户收入集中、定制成本和标准路线的经营风险，一个判断单个客户的功能建议是否代表普遍需求；风险组合与需求发现不同。 |
| 112 | exp1500-a-005 / wave16-c-004 | 保留 | 一个设计可演进的配置解析器，一个在解析时保留嵌套配置的来源位置以便诊断；架构演进与错误定位需求不同。 |
| 113 | b-model-evolution-identity-merge-audit / exp1500-b-074 | 合并 | 两题都处理实体合并或拆分后历史引用、操作记录和权限的解释；保留合并与拆分作为边界情况。 |
| 114 | ai-governance-model-version-behavior-drift / bulk1000-c-047-v1 | 保留 | 一个检测更换模型后出现的行为变化，一个专门衡量整体改善是否掩盖目标群体退化；模型漂移与分组安全评估相关但目标不同。 |
| 115 | exp1500-g-001 / exp1500-g-005 | 合并 | 都要求把线上事故复盘转为未来预防能力；保留崩溃事故和接口兼容事故作为不同案例。 |
| 116 | a-microservices-timeout-retry-amplification / bulk-a-retry-amplification | 合并 | 与第 87 对同属重试放大故障；合并时保留超时、重试上限、退避和熔断等系统边界。 |
| 117 | e-influence-without-authority / exp1500-e-037 | 保留 | 一个开放询问无职权影响他人，一个要求推动多团队采用共同接口；通用影响力与具体技术决策场景不同。 |
| 118 | h-integrity-correct-own-account / h-ownership-unowned-gap | 保留 | 一个主动纠正自己说过的错误信息，一个承担无人负责但影响结果的工作；诚信修正与责任边界不同。 |
| 119 | bulk1000-b-026-v1 / c-market-economics-contribution-margin-service-cost | 保留 | 一个分析收入增长但现金流恶化，一个判断贡献毛利下降后是否继续扩张；现金流时间差与单位经济收益不同。 |
| 120 | bulk-growth-12 / exp1500-b-041 | 合并 | 都判断渠道线索增加但后续质量或销售效率下降时如何调整投入；保留渠道边际成本、线索质量和销售资源消耗。 |
| 121 | e-feedback-receiving-hard / g-structured-reflection-judgment-overturned | 保留 | 一个处理如何听取和回应不舒服的反馈，一个复盘自己的判断为何被事实推翻；外部反馈与自我判断校正不同。 |
| 122 | exp1500-e-038 / wave17-collab-002 | 保留 | 一个协调管理层与一线意见冲突，一个在负责人已公开承诺后用新证据修正需求判断；利益相关方分歧与承诺偏差不同。 |
| 123 | bulk-a-environment-parity / bulk-a-test-data-lifecycle | 保留 | 一个减少开发和线上环境差异，一个管理测试数据的生成、隔离与清理；环境一致性与数据生命周期不同。 |
| 124 | exp1500-f-027 / f-growth-development-stretch-responsibility | 保留 | 一个公平分配不同成员的发展机会，一个为具体成员设计略高于现有能力的工作；机会公平与个人发展设计不同。 |
| 125 | exp1500-d-022 / exp1500-e-002 | 保留 | 一个把不确定工作拆成阶段以学习和调整，一个向管理层报告无法给出可靠完工日期；执行策略与沟通预期不同。 |
| 126 | exp1500-e-056 / exp1500-f-028 | 保留 | 一个处理晋升反馈标准不透明，一个帮助证据不足的成员规划成长路径；制度透明与个体发展支持不同。 |
| 127 | exp1500-a-016 / exp1500-a-040 | 保留 | 一个确保检索内容继承原文档权限，一个防止文档中的恶意指令获得工具权限；访问控制与指令注入防护不同。 |
| 128 | b-data-model-erasure-audit-history / exp1500-b-066 | 合并 | 与第 5、70、93 对同属删除请求与审计留存边界；统一保留交易匿名化、事件/索引/备份清理及合规例外。 |
| 129 | c-market-economics-free-tier-conversion-cost / next-product-037 | 保留 | 一个评估免费用户带来的服务成本与商业作用，一个分析试用转付费数量提高但付费客户质量下降；免费层经营与试用转化质量不同。 |
| 130 | exp1500-h-013 / wave16-product-028 | 合并 | 都处理客户要求承诺尚未验证的能力或依赖；保留事实边界、可承诺范围、验证条件和后续沟通。 |
| 131 | exp1500-g-013 / next-design-061 | 保留 | 一个把审查经验转成团队设计习惯，一个解决具体表格只靠颜色和数值传递状态的问题；组织实践与界面设计任务不同。 |
| 132 | a-system-design-tech-choice-tradeoffs / c-product-judgment-pseudo-demand-infra | 保留 | 一个说明技术方案的选择和取舍，一个复盘基础设施投入如何误判业务需求、未带来价值；技术设计与投资判断不同。 |
| 133 | d-incident-postmortem-action-priority / exp1500-d-020 | 合并 | 都处理事故结束后行动项无人跟进的问题；保留容量约束、优先级、责任人和验证时间。 |
| 134 | bulk-a-debug-tail-latency / bulk-a-gc-pause-latency | 合并 | 一个定位尾延迟上升，一个聚焦垃圾回收暂停导致的尾延迟；合并保留按分位数定位原因和核实影响的步骤。 |
| 135 | exp1500-b-005 / exp1500-b-049 | 合并 | 都需要依据历史生效时间还原过去的组织责任或汇总范围；保留实体归属与层级调整的不同查询。 |
| 136 | exp1500-e-026 / exp1500-h-024 | 保留 | 一个处理超出授权的合作条件谈判，一个处理超出技术权限的需求推进；商务授权和技术责任边界应分别核验。 |
| 137 | bulk1000-a-014-v1 / wave16-d-053 | 合并 | 都处理单个租户的慢任务或查询影响共享服务；并入多租户公平调度题，保留隔离、限额和服务影响。 |
| 138 | a-quality-accessible-keyboard-screen-reader-release / exp1500-g-013 | 保留 | 一个确保核心流程可由键盘和屏幕阅读器完成，一个将审查经验转成团队日常能力；交付门禁与长期习惯不同。 |
| 139 | exp1500-c-018 / wave18-plan-002 | 保留 | 一个在年度方向不确定时滚动调整季度计划，一个在方向明确但指标冲突时建立目标层次；不确定性管理与目标冲突不同。 |
| 140 | b-data-model-product-entitlement / exp1500-b-012 | 合并 | 都要区分组织、账号、实际使用者及各自权限；保留合同、计费和授权归属作为具体业务条件。 |
| 141 | a-system-design-large-file-upload / bulk-a-object-storage-uploads | 保留 | 一个设计大文件上传的产品与系统流程，一个保护不可信文件上传链路；功能架构与威胁防护不同。 |
| 142 | b-data-model-consent-purpose-history / exp1500-b-050 | 合并 | 都要求说明数据使用目的、用户撤回授权后的处理和审计保留限制；保留次要用途作为边界追问。 |
| 143 | bulk1000-b-029-v1 / exp1500-b-012 | 合并 | 与第 140 对同属身份、组织和账号关系建模；统一题目并保留跨组织、多人使用和权限归属场景。 |
| 144 | a-engineering-systems-schema-deploy-rollback / a-mobile-local-database-schema-upgrade-rollback | 合并 | 都处理新版本数据迁移后旧版本无法回退的问题；保留服务端数据库与客户端本地库作为不同发布约束。 |
| 145 | bulk1000-b-034-v1 / exp1500-b-031 | 合并 | 与第 88 对的标签/特征穿越问题同属训练数据使用预测时点之后的信息；统一保留时间边界和特征刷新条件。 |
| 146 | bulk-a-backend-idempotency-key-scope / bulk-a-framework-dependency-injection-scope | 保留 | “作用域”分别指幂等请求的唯一性范围和依赖实例的生命周期；概念不同，仅术语相似。 |
| 147 | exp1500-e-022 / exp1500-e-032 | 合并 | 都处理跨团队争用同一稀缺资源时的协商和共同决策；保留同一专家作为资源冲突的具体场景。 |
| 148 | bulk-ai-rag-retrieval-diagnosis / exp1500-a-036 | 合并 | 都诊断检索内容变化为何影响答案质量；保留关键证据召回、无关内容增加和答案退化的验证。 |
| 149 | a-microservices-timeout-retry-amplification / exp1500-a-029 | 合并 | 与第 87、116 对同属重试放大故障；合并时保留超时、退避和熔断的协同边界。 |
| 150 | bulk1000-c-050-v1 / exp1500-c-040 | 合并 | 都比较自建平台与采购服务的长期成本和责任边界；保留维护能力、退出成本和全生命周期成本。 |
| 151 | bulk1000-d-054-v1 / exp1500-e-032 | 合并 | 与第 103、147 对共同处理多个团队争用同一关键专家；并入共享容量与组合依赖题。 |
| 152 | b-feature-model-window-definition / bulk-b-feature-01 | 合并 | 都要求把“近 30 天”特征口径说清并判断是否可复用；保留起止时刻、时区、事件时间和去重规则。 |
| 153 | bulk-c-product-06 / exp1500-c-008 | 合并 | 都判断竞品已有的功能是否值得跟进；保留客户需求、流失证据、差异化和开发机会成本。 |
| 154 | bulk1000-b-037-v1 / exp1500-h-012 | 保留 | 一个设计业务规则变更后哪些历史记录需要重算，一个解释指标口径变化如何影响历史比较；数据回算范围与结果沟通不同。 |
| 155 | exp1500-f-026 / exp1500-f-041 | 保留 | 一个设计有成长验证目标的挑战任务，一个判断成员是否已具备承接工作的条件；发展设计与授权判断不同。 |
| 156 | bulk-c-product-01 / exp1500-c-001 | 合并 | 都问功能使用率上升却未改善目标结果时是否继续；保留任务完成耗时和核心结果指标作为反向信号。 |
| 157 | ai-governance-tool-permission-boundaries / exp1500-a-040 | 保留 | 一个设计 AI 助手各任务的授权和审计，一个防止检索内容中的指令改变工具权限；权限策略与恶意输入隔离不同。 |
| 158 | bulk1000-c-045-v1 / bulk1000-h-093-v1 | 保留 | 一个在规划时验证关键依赖假设，一个在结果不达标后划分依赖团队责任；事前风险分析与事后归因不同。 |
| 159 | a-system-design-article-publisher / exp1500-b-024 | 保留 | 一个设计完整的文章编辑发布系统，一个定义草稿、发布和生效版本的状态；整体系统与内容版本模型不同。 |
| 160 | a-engineering-systems-alert-noise-slo / bulk-a-oncall-alert-ownership-gap | 保留 | 一个减少无效告警并避免真实风险漏报，一个处理触发后无人确认的问题；信号质量与值班责任不同。 |
| 161 | bulk-h-integrity-correct-attribution / exp1500-h-018 | 保留 | 一个准备晋升材料并承认未由本人提出的关键决策，一个回顾架构改造中提案、实现和迁移的分工；晋升诚信材料与项目复盘的证据目的不同。 |
| 162 | a-ai-engineering-human-review-capacity / bulk-c-metrics-06 | 保留 | 一个决定哪些 AI 任务须复核并管理审核容量，一个证明自动化带来的净业务价值；控制设计与价值测量不同。 |
| 163 | exp1500-g-017 / exp1500-g-030 | 合并 | 都处理移动应用商店审核受阻后的流程复盘和团队应对；保留单次拒绝与持续阻塞两种时间范围。 |
| 164 | exp1500-g-009 / g-learning-transfer-practice-check | 保留 | 一个验证新性能分析工具是否改善定位能力，一个验证学习方法是否迁移到工作；具体工具成效与通用学习迁移不同。 |
| 165 | bulk-b-feature-01 / exp1500-b-067 | 合并 | 与第 152 对同属滚动时间窗口边界；合并保留跨日时区、窗口起止点和特征复用条件。 |
| 166 | e-negotiation-scope-fixed-deadline / exp1500-e-024 | 合并 | 与第 2 对同属截止日固定时协商交付范围；统一保留目标、延期代价、风险告知和后续补交。 |
| 167 | design-research-recruitment-representativeness / exp1500-a-046 | 合并 | 都处理难以招到目标群体、样本偏向活跃用户时如何说明和限制研究结论；保留沉默用户补样策略。 |
| 168 | bulk-e-conflict-repair-after-escalation / wave18-feedback-007 | 合并 | 都在提出真实分歧或反馈后修复关系；保留事实不撤回、影响承认和后续协作约定。 |
| 169 | next-product-034 / wave17-value-008 | 保留 | 一个分析新手引导改善后留存变差的漏斗原因，一个判断短期实验结果是否足以支持全面发布；诊断指标冲突与实验决策不同。 |
| 170 | a-ai-tool-permission-change-mid-run / bulk-ai-prompt-injection-boundary | 保留 | 一个应对用户权限在运行中变化，一个隔离检索内容中的恶意指令；授权时效与输入安全不同。 |
| 171 | exp1500-g-008 / wave16-growth-046 | 合并 | 都判断学到的方法在当前团队工具和流程不匹配时如何调整迁移；保留跨团队发布治理作为案例。 |
| 172 | b-feature-model-time-semantics / exp1500-b-031 | 合并 | 与第 88、145 对同属训练特征误用预测时点之后信息；统一保留事件发生时间、可见时间和训练截点。 |
| 173 | bulk1000-d-055-v1 / exp1500-d-029 | 合并 | 与第 83 对同属外部依赖缺少明确交付承诺；并入跨项目依赖风险和升级机制题。 |
| 174 | exp1500-d-006 / exp1500-e-032 | 合并 | 与第 103、147、151 对同属多个团队争用唯一专家；统一保留容量协商、项目影响和调整负责人。 |
| 175 | exp1500-d-012 / next-delivery-098 | 合并 | 都处理项目仍被报告为正常但交付指标已恶化；保留预测日期后移、红灯指标和升级条件。 |
| 176 | exp1500-e-051 / wave16-collab-038 | 合并 | 都要求向高层报告风险或坏消息并提出可决策的信息；保留影响、证据、选项和所需决定。 |
| 177 | a-system-design-collaborative-document / bulk-a-live-collaboration-presence | 保留 | 一个设计多人实时协同编辑系统，一个设计在线状态和在场感；系统一致性与状态提示体验不同。 |
| 178 | a-system-design-large-file-upload / exp1500-a-027 | 保留 | 一个设计大文件上传的整体功能，一个解决中断续传和重复计费；系统架构与副作用安全边界不同。 |
| 179 | bulk1000-e-071-v1 / exp1500-e-059 | 合并 | 都处理反馈被误解或造成伤害后如何澄清和修复；保留意图、具体表达和对方感受的核实。 |
| 180 | bulk1000-g-087-v1 / d-incident-postmortem-action-priority | 合并 | 与第 133 对同属事故复盘行动项无法按期完成；保留容量、逾期风险和重新排序。 |
| 181 | bulk-growth-01 / wave17-value-008 | 保留 | 一个评估激活实验是否带来更多首次关键任务，一个判断仅短期显著的实验是否足以全面发布；用户行为结果与证据持续时间不同。 |
| 182 | f-frontline-management-conflict-with-report / f-manager-of-managers-conflict-between-leads | 保留 | 冲突双方分别是直属成员和一线管理者，管理责任与处理路径不同。 |
| 183 | bulk1000-d-052-v1 / d-decomposition-reduce-deploy-failure | 保留 | 一个把受依赖延期影响的模糊承诺拆成计划，一个把降低发布失败率拆成可测目标；项目依赖与技术质量目标不同。 |
| 184 | exp1500-c-003 / next-product-034 | 合并 | 与第 169 对同属新手引导短期完成提升但长期留存下降；保留首日完成率、留存分群和后续行为诊断。 |
| 185 | a-ai-engineering-rag-permission-change / a-ai-engineering-retrieval-quality-regression | 保留 | 一个确保问答只使用用户有权访问的内容，一个排查检索质量退化；权限隔离与检索相关性不同。 |
| 186 | exp1500-d-033 / exp1500-d-057 | 合并 | 都要验证规则或操作手册更新后，一线人员理解并一致执行；保留培训理解与实际执行抽查。 |
| 187 | bulk1000-g-084-v1 / g-learning-transfer-new-domain-practice-loop | 合并 | 都考察如何把已有知识迁移到陌生领域并尽快形成可靠判断；保留先验知识盘点、验证与练习反馈。 |
| 188 | ai-governance-tool-permission-boundaries / exp1500-a-011 | 保留 | 一个限制 AI 助手可以执行哪些操作，一个限制工具链级联调用造成的成本；安全授权与资源预算不同。 |
| 189 | c-market-economics-free-tier-conversion-cost / exp1500-c-049 | 合并 | 与第 129 对同属免费服务扩大使用后成本上升；并入免费层商业价值、服务成本及转化质量分析。 |
| 190 | bulk1000-e-065-v1 / wave18-succession-009 | 保留 | 一个优化远程日常交接的上下文，一个确保关键岗位负责人交接时传递决策和职责；交接频率与责任接替不同。 |
| 191 | bulk1000-b-030-v1 / exp1500-b-003 | 合并 | 都处理订阅周期变化时的按比例收费或退款；保留升级、账期切换、退款的时间与金额口径。 |
| 192 | next-ai-013 / wave16-d-060 | 保留 | 一个防止模型调试日志泄露个人信息，一个在大量审计记录中保留关键证据；隐私最小化与证据保留不同。 |
| 193 | a-quality-accessible-keyboard-screen-reader-release / next-design-061 | 保留 | 一个设定核心流程的发布无障碍门槛，一个改造某张只用颜色和数值表达状态的表格；发布标准与具体交互设计不同。 |
| 194 | bulk1000-a-019-v1 / exp1500-a-030 | 保留 | 一个管理 monorepo 多团队所有权与发布，一个优化任务图避免不相关代码触发全量构建；组织治理与构建效率不同。 |
| 195 | a-system-design-article-publisher / a-system-design-collaborative-document | 保留 | 一个设计文章编辑和发布流程，一个设计多人同时编辑的实时协作能力；内容发布生命周期与并发编辑不同。 |
| 196 | exp1500-h-018 / wave18-attrib-002 | 保留 | 一个准确说明共同项目中个人与团队贡献，一个解释技术改造未改善业务指标的因果；贡献描述与失败结果归因不同。 |
| 197 | a-monorepo-cyclic-dependency-boundary / bulk-a-framework-module-boundary-cycles | 合并 | 都处理模块依赖形成循环后如何调整边界；保留领域类型共享和避免新建无边界公共模块。 |
| 198 | bulk-a-code-merge-interval-stream / exp1500-a-021 | 合并 | 都考察区间重叠时的合并与查询；合并保留动态插入、顺序稳定和索引更新作为变化条件。 |
| 199 | bulk1000-f-079-v1 / next-people-077 | 合并 | 都校准候选人来源不同是否影响面试证据标准；保留面试官标准不一致和内推偏差的核验。 |
| 200 | b-data-model-erasure-audit-history / exp1500-a-014 | 保留 | 一个界定财务审计所需记录的匿名化和可追溯边界，一个核验个人数据在副本和下游系统中删除完成；保留规则与执行证明不同。 |
| 201 | c-technical-planning-platform-capability-sequencing / prioritization-limited-resources | 保留 | 一个决定平台迁移、稳定性与效率工作的技术顺序，一个通用地在资源受限时规划季度优先级；领域专业判断不同。 |
| 202 | bulk-e-feedback-defensive-peer / exp1500-e-060 | 保留 | 一个处理自己觉得同事反馈不公，一个综合多方互相矛盾的意见；自我防御反应与多来源证据判断不同。 |
| 203 | exp1500-b-007 / wave16-domain-024 | 合并 | 与第 84、145 对同属线上特征缺失、默认值和训练服务差异；统一保留数据源排查与语义核对。 |
| 204 | bulk1000-c-038-v1 / exp1500-c-006 | 合并 | 都从用户绕开主流程的行为诊断产品摩擦和需求假设；保留定性观察与数据验证。 |
| 205 | exp1500-b-022 / exp1500-b-044 | 合并 | 都建模套餐、产品选项与合同权益之间的映射；保留实际使用额度和同名选项在不同合同下的差异。 |
| 206 | ai-governance-tool-permission-boundaries / exp1500-a-016 | 保留 | 一个授权 AI 助手执行写操作等工具动作，一个让检索内容继承原文档的访问权限；行动授权与信息访问控制不同。 |
| 207 | a-engineering-systems-repo-strategy / exp1500-a-030 | 保留 | 一个决定是否把多个仓库合并，一个在已采用 monorepo 后减少无关代码的构建触发；架构选择与构建优化不同。 |
| 208 | a-monorepo-migration-repo-split-sequence / bulk-a-ci-migration-sequencing | 保留 | 一个规划大型仓库拆分和代码/包迁移，一个迁移共享 CI 平台；仓库依赖与基础设施切换不同。 |
| 209 | e-feedback-correct-misunderstanding / wave18-feedback-002 | 合并 | 都处理对方将反馈理解成推卸责任或否定后如何澄清；并入第 179、168 对的反馈误解修复题。 |
| 210 | b-data-model-effective-dated-ownership / wave17-domain-015 | 保留 | 一个依据生效时间还原历史负责人，一个处理业务对象改名或拆分后的指标解释；历史归属与实体身份演进不同。 |
| 211 | bulk-growth-01 / c-outcomes-user-value-vs-monetization | 保留 | 一个评估激活实验是否增加用户完成关键任务，一个权衡付费转化增长与核心任务受损；实验效果判断与用户价值/商业取舍不同。 |
| 212 | exp1500-f-046 / f-delegation-succession-role-boundary-map | 合并 | 都要求新负责人上任后原负责人交出日常决策，避免团队绕过新负责人；保留权限、升级例外和退出时间。 |
| 213 | h-expectations-fit-must-have-conditions / h-ownership-proudest-work | 保留 | 一个识别下一份工作的必要条件，一个通过自豪经历了解个人价值判断；岗位选择与过往行为证据不同。 |
| 214 | e-negotiation-service-level-capacity / wave18-bpm-005 | 保留 | 一个在服务容量不足时协商服务等级，一个核对销售承诺与套餐包含功能；容量分配与合同/产品承诺校验不同。 |
| 215 | exp1500-b-005 / wave17-domain-015 | 保留 | 一个还原历史实体归属，一个保证对象改名或拆分后历史指标可解释；时间维度与身份映射不同。 |
| 216 | a-system-design-av-editor / a-system-design-rich-editor-model | 保留 | 一个设计音视频编辑器，另一个设计结构化文档/图像编辑器的数据模型和渲染；媒体处理与富文本/画布状态不同。 |
| 217 | bulk1000-d-058-v1 / exp1500-d-013 | 保留 | 一个查找项目组合中重复投入，一个缩短相互依赖造成的过长交付链；资源重复与执行顺序不同。 |
| 218 | bulk-a-backend-backpressure-queue-growth / bulk-a-debug-queue-backlog | 保留 | 一个设计队列增长时的背压和负载保护，一个诊断积压反复恢复又反弹；预防机制与运行排障不同。 |
| 219 | bulk-c-metrics-01 / bulk1000-d-059-v1 | 保留 | 一个报告用户增长与可服务比例的变化，一个安排增长活动后的运营接手；业务度量与交接责任不同。 |
| 220 | exp1500-c-037 / next-product-034 | 保留 | 一个判断留存变化是否由用户组成变化造成，一个诊断新手引导完成提高但留存下降；样本构成与流程效果不同。 |
| 221 | exp1500-g-015 / wave17-growth-001 | 合并 | 与第 171 对同属新工具或方法是否适合推广；并入学习迁移题，保留原型工具和团队流程不匹配的验证。 |
| 222 | exp1500-d-050 / exp1500-e-035 | 保留 | 一个评估供应商延期对项目计划的影响，一个在供应商否认延期责任时协商恢复；计划风险与责任谈判不同。 |
| 223 | bulk1000-c-044-v1 / exp1500-c-018 | 合并 | 都处理年度方向变化或不确定时如何调整季度目标；保留方向改变、指标层级和重设依据。 |
| 224 | b-business-context-unit-economics-service-mix / c-market-economics-contribution-margin-service-cost | 合并 | 都判断收入/毛利变化是否掩盖服务结构和单位成本恶化；保留收入、毛利、服务组合和扩张成本。 |
| 225 | exp1500-c-011 / exp1500-e-032 | 合并 | 与第 103、147、151、174 对同属多个项目争用关键专家；统一进入跨团队资源协商问题。 |
| 226 | exp1500-f-036 / next-people-071 | 保留 | 一个判断授权结果偏离预期时经理何时介入，一个处理成员判断与经理不同；执行监控与判断分歧不同。 |
| 227 | exp1500-a-013 / next-delivery-048 | 保留 | 一个在服务目标尚未违约时决定是否提前止损，一个按错误预算临界值决定是否暂停发布；前瞻风险判断与既定可靠性门槛不同。 |
| 228 | h-attribution-passing-credit / h-ownership-unowned-gap | 保留 | 一个主动让出功劳、信息或决策权，一个承担无人负责的关键工作并界定责任；分享认可与主动补位不同。 |
| 229 | bulk-a-debug-clock-skew / wave16-c-010 | 合并 | 都处理跨服务/跨区域时钟偏差导致事件排序、幂等或过期判断错误；保留时钟同步和容差边界。 |
| 230 | bulk-a-code-deep-equality-cyclic-objects / bulk-a-language-equality-hash-contract | 保留 | 一个处理循环引用对象的深度比较，一个确保相等对象具有一致哈希；边界遍历与数据结构契约不同。 |
| 231 | exp1500-e-045 / next-product-039 | 保留 | 一个从客户请求判断是否存在广泛用户问题，一个兑现已无路线图容量的承诺；需求判断与承诺管理不同。 |
| 232 | exp1500-e-055 / wave18-feedback-005 | 合并 | 都处理成员要求直接反馈、收到具体批评后却产生防御的情形；保留继续辅导和确认改进目标。 |
| 233 | exp1500-g-008 / exp1500-g-017 | 保留 | 一个迁移其他团队的发布治理方法，一个复盘应用商店审核被拒；实践迁移与事故复盘不同。 |
| 234 | exp1500-h-015 / exp1500-h-018 | 保留 | 一个处理同事在公开汇报中独占团队成果，一个要求候选人解释自己参与的架构改造；行为纠正与个人经历核验不同。 |
| 235 | f-hiring-probe-personal-part / h-attribution-tech-choice-participation | 合并 | 都从“我们做了”或“参与选型”追问个人实际负责的判断和行动；保留团队项目和技术决策的追问方式。 |
| 236 | exp1500-f-039 / f-team-design-single-expert-continuity | 保留 | 一个降低团队对关键专家的单点依赖，一个在不打断交付时设计关键系统知识接续；人员集中风险与具体连续性计划相关但问题不同。 |
| 237 | b-feature-model-feature-retirement-compatibility / c-technical-planning-technology-sunset-exit | 保留 | 一个退役线上数据特征并迁移模型和历史报表依赖，一个退出旧技术栈并迁移关键系统；数据资产兼容与技术规划不同。 |
| 238 | e-negotiation-scope-fixed-deadline / exp1500-e-031 | 合并 | 与第 2、166 对同属日期或范围受约束时协商交付取舍；统一覆盖范围、日期、风险和团队负荷。 |
| 239 | exp1500-h-003 / wave17-collab-002 | 合并 | 与第 122 对同属已有公开承诺后发现依据失效；并入用新证据推动修正承诺的题目。 |
| 240 | exp1500-e-019 / next-people-080 | 保留 | 一个重组后重新约定团队职责接口，一个处理原负责人关系网络失效后的影响力重建；职责设计与协作网络不同。 |
| 241 | exp1500-f-016 / wave16-delivery-067 | 保留 | 一个设计共享平台团队的长期责任边界，一个处理需求插队造成的日常容量冲突；组织服务模型与队列优先级不同。 |
| 242 | exp1500-e-037 / exp1500-e-048 | 保留 | 一个推动多个团队采用共同接口，一个在组织范围内统一规则又保留合理例外；技术契约推广与治理规则执行不同。 |
| 243 | bulk1000-d-056-v1 / exp1500-c-024 | 合并 | 都在范围或依赖变化后更新计划基线、承诺和风险；保留基线变动原因及不隐藏延期的沟通。 |
| 244 | bulk-h-expectations-role-incentives / exp1500-h-031 | 合并 | 都判断岗位成功标准所体现的工作方式是否适合候选人；保留快速试错、交付速度和稳定流程作为具体条件。 |
| 245 | exp1500-b-037 / exp1500-b-057 | 合并 | 都要求数据模式升级期间兼容旧消费者或写入方；保留兼容读取、逐步切换和移除旧格式的条件。 |
| 246 | design-interaction-system-state-coverage / design-system-adoption-exceptions | 保留 | 一个建立跨流程复用的交互模式，一个管理多团队设计系统扩展及例外；基础系统定义与治理不同。 |
| 247 | exp1500-b-031 / next-domain-027 | 保留 | 一个防止训练数据使用未来信息，一个决定历史回填采用新口径还是原口径；训练泄漏与数据重算语义不同。 |
| 248 | bulk-a-backend-connection-pool-exhaustion / next-cs-010 | 合并 | 都诊断连接池耗尽及盲目扩容可能带来的级联影响；保留排队、连接持有时间和下游容量。 |
| 249 | exp1500-f-021 / f-hiring-job-requirement-signal-validity | 合并 | 都校准招聘条件是否合理可行；合并比较岗位实际表现证据、市场供给和可删除的非必要要求。 |
| 250 | bulk1000-d-061-v1 / c-outcomes-scaling-cohort-reproducibility | 合并 | 都判断试点或小样本效果能否推广到更多团队、地区或客户群；保留样本差异、执行条件与复现证据。 |
| 251 | a-system-design-av-editor / a-system-design-collaborative-document | 保留 | 一个设计音视频编辑，一个设计多人协同文档；媒体处理链路与实时一致性问题不同。 |
| 252 | c-market-economics-bundle-cannibalization / exp1500-c-037 | 保留 | 一个衡量套餐变化对高价产品和整体购买的影响，一个判断留存变化是否由用户组成造成；定价组合与留存因果不同。 |
| 253 | exp1500-a-005 / exp1500-a-022 | 保留 | 一个设计可演进的通用配置解析器，一个保证枚举扩展后旧数据能被解析；系统设计与兼容性边界问题不同。 |
| 254 | exp1500-h-015 / exp1500-h-017 | 保留 | 一个处理他人夸大个人贡献，一个要求候选人在作品集中准确表达自己做了什么；团队管理行为与候选人证据表达不同。 |
| 255 | exp1500-f-012 / f-mom-calibration-evidence | 合并 | 都校准多个经理或团队的绩效证据标准；保留共同底线与岗位/团队差异的平衡。 |
| 256 | bulk1000-g-085-v1 / exp1500-f-030 | 保留 | 一个检验学习是否转为工作改进，一个诊断辅导停滞的原因是方法、环境还是动机；自主学习迁移与管理辅导不同。 |
| 257 | exp1500-c-024 / exp1500-d-050 | 保留 | 一个更新依赖方延期后的计划并公开风险，一个评估供应商延期的真实影响；一般依赖调整与供应商管理不同。 |
| 258 | d-pmo-correlated-dependency-escalation / wave17-delivery-003 | 合并 | 与第 83、110、173 对同属关键依赖跨多个项目造成组合风险；统一保留升级层级和状态核验。 |
| 259 | bulk-d-dependency-ownership-boundary / wave17-delivery-010 | 合并 | 都处理多团队共同交付时集成、验收责任不清；保留明确集成负责人、端到端验收和依赖确认。 |
| 260 | b-model-evolution-identity-merge-audit / exp1500-b-055 | 保留 | 一个合并两个客户实体并保留历史操作和权限，一个合并业务分类并保持报表口径；实体身份与分类体系不同。 |
| 261 | exp1500-d-019 / exp1500-h-001 | 合并 | 都在移动端分批发布时发现异常指标并决定是否暂停或回滚；保留小样本的不确定性。 |
| 262 | c-outcomes-scaling-cohort-reproducibility / wave17-growth-009 | 合并 | 都判断在小团队成功的方法为何推广到多团队或不同客群后失效；保留执行条件和结果复现。 |
| 263 | bulk1000-h-094-v1 / exp1500-h-014 | 保留 | 一个修正早期报告遗漏的重要风险，一个在绩效校准中补回不利证据；风险上报与人才评估场景不同。 |
| 264 | exp1500-d-012 / exp1500-d-049 | 合并 | 都要求管理层报告区分已发生事实、交付预测和风险；保留状态仍报绿但日期后移的具体信号。 |
| 265 | wave16-delivery-067 / wave16-product-029 | 保留 | 一个处理共享平台需求插队和容量分配，一个评估平台是否真正缩短交付时间；资源规则与平台成效不同。 |
| 266 | c-investment-choices-tech-debt-vs-features / exp1500-c-019 | 合并 | 都判断何时偿还技术债及其投入价值；保留技术债与新功能的季度资源分配和可观察收益。 |
| 267 | exp1500-d-007 / exp1500-e-032 | 合并 | 与第 100、103、147、151、174、225 对同属有限共享容量的优先级协商；统一包括项目与关键专家资源。 |
| 268 | c-metrics-causality-business-result-attribution / h-attribution-lead-or-manage | 保留 | 一个核实项目带来什么结果，一个明确本人是主导者还是管理者；结果归因与角色责任不同。 |
| 269 | bulk1000-g-087-v1 / exp1500-d-020 | 合并 | 与第 133、180 对同属事故修复后行动项逾期或无人跟进；统一覆盖容量、责任人和验证机制。 |
| 270 | b-product-project-model-upstream-downstream / c-metrics-causality-industry-definition-unify | 保留 | 一个解释项目在业务链路中的上下游位置，一个把指标换算成行业口径比较；业务依赖关系与指标可比性不同。 |
| 271 | exp1500-c-020 / exp1500-d-045 | 合并 | 与第 86 对同属计划容量持续被线上支持打断；统一保留承诺工作与突发工作的容量预留和重新计划。 |
| 272 | bulk1000-g-088-v1 / g-resilience-rebuild-after-strategy-reversal | 合并 | 都复盘重大方向变化或挫折后如何恢复行动节奏；保留项目取消、既有投入和下一步重建计划。 |
| 273 | bulk-c-metrics-02 / exp1500-c-035 | 保留 | 一个估算多个渠道覆盖同一用户后的渠道增量，一个区分产品动作与市场变化的整体因果；渠道重叠与外部混杂不同。 |
| 274 | a-system-design-tech-choice-tradeoffs / c-prioritization-three-things-worth-it | 保留 | 一个解释技术方案的设计取舍，一个回顾过去半年最有价值的工作；技术决策与个人成果复盘不同。 |
| 275 | exp1500-d-027 / wave17-delivery-001 | 合并 | 都在关键知识集中于一人时安排交接和容量；保留知识转移占用当前交付时间的取舍。 |
| 276 | prioritization-disagreeing-manager / wave18-feedback-006 | 保留 | 一个处理上级与团队对优先级判断不一致，一个处理同一决策收到相反反馈后是否修正；决策协商与反馈判断不同。 |
| 277 | exp1500-d-050 / next-delivery-092 | 保留 | 一个评估供应商延期的计划影响，一个处理供应商容量低于预测需求；已发生延误与事前产能约束不同。 |
| 278 | c-product-judgment-outcome-vs-output-metric / exp1500-c-001 | 合并 | 都处理交付量或使用率增加却未改善用户目标结果；保留输出指标与任务完成效果的对照。 |
| 279 | bulk-h-expectations-role-incentives / h-expectations-fit-growth-vs-stability-tradeoff | 合并 | 都判断岗位工作方式与候选人期待是否匹配；合并涵盖快速试错、成长速度和流程稳定性。 |
| 280 | a-coding-abstraction-mobile-state-restore / bulk-a-client-process-death-lifecycle | 合并 | 都处理移动应用进程被系统回收后的恢复；保留用户编辑内容、页面状态和过期数据校验。 |
| 281 | b-commercial-rules-promotion-stacking / bulk-b-commercial-05 | 合并 | 与第 10、38 对同属优惠叠加规则；统一覆盖叠加顺序、互斥条件和结算结果解释。 |
| 282 | exp1500-e-052 / exp1500-e-057 | 保留 | 一个向同事反馈协作摩擦，一个向上级反馈决策方式影响协作；平级与上下级关系的风险和策略不同。 |
| 283 | exp1500-b-029 / wave17-domain-003 | 合并 | 都要识别跨系统中同一客户的不同标识并避免重复计算；保留身份匹配规则和错误合并风险。 |
| 284 | f-frontline-management-reframe-complaint / wave16-delivery-035 | 保留 | 一个把团队协作抱怨转成可讨论行为，一个将客户抱怨转成可追踪交付问题；团队诊断与产品目标设定不同。 |
| 285 | next-people-071 / wave18-succession-010 | 合并 | 都判断授权对象或继任者采取不同方法时何时支持、何时介入；保留责任边界、结果信号与升级条件。 |
| 286 | exp1500-d-047 / wave17-delivery-003 | 合并 | 与第 83、110、173、258、295 对同属跨项目依赖风险；统一保留平台团队资源争用和组合层面升级。 |
| 287 | exp1500-d-058 / wave18-plan-008 | 保留 | 一个诊断运营试点规模化后效果变差的原因，一个判断证据不足时是否纳入正式路线图；问题定位与投资决策不同。 |
| 288 | bulk1000-a-025-v1 / wave16-ai-019 | 合并 | 都在模型输出影响用户权益时确定不确定性边界和所需证据；保留自动拒绝作为高风险场景。 |
| 289 | e-conflict-feedback-disagreement-on-intent / exp1500-e-013 | 保留 | 一个区分行为意图与实际影响，一个统一团队对质量标准的理解；冲突解释与标准定义不同。 |
| 290 | b-product-model-service-level-entitlement / e-negotiation-service-level-capacity | 保留 | 一个建模响应和解决时限承诺，一个在服务容量有限时协商客户等级；产品规则表达与供给取舍不同。 |
| 291 | c-market-economics-free-tier-conversion-cost / wave16-domain-026 | 保留 | 一个评估免费用户的服务成本和商业作用，一个判断高折扣获客渠道质量；免费层成本结构与付费客户获客质量不同。 |
| 292 | exp1500-c-048 / wave16-domain-026 | 合并 | 与第 97 对同属折扣获客下客户质量、回收周期和增长可持续性；保留低获客成本不代表长期回报高。 |
| 293 | bulk-a-gc-pause-latency / bulk1000-a-010-v1 | 保留 | 一个排查垃圾回收暂停造成的延迟，一个解释只有高分位请求变慢的症状；具体机制与通用尾延迟诊断不同。 |
| 294 | bulk-b-data-01 / bulk1000-b-029-v1 | 保留 | 一个为分析定义客户统计粒度，一个建模用户和组织身份关系；分析口径与领域实体模型不同。 |
| 295 | d-pmo-correlated-dependency-escalation / exp1500-d-029 | 合并 | 与第 83、110、173、258、286 对同属关键依赖跨多个项目产生的组合风险；并入依赖管理题。 |
| 296 | a-debugging-intermittent-duplicate-submit / exp1500-a-019 | 保留 | 一个排查用户操作造成的偶发重复提交，一个定位 CI 环境中的间歇性构建失败；业务副作用与测试基础设施不同。 |
| 297 | bulk1000-f-073-v1 / f-frontline-management-strong-performer-bad-collaboration | 保留 | 一个降低团队对高绩效成员的依赖，一个处理高绩效成员持续损害协作；连续性风险与绩效/行为管理不同。 |
| 298 | a-ai-engineering-human-review-capacity / wave16-ai-019 | 合并 | 都划定高风险 AI 决策是否需要人工复核；保留自动拒绝用户请求作为必须说明证据门槛的场景。 |
| 299 | bulk-g-learning-from-rejected-promotion / exp1500-e-056 | 保留 | 一个把影响范围不足的晋升反馈转成行动，一个处理评审标准不透明；证据发展与流程公平不同。 |
| 300 | c-investment-choices-platform-deprecation-budget / exp1500-c-016 | 合并 | 都比较平台建设、旧系统退出和人工重复工作的有限投入；保留长期维护、重复成本及退出风险。 |
| 301 | e-communication-risk-update-without-certainty / exp1500-d-038 | 合并 | 都要求在风险或事故仍未查明时提供可信更新；保留已知事实、未知原因、影响范围和下次更新时间。 |
| 302 | a-system-design-llm-chat / exp1500-a-041 | 保留 | 一个设计完整的大模型对话系统，一个确保流式输出中断时交互仍可信；系统架构与具体失败体验不同。 |
| 303 | exp1500-h-018 / h-attribution-ai-assisted-work-disclosure | 保留 | 一个说明多人协作的架构改造分工，一个披露 AI 生成、人工验证和责任边界；团队协作归因与 AI 使用透明度不同。 |
| 304 | exp1500-h-017 / exp1500-h-018 | 合并 | 都要求候选人准确说明团队项目中的个人贡献；保留设计作品集与架构改造作为不同经历背景和追问。 |
| 305 | c-metrics-experiment-network-interference / next-product-038 | 合并 | 都判断实验结果是否受对照组干扰或同期外部政策变化影响；保留实验设计、受影响人群和因果可信度。 |
| 306 | b-business-context-unit-economics-service-mix / bulk1000-b-026-v1 | 保留 | 一个分析毛利稳定是否掩盖服务组合变差，一个解释收入增长但现金流恶化；毛利结构与资金回收时间不同。 |
| 307 | b-feature-model-feature-retirement-compatibility / exp1500-b-077 | 保留 | 一个安排停止生产仍被模型和报表依赖的特征，一个保证特征版本变化后线上能回滚；退役迁移与版本恢复不同。 |
| 308 | g-learning-transfer-measure-practice-effect / wave17-growth-005 | 合并 | 都判断培训完成是否转化为工作行为或错误率改善；保留行为观察、结果指标和下一轮训练调整。 |
| 309 | bulk1000-e-070-v1 / next-delivery-092 | 合并 | 都处理供应商承诺或产能不足以满足业务需求时如何评估风险；保留业务影响、替代方案和恢复承诺。 |
| 310 | exp1500-h-017 / h-attribution-ai-assisted-work-disclosure | 保留 | 一个解释团队设计项目中的个人贡献，一个披露 AI 在分析、代码和文档中的辅助范围；团队职责和工具来源应分别考察。 |
| 311 | d-incident-prevent-personal-error / exp1500-g-019 | 保留 | 一个从个人失误改进习惯或防护，一个验证跨版本兼容缺陷的复盘措施是否有效；个人行为与系统回归治理不同。 |
| 312 | bulk-a-debug-queue-backlog / wave16-d-054 | 合并 | 都处理队列积压恢复后再次冲击下游；保留回放速率、积压反弹和下游容量保护。 |
| 313 | d-project-management-recover-dependency-baseline / exp1500-d-050 | 合并 | 都在外部依赖交付日期不可信或延期后重算项目影响；保留重建基线、替代路径和公开风险。 |
| 314 | bulk1000-h-098-v1 / wave16-growth-050 | 合并 | 都判断岗位描述、口头承诺与实际工作长期不一致；保留确认事实、差异影响及是否继续适配。 |
| 315 | g-resilience-recovery-after-setback-support / g-resilience-repeated-rejection | 合并 | 都处理方案多次或公开被否决后的恢复和判断修正；保留吸收有效信息、避免盲目加码和重设下一步。 |
| 316 | b-data-model-effective-dated-ownership / bulk-b-data-04 | 保留 | 一个依据有效时间还原历史负责人，一个在历史销售被补录或更正后比较当时记录与当前事实；有效时间与修订时间不同。 |
| 317 | wave16-growth-046 / wave17-growth-001 | 合并 | 与第 171、221 对同属新工具或方法与现有团队流程不兼容时的迁移判断；保留推广条件和小范围验证。 |
| 318 | bulk-a-frontend-hydration-mismatch / bulk-a-frontend-render-waterfall | 保留 | 一个诊断服务端与客户端渲染结果不一致，一个排查首屏资源/组件加载瀑布；渲染正确性与加载性能不同。 |
| 319 | bulk-a-backend-backpressure-queue-growth / exp1500-d-040 | 保留 | 一个设计持续增长队列的背压机制，一个在故障恢复后限制旧消息重放；日常负载控制与事故恢复不同。 |
| 320 | bulk1000-f-074-v1 / exp1500-f-008 | 合并 | 都处理管理者只向上报告好消息、无法获得真实团队状态；保留二线管理者如何建立安全且可核验的信息渠道。 |
| 321 | bulk1000-f-080-v1 / exp1500-f-002 | 保留 | 一个检验培养活动是否改变行为，一个帮助习惯等待指令的成员形成独立判断；项目成效评估与个体辅导不同。 |
| 322 | a-engineering-systems-architecture-upgrade / d-project-management-biggest-challenge | 保留 | 一个复盘架构升级动因和挑战，一个开放询问项目中最大的挑战；技术决策与一般经历探索不同。 |
| 323 | a-mfe-auth-session-cross-app / bulk-a-client-deep-link-auth-boundary | 保留 | 一个设计多个子应用之间的认证状态边界，一个保护深链路由的认证和授权；跨应用会话共享与路由入口安全不同。 |
