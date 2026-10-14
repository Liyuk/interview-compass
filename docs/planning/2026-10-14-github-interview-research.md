# GitHub 面试、晋升与跨岗位题库研究

研究日期：2026-10-14。配套：[整体重构方案](./2026-10-14-interview-compass-redesign.md)、[公开框架调研](./2026-10-14-interview-framework-research.md)。本报告补充 GitHub 原仓库中的实际题目、结构与复用条件，不重复站点部署选型。本轮未导入外部题库、安装第三方 skill 或执行其中的指令。

## 1. 结论与研究边界

**建议把 Interview Compass 做成“知识解释 + 实务任务 + 事实深挖 + 评价证据”的能力库，而不是汇总大量问答。** GitHub 上已有材料能补齐技术基础、岗位栈、系统设计、AI 实务、产品、品牌增长、管理和晋升，但它们的用途不同：学习提纲不是面试题库，个人面经不是公司制度，晋升框架也不是现场评分表。

最值得借鉴的不是题量，而是三种设计：

1. Tech Interview Handbook 的准备路径与行为证据；
2. Product Manager Interview Project 的完整题卡、追问、强证据、评分锚点与角色面试组合；
3. Monzo 的通用能力与岗位能力分离、影响范围分层，以及品牌增长 playbook 的候选人/面试官不同阅读视角。

