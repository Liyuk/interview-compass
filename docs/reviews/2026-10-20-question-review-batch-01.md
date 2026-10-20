# 全量题目逐题复核｜批次 01：核心题

> 日期：2026-10-20　|　范围：100 道 `qualityTier: core` 题目　|　状态：完成内容复核，待后续决定是否修订题目。

## 复核口径

逐道检查中英文两份记录，依据 [`docs/content-style-guide.md`](../content-style-guide.md)：单一判断目标；3–4 条可观察信号；2–3 条针对本题的追问；一个具体证据缺口；四档题目专属锚点；题干符合受众视角；中英文意思、数量和顺序一致；标签与来源有依据。另以用户反复强调的判断路径审题：先厘清事实与边界，再定位真正问题，接着比较方案、效用和代价，并检查结果标准、度量或可验证影响。

状态 `PASS` 表示当前题目达到发布复核标准；`REVISE` 表示有明确的题干或追问需要改写。此次只做复核和记录，没有改动题目源文件。

## 结果

**91 PASS，9 REVISE。** 所有 100 个核心题 ID 均逐项登记；复核同时检查了中英文版本。

| # | questionId | 判定 | 发现与建议 |
|---:|---|---|---|
| 1 | `a-ai-engineering-agent-duplicate-side-effect` | PASS | — |
| 2 | `a-ai-engineering-eval-disagreement` | PASS | — |
| 3 | `a-ai-engineering-resume-claim-verification` | PASS | — |
| 4 | `a-coding-abstraction-defensive-edge-cases` | REVISE | 追问未深入“输入边界遗漏导致问题”的失败证据；改为核实事件成因、影响与验证方式。 |
| 5 | `a-computer-science-transaction-isolation` | REVISE | “是否遇到过隔离级别相关问题”过泛；改为追问具体异常及其对应的数据保证。 |
| 6 | `a-databases-read-replica-stale-read` | PASS | — |
| 7 | `a-debugging-api-works-locally-frontend-disagrees` | REVISE | 题干把前端写成“坚持”某种看法，形成对抗框架；改为中性描述证据不一致。 |
| 8 | `a-engineering-systems-schema-deploy-rollback` | PASS | — |
| 9 | `a-monorepo-build-graph-invalidation` | PASS | — |
| 10 | `a-system-design-cross-system-consistency` | PASS | — |
| 11 | `b-business-context-marketplace-liquidity` | PASS | — |
| 12 | `b-business-context-marketplace-take-rate-change` | PASS | — |
| 13 | `b-business-context-price-increase-churn-risk` | PASS | — |
| 14 | `b-business-context-renewal-risk-segmentation` | PASS | — |
| 15 | `b-business-context-replacement-paths` | PASS | — |
| 16 | `b-business-context-revenue-recognition-vs-user-value` | PASS | — |
| 17 | `b-business-context-service-tier-contribution` | PASS | — |
| 18 | `b-business-context-support-obligation` | PASS | — |
| 19 | `b-business-context-unit-economics-service-mix` | PASS | — |
| 20 | `b-business-context-user-task-chain` | PASS | — |
| 21 | `b-business-context-whole-then-part` | REVISE | 用“没有全局视角的人怎么判断”假设他人；聚焦回答者自己如何说明全局与局部关系。 |
| 22 | `b-commercial-rules-bundle-discount-allocation` | PASS | — |
| 23 | `b-commercial-rules-cancellation-fee` | PASS | — |
| 24 | `bulk-c-metrics-02` | PASS | — |
| 25 | `bulk-c-metrics-03` | PASS | — |
| 26 | `bulk-c-product-02` | PASS | — |
| 27 | `bulk-e-cross-team-decision-deadlock` | PASS | — |
| 28 | `bulk-g-growth-goal-without-promotion-slot` | PASS | — |
| 29 | `bulk-g-growth-path-specialist-vs-manager` | PASS | — |
| 30 | `bulk-g-learning-from-rejected-promotion` | PASS | — |
| 31 | `bulk-g-recovery-after-public-mistake` | PASS | — |
| 32 | `bulk-growth-12` | PASS | — |
| 33 | `bulk1000-d-052-v1` | REVISE | 主问题中内嵌“追问”标签，与独立 followUps 字段重复；将相关依赖滑移探针移入追问或删除。 |
| 34 | `bulk1000-d-057-v1` | PASS | — |
| 35 | `bulk1000-e-070-v1` | PASS | — |
| 36 | `bulk1000-g-085-v1` | PASS | — |
| 37 | `bulk1000-h-093-v1` | PASS | — |
| 38 | `bulk1000-h-098-v1` | PASS | — |
| 39 | `c-metrics-causality-competitor-benchmark` | PASS | — |
| 40 | `c-prioritization-top-three-stop-two` | PASS | — |
| 41 | `c-product-judgment-industry-leading-claim` | PASS | — |
| 42 | `d-capacity-headcount-for-ambiguous-problem` | PASS | — |
| 43 | `d-capacity-planning-incident-vs-roadmap-tradeoff` | PASS | — |
| 44 | `d-capacity-planning-interrupt-load-budget` | PASS | — |
| 45 | `d-capacity-resources-and-scope` | PASS | — |
| 46 | `e-communication-correction-to-external-audience` | PASS | — |
| 47 | `e-communication-customer-impact-notice` | PASS | — |
| 48 | `e-communication-make-value-visible` | PASS | — |
| 49 | `e-communication-rebuild-trust-after-scrapping` | PASS | — |
| 50 | `e-communication-risk-update-without-certainty` | PASS | — |
| 51 | `e-influence-break-constraints` | PASS | — |
| 52 | `exp1500-f-022` | PASS | — |
| 53 | `exp1500-f-038` | PASS | — |
| 54 | `f-delegation-succession-be-replaceable` | PASS | — |
| 55 | `f-delegation-succession-decision-rehearsal` | PASS | — |
| 56 | `f-delegation-succession-decision-rights` | PASS | — |
| 57 | `f-delegation-succession-frontline-leaver` | PASS | — |
| 58 | `f-delegation-succession-internal-external-fairness` | PASS | — |
| 59 | `f-frontline-management-absence-test` | PASS | — |
| 60 | `f-frontline-management-conflict-with-report` | REVISE | “举报是否属实或在挑战权威”构成错误二选一；先核事实和影响，再说明维持或调整决定。 |
| 61 | `f-frontline-management-improvement-plan` | PASS | — |
| 62 | `f-frontline-management-inherited-harmful-member` | REVISE | 题干预先认定继承员工“有害”，使用推卸/挑拨等标签；改为先描述他人反馈并询问如何核实及保护团队。 |
| 63 | `f-frontline-management-judge-member-conflict` | PASS | — |
| 64 | `f-frontline-management-mechanism-over-confrontation` | PASS | — |
| 65 | `f-growth-development-coach-high-potential-quiet-contributor` | PASS | — |
| 66 | `f-growth-development-coach-new-lead` | PASS | — |
| 67 | `f-growth-development-concrete-milestone` | PASS | — |
| 68 | `f-growth-development-fatigue-and-inertia` | PASS | — |
| 69 | `f-growth-development-inconsistent-performance` | PASS | — |
| 70 | `f-growth-development-legacy-system-market-value` | PASS | — |
| 71 | `f-growth-development-newcomer-ramp` | PASS | — |
| 72 | `f-hiring-candidate-promise-honesty` | PASS | — |
| 73 | `f-hiring-cross-functional-joint-interview` | PASS | — |
| 74 | `f-hiring-lead-leveling-evidence` | PASS | — |
| 75 | `f-manager-of-managers-bypass-the-lead` | PASS | — |
| 76 | `f-manager-of-managers-conflict-between-leads` | PASS | — |
| 77 | `f-manager-of-managers-conflicting-local-optima` | PASS | — |
| 78 | `f-manager-of-managers-cost-cutting-restructure` | REVISE | 题干把组织重复和应合并当成既定事实；应先说明成本目标、关键能力和约束，再比较调整方案。 |
| 79 | `f-manager-of-managers-decision-review` | PASS | — |
| 80 | `f-manager-of-managers-employee-backlash` | REVISE | “坚持还是妥协”是假二分，并预设调整长期有利；明确这是待验证主张，允许维持、修订、暂停或撤回。 |
| 81 | `f-manager-of-managers-filtered-reporting` | PASS | — |
| 82 | `f-manager-of-managers-goal-cascade-distortion` | PASS | — |
| 83 | `f-mom-calibration-evidence` | PASS | — |
| 84 | `f-team-design-cliques` | PASS | — |
| 85 | `f-team-design-diverse-and-multilingual` | PASS | — |
| 86 | `f-team-design-expert-load-map` | PASS | — |
| 87 | `f-team-design-org-matches-architecture` | PASS | — |
| 88 | `f-team-design-outsider-leader-onboarding` | PASS | — |
| 89 | `f-team-design-product-ops-research-loop` | PASS | — |
| 90 | `g-learning-transfer-unfamiliar-domain` | PASS | — |
| 91 | `g-structured-reflection-improvement-executed` | PASS | — |
| 92 | `g-structured-reflection-project-failure` | PASS | — |
| 93 | `h-attribution-ai-assisted-work-disclosure` | PASS | — |
| 94 | `h-attribution-credit-dispute` | PASS | — |
| 95 | `h-attribution-lead-or-manage` | PASS | — |
| 96 | `h-attribution-team-vs-personal` | PASS | — |
| 97 | `h-attribution-without-you` | PASS | — |
| 98 | `h-ownership-proudest-work` | PASS | — |
| 99 | `wave17-delivery-010` | PASS | — |
| 100 | `wave18-attrib-011` | PASS | — |

