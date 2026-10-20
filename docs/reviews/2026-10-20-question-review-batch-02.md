# 全量题目逐题复核｜批次 02：扩展题 1–100

> 日期：2026-10-20　|　范围：按 `questionId` 排序的前 100 道 `qualityTier: extended` 题目　|　状态：完成内容复核。

## 复核口径

逐题阅读简体中文与英文记录，检查题目能否提出清楚、准确且可使用的判断任务；题面是否预设未核实事实、范围是否前后错位；signals/followUps 是否真正围绕题目并能支持事实核验、方案比较、结果标准或可验证影响；双语是否表达同一问题；来源和标签是否有明显异常。

`docs/content-style-guide.md` 是核心题写作规范。本批均为 extended，因此不因缺少 core 专用 `weakAnswer`、四档 `anchors` 或 `perspectiveReview: reviewed` 判为不合格；这些字段只在未来考虑升为 core 时另行审核。空追问也不自动判失败，需结合题目本身是否能有效 elicitation 证据来判断。此次只审查并记录问题，没有改动题目源文件。

## 结果

**87 PASS，13 REVISE。** 已核实本批 100 个 questionId 都有 zh-CN/en 两份记录，locale 和 ID 字段匹配；所有记录当前均为 `extended`。

| # | questionId | 判定 | 发现与建议 |
|---:|---|---|---|
| 1 | `a-ai-engineering-eval-set-design` | PASS | — |
| 2 | `a-ai-engineering-feature-model-cost` | PASS | — |
| 3 | `a-ai-engineering-human-review-capacity` | REVISE | 中英文各列 7 条追问，部分重复核实积压、审核覆盖和过载处置；保留最能区分容量分流与风险控制的探针，避免把同一判断拆成过长清单。 |
| 4 | `a-ai-engineering-latency-budget` | PASS | — |
| 5 | `a-ai-engineering-model-change-release` | PASS | — |
| 6 | `a-ai-engineering-rag-permission-change` | PASS | — |
| 7 | `a-ai-engineering-retrieval-quality-regression` | PASS | — |
| 8 | `a-ai-engineering-ship-ai-output-gate` | REVISE | 题干把配置审核与生成代码并列，风险和验证门槛不同；限定一种输出，或要求先澄清输出类型与影响边界。 |
| 9 | `a-ai-engineering-source-deletion-propagation` | PASS | — |
| 10 | `a-ai-engineering-traceable-release` | REVISE | 中英文追问不对齐：中文没有追问，英文有两条；补齐中文对应或同步删减英文。 |
| 11 | `a-ai-eval-customer-harm-weighting` | PASS | — |
| 12 | `a-ai-rag-source-freshness-contract` | PASS | — |
| 13 | `a-ai-tool-permission-change-mid-run` | PASS | — |
| 14 | `a-backend-read-replica-consistency-window` | REVISE | 中文标题有“接口接口约定”重复用词，删去一处。 |
| 15 | `a-coding-abstraction-form-state-boundaries` | PASS | — |
| 16 | `a-coding-abstraction-lru-cache-sketch` | PASS | — |
| 17 | `a-coding-abstraction-mobile-state-restore` | PASS | — |
| 18 | `a-coding-abstraction-ordered-lookup-structure` | PASS | — |
| 19 | `a-coding-abstraction-performance-pitfalls` | PASS | — |
| 20 | `a-coding-abstraction-retry-limiter` | PASS | — |
| 21 | `a-coding-abstraction-streaming-validation` | REVISE | 六条追问中“递归溢出”“多个来源参与同一值”偏离 CSV 流式解析，像其他题目的残留；替换为跨块格式边界、错误恢复和资源关闭等直接相关探针。 |
| 22 | `a-compiler-diagnostic-source-map-macro-expansion` | PASS | — |
| 23 | `a-compiler-incremental-build-dependency-invalidation` | PASS | — |
| 24 | `a-compiler-language-abi-boundary-change` | PASS | — |
| 25 | `a-computer-science-cache-boundaries` | PASS | — |
| 26 | `a-computer-science-deadlock-conditions` | PASS | — |
| 27 | `a-computer-science-first-request-latency` | PASS | — |
| 28 | `a-computer-science-index-lookup-limits` | PASS | — |
| 29 | `a-computer-science-memory-growth-vs-leak` | REVISE | 英文题干包含原生内存，中文题干未包含，但中文 signals/followUps 又涉及原生分配与堆外内存；统一双语题干范围。 |
| 30 | `a-computer-science-process-vs-thread` | PASS | — |
| 31 | `a-computer-science-slow-page-causal-chain` | PASS | — |
| 32 | `a-computer-science-source-to-execution` | PASS | — |
| 33 | `a-database-backfill-lock-contention` | PASS | — |
| 34 | `a-databases-index-write-amplification` | REVISE | 中英文追问都混入 `【...】` 标记的完整主问题，且主问题已覆盖该场景；删除合并残留并去掉重复探针。 |
| 35 | `a-debugging-cache-stampede-warmup` | REVISE | 中英文追问都混入 `【...】` 标记的完整主问题；删除残留并精简重复探针，保留缓存击穿与预热的直接证据。 |
| 36 | `a-debugging-intermittent-duplicate-submit` | PASS | — |
| 37 | `a-debugging-narrowing-slow-api` | PASS | — |
| 38 | `a-debugging-split-bundle-slower` | PASS | — |
| 39 | `a-debugging-stale-read-after-cache-bust` | PASS | — |
| 40 | `a-distributed-queue-visibility-vs-processing` | PASS | — |
| 41 | `a-distributed-systems-deadline-budget-fanout` | REVISE | 中英文第三条追问基本复述主问题中的端到端耗时与 deadline 传播；删除这条重复题干，保留能推进事实核验的追问。 |
| 42 | `a-distributed-systems-partition-key-hotspot` | PASS | — |
| 43 | `a-engineering-systems-alert-noise-slo` | PASS | — |
| 44 | `a-engineering-systems-anticorruption-layer` | PASS | — |
| 45 | `a-engineering-systems-architecture-upgrade` | PASS | — |
| 46 | `a-engineering-systems-build-vs-open-source` | REVISE | 主问题列自研、开源、购买三种方案，但 intent、signals 和追问主要比较自研与开源；统一决策选项或补足购买方案的评估维度。 |
| 47 | `a-engineering-systems-ci-untrusted-change` | REVISE | 英文题干明确覆盖 secrets 读取及可信制品被投毒，中文只写流水线信任边界和凭证暴露；中文追问也缺失。对齐题干的具体风险和双语追问。 |
| 48 | `a-engineering-systems-cost-reliability-tradeoff` | PASS | — |
| 49 | `a-engineering-systems-credential-rotation` | REVISE | 中英文追问数量和顺序不一致（3 条/5 条），且第三条均残留 `【...】` 合并主问题；删除残留并逐条对齐。 |
| 50 | `a-engineering-systems-debt-paydown` | PASS | — |
| 51 | `a-engineering-systems-dependency-change` | PASS | — |
| 52 | `a-engineering-systems-incident-update-evidence` | PASS | — |
| 53 | `a-engineering-systems-industry-direction` | PASS | — |
| 54 | `a-engineering-systems-infrastructure-drift` | PASS | — |
| 55 | `a-engineering-systems-progressive-fleet-deploy` | PASS | — |
| 56 | `a-engineering-systems-release-rollback` | PASS | — |
| 57 | `a-engineering-systems-repo-strategy` | PASS | — |
| 58 | `a-engineering-systems-technical-gain` | PASS | — |
| 59 | `a-engineering-systems-test-critical-path` | PASS | — |
| 60 | `a-framework-async-transition-stale-result` | PASS | — |
| 61 | `a-framework-form-state-validation-boundary` | PASS | — |
| 62 | `a-framework-server-state-cache-invalidation` | PASS | — |
| 63 | `a-framework-upgrade-hidden-default-change` | PASS | — |
| 64 | `a-mfe-auth-session-cross-app` | PASS | — |
| 65 | `a-mfe-cross-app-event-contract` | PASS | — |
| 66 | `a-mfe-cross-team-observability` | PASS | — |
| 67 | `a-mfe-css-style-isolation-collision` | PASS | — |
| 68 | `a-mfe-independent-deploy-boundary` | PASS | — |
| 69 | `a-mfe-monolith-incremental-extraction` | PASS | — |
| 70 | `a-mfe-runtime-failure-isolation` | PASS | — |
| 71 | `a-mfe-shared-dependencies-version-governance` | PASS | — |
| 72 | `a-mfe-shell-routing-history-contract` | PASS | — |
| 73 | `a-microservices-data-ownership-migration` | PASS | — |
| 74 | `a-microservices-read-model-freshness-contract` | PASS | — |
| 75 | `a-microservices-saga-compensation-boundary` | PASS | — |
| 76 | `a-microservices-service-ownership-oncall-gap` | PASS | — |
| 77 | `a-microservices-team-boundary-change` | PASS | — |
| 78 | `a-mobile-cold-start-budget-low-end-device` | PASS | — |
| 79 | `a-mobile-offline-queue-auth-expiry` | PASS | — |
| 80 | `a-monorepo-codeowner-permission-boundaries` | PASS | — |
| 81 | `a-monorepo-cyclic-dependency-boundary` | PASS | — |
| 82 | `a-monorepo-migration-repo-split-sequence` | PASS | — |
| 83 | `a-monorepo-package-ownership-contract` | PASS | — |
| 84 | `a-monorepo-package-release-independent-versioning` | PASS | — |
| 85 | `a-monorepo-selective-ci-change-detection` | PASS | — |
| 86 | `a-programming-languages-ownership-transfer-async` | PASS | — |
| 87 | `a-programming-languages-unicode-normalization-identity` | PASS | — |
| 88 | `a-quality-accessible-keyboard-screen-reader-release` | PASS | — |
| 89 | `a-quality-critical-user-journey-test-plan` | PASS | — |
| 90 | `a-quality-data-retention-deletion-proof` | PASS | — |
| 91 | `a-quality-dependency-supply-chain-control` | PASS | — |
| 92 | `a-quality-error-budget-release-policy` | PASS | — |
| 93 | `a-quality-restore-drill-evidence` | PASS | — |
| 94 | `a-quality-threat-model-new-integration` | PASS | — |
| 95 | `a-security-download-url-authorization-lifetime` | REVISE | 中英文第三条追问含 `【...】` 标记并嵌入整段 24 小时签名链接场景，与题干和其他撤权追问重复；删除或缩短成一条探针并去重。 |
| 96 | `a-system-design-admin-permissions` | PASS | — |
| 97 | `a-system-design-article-publisher` | PASS | — |
| 98 | `a-system-design-async-coupon-issuing-review` | PASS | — |
| 99 | `a-system-design-av-decode-playback` | PASS | — |
| 100 | `a-system-design-av-editor` | PASS | — |

