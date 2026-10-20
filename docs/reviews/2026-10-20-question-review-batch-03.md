# 全量题目逐题复核｜批次 03：扩展题 101–200

> 日期：2026-10-20　|　范围：按 `questionId` 排序的第 101–200 道 `qualityTier: extended` 题目　|　状态：完成内容复核。

## 复核口径

逐题阅读简体中文与英文记录，检查题目能否提出清楚、准确且可使用的判断任务；题面是否预设未核实事实、范围是否前后错位；signals/followUps 是否围绕题目并能支持事实核验、方案比较、结果标准或可验证影响；双语是否表达同一问题；来源和标签是否有明显异常。

`docs/content-style-guide.md` 是核心题写作规范。本批均为 extended，因此不因缺少 core 专用 `weakAnswer`、四档 `anchors` 或 `perspectiveReview: reviewed` 判为不合格；这些字段只在未来考虑升为 core 时另行审核。空追问也不自动判失败，需结合题目本身判断。此次只复核并记录，没有改动题目源文件。

## 结果

**87 PASS，13 REVISE。** 25 个题目一组完成双语逐对复核；所有 100 个 questionId 均有中英文记录。

| # | questionId | 判定 | 发现与建议 |
|---:|---|---|---|
| 1 | `a-system-design-campaign-builder` | PASS | — |
| 2 | `a-system-design-capacity-estimate-first` | PASS | — |
| 3 | `a-system-design-collaborative-document` | PASS | — |
| 4 | `a-system-design-cost-model` | PASS | — |
| 5 | `a-system-design-cross-border-data-compliance` | PASS | — |
| 6 | `a-system-design-five-x-growth-bottlenecks` | PASS | — |
| 7 | `a-system-design-human-ai-writing` | PASS | — |
| 8 | `a-system-design-immersive-feed` | PASS | — |
| 9 | `a-system-design-large-file-upload` | REVISE | 英文题面限定协作产品、可恢复上传、校验/扫描通过后其他成员才可见；中文只说大文件上传，漏掉协作权限与安全扫描等核心约束。补齐关键事实边界，使两种语言评估同一设计问题。 |
| 10 | `a-system-design-llm-chat` | PASS | — |
| 11 | `a-system-design-recommender-cost` | PASS | — |
| 12 | `a-system-design-referral-campaign` | PASS | — |
| 13 | `a-system-design-rich-editor-model` | PASS | — |
| 14 | `a-system-design-risk-control` | PASS | — |
| 15 | `a-system-design-search-system` | PASS | — |
| 16 | `a-system-design-streaming-loading` | PASS | — |
| 17 | `a-system-design-tech-choice-tradeoffs` | PASS | — |
| 18 | `a-system-design-trading-marketing` | PASS | — |
| 19 | `ai-governance-benchmark-contamination` | PASS | — |
| 20 | `ai-governance-evidence-traceability-user-claims` | PASS | — |
| 21 | `ai-governance-harmful-output-incident-accountability` | PASS | — |
| 22 | `ai-governance-model-version-behavior-drift` | PASS | — |
| 23 | `ai-governance-production-sampling-privacy` | PASS | — |
| 24 | `ai-governance-provider-data-and-change-terms` | PASS | — |
| 25 | `ai-governance-release-gate-risk-thresholds` | PASS | — |
| 26 | `ai-governance-tool-permission-boundaries` | PASS | — |
| 27 | `ai-governance-uncertainty-safe-fallback` | PASS | — |
| 28 | `ai-governance-user-segment-harm-disparity` | PASS | — |
| 29 | `b-commercial-rules-contract-exception-expiry` | PASS | — |
| 30 | `b-commercial-rules-credit-expiry` | PASS | — |
| 31 | `b-commercial-rules-ledger-design` | PASS | — |
| 32 | `b-commercial-rules-money-and-currency` | PASS | — |
| 33 | `b-commercial-rules-promotion-stacking` | REVISE | 中英文追问重复核实规则冲突与部分退款优惠回退；每个主题保留一个追问，删去重复项。 |
| 34 | `b-commercial-rules-settlement-split` | REVISE | 末尾追问转向平台券、会员折扣、渠道补贴的优惠分摊与部分退款，偏离阶梯分成且与 promotion-stacking 重叠；改为聚焦分成规则、结算周期和冲回责任。 |
| 35 | `b-data-engineering-batch-streaming-need` | PASS | — |
| 36 | `b-data-model-active-user-grain` | PASS | — |
| 37 | `b-data-model-commercial-mapping` | PASS | — |
| 38 | `b-data-model-consent-purpose-history` | REVISE | 追问中嵌入完整替代题面，重复主问题；删除嵌入题面，收敛至用途范围、延迟传播及既有聚合数据处理。 |
| 39 | `b-data-model-contract-evolution` | PASS | — |
| 40 | `b-data-model-effective-dated-ownership` | PASS | — |
| 41 | `b-data-model-erasure-audit-history` | REVISE | 追问嵌入重复的完整题面；中文另有“不可逆（可以安全撤回）”矛盾解释。删除合并题面并修正或删去括注。 |
| 42 | `b-data-model-event-grain` | PASS | — |
| 43 | `b-data-model-financial-adjustment-lineage` | PASS | — |
| 44 | `b-data-model-industry-interop` | PASS | — |
| 45 | `b-data-model-late-event-correction` | PASS | — |
| 46 | `b-data-model-order-payment-refund` | PASS | — |
| 47 | `b-data-model-ownership-lineage` | PASS | — |
| 48 | `b-data-model-ownership-transfer-effective-time` | PASS | — |
| 49 | `b-data-model-policy-version-at-event-time` | PASS | — |
| 50 | `b-data-model-product-entitlement` | PASS | — |
| 51 | `b-data-model-source-of-truth-conflict` | PASS | — |
| 52 | `b-data-quality-blocking-threshold` | PASS | — |
| 53 | `b-feature-model-entitlement-precedence` | PASS | — |
| 54 | `b-feature-model-feature-retirement-compatibility` | PASS | — |
| 55 | `b-feature-model-freshness-cost` | PASS | — |
| 56 | `b-feature-model-late-label-maturity` | PASS | — |
| 57 | `b-feature-model-time-semantics` | PASS | — |
| 58 | `b-model-evolution-concept-split` | PASS | — |
| 59 | `b-model-evolution-eligibility-history` | PASS | — |
| 60 | `b-model-evolution-identity-merge-audit` | PASS | — |
| 61 | `b-model-evolution-reopened-work-item` | PASS | — |
| 62 | `b-model-evolution-retroactive-correction-boundary` | PASS | — |
| 63 | `b-model-evolution-schema-unknown-enum` | PASS | — |
| 64 | `b-product-model-service-level-entitlement` | PASS | — |
| 65 | `b-product-project-model-business-map` | PASS | — |
| 66 | `b-product-project-model-overview-facts` | PASS | — |
| 67 | `b-product-project-model-upstream-downstream` | PASS | — |
| 68 | `bulk-a-artifact-retention-and-reproducibility` | PASS | — |
| 69 | `bulk-a-atomic-memory-ordering` | REVISE | 没有指定语言或内存模型，题目中“仅原子 flag 不保证 data 可见”并非跨模型恒真；限定 relaxed atomic/具体语言语境，或把情境写成待验证假设。 |
| 70 | `bulk-a-audit-log-query` | PASS | — |
| 71 | `bulk-a-backend-backpressure-queue-growth` | PASS | — |
| 72 | `bulk-a-backend-connection-pool-exhaustion` | PASS | — |
| 73 | `bulk-a-backend-idempotency-key-scope` | REVISE | 中文把 API 幂等“结果重放”解释为重新处理历史消息，混淆接口重试与消息消费幂等；改为同键并发只执行一次、重试返回已保存结果，并对齐英文含义。 |
| 74 | `bulk-a-backend-outbox-ordering` | PASS | — |
| 75 | `bulk-a-backend-pagination-consistency` | PASS | — |
| 76 | `bulk-a-backend-rate-limit-distributed` | REVISE | 英文有三条限流故障、配额稳定性和审计追问，中文追问为空；补充对应中文，或两种语言同步收敛。 |
| 77 | `bulk-a-btree-vs-lsm-write-profile` | PASS | — |
| 78 | `bulk-a-cache-coherence-sharing` | PASS | — |
| 79 | `bulk-a-ci-migration-sequencing` | PASS | — |
| 80 | `bulk-a-client-background-work-expiration` | PASS | — |
| 81 | `bulk-a-client-deep-link-auth-boundary` | PASS | — |
| 82 | `bulk-a-client-render-thread-jank` | PASS | — |
| 83 | `bulk-a-code-concurrent-expiring-map` | REVISE | 英文追问混入容量增长、旧客户端升级、偶发问题、发布门禁和预算等通用题库话术，只有末条与过期映射有关；删去离题项并保持双语一致。 |
| 84 | `bulk-a-code-deep-equality-cyclic-objects` | PASS | — |
| 85 | `bulk-a-code-deterministic-task-scheduler` | REVISE | 追问再次要求设计并实现几乎相同的任务池，与主问题重复；将追问改为具体状态竞态/关闭语义，或移除重复项。 |
| 86 | `bulk-a-code-incremental-parser` | REVISE | 中英文追问围绕容量十倍、旧客户端、偶发问题、发布门禁和预算等通用场景，未深入 UTF-8 增量解析；替换为跨块字符、截断输入、恢复策略及内存边界验证。 |
| 87 | `bulk-a-context-switch-cost` | PASS | — |
| 88 | `bulk-a-debug-after-schema-rollout` | PASS | — |
| 89 | `bulk-a-debug-clock-skew` | PASS | — |
| 90 | `bulk-a-debug-data-drift` | PASS | — |
| 91 | `bulk-a-debug-partial-dependency-outage` | PASS | — |
| 92 | `bulk-a-debug-queue-backlog` | PASS | — |
| 93 | `bulk-a-debug-tail-latency` | PASS | — |
| 94 | `bulk-a-delayed-task-scheduler` | PASS | — |
| 95 | `bulk-a-dependency-update-policy` | PASS | — |
| 96 | `bulk-a-dns-cache-staleness` | PASS | — |
| 97 | `bulk-a-environment-parity` | PASS | — |
| 98 | `bulk-a-feature-flag-control-plane` | REVISE | 中英文追问含两条 `【...】` 标记的完整场景题，并与主问题/其他追问重复；删除合并残留并围绕缓存默认值、紧急关闭和租户隔离保留精简探针。 |
| 99 | `bulk-a-flaky-test-triage` | REVISE | 英文题干加入共享状态、资源竞争、时钟和顺序依赖等范围，宽于中文；英文追问为 6 条、中文 3 条，且夹有与测试排查无关的运行成本问题。对齐主问题范围与双语追问，删除离题项。 |
| 100 | `bulk-a-framework-angular-change-detection-boundary` | PASS | — |

