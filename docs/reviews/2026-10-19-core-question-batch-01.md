# 核心题第一批编辑记录

日期：2026-10-19
范围：候选清单前 7 个候选人题、前 7 个面试官入口题、前 6 个管理者题；共 20 个双语 ID。

## 口径裁定

候选清单的“主要站点受众”用于组织入口；题目 `perspective` 记录题干主要由谁使用或回答，需按题目本身逐题判断。面试官入口中的候选人回答题保留 `candidate` perspective，不能因入口分类而强行重标。候选人准备组保留 candidate，管理情境题按管理者执行动作复核为 manager。

这一区分保持入口与题目语义清楚。候选清单的主要站点受众决定三方入口数量；题目 perspective 按题干内容人工复核。初始规范把 30–50 的数量约束写在 perspective 字段上，但获批候选清单中有许多“面试官入口、候选人作答”的题，按回答者类型无法合理凑足三组。已据获批清单将数量验收口径修正为主要站点受众；不伪造题目 perspective。

## 本批 ID

### 候选人准备

- `a-databases-read-replica-stale-read`
- `a-debugging-api-works-locally-frontend-disagrees`
- `a-engineering-systems-schema-deploy-rollback`
- `a-monorepo-build-graph-invalidation`
- `a-system-design-cross-system-consistency`
- `b-business-context-support-obligation`
- `b-business-context-whole-then-part`

### 面试官取证

- `a-ai-engineering-eval-disagreement`
- `a-ai-engineering-resume-claim-verification`
- `a-ai-engineering-agent-duplicate-side-effect`
- `a-coding-abstraction-defensive-edge-cases`
- `a-computer-science-transaction-isolation`
- `b-business-context-user-task-chain`
- `b-business-context-renewal-risk-segmentation`

### 管理者评估与带团队

- `f-frontline-management-absence-test`
- `f-frontline-management-conflict-with-report`
- `f-frontline-management-improvement-plan`
- `f-frontline-management-inherited-harmful-member`
- `f-frontline-management-judge-member-conflict`
- `f-frontline-management-mechanism-over-confrontation`

## 改前/改后理由

- **副本陈旧读取**：原题已能引出一致性讨论。本批保留稳定题干与证据信号，补充能区分无证据结论、可解释判断、取舍验证与失效检查的中英锚点。
- **AI 退款重复副作用**：旧中文信号有六项，超过核心题结构且有两项可以合并。本批限制为四项信号，并将重复请求、授权和未知结果恢复作为同一决策链评估；题目 ID 和来源未变。
- **正式绩效改进计划**：原追问混有超过核心上限的条目。本批保留最贴近题干的两个追问，将评分重点收敛到公平目标、支持安排、复核证据和正式流程。
- **锚点与弱回答**：首轮模板式锚点不满足逐题区分。本批按每题特有证据重新编写四档，例如陈旧读取看读己之写/延迟目标/路由取舍/回退指标；改进计划看标准历史/支持/时间目标/正式复核。弱回答分别描述该题关键证据的缺失。

## 标签调整依据

| ID | 保留轨道 | 移除轨道 | 依据 |
|---|---|---|---|
| `a-databases-read-replica-stale-read` | IC、team manager | senior manager | 题目观察读路由与用户一致性处理，聚焦直接服务决策。 |
| `a-debugging-api-works-locally-frontend-disagrees` | IC、team manager | senior manager | 题目要求亲自复现并跨端定位单个接口问题。 |
| `a-engineering-systems-schema-deploy-rollback` | IC、team manager | senior manager | 题目要求设计应用与数据迁移的具体发布/回退步骤。 |
| `a-monorepo-build-graph-invalidation` | IC、team manager | senior manager | 题目观察构建图、缓存键与变更样本验证。 |
| `a-system-design-cross-system-consistency` | IC、team manager | senior manager | 题目聚焦跨系统失败窗口、幂等和对账实现。 |
| `b-business-context-support-obligation` | IC、team manager | senior manager | 题目核算具体产品/客户服务义务及其贡献，不要求组合层人员配置判断。 |
| `b-business-context-whole-then-part` | IC、team manager | senior manager | 题目要回答者讲清自己负责环节及上下游，不评估跨组织组合管理。 |
| `a-ai-engineering-eval-disagreement` | IC、team manager | senior manager | 题目考察具体评价集、标注和模型波动的诊断。 |
| `a-ai-engineering-resume-claim-verification` | IC、team manager | senior manager | 题目要求候选人复盘自己的 AI 使用和贡献证据。 |
| `a-ai-engineering-agent-duplicate-side-effect` | IC、team manager | senior manager | 题目聚焦单项工具操作的授权、幂等与状态恢复。 |
| `a-coding-abstraction-defensive-edge-cases` | IC、team manager | senior manager | 题目观察代码输入边界、校验位置和回归测试实践。 |
| `a-computer-science-transaction-isolation` | IC、team manager | senior manager | 题目要求描述具体事务时间线与数据库保证。 |
| `b-business-context-user-task-chain` | IC、team manager | senior manager | 题目聚焦本人模块与用户任务链的具体因果关系。 |
| `b-business-context-renewal-risk-segmentation` | IC、team manager | senior manager | 题目要求直接分析客户 cohort、续约分母及产品/服务证据。 |
| `f-frontline-management-absence-test` | team manager、senior manager | IC | 题目观察经理如何授权并检验团队独立决策。 |
| `f-frontline-management-mechanism-over-confrontation` | team manager、senior manager | IC | 题目要求经理建立并维护团队一致的工程行为机制。 |

以上核心标签按问题要求的责任范围收窄，题目页面仍可阅读，不等于禁止其他角色回答。16 个适用性记录已逐题复核：沿用此前人工审阅的岗位—阶段组合，只保留仍符合当前岗位标签与职业轨道的组合，没有新增岗位或阶段组合。

## 校验与数据影响

- 核心 schema 已要求 3–4 条信号、2–3 条追问、弱回答、四个固定锚点，以及 `perspectiveReview: reviewed`；双语 checker 对信号与追问检查数量一致。锚点对象使用固定四键，结构上无法构造合法的跨语言锚点数量差异，因此不另加伪造此类状态的测试。
- 16 个题目的适用性指纹因岗位/轨道标签修订而更新，并通过上述复核恢复为 reviewed；覆盖报告显示 1334 reviewed、0 pending、0 empty reviewed profiles。

## 决策记录

- Ruling：数量目标按已获批的主要站点受众统计，而非题目 perspective。依据：候选清单已明确平衡 35/35/30 的主要受众，且多道面试官入口题由候选人作答。代价：题目 perspective 本身不会呈现 30–50 的均衡分布；详情页/导航必须使用主要受众分组，而不能用回答者 perspective 代替。