## REVISE 汇总

- `a-ai-engineering-human-review-capacity`：中英文各列 7 条追问，部分重复核实积压、审核覆盖和过载处置；保留最能区分容量分流与风险控制的探针，避免把同一判断拆成过长清单。
- `a-ai-engineering-ship-ai-output-gate`：题干把配置审核与生成代码并列，风险和验证门槛不同；限定一种输出，或要求先澄清输出类型与影响边界。
- `a-ai-engineering-traceable-release`：中英文追问不对齐：中文没有追问，英文有两条；补齐中文对应或同步删减英文。
- `a-backend-read-replica-consistency-window`：中文标题有“接口接口约定”重复用词，删去一处。
- `a-coding-abstraction-streaming-validation`：六条追问中“递归溢出”“多个来源参与同一值”偏离 CSV 流式解析，像其他题目的残留；替换为跨块格式边界、错误恢复和资源关闭等直接相关探针。
- `a-computer-science-memory-growth-vs-leak`：英文题干包含原生内存，中文题干未包含，但中文 signals/followUps 又涉及原生分配与堆外内存；统一双语题干范围。
- `a-databases-index-write-amplification`：中英文追问都混入 `【...】` 标记的完整主问题，且主问题已覆盖该场景；删除合并残留并去掉重复探针。
- `a-debugging-cache-stampede-warmup`：中英文追问都混入 `【...】` 标记的完整主问题；删除残留并精简重复探针，保留缓存击穿与预热的直接证据。
- `a-distributed-systems-deadline-budget-fanout`：中英文第三条追问基本复述主问题中的端到端耗时与 deadline 传播；删除这条重复题干，保留能推进事实核验的追问。
- `a-engineering-systems-build-vs-open-source`：主问题列自研、开源、购买三种方案，但 intent、signals 和追问主要比较自研与开源；统一决策选项或补足购买方案的评估维度。
- `a-engineering-systems-ci-untrusted-change`：英文题干明确覆盖 secrets 读取及可信制品被投毒，中文只写流水线信任边界和凭证暴露；中文追问也缺失。对齐题干的具体风险和双语追问。
- `a-engineering-systems-credential-rotation`：中英文追问数量和顺序不一致（3 条/5 条），且第三条均残留 `【...】` 合并主问题；删除残留并逐条对齐。
- `a-security-download-url-authorization-lifetime`：中英文第三条追问含 `【...】` 标记并嵌入整段 24 小时签名链接场景，与题干和其他撤权追问重复；删除或缩短成一条探针并去重。

## 本批观察

通过的题目大多能把技术故障、系统边界或发布选择落到事实、风险、权衡和验证证据；扩展题的追问数量和注解深度有意保留原样，不用核心题字段门槛制造形式性问题。实际需修的问题集中在中英文范围不一致、历史合并残留、重复追问和少数选项范围错位。
