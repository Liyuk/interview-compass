# 规划审阅与补充

日期：2026-10-14。对象：本目录全部规划文档与 CONTEXT.md。本文件记录审阅结论、实测事实和补充内容；补充部分是建议，尚未实施。

## 1. 总体结论

方案方向成立：八个能力域加正交入口、题卡与证据链、单一题目正文、Astro + Starlight + Actions 发布，彼此一致，边界写得清楚。主要缺口不在框架，而在三处落地前提：

1. 旧站真实状态与方案描述有出入，迁移盘点漏了一个分支和若干已失效链接（第 2 节）。
2. 内容许可还没决定，但它决定旧贡献能否迁移、外部资料能否改编，应提前到 P1 之前（第 3 节）。
3. “20 题试点”只有各域数量，没有具体题目和叶子能力，P1 无法直接开工（第 4 节给出草案）。

另外，规划文档已有约 130KB，继续扩写的边际收益很低。建议以本文件为止冻结 P0，下一步直接做 P1 的题卡模板和前 3–5 道题。

## 2. 旧站实测事实

以下均于 2026-10-14 实际检查：

| 事实 | 依据 | 对方案的影响 |
| --- | --- | --- |
| 线上站点由 `gh-pages` 分支提供，最后一次发布是 2018-06-13，共 32 个 HTML 页面 | `git ls-tree origin/gh-pages`；首页与 `/guide/`、`/Collection/SEO.html` 返回 200 | 旧 URL 清单应直接从 gh-pages 树生成，而不是从 Markdown 路径推导；32 页规模可以逐页人工核对 |
| 之后 master 只有 README 变动（二叉树条目），docs 内容与线上一致 | `git log`、`git show --stat 122c4fb` | 线上内容即当前 docs，迁移不需要区分“已发布版/未发布版” |
| `version_alpha` 分支有 master 没有的内容：README 增加“七层网络模型”“http 和 https 的区别”（贡献者 蔚空，2020-07），同时撤回了二叉树条目 | `git log master..origin/version_alpha` | 方案没有提到这个分支；迁移 manifest 需要合并两条分支的 README 提纲，贡献者名单也要补上 |
| `guide/basic.md`、`guide/entry.md` 里 6 个 `/collection/...`（小写）链接在线上已是 404；`/Collection/...` 大写正常 | 线上请求 `collection/NewHtmlTag.html` 404，`Collection/NewHtmlTag.html` 200 | GitHub Pages 路径区分大小写。这 6 个是旧站本身的坏链，不应作为“旧链接回归失败”；新站 ID 统一小写 |
| 页面的“编辑此页”指向不存在的 `vuepress` 分支 | config.js `docsBranch: 'vuepress'`；GitHub 该分支 404 | 现有贡献入口已失效；新站 editLink 指向实际默认分支 `master` |
| package.json 的仓库地址 `Liyuk/Interview-Questions-Answers` 返回 301 跳转 | curl | 不是失效地址，是重命名/迁移后的跳转；统一改为 `Mountain-Buzhou/Interview-Book` 即可 |
| 旧内容引用的外链去重后 70 个：42 个 200（30 个在 GitHub），9 个知乎 403，7 个 CSDN 521，3 个 segmentfault 410，jobbole 等 3 个连接失败，另有 3 个 404 | 逐个 curl，超时 8 秒 | 知乎 403 多半是反爬，不能据此判死链；410/404/连接失败可以确定失效。迁移时这类链接改为“历史引用”或替换为一手资料 |
| 图片只有 8 张：`closure_moyu.assets/` 6 张（相对路径），`assets/imgs/` 2 张 | grep 图片语法；线上 img 标签 | 资产迁移量很小，P3 可一次处理完 |
| 仓库没有 LICENSE 文件，只有 package.json 的 `ISC` 字段 | `ls` | 见第 3 节 |

还有一个现存风险：如果在当前 VuePress 配置下再执行一次 `npm run build && npm run deploy`，`docs/planning/` 会被渲染成公开页面（VuePress 渲染 docs 下全部 Markdown）。新站上线前不要用旧脚本发布。

