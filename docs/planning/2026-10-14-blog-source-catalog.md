# 博客与个人资料：Interview Compass 来源清单

日期：2026-10-14。主要检查对象是博客仓库 [Liyuk/liyuk.github.io](https://github.com/Liyuk/liyuk.github.io) 的本地副本。本轮没有修改该仓库，也没有复制私有旧材料。

## 1. 直接回答：有，而且已有成体系材料

最重要的是《职场发展问题：晋升与面试前的完整自查清单》。正文明确用于晋升、面试和阶段复盘，按责任范围组织问题，并要求用事实、判断、行动、结果与证据回答。其次是校招培训、产品判断、潜力、Top K、技术规划、一线与二线管理系列。这些材料已经能支撑新体系的一大部分。

本清单通过本地 frontmatter、正文/章节和路由辅助函数核对；下表提供 GitHub 原文来源，方便后续公开引用。页面路径按 `src/lib/content-paths.ts` 推导。旧地址 `https://liyuk.github.io/` 本轮 HTTP 检查返回 404；仓库 CNAME 和 Astro site 均指向 `https://liyuk.com`。新域名的两篇抽样请求返回 403，因此**不声称本轮已验证线上文章可访问**。来源文件存在与生产页面可访问是两项不同证据。

## 2. 优先整理清单

下面“新题库用途”是整理建议。除研究文章应再检查论据外，题目与评分标准仍需另行编写，文章不能自动视为已完成题卡。

| 方向 | 标题与原文 | 新题库用途 | 本地来源 |
| --- | --- | --- | --- |
| 总纲与面试 | [职场发展问题：晋升与面试前的完整自查清单](https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2023/08/career-growth-ten-questions/zh.md) | 首批总纲；按业务、技术、团队、协作、个人素质拆题 | `src/content/writing/2023/08/career-growth-ten-questions/zh.md` |
| 总纲与面试 | [筛选人和面试官到底在看什么](https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2022/07/campus-recruitment-training/zh.md) | 校招路径、简历事实、基础理解、项目判断与 AI 补充 | `src/content/writing/2022/07/campus-recruitment-training/zh.md` |
| 总纲与面试 | [面试题与工程师的成长路径](https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2018/04/interview-questions-archive/zh.md) | 2018 原题库历史入口；与本仓库来源关系核对 | `src/content/writing/2018/04/interview-questions-archive/zh.md` |
| 总纲与面试 | [招聘与职业关系（一）：技术招聘，从“招到人”到建立长期判断](https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2022/01/technical-hiring-long-term-judgment/zh.md) | 面试官视角：岗位缺口、共同求证和长期招聘判断 | `src/content/writing/2022/01/technical-hiring-long-term-judgment/zh.md` |
| 总纲与面试 | [思维训练（四）：结构化思维实践](https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2026/08/structured-thinking-practice/zh.md) | 面试、晋升、汇报与合作的证据表达模板 | `src/content/writing/2026/08/structured-thinking-practice/zh.md` |
| 学习与潜力 | [评估潜力时，我们真正该看什么](https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2023/02/evaluating-potential-with-care/zh.md) | 学习、自驱、思维、恢复力；观察行为，不贴标签 | `src/content/writing/2023/02/evaluating-potential-with-care/zh.md` |
| 学习与潜力 | [结构化思维：把"有条理"聊成可以训练的事](https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2022/06/structured-thinking-at-work/zh.md) | 问题、证据、取舍和决定如何被检查 | `src/content/writing/2022/06/structured-thinking-at-work/zh.md` |
| 学习与潜力 | [思维训练（一）：Top K 问题——先找到最重要的事](https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2024/02/top-k-thinking/zh.md) | 排序口径、必要条件、不做清单及停止条件 | `src/content/writing/2024/02/top-k-thinking/zh.md` |
| 学习与潜力 | [成长里程碑：把"我想成长"聊成具体的样子](https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2021/08/specific-growth-milestones/zh.md) | 能力、证据、下一轮练习，支持晋升与成长 | `src/content/writing/2021/08/specific-growth-milestones/zh.md` |
| 学习与潜力 | [如何设计新人、骨干与负责人三条成长路径](https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2023/06/growth-paths-for-newcomers-core-and-leads/zh.md) | 新人、骨干、负责人的责任递进 | `src/content/writing/2023/06/growth-paths-for-newcomers-core-and-leads/zh.md` |
| 学习与潜力 | [目标、规划与复盘：把"交作业"变成自己的成长](https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2023/07/goals-retrospectives-and-next-actions/zh.md) | 目标、规划、复盘与后续行动 | `src/content/writing/2023/07/goals-retrospectives-and-next-actions/zh.md` |
| 产品与结果 | [工程师为什么需要产品判断](https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2022/02/engineer-product-judgment/zh.md) | 产品认知、用户问题、因果链、规划与取舍 | `src/content/writing/2022/02/engineer-product-judgment/zh.md` |
| 产品与结果 | [产品 sense：研发和产品怎么把"这个功能值不值得做"聊清楚](https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2022/03/product-judgment-for-engineers/zh.md) | 功能是否值得做；研发与产品共同判断 | `src/content/writing/2022/03/product-judgment-for-engineers/zh.md` |
| 产品与结果 | [如何写一份产品概览，而不把资料堆成百科](https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2021/09/product-overview-is-a-decision-model/zh.md) | 业务全景与上下文，支持产品题与全链路题 | `src/content/writing/2021/09/product-overview-is-a-decision-model/zh.md` |
| 产品与结果 | [先用自己的产品：开发者如何建立真实反馈回路](https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2021/05/use-your-own-product-feedback-loop/zh.md) | 实际体验和反馈闭环，支持产品验证题 | `src/content/writing/2021/05/use-your-own-product-feedback-loop/zh.md` |
| 产品与结果 | [数据度量工作指南（四）：指标字典模板，把定义变成可复算的协作接口](https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2021/04/metric-dictionary-template/zh.md) | 指标口径、比较与验证，支持产品和运营题 | `src/content/writing/2021/04/metric-dictionary-template/zh.md` |
| 产品与结果 | [数据度量工作指南（三）：指标分级，让数据先服务最重要的决策](https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2021/04/metric-tiers-prioritize-decisions/zh.md) | 指标优先级与决策关系 | `src/content/writing/2021/04/metric-tiers-prioritize-decisions/zh.md` |
| 产品与结果 | [数据度量工作指南（二）：指标争论之前，先定义测量对象](https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2021/03/define-the-measurement-before-arguing-about-metrics/zh.md) | 先确定测量，再解释变化与判断结果 | `src/content/writing/2021/03/define-the-measurement-before-arguing-about-metrics/zh.md` |
| 项目与规划 | [技术规划，本质上是业务分析与竞品分析](https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2025/11/technical-planning-business-and-competitive-analysis/zh.md) | 业务/竞争分析、能力投资、月季年节奏与不做清单 | `src/content/writing/2025/11/technical-planning-business-and-competitive-analysis/zh.md` |
| 项目与规划 | [项目合作发生冲突时，先对齐哪三件事](https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2023/03/resolving-project-conflicts/zh.md) | 目标、事实、决策权的冲突追问 | `src/content/writing/2023/03/resolving-project-conflicts/zh.md` |
| 项目与规划 | [资源不足时，怎样不让团队靠透支运转](https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2023/03/working-under-resource-constraints/zh.md) | 容量、承诺、资源冲突与可持续执行 | `src/content/writing/2023/03/working-under-resource-constraints/zh.md` |
| 项目与规划 | [产品资源排不上，研发接下项目后怎么推进？](https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/consulting/2026/09/product-engineer-without-boundaries/zh.md) | 产品工程复合职责、资源和权限的案例参考 | `src/content/consulting/2026/09/product-engineer-without-boundaries/zh.md` |
| 项目与规划 | [管理复盘：从执行到系统的八个判断](https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2026/08/management-retrospective/zh.md) | 判断、责任、对齐、上下文、闭环、资源、成长、复盘 | `src/content/writing/2026/08/management-retrospective/zh.md` |
| 一线管理 | [一线技术管理的三种产出](https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2023/03/frontline-engineering-management/zh.md) | 团队判断、可预期交付、可讨论和自我修复机制 | `src/content/writing/2023/03/frontline-engineering-management/zh.md` |
| 一线管理 | [从零搭团队时，先设计什么](https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2023/06/from-zero-design-the-team/zh.md) | 团队目标、结构与初始能力配置 | `src/content/writing/2023/06/from-zero-design-the-team/zh.md` |
| 一线管理 | [团队成长不是扩张：效率、梯队与延续](https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2022/01/team-growth-is-not-expansion/zh.md) | 效率、梯队、延续；不以人数衡量管理 | `src/content/writing/2022/01/team-growth-is-not-expansion/zh.md` |
| 一线管理 | [1-on-1 不是例会：信息、预期与决策权怎样对齐](https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2023/03/one-on-ones-and-decision-rights/zh.md) | 反馈、沟通与授权边界 | `src/content/writing/2023/03/one-on-ones-and-decision-rights/zh.md` |
| 二线管理 | [为什么需要管理管理者，以及什么样的人适合这段责任](https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2026/08/managing-managers-and-leader-profile/zh.md) | 什么时候需要二线，以及多团队责任画像 | `src/content/writing/2026/08/managing-managers-and-leader-profile/zh.md` |
| 二线管理 | [管理管理者如何找到、培养和交接负责人：HRBP、TA 与技术负责人的分工](https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2026/08/manager-of-managers-leadership-supply/zh.md) | 负责人来源、招聘、培养和继任 | `src/content/writing/2026/08/manager-of-managers-leadership-supply/zh.md` |
| 二线管理 | [管理管理者如何带团队，以及如何让权限和资源服务结果](https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2026/08/manager-of-managers-management-and-authority/zh.md) | 通过负责人带团队，权限和资源服务结果 | `src/content/writing/2026/08/manager-of-managers-management-and-authority/zh.md` |
| 二线管理 | [怎么留与怎么补：让一线负责人形成可持续的接班安排](https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2026/08/sustaining-frontline-managers/zh.md) | 一线负责人留任、补位、交接与接班机制 | `src/content/writing/2026/08/sustaining-frontline-managers/zh.md` |
| 二线管理 | [二线管理的治理底线：安全、公平与权力如何被约束](https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/writing/2026/08/governance-boundaries-for-managers/zh.md) | 安全、公平、权力边界与事故处理 | `src/content/writing/2026/08/governance-boundaries-for-managers/zh.md` |
| AI与工程方法 | [把 AI 能力放进工程组织前，先定义哪些边界](https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/research/2026/08/ai-engineering-capability-boundaries/zh.md) | 上下文、职责、授权、度量；标注为作者立场研究 | `src/content/research/2026/08/ai-engineering-capability-boundaries/zh.md` |
| AI与工程方法 | [当 AI 降低工作流壁垒，职能线与业务线怎样重新划分](https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/research/2026/08/functional-lines-versus-business-lines/zh.md) | 全链路能力与职能/业务边界；标注为作者立场研究 | `src/content/research/2026/08/functional-lines-versus-business-lines/zh.md` |
| AI与工程方法 | [Engineering Decision Skills：评审、排期、复盘时，我想让 AI 多做一步](https://github.com/Liyuk/liyuk.github.io/blob/master/src/content/projects/2026/09/engineering-decision-skills/zh.md) | 五项技能：指标判断、规划、评审、复盘、汇报 | `src/content/projects/2026/09/engineering-decision-skills/zh.md` |

本轮登记 35 篇候选来源，均未标记 `draft: true`。优先详读总纲、校招、产品判断、潜力、Top K、结构化实践、技术规划和管理系列；其余以正文/章节定位后续整理用途。该列表是筛选清单，不是所有博客内容的完整迁移台账。

## 3. 可直接开始的提炼顺序

1. 从晋升与面试总纲提炼“问题—追问—证据—责任范围”，作为新库的事实/Why/Top K/Next 方法底座。
2. 校招培训提炼基本编码、原理解释、陌生问题拆解和项目阐述；不要求校招生提供组织管理案例。
3. 产品判断与指标文章提炼产品/全链路题；产品专业和运营专业再用公开岗位框架补齐。
4. 规划、冲突、资源材料提炼项目与方向判断，显式加入执行动作、检查点和停止条件。
5. 一线管理与二线管理分别拆题，记录直接干预、授权、监测与组织结果。
6. 每道题引用原文章；同一事实案例可以回答多题，不复制整篇文章到每个入口。

## 4. 原始旧资料和旧站在哪里

本地 `docs/article-migration-catalog.md` 记录了旧源文档与迁移级别，并注明旧材料保存在仓库外的私有归档中（具体位置见该清单，不在公开仓库记录）。本轮未打开归档正文。旧静态站通过 tag `legacy-static-site-2026-08-14` 保存；不可重建的原始材料另行归档。

迁移清单能追溯到校招培训、工程师职业发展、一线管理、人才潜力评估、招聘索引、规划和研发复盘的旧稿。它同时区分可迁移、深度改写、只提炼观点和不迁移。后续寻找公司时期材料应先读该清单，核对已有公开改写版，避免把同一思想重复迁移，也避免把内部题目原样放入公开站。

这里的处理方式来自既有素材记录：公开版优先；原始内部事实留在私有材料，公开题使用已发布观点与明确标注的通用情境。本轮没有导入任何原始公司题库。

## 5. Skills 可作为方法来源的部分

作者还维护 engineering-decision-skills 仓库，博客也有对应项目介绍。该仓库 README 列出五项能力：

| Skill | 可借鉴的题目维度 |
| --- | --- |
| metric-decision | 指标口径、可比性、归因、结论边界、下一步验证 |
| tech-planning | 目标、备选投资、容量、优先级、退出条件 |
| tech-review | 证据、方案取舍、风险、验收、交付准备 |
| management-retro | 判断、协作机制、失败原因与系统性改变 |
| eng-reporting | 读者需要作什么决定，证据、资源和下一步 |

[作者仓库与 README](https://github.com/Liyuk/engineering-decision-skills)。本轮只用它作为方法和练习材料来源，没有安装或执行这些 Skill。其 README 明确限定为工程判断工具，不包含招聘、绩效、1:1 等工作；新题库借鉴方法时必须自建岗位题目与评价标准，不能将技能产出直接当作人员评定。

## 6. 下一轮完整盘点需要记录的字段

来源仓库/版本、文件、段落/锚点、作者、公开状态、主要能力、岗位、责任范围、候选题目 ID、复用方式、许可、需要补充的证据、旧新 URL 与审核结论。当前清单用于快速保留框架和优先来源；后续逐篇提炼应再生成题目级 manifest。