## REVISE 汇总

- `a-system-design-large-file-upload`：英文题面限定协作产品、可恢复上传、校验/扫描通过后其他成员才可见；中文只说大文件上传，漏掉协作权限与安全扫描等核心约束。补齐关键事实边界，使两种语言评估同一设计问题。
- `b-commercial-rules-promotion-stacking`：中英文追问重复核实规则冲突与部分退款优惠回退；每个主题保留一个追问，删去重复项。
- `b-commercial-rules-settlement-split`：末尾追问转向平台券、会员折扣、渠道补贴的优惠分摊与部分退款，偏离阶梯分成且与 promotion-stacking 重叠；改为聚焦分成规则、结算周期和冲回责任。
- `b-data-model-consent-purpose-history`：追问中嵌入完整替代题面，重复主问题；删除嵌入题面，收敛至用途范围、延迟传播及既有聚合数据处理。
- `b-data-model-erasure-audit-history`：追问嵌入重复的完整题面；中文另有“不可逆（可以安全撤回）”矛盾解释。删除合并题面并修正或删去括注。
- `bulk-a-atomic-memory-ordering`：没有指定语言或内存模型，题目中“仅原子 flag 不保证 data 可见”并非跨模型恒真；限定 relaxed atomic/具体语言语境，或把情境写成待验证假设。
- `bulk-a-backend-idempotency-key-scope`：中文把 API 幂等“结果重放”解释为重新处理历史消息，混淆接口重试与消息消费幂等；改为同键并发只执行一次、重试返回已保存结果，并对齐英文含义。
- `bulk-a-backend-rate-limit-distributed`：英文有三条限流故障、配额稳定性和审计追问，中文追问为空；补充对应中文，或两种语言同步收敛。
- `bulk-a-code-concurrent-expiring-map`：英文追问混入容量增长、旧客户端升级、偶发问题、发布门禁和预算等通用题库话术，只有末条与过期映射有关；删去离题项并保持双语一致。
- `bulk-a-code-deterministic-task-scheduler`：追问再次要求设计并实现几乎相同的任务池，与主问题重复；将追问改为具体状态竞态/关闭语义，或移除重复项。
- `bulk-a-code-incremental-parser`：中英文追问围绕容量十倍、旧客户端、偶发问题、发布门禁和预算等通用场景，未深入 UTF-8 增量解析；替换为跨块字符、截断输入、恢复策略及内存边界验证。
- `bulk-a-feature-flag-control-plane`：中英文追问含两条 `【...】` 标记的完整场景题，并与主问题/其他追问重复；删除合并残留并围绕缓存默认值、紧急关闭和租户隔离保留精简探针。
- `bulk-a-flaky-test-triage`：英文题干加入共享状态、资源竞争、时钟和顺序依赖等范围，宽于中文；英文追问为 6 条、中文 3 条，且夹有与测试排查无关的运行成本问题。对齐主问题范围与双语追问，删除离题项。

## 本批观察

通过的题目大多能把技术系统、数据治理或业务规则问题落到事实边界、权衡条件和验证证据。需修问题主要是旧题合并残留、双语范围漂移、离题追问和少量概念解释不准确。核心题专用字段未作为扩展题缺陷计算。