## REVISE 汇总

- `a-coding-abstraction-defensive-edge-cases`：追问未深入“输入边界遗漏导致问题”的失败证据；改为核实事件成因、影响与验证方式。
- `a-computer-science-transaction-isolation`：“是否遇到过隔离级别相关问题”过泛；改为追问具体异常及其对应的数据保证。
- `a-debugging-api-works-locally-frontend-disagrees`：题干把前端写成“坚持”某种看法，形成对抗框架；改为中性描述证据不一致。
- `b-business-context-whole-then-part`：用“没有全局视角的人怎么判断”假设他人；聚焦回答者自己如何说明全局与局部关系。
- `bulk1000-d-052-v1`：主问题中内嵌“追问”标签，与独立 followUps 字段重复；将相关依赖滑移探针移入追问或删除。
- `f-frontline-management-conflict-with-report`：“举报是否属实或在挑战权威”构成错误二选一；先核事实和影响，再说明维持或调整决定。
- `f-frontline-management-inherited-harmful-member`：题干预先认定继承员工“有害”，使用推卸/挑拨等标签；改为先描述他人反馈并询问如何核实及保护团队。
- `f-manager-of-managers-cost-cutting-restructure`：题干把组织重复和应合并当成既定事实；应先说明成本目标、关键能力和约束，再比较调整方案。
- `f-manager-of-managers-employee-backlash`：“坚持还是妥协”是假二分，并预设调整长期有利；明确这是待验证主张，允许维持、修订、暂停或撤回。

## 复核结论

这批核心题整体结构稳定，大部分题目已把事实核验、个人贡献、结果或取舍落到可观察证据。需优先修正的共性问题是：题干把待验证的解释写成事实，或用对抗式措辞与错误二分替代事实调查。其余 91 题本轮通过，但这不等于需要停止内容维护。