## 3. 内容许可要提前决定

现状：没有 LICENSE 文件，git 历史中有约 8 位不同的作者（Liyuk、moyuling、dongchongyang、MrTreasure、Tris Roland、tony、蔚空等，部分人有多个提交身份）。在没有明确许可的情况下，各作者对自己写的内容保留权利；package.json 的 `ISC` 是 npm 元数据，不能当作内容许可。

这会直接影响三件事：

- **旧内容迁移（P3）**：改写、拆分他人的文章需要原作者同意，或者只保留链接和原创重写。
- **外部资料改编**：方案已计划参考 CC BY-SA（CIU）、CC BY-NC-SA（PM Interview Project、CS-Notes）。如果改编其实质内容，新站对应部分须采用相同方式共享，NC 条款还会限制后续商业用途。
- **今后贡献**：没有许可，外部贡献者的 PR 权属同样不明确。

建议：

1. 内容采用 **CC BY-SA 4.0**，代码（站点、脚本）采用 **MIT**，分别放 `LICENSE` 与 `LICENSE-content`。BY-SA 能兼容改编 CIU 一类资料；不选 NC，避免把今后的使用方式锁死。不改编 NC 来源的实质内容，只做结构参考和链接。
2. 在仓库开一个 issue 征求旧贡献者同意；没有回应的文章按“保留原文 + 归档标注”处理，不改写进新题卡。
3. 贡献指南写明：提交即同意按上述许可发布。

这是许可选型建议，不构成法律意见。

## 4. 20 题试点草案

按 MECE 文档的 A5/B3/C3/D3/E2/F2/G1/H1 分配，同时保证每类岗位和两级管理都有题。叶子键是首期最小词表，不预先铺满整棵能力树。

| # | 主问（简述） | primaryCapability | 主要岗位/入口 | 素材来源 |
| --- | --- | --- | --- | --- |
| A1 | 实现支持 on/off/once 的事件发射器，并说明你怎样测试边界 | professional.coding | 研发、校招 | 旧题 Collection/Events |
| A2 | 库存扣减为什么会超卖？给出修复方案并说明怎样证明修复有效 | professional.fundamentals | 研发 | 原创 |
| A3 | 为客服知识检索设计方案：为什么不用 agent，怎样离线和线上评估 | professional.system-design | AI 工程 | 案例 2 |
| A4 | （允许 AI）定位一个间歇失败的测试，说明哪些判断由你验证 | professional.debugging | 研发、AI | 原创 |
| A5 | 设计一次激活流程改版实验：分流单位、样本量、护栏和停止条件 | professional.experiment-design | 产品、运营、数据 | 原创 |
| B1 | 为多件商品、部分退款、平台补贴和商家分成的交易建模 | domain-modeling.business-rules | 研发、产品、运营 | 案例 1 |
| B2 | 分成规则变化后，旧交易如何重现当时的结算 | domain-modeling.model-evolution | 研发、数据 | 案例 1 |
| B3 | 定义“复购倾向”特征：粒度、时间窗、预测时点和泄漏检查 | domain-modeling.feature-model | 数据、AI | 案例 1 |
| C1 | 资源只够做两项时，怎样制定下一季度规划 | value-direction.prioritization | 研发、产品、运营 | 博客：技术规划 |
| C2 | 核心指标上涨但投诉也增加，你是否继续推进 | value-direction.outcome-validity | 产品 | 博客：产品判断 |
| C3 | 活动后留存上升，怎样判断是净增量还是补贴套利 | value-direction.net-impact | 运营 | 原创 |
| D1 | 关键路径延误、两个项目争同一资源，怎样调整承诺 | delivery.capacity-planning | 研发、一线管理 | 博客：资源不足 |
| D2 | 一次发布引发故障：止损顺序、沟通和复盘后的行动 | delivery.incident-response | 研发、AI | 案例 2 |
| D3 | 活动进行中发现刷量或预算超支，怎样止损 | delivery.operations-execution | 运营 | 原创 |
| E1 | 两个团队意见不一致，你怎样谈成新的承诺 | collaboration.negotiation | 全岗位 | 博客：项目冲突 |
| E2 | 说服负责人暂缓一个他坚持的需求 | collaboration.influence | 产品、研发 | 原创 |
| F1 | 培养一个未达预期的成员：预期、反馈、结果 | people-organization.performance-feedback | 一线管理 | 旧题 team/Team；博客一线管理 |
| F2 | 如果你离开一个月，团队和下属经理仍能作出哪些决定 | people-organization.manager-system | 二线管理 | 博客二线管理系列 |
| G1 | 一次判断被事实推翻后，你具体改变了什么做法 | learning-adaptation.calibration | 全岗位、校招 | 博客：潜力评估 |
| H1 | 为什么离开，下一份工作需要得到什么，什么不能妥协 | work-responsibility.motivation-expectation | 全岗位 | 旧题 OftenAsked |