上述是本项目的设计判断。PM Interview Project 明确标注 **public preview，尚未正式内部试点**；Monzo 和 Sourcegraph 材料有公司情境和历史版本限制；新增 AI 仓库仍需要逐题核验。[PM 项目 README](https://github.com/deanpeters/The-Product-Manager-Interview-Project/blob/master/README.md)、[Monzo README](https://github.com/monzo/progression-framework/blob/master/README.md)、[Sourcegraph 迁移说明](https://github.com/sourcegraph/handbook/blob/main/README.md)。

### 如何核验

- 搜索只用于定位；事实回到作者/组织原仓库的 README、目录、代表正文、代码和许可证。
- 下表 15 个主样本均检查了 README 与代表正文/源码；维护日期取 GitHub API `pushed_at`，表示仓库推送信号，**不是代表文件更新时间，也不证明答案正确**。未按 star 排名。
- 作者题库属于作者提供材料的一手来源；其公司面试叙述、外链论文和技术结论仍须回到对应原始来源验证。本报告没有验证所有题目答案，也没有证明所谓“真实大厂题”确实被问过。
- 采样覆盖主要岗位与内容形态，不是 GitHub 全量普查。运营样本较少不能推断整个 GitHub 没有运营资料。

## 2. 15 个代表项目比较

以下编号保留研究时的十一条需求映射，**不再是新站一级分类**；现行八域及转换规则见[MECE 内容架构](./2026-10-14-content-architecture-mece.md)。历史编号为：01 基础、02 岗位专业、03 工程、04 项目资源、05 规划、06 协作复杂情境、07 成长、08 价值观、09 产品全链路、10 人与组织、11 领域建模。第 11 类是研究完成后按用户补充加入；下列仓库尚未针对该类重新采样。这里只表示资料覆盖线索，不表示已达到本项目题卡质量要求。许可链接为实际声明；没有声明不能因公开可读而直接转载。

| 项目与实际检查位置 | 真实覆盖与可借鉴点 | 缺口/使用边界 | 能力 | 许可与仓库推送信号 |
| --- | --- | --- | --- | --- |
| [jwasham/coding-interview-university](https://github.com/jwasham/coding-interview-university/blob/main/README.md) | 数据结构、算法、复杂度及计算机基础学习清单；适合校招/转行准备路径 | 主要是学习提纲和外部资源，不是十一类能力完整题卡；不宜要求所有岗位全学 | 01、02 | [CC BY-SA 4.0](https://github.com/jwasham/coding-interview-university/blob/main/LICENSE.txt)；[2025-08-28](https://api.github.com/repos/jwasham/coding-interview-university) |
| [CyC2018/CS-Notes](https://github.com/CyC2018/CS-Notes/blob/master/README.md)，检查[死锁正文](https://github.com/CyC2018/CS-Notes/blob/master/notes/计算机操作系统%20-%20死锁.md) | 中文 OS、网络、数据库、Java、分布式与编码实践；可作为知识覆盖检查表 | 笔记不等于有评分依据的题；第三方原文和图片另核验。API 未识别根许可，但 README 实际链接包含 NC | 01、02、03 | [README 的 CC BY-NC-SA 4.0 与转载说明](https://github.com/CyC2018/CS-Notes/blob/master/README.md#license)；[2024-08-21](https://api.github.com/repos/CyC2018/CS-Notes) |
| [yangshun/tech-interview-handbook](https://github.com/yangshun/tech-interview-handbook/blob/main/README.md)，检查[行为评价](https://github.com/yangshun/tech-interview-handbook/blob/main/apps/website/contents/behavioral-interview-rubrics.md)、[资深候选人](https://github.com/yangshun/tech-interview-handbook/blob/main/apps/website/contents/behavioral-interview-senior-candidates.md) | 编码准备、算法、行为面试；强调具体案例与影响范围，可补动机、冲突、主动性、成长 | 公司评价描述是贡献者经验总结，不是对应公司官方统一标准；仍需补本库独立锚点 | 01、02、06、07、08 | [MIT](https://github.com/yangshun/tech-interview-handbook/blob/main/LICENSE)；[2026-08-07](https://api.github.com/repos/yangshun/tech-interview-handbook) |
| [yangshun/front-end-interview-handbook](https://github.com/yangshun/front-end-interview-handbook/blob/main/README.md)，检查[JS 正文](https://github.com/yangshun/front-end-interview-handbook/blob/main/website/contents/javascript-questions.md) | 前端知识、编码和系统设计准备；可区分 quiz、实际编码与设计 | 旧 `questions/javascript-questions.md` 仅跳转；实际正文在 `website/contents`，正文还指向外站最新版，不能把外站全部视为仓库许可内容 | 02、03 | [MIT](https://github.com/yangshun/front-end-interview-handbook/blob/main/LICENSE)；[2026-10-05](https://api.github.com/repos/yangshun/front-end-interview-handbook) |
| [Snailclimb/JavaGuide](https://github.com/Snailclimb/JavaGuide/blob/main/README.md)，检查[Java 并发题](https://github.com/Snailclimb/JavaGuide/blob/main/docs/java/concurrent/java-concurrent-questions-01.md) | Java、JVM、并发、数据库、分布式、微服务；补后端主线和概念解释 | 很多题是机制知识问答，项目结果与评分证据另补；版本、框架及外部图片要核验 | 01、02、03 | [Apache-2.0](https://github.com/Snailclimb/JavaGuide/blob/main/LICENSE)；[2026-10-12](https://api.github.com/repos/Snailclimb/JavaGuide) |
| [MindorksOpenSource/android-interview-questions](https://github.com/MindorksOpenSource/android-interview-questions/blob/master/README.md) | README 有 Android、Kotlin、Java、组件生命周期、并发和架构题；不是只宣传书籍的空目录 | 许多解答在外链；旧 API/架构观念须逐题复核；不覆盖 iOS 整条客户端线 | 01、02、03 | [Apache-2.0](https://github.com/MindorksOpenSource/android-interview-questions/blob/master/LICENSE)；[2026-03-21](https://api.github.com/repos/MindorksOpenSource/android-interview-questions) |
| [donnemartin/system-design-primer](https://github.com/donnemartin/system-design-primer/blob/master/README.md) | 需求澄清、容量、组件、扩展与方案权衡；设计题与示例方案，适合补系统设计练习结构 | 示例架构不是唯一答案；复杂度和规模假设需要回到具体任务；个人仓库明确不代表雇主许可 | 01、03 | [CC BY 4.0](https://github.com/donnemartin/system-design-primer/blob/master/LICENSE.txt)；[2026-09-15](https://api.github.com/repos/donnemartin/system-design-primer) |
| [ayushbishtdev/ai-engineering-interview-questions](https://github.com/ayushbishtdev/ai-engineering-interview-questions/blob/main/README.md)，检查[评估工程师](https://github.com/ayushbishtdev/ai-engineering-interview-questions/blob/main/questions/03-ai-evaluation-engineer.md)、[Agent 工程师](https://github.com/ayushbishtdev/ai-engineering-interview-questions/blob/main/questions/02-agentic-ai-engineer.md) | 按 AI 角色和难度组织；题目带考察点、答案、危险回答与追问；包含评估、部署、治理和行为题 | 未发现许可证；层级和参考答案是作者设定，不能直接视为业界标准 | 02、03、06、09 | [目录未见 LICENSE，API 为空](https://api.github.com/repos/ayushbishtdev/ai-engineering-interview-questions)；2026-10-02 |
| [ombharatiya/AI-Engineer-Interview-Questions](https://github.com/ombharatiya/AI-Engineer-Interview-Questions/blob/main/README.md)，检查[企业 RAG 设计](https://github.com/ombharatiya/AI-Engineer-Interview-Questions/blob/main/11-ai-system-design/case-studies/01-enterprise-rag-assistant.md)、[限流重试代码任务](https://github.com/ombharatiya/AI-Engineer-Interview-Questions/blob/main/12-coding-challenges/11_rate_limiter_and_retry.py) | AI 基础、RAG、Agent、评估、推理、安全；设计案例与可运行代码任务并存，适合补实操而非只考名词 | 仓库自述题量与公司题标签未逐条验证；本轮读了代码，未运行其练习；AI 工具细节需要一手文档校验 | 01、02、03、09 | [MIT](https://github.com/ombharatiya/AI-Engineer-Interview-Questions/blob/main/LICENSE)；[2026-10-03](https://api.github.com/repos/ombharatiya/AI-Engineer-Interview-Questions) |
| [deanpeters/The-Product-Manager-Interview-Project](https://github.com/deanpeters/The-Product-Manager-Interview-Project/blob/master/README.md)，检查[失败决策卡](https://github.com/deanpeters/The-Product-Manager-Interview-Project/blob/master/Questions/behavioral/A-Decision-You-Got-Wrong.md)、[优先级卡](https://github.com/deanpeters/The-Product-Manager-Interview-Project/blob/master/Questions/judgment/Ten-Problems-One-Focus.md)、[scorecard](https://github.com/deanpeters/The-Product-Manager-Interview-Project/blob/master/docs/interview-scorecard-template.md) | 完整产品题卡、角色组合；AI 与人员管理可选轮；主问→中性追问→强证据→警示→评分 | 公开预览，未经正式内部试点；部分题卡声明来自仓库内研究综合，不把这些思想归为唯一原创来源；NC/SA 限制 | 02、04、05、06、07、08、09、10 | [CC BY-NC-SA 4.0](https://github.com/deanpeters/The-Product-Manager-Interview-Project/blob/master/LICENSE)；[2026-09-01](https://api.github.com/repos/deanpeters/The-Product-Manager-Interview-Project) |
| [ferminrp/pm-interview-questions](https://github.com/ferminrp/pm-interview-questions/blob/main/README.md) | 产品题按协作、执行、战略、客户洞察、影响、产品与商业判断分组；有具体过去事实题 | 单 README 题单，无完整评分或答案；没有发现根许可证 | 02、04、05、06、09 | [API 许可为空](https://api.github.com/repos/ferminrp/pm-interview-questions)；2023-05-01 |
| [coryjburk/intv-playbook-marketing_brand-growth](https://github.com/coryjburk/intv-playbook-marketing_brand-growth/blob/main/README.md)，检查[index.html 中题目数据](https://github.com/coryjburk/intv-playbook-marketing_brand-growth/blob/main/index.html) | 品牌与增长营销领导岗位；源码 9 类各 12 题，含分层答案和面试官观察视角；覆盖实验、渠道、定价、P&L、跨职能与行为 | 面向 MBA 品牌/增长营销，不能等价为中文社区/内容/商家运营；未发现 LICENSE，答案分层未经本项目验证 | 02、05、06、09、10 | [API 许可为空](https://api.github.com/repos/coryjburk/intv-playbook-marketing_brand-growth)；2026-08-07 |
| [kaushikb9/em-interviews](https://github.com/kaushikb9/em-interviews/blob/main/README.md) | 工程领导面试；编码、架构、产品思维与执行、规划、管理行为，并按面试轮分组 | 很多是主问与经验性流程描述，没有稳定评分；EM/Director/VP 题没有全部细分到不同责任范围 | 02、03、04、05、06、09、10 | [API 许可为空](https://api.github.com/repos/kaushikb9/em-interviews)；2021-06-27 |
| [sourcegraph/handbook 的 engineering-leadership](https://github.com/sourcegraph/handbook/blob/main/content/departments/engineering/dev/hiring/engineering-leadership.md) | 公司自己公开的历史管理面试材料；每主题列测量目标、主问与追问，涵盖成长、优先级、培养与绩效 | 仓库已归档并迁至 Notion；这是一家公司历史做法，不能称当前招聘要求 | 04、06、07、08、10 | [Apache-2.0](https://github.com/sourcegraph/handbook/blob/main/LICENSE)；[2024-07-02、已归档](https://api.github.com/repos/sourcegraph/handbook) |
| [monzo/progression-framework](https://github.com/monzo/progression-framework/blob/master/README.md)，检查[产品](https://github.com/monzo/progression-framework/blob/master/frameworks/product.md)、[运营领导](https://github.com/monzo/progression-framework/blob/master/frameworks/operations/ops-leadership.md)、[客户运营](https://github.com/monzo/progression-framework/blob/master/frameworks/customer-operations.md) | 公司公开成长框架；通用主题+岗位要求+不同范围行为；有工程、产品、营销与运营角色 | 是发展/晋升参照，不是现成题库；银行客户运营不同于互联网增长运营；历史层级不直接映射国内职级 | 02、04、05、06、07、08、09、10 | [MIT](https://github.com/monzo/progression-framework/blob/master/LICENSE)；[2023-07-19](https://api.github.com/repos/monzo/progression-framework) |

## 3. 代表题型：哪些符合“事实 → Why → Next”

以下用中文概述原材料，不提供整份翻译或声称题目由本项目原创。右栏是本项目应增加的追问。

| 原材料中的题型/主题 | 对 Interview Compass 的价值 | 本项目补充的证据与追问 |
| --- | --- | --- |
| [TIH 行为评价](https://github.com/yangshun/tech-interview-handbook/blob/main/apps/website/contents/behavioral-interview-rubrics.md)：最自豪项目、主动性、冲突和成长 | 用户提出的“最好的事为什么最好”已有可参考素材 | 最好的衡量口径？个人贡献边界？谁验证效果？是否牺牲其他目标？ |
| [PM 失败决策卡](https://github.com/deanpeters/The-Product-Manager-Interview-Project/blob/master/Questions/behavioral/A-Decision-You-Got-Wrong.md)：本人判断错误、实际后果、改变观点 | 强调“自己的判断”，适合失败复盘与成长 | 当时哪些信息可得？过程是否合理但结果不佳？改进后来在哪次行为中得到验证？ |
| [PM 十个问题聚焦卡](https://github.com/deanpeters/The-Product-Manager-Interview-Project/blob/master/Questions/judgment/Ten-Problems-One-Focus.md)：如何缩小范围、为何公式不足 | 接近用户说的 Top K、战略取舍、暂缓清单 | 先做哪三项、停止哪两项？容量与依赖？什么证据会改变排序？不是算法 Top K |
| [Sourcegraph 管理领导题](https://github.com/sourcegraph/handbook/blob/main/content/departments/engineering/dev/hiring/engineering-leadership.md)：工作超过容量、培养成功/未达预期的人 | 一线管理可直接参考“目标+主问+追问”的结构 | 本人干预和授权分别是什么？经理离开后机制是否持续？失败员工是否得到清楚预期和反馈？ |
| [EM 面试执行轮](https://github.com/kaushikb9/em-interviews/blob/main/README.md)：业务需求与技术债、季度/迭代规划、项目成功 | 支撑技术规划、判断与执行，不局限技术名词 | 目标组合、容量、风险、退出条件与实际效果；二线还需问跨团队资源与管理者体系 |
| [AI 评估题](https://github.com/ayushbishtdev/ai-engineering-interview-questions/blob/main/questions/03-ai-evaluation-engineer.md)：评估集、judge 与人类分歧、评估改变决策 | 可把知识题连接到工程化和真实决策 | 数据来源、标注标准、泄漏、误差分类、成本、线上后果；答案的技术细节回到原始文档 |
| [AI 限流重试代码任务](https://github.com/ombharatiya/AI-Engineer-Interview-Questions/blob/main/12-coding-challenges/11_rate_limiter_and_retry.py) | 同时测基本编码、接口抽象、时钟注入与确定性验证 | 给出任务和环境，不先公开实现；扩展并发、取消、幂等与工具生成代码审查 |
| [企业 RAG 设计案例](https://github.com/ombharatiya/AI-Engineer-Interview-Questions/blob/main/11-ai-system-design/case-studies/01-enterprise-rag-assistant.md) | 需求、权限、质量、延迟、成本进入同一情境 | 最小方案为何足够？权限变化如何处理？引用错误与回退？上线后采用率和真实价值？ |
| [品牌增长源码题库](https://github.com/coryjburk/intv-playbook-marketing_brand-growth/blob/main/index.html)：实验显著但实际收益很小、样本量、快速试验与严谨性 | 对增长运营是真实专业题素材，不只泛产品思维 | 分母、窗口、样本、净收益、护栏、混杂与停止条件；验证候选人确实执行过，而非只会方案 |

同一题可以采集多种证据，但应指定一个主要目标。比较“成功/失败、最重要/暂缓、现在/下一步”有助于观察判断口径；不要把全部模板机械塞进概念解释题。

## 4. 原十一条需求的覆盖与缺口（历史映射）

下表是**本轮样本覆盖判断**，不是对整个 GitHub 的断言。

| 能力 | 可先用的来源 | 仍需本项目补齐 |
| --- | --- | --- |
| 01 基础与原理 | CIU、CS-Notes、JavaGuide、System Design Primer | 编译原理没有从本轮样本找到可直接采用的完整题卡；概念→反例→机制→验证的评分链 |
| 02 岗位专业 | 前端、Java、Android、两类 AI、产品、品牌增长 | iOS；内容/社区/商家运营；各责任范围必需深度；AI 辅助编码与独立基础区分 |
| 03 工程与工作系统 | JavaGuide、设计 Primer、AI 案例与代码任务 | DevOps 实操、微前端、monorepo/多仓库演进、调试任务；这些不能只用架构名词题代替 |
| 04 项目资源 | PM 题库、EM、Sourcegraph | PMO、关键路径、变更、项目组合；真实计划及调整记录 |
| 05 方向与规划 | EM、产品与运营框架、品牌增长 | 月/季/年规划的衔接、技术投资回报与不做清单；用户博客仍是优先素材 |
| 06 协作复杂情境 | TIH、PM、Sourcegraph、EM | 中性追问、事实核验、责任边界；不把表达流利直接打高分 |
| 07 潜力与成长 | TIH、Monzo、Sourcegraph | 学习迁移、恢复与持续改进的后续证据；韧性不等于能忍受无限负荷 |
| 08 价值观与文化 | TIH、PM、公司成长框架 | 与岗位相关的行为、双方工作方式预期；不能照搬一家公司的文化口号 |
| 09 产品全链路 | PM 完整题卡、品牌增长、AI 设计、Monzo 产品 | 上线后效果、因果边界、负面影响、净收益；各岗位的结果口径不同 |
| 10 人与组织 | Sourcegraph、EM、Monzo、PM 管理题 | 一线/二线明确分开；组织设计、管理者培养、继任、资源机制与持续结果 |
| 11 领域建模（用户补充） | 本轮未专门核验领域建模题库；产品、设计与数据库资料可作为待查线索 | 业务/产品/项目概念、商业化机制、数据粒度与规则、特征时间语义、数据库映射及模型演进；后续需独立采样 |

**现有框架无需因为外部题库而推倒重来。** 用户补充的领域建模在现行架构中独立为 B 域。最需增补的是“可操作任务”和“评价证据”，以及运营专业题、二线管理、领域建模与允许 AI 的编码任务。用户博客已有事实/Why/Top K/Next及管理规划思想，外部仓库应做覆盖校验和练习结构参考。

## 5. 运营与产品：不把泛资源冒充岗位题库

本轮找到实质品牌增长题库；可以补增长实验、渠道组合、定价和商业结果，但不能囊括内容、社区、活动、平台与商家运营。[品牌增长 README](https://github.com/coryjburk/intv-playbook-marketing_brand-growth/blob/main/README.md)、[实际题库源码](https://github.com/coryjburk/intv-playbook-marketing_brand-growth/blob/main/index.html)。

另读到 [BPteach 的 2017 新媒体运营面试文章](https://github.com/BPteach/learn-new-media-from-scratch/blob/master/2017-08-07-new-media-interview.md)。作者说明自己从事内容营销和社群运营，正文围绕自我介绍、经历与企业匹配；它是从业者经验文章，不是完整现代运营题库，未发现根许可证。[仓库 API](https://api.github.com/repos/BPteach/learn-new-media-from-scratch)。Monzo 客户运营与运营领导框架可帮助定义沟通、质量、风险和责任范围，但仍属于银行业务情境。

建议首批运营题由本项目原创：激活流失诊断、活动净增量、社区高活跃低贡献、商家供需错配、内容转化与审校。用运营案例事实、任务产物和数据口径评分；不要把产品经理“设计一个产品”的表现当成运营执行证据。

## 6. Skills：可借练习和整理流程，不能替代人的能力评价

未安装或执行以下技能。此处读取的是公开文件，将其中流程视为待审查材料，不作为本次运行指令。

| 仓库与检查位置 | 可参考的流程 | 边界与许可 |
| --- | --- | --- |
| [philpalmieri/engineering-manager-skills](https://github.com/philpalmieri/engineering-manager-skills/blob/main/README.md)：[interview-prep](https://github.com/philpalmieri/engineering-manager-skills/blob/main/skills/management/interview-prep/SKILL.md)、[interview-analysis](https://github.com/philpalmieri/engineering-manager-skills/blob/main/skills/management/interview-analysis/SKILL.md) | 简历主张→选择少量问题→针对项目/数字追问→解释选择理由→覆盖维度；辅助整理证据 | 依赖已有模板和评分规则，不会自动产生可靠招聘标准；需要约束推断与个人数据处理。[MIT](https://github.com/philpalmieri/engineering-manager-skills/blob/main/LICENSE)，[2026-05-27 推送](https://api.github.com/repos/philpalmieri/engineering-manager-skills) |
| [PrepLabsAI/InterviewMentor：AI 产品战略面试 skill](https://github.com/PrepLabsAI/InterviewMentor/blob/main/agents/ai-pm/ai-product-strategy-interviewer/SKILL.md) | 模拟 AI 产品战略、成功指标、不确定性、路线图和成本质量取舍；可作为练习交互参考 | 模拟 VP persona 不是公司正式面试；生成反馈不是经验证的评分，仍需人工试评。[MIT](https://github.com/PrepLabsAI/InterviewMentor/blob/main/LICENSE)，[2026-10-07 推送](https://api.github.com/repos/PrepLabsAI/InterviewMentor) |

另核验 [borghei/Claude-Skills 根许可](https://github.com/borghei/Claude-Skills/blob/main/LICENSE)：是 **Commons Clause + MIT**，不是普通 MIT。若后续使用其产品面试素材，需要单独检查限制，不把整套 skill 纳入首期直接复用名单。

## 7. 复用优先级与内容迁移

### 优先借鉴名单

1. **内容模型：PM Interview Project。** 学习字段组织、追问和证据链；NC/SA 条件下不整批复制题卡。先原创 2–3 道产品题试评，比较表达是否更清楚。
2. **事实深挖：TIH + Sourcegraph。** 选择成功、失败、优先级、培养四类题，结合博客原思想写成本项目题卡；记录公司经验来源和历史状态。
3. **晋升与岗位矩阵：Monzo。** 借鉴通用/岗位分层与责任范围，不照搬数字职级；面试与晋升共享能力，但晋升需要持续表现证据。
4. **技术覆盖：JavaGuide、前端 Handbook、设计 Primer。** 盘点当前旧题库缺口，每领域先选少量代表题，补版本、约束和验证；不导入全部目录。
5. **AI 实操：ombharatiya。** 先审查企业 RAG 案例与限流重试任务，形成原创设计/编码练习。ayushbishtdev 的场景结构可作覆盖参考，未经许可不迁正文。
6. **运营增长：品牌增长 playbook。** 借鉴候选人与面试官阅读视角，用原创数据场景重写实验/渠道/收益题；它未提供许可，不搬运问答及分层答案。

以上排序针对本项目缺口与可用性，不是仓库质量排名。

### 许可与来源治理

- **CC BY-SA 4.0**：CIU；改编需处理署名、改动说明与相同方式共享。
- **CC BY 4.0**：System Design Primer；根文件明确为作者个人许可，不代表雇主。
- **CC BY-NC-SA 4.0**：PM Interview Project，以及 CS-Notes README 实际链接；非商业限制和相同方式共享可能影响后续收费服务或商业复用，不能把这些内容统一改标 MIT。
- **MIT/Apache-2.0**：保留实际适用的许可、归属和必要声明。根许可不自动解决外链内容、第三方图表、书籍摘录或贡献材料的权利边界。
- **未发现许可**：ferminrp、kaushikb9、ayushbishtdev、品牌增长。当前采用链接、原创概述和结构参考；未经明确授权不直接翻译、复制或整体迁入正文。

许可判断以第 2 节逐项声明为依据；GitHub API `license=null/NOASSERTION` 只代表机器识别结果。本轮 CS-Notes、设计 Primer 与 PM 项目都说明了人工读取真实许可的必要性。

### 后续具体批次

**第一批：来源登记，不抓取全集。** 在现有 migration manifest 的思路下，为每条拟用资料登记仓库、具体文件、固定 commit（实际迁移前补）、语言、题型、覆盖能力、许可、使用方式、版本/时效与复核责任。历史公司材料单独标注。

**第二批：围绕既定 20 题试点补结构。** 优先完成：技术机制、基本编码、抽象、系统设计、AI 评估/集成、产品优先级、运营实验、领域建模、项目资源、成功/失败复盘、一线/二线管理。主问和追问采用原创表述；每题要求可观察证据、反例与评分边界，不只参考答案。

**第三批：建立来源到题卡的映射。** 一道题只维护一份内容，通过岗位、责任范围、面试/晋升入口引用；不按来源仓库建立长期目录。来源可复用，题目也能引用多个一手文档。

**第四批：试用再扩量。** 两名评价者独立读答案，记录分歧；修订歧义、证据不足选项和角色锚点。AI 代码任务先在受控环境验证；不默认第三方示例测试足以证明任务可用。首期不以导入题数为验收。

## 8. 尚待研究与验证

- 领域建模的专门题库与案例，特别是商业化规则、数据模型、特征模型和数据库映射；新增分类不代表本轮已完成对应外部研究。
- iOS、编译原理、DevOps/仓库治理、PMO与二线管理的完整练习材料；本轮没有为这些宣称已找到成熟题卡。
- 内容、社区、活动、商家运营的现代案例；品牌增长及客户运营只能覆盖一部分。
- AI 参考答案的具体技术结论、模型/工具版本和公司题出处；后续逐题回到官方文档、论文和公司公开资料。
- 外部评分表的可靠性与候选人表现差异；题卡完整不等于评价有效，尤其公开预览与 AI 模拟反馈。
- 实际迁移时固定版本、再次检查许可与第三方素材，避免只保存会变化的默认分支链接。