两个案例卡：

- **案例 1：交易与分成平台**（构造案例）。B1–B3 共用，A2 也可以引用其库存部分。
- **案例 2：客服知识检索上线**（构造案例）。A3、D2 共用，后续可加 C 类“是否扩大投入”。

覆盖自查：研发、AI、产品、运营、数据、校招、一线、二线都至少有 2 道题可用；“最好的事”“Top K 不做清单”可以作为 C1、G1 的追问，第二批再单独成题。

## 5. 方案中尚未覆盖的内容

**题卡要标时长。** 面试官使用时，一轮 45–60 分钟通常只能做 1 道主问加追问。题卡增加 `estimatedMinutes`，岗位题单写清轮次组合和每轮时长，否则题单无法直接用于安排面试。

**题目公开后的使用方式。** 题目和评分锚点公开后，候选人可以提前准备。这对过去行为题影响较小，因为追问深挖的是本人事实；对知识题和设计题影响较大。建议在面试官指南里写明：公开题用于练习和校准，正式面试换情境参数（规模、约束、业务对象），保留追问结构。

**晋升需要不同的内容形态。** 方案多处写“晋升要求跨周期的持续证据”，但只设计了题卡。晋升自查实际需要的是证据台账模板：按能力域记录事件、时间、本人贡献、结果和旁证。建议增加 `kind: template`，晋升入口以模板为主，题卡为辅。

**面试官指南的合规边界。** 补一页“不该问的问题”：婚育、年龄、健康、籍贯等与岗位无关的个人情况。文化题已有“不评价私人生活”的原则，应写成面试官可以直接执行的清单。

**旧内容的归档出口。** Collection 里不少题属于 2018 年前端语境（雪碧图、iframe、jQuery events、link 与 @import）。不必全部改写成题卡：有改编价值的拆成题卡（Events、Template、Currying 适合 A 类编码题），其余保留原 URL 和原文，标注“历史归档，写于 2018”，不计入题库完成数。这样旧链接不断，作者归属也保留。

**旧 URL 跳转的实现方式。** 旧地址都是 `.html` 结尾（如 `/Collection/SEO.html`）。Astro 的 `redirects` 配置对 `.html` 源路径的输出位置需要实测；稳妥做法是在 `public/` 下按原路径放静态跳转页（meta refresh + canonical）。32 页可以由脚本从 gh-pages 树生成。切换时保留 gh-pages 分支作为回退。

**首发侧重的建议。** 方案把首发岗位侧重列为待定。现有旧内容和博客素材最强的是研发与技术管理，产品和运营几乎全部需要原创。建议首发以研发、AI 与技术管理为主体，产品和运营各发布试点题并标注“试点”，等有真实试用反馈再扩充。

## 6. 本次顺带修正的文档问题

- 重构方案、部署文档、GitHub 研究中残留的“阶段 / stages”改为与 MECE 架构一致的“责任范围 / 校招入口”。
- 博客来源清单中的本机绝对路径和私有归档位置改成中性描述。README 已链接规划文档，推送后这些路径会公开。
- CONTEXT.md 补充“知识主题”“职业轨道”两个术语。
- 重构方案的配套材料和 P0 交付物补上 MECE 两份文档和本文件。
