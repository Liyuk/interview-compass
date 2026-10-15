# Interview Compass：GitHub 题库扩充来源与收录建议

调研日期：2026-10-14
目标仓库：interview-compass，分支 codex/bootstrap-interview-compass。调研前工作区已有 7 道未提交的双语题；没有修改应用代码、题目记录或来源台账。本报告只新增在 docs/planning/。
现有内容基线：本地 294 道唯一题（中英各一条，共 588 条语言记录）；来源台账 77 条，65 条已使用、12 条已审未用。题量按 npm run report:coverage 核验。目前相对薄弱的主题包括特征模型（2）、模型演进（2）、自驱（2）、AI 工程（5）、设计岗位（12）、市场岗位（21）；这只是题量信号，不表示质量或完整度。

## 结论

**可以把题库扩到几千题，但应把“发现到的原材料”与“本站发布的启发式题卡”分成两层。** 公开 GitHub 项目里确实存在千题级技术练习集，以及数十至数百道系统设计、AI、产品题。它们大多不能直接等同于 Interview Compass 的题卡：不少是编码练习或知识问答，包含答案；本站需要呈现的是问题、考察意图、可观察信号和来源，而不是答案集。

最有效的扩充顺序：

1. 先整理有明确许可证、实际有题目文件的系统设计和 AI 来源，按原始题目链接保存最小来源元数据；先做去重、时效和来源审查，再挑选进入公开题库。
2. 把数据工程题库作为高潜力候选池，但先解决其 1,418 道题所指向的站外内容快照与许可适用范围；GitHub 仓库自身并未承载那 1,418 道题。
3. 产品、品牌增长、设计和运营材料中有不少好问题，但若仓库没有明确许可证，采用“主题/结构启发 + 独立重写 + 链回原文”，不复制问题原文或翻译。产品项目另有 CC BY-NC-SA 限制。
4. 题量增长以“可检索的来源题库”和“经审核的本站原创/改编题卡”分别计数。翻译版本、改写重述、同一主问的不同标签不新增唯一题数；一个案例拆出不同主问时才考虑成为多题。

## 研究方法与边界

- 以 GitHub 作者/维护者仓库的 README、LICENSE、目录树、代表题目文件和 GitHub REST API 为一手来源。GitHub 搜索只用于发现线索；表中的 README 数量是仓库自述，标为“自述”时没有声称逐题独立核实。
- 仓库的 pushed_at、star 数或公司名称不证明题目真实、有效或代表行业标准。本轮不验证任一答案正确性，也不把“reported / real interview question”标签视为雇主背书。
- 未取得许可证的公开仓库不应被视作可自由复制。GitHub 对无许可证仓库的说明见[许可仓库文档](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository)。
- 下方兼容性是内容工程建议，不是法律意见。复制或实质改编前应保留来源、许可版本、上游提交/抓取日期、题目级出处和修改记录；对不能明确判断的材料联系作者或只作链接参考。

## 高价值来源清单

| 来源 | 仓库实际材料与可用主题 | 数量与格式证据 | 许可证与收录边界 | 建议用途 |
| --- | --- | --- | --- | --- |
| [DataDriven：Data Engineering Interview Handbook](https://github.com/datadriven-io/data-engineering-interview-handbook) 及其所列[题目仓库](https://github.com/datadriven-io/data-engineering-interview-questions) | SQL、Python、数据建模/Schema、数据管道架构、系统设计和行为题；题目覆盖 grain、SCD、实验分流 schema、数据质量、批流、回填、去重、成本与 on-call。 | README 自述关联 **1,418** 题：SQL 854、Python 388、数据建模 56、管道案例 120。重要核验：被列为“题目仓库”的 GitHub 仓库树只有 README.md 与 LICENSE；题目数量链接到 DataDriven 网站，GitHub 项目不是完整离线题库快照。[手册 README](https://github.com/datadriven-io/data-engineering-interview-handbook/blob/main/README.md)；[题库仓库文件树](https://api.github.com/repos/datadriven-io/data-engineering-interview-questions/git/trees/main?recursive=1) | 仓库声明 [CC BY-SA 4.0](https://github.com/datadriven-io/data-engineering-interview-handbook/blob/main/LICENSE)。该声明可见于 GitHub 仓库，但是否覆盖站外托管题目需逐项确认；避免仅凭手册许可证批量拷贝外站内容。若将其授权内容改编/翻译，需保留署名和相同方式共享要求。[CC BY-SA 条款](https://creativecommons.org/licenses/by-sa/4.0/deed.en) | **先做来源目录/覆盖映射，再谈导入。** 可作为领域建模、特征/事件模型和数据工程方向的主要候选池。向作者确认站外 1,418 题许可及可下载版本后，再挑题卡；不要宣称已本地保存了这 1,418 题。 |
| [DesignGurus：Grokking System Design](https://github.com/design-gurus/grokking-system-design) | 系统设计面试框架、题库、模式、公司准备指南与深入技术材料；内容包含 AI agent/RAG、LLM 推理平台、向量检索、分布式系统等较新题面。 | README 自述 59 道问题、30 个模式、122 个公司指南、19 个深读和 134 个图；目录树可见 59 个 design-*.md 单题文件，另有 practice-bank.md 汇总页；问答按 Markdown 文件组织。[题目目录](https://github.com/design-gurus/grokking-system-design/tree/main/questions) | 仓库有 [CC BY 4.0 LICENSE](https://github.com/design-gurus/grokking-system-design/blob/main/LICENSE)，并有 [NOTICE](https://github.com/design-gurus/grokking-system-design/blob/main/NOTICE.md)。署名型许可原则上更适合选题引用/翻译改编，但逐项核对 NOTICE 和嵌入图示/外部内容的权利来源。[CC BY 4.0 条款](https://creativecommons.org/licenses/by/4.0/deed.en) | **优先候选。** 直接挑选并标注来源，或根据通用设计模式原创重述；将参考解答只用于内部理解和审校，不把完整答案搬进启发式站点。注意其“公司指南”不自动证明题目是公司官方题。 |
| [Landed：Awesome AI Engineer Interview](https://github.com/landedjobs/awesome-ai-engineer-interview) | LLM 基础、RAG、Agent、评估、LLMOps、微调与推理、安全护栏、编码、系统设计、行为与公司面试材料；将问题分主题，部分标注 reported/representative，并提供设计示例。 | README 自述 230+ 题、10 个系统设计、12 个公司指南；代码树有 9 个主题解释文件和 9 个问题 Markdown 文件，题目正文有多条项目符号/分节，不可从文件数推断唯一题数。[README](https://github.com/landedjobs/awesome-ai-engineer-interview/blob/main/README.md)；[questions 目录](https://github.com/landedjobs/awesome-ai-engineer-interview/tree/main/questions) | [MIT LICENSE](https://github.com/landedjobs/awesome-ai-engineer-interview/blob/main/LICENSE)。仓库声明许可覆盖仓库文件；题目中引用的第三方信息、公司面经或图表仍要逐条遵循其出处。MIT 许可与署名适合精选导入候选，但应把“reported”当作作者的出处标签而不是核实结论。[MIT 文本](https://opensource.org/license/mit) | **优先候选。** 对 AI 题按“基础原理、实现/调试、评估、系统设计、上线成本可靠性、安全、组织/产品判断”分批审核；核对工具与模型时效；把代表题重写成可观察能力问题并链接出处。 |
| [donnemartin/system-design-primer](https://github.com/donnemartin/system-design-primer)（现有研究报告已登记） | 系统设计、需求澄清、容量估算、数据/组件取舍及示范系统。 | README 有系统设计题和解决方案清单、练习材料；与上述 59 题仓库重叠，应先按场景/约束去重。[README](https://github.com/donnemartin/system-design-primer/blob/master/README.md) | LICENSE.txt 声明 [CC BY 4.0](https://github.com/donnemartin/system-design-primer/blob/master/LICENSE.txt)。GitHub API 的 SPDX 字段未识别，不应把 API 的空值覆盖实际许可证文本。 | **保留在系统设计来源档案。** 复用题面前登记来源和改动；方案仅作一个可讨论方案，不能写成标准答案。详见[既有 GitHub 研究](./2026-10-14-github-interview-research.md)。 |
| [Product Manager Interview Project](https://github.com/deanpeters/The-Product-Manager-Interview-Project)（既有研究） | 产品判断、行为、优先级、AI PM、人员管理；题卡含主问、追问、证据/风险信号和评价模板。 | README 自述 **58 张题卡**，按面试轮和能力索引；作者将仓库声明为 public preview、未经过正式内部试点。[README](https://github.com/deanpeters/The-Product-Manager-Interview-Project/blob/master/README.md) | [CC BY-NC-SA 4.0](https://github.com/deanpeters/The-Product-Manager-Interview-Project/blob/master/LICENSE)。NC 限制商业用途，SA 对衍生作品有相同方式共享条件；若 Interview Compass 的未来用途/授权不确定，不直接导入或翻译改编，先寻求明确许可。[许可证条款](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en) | **主要借鉴题卡结构和访谈流程。** 可以链接来源；实质复用前先解决 NC/SA 与本站内容许可的兼容性。公开预览的评价锚点需当作作者设计而非已验证标准。详见既有报告。 |
| [Monzo progression-framework](https://github.com/monzo/progression-framework) 与 [jorgef/engineeringladders](https://github.com/jorgef/engineeringladders)（既有研究 + 新核验） | IC/Tech Lead/TPM 与经理职业阶梯、责任范围、晋升讨论和证据采集。前者含岗位/运营框架；后者明确建议以 1:1、同伴反馈和自评收集证据。 | 两者是能力/级别框架，**不是几百道面试题**。engineeringladders 自述 4 条梯级并说明组织应改写本地行为例子。[README](https://github.com/jorgef/engineeringladders/blob/master/README.md) | [Monzo MIT](https://github.com/monzo/progression-framework/blob/master/LICENSE)；[engineeringladders Apache-2.0](https://github.com/jorgef/engineeringladders/blob/master/LICENSE)。前者最后推送时间较早，后者 2022 年，直接照搬级别映射会有过时风险。 | **框架优先，不把职级文案转换为题目。** 用它们生成“责任范围 × 证据类型”的晋升问题，结合用户自己的管理经历重新写题。详见[既有研究](./2026-10-14-github-interview-research.md)。 |
| [charlax/engineering-management](https://github.com/charlax/engineering-management) | 管理工程资源索引：成长、反馈、组织、团队、招聘、项目、VP/工程管理面试等链接。 | README 是精选链接目录，内容散布在外站；该仓库自身不构成大规模原创题库。[README](https://github.com/charlax/engineering-management/blob/master/README.md) | [MIT](https://github.com/charlax/engineering-management/blob/master/LICENSE)；MIT 仅适用于该仓库中受其许可的材料，不自动替外链页面授权。 | **发现与主题覆盖参考。** 跟进原作者文章的许可；本站提炼共通问题时须从多个一手来源形成独立表述并留下来源链。 |
| [MaximAbramchuck/awesome-interview-questions](https://github.com/MaximAbramchuck/awesome-interview-questions) | 按角色/主题链接大量公开面试题库的索引，适合继续发现语言、数据库、设计、运营等资源。 | README 是外部项目列表，不是统一授权的题目集合；树中没有根许可证。[README](https://github.com/MaximAbramchuck/awesome-interview-questions/blob/master/README.md)、[GitHub API](https://api.github.com/repos/MaximAbramchuck/awesome-interview-questions) | 未发现 LICENSE；不因仓库规模或高 star 数获得对子链接内容的复制许可。 | **只用作发现目录。** 每个子项目单独核验 README、LICENSE、题目正文和原始链接；不把聚合列表下载等同于内容授权。 |
| [coryjburk/intv-playbook-marketing_brand-growth](https://github.com/coryjburk/intv-playbook-marketing_brand-growth)（既有研究） | 品牌与增长营销，覆盖实验、渠道、定价、P&L、跨职能和行为；题目含回答/观察视角。 | 源码中 9 类、每类 12 题，共 108 题；这是 MBA 品牌/增长营销方向，不等价于内容、社区、商家、活动等所有运营岗位。[题库源码](https://github.com/coryjburk/intv-playbook-marketing_brand-growth/blob/main/index.html) | GitHub API 未识别 LICENSE，仓库根目录无许可证文件。[API](https://api.github.com/repos/coryjburk/intv-playbook-marketing_brand-growth) | **结构/主题启发 + 原创重写 + 链接。** 不复制 108 题原句或答案，不将其作为可直接导入题库。详见既有研究。 |
| [briannhinton/designer-interview-questions](https://github.com/briannhinton/designer-interview-questions) | 设计岗位的一份 README 题单，含作品表达、职业经历、工具、设计判断；部分题附“在观察什么”。 | GitHub 树只有 README 文件，仓库自述是设计面试问题集合，规模较小；最后推送较早。[README](https://github.com/briannhinton/designer-interview-questions/blob/master/README.md) | 未发现 LICENSE，API license 为空。[API](https://api.github.com/repos/briannhinton/designer-interview-questions) | **只作启发。** 结合本项目设计岗位能力定义，独立编写作品集走查、研究证据、设计决策、可访问性、交付协作与结果验证问题。 |
| [ferminrp/pm-interview-questions](https://github.com/ferminrp/pm-interview-questions) | 产品经理问题按协作、执行、战略、用户洞察、影响、产品与商业判断分组。 | README 单文件题单，没有完整题卡或评分；2023 年最后推送信号。[README](https://github.com/ferminrp/pm-interview-questions/blob/main/README.md) | 未发现 LICENSE。[API](https://api.github.com/repos/ferminrp/pm-interview-questions) | **只作主题启发/来源链接。** 本项目已有产品判断类覆盖，应避免增加同义的泛行为题。 |
| [Twipped/InterviewThis](https://github.com/Twipped/InterviewThis) | 候选人反向询问雇主的问题：团队、技术实践、部署、运维、基础设施、决策与工作方式。 | 主要是候选人“问公司什么”的长列表，并非公司向候选人提问的题库。[README](https://github.com/Twipped/InterviewThis/blob/master/README.md) | README 含 LICENSE.md，但 GitHub API 未识别标准 SPDX；需逐字核对许可证正文和覆盖范围。[许可证文件](https://github.com/Twipped/InterviewThis/blob/master/LICENSE.md) | **适合作为本站新增的候选人双向面试工具方向**：把反向问题按岗位/团队/工程治理分类。导入前核清文件许可，并为本项目写原创整理和注释。 |

## 按本项目八域映射的可扩充主题

### 本轮追加核验的候选来源

这几项来自本轮独立搜索，适合补齐既有样本较少覆盖的数据库建模、数据工程、DevOps/SRE、AI 工程和工程管理。以下题量来自仓库当前 README 或可见文件统计，不等于审核后能发布的题量。

| 来源 | 实际结构与可用内容 | 许可证与建议用法 |
| --- | --- | --- |
| [OBenner/data-engineering-interview-questions](https://github.com/OBenner/data-engineering-interview-questions/tree/2a27b4e98a564b9d0fb1019ae3ba9a2c2e3f35db) | README 自述 2,000+；固定版本的 `content/full.md` 有 2,994 行；排除顶部主题目录后有 2,808 条题目链接（未对语义重复做去重），覆盖 SQL、仓库、批流、数据质量、治理、可观测性、成本、BI 与系统设计。它是真正包含题目索引的仓库，不是前述 DataDriven 站外题集的情形。[完整目录](https://github.com/OBenner/data-engineering-interview-questions/blob/2a27b4e98a564b9d0fb1019ae3ba9a2c2e3f35db/content/full.md) | **未发现 LICENSE**（固定版本仓库树没有许可证文件，LICENSE URL 返回 404）。只作为题目发现/覆盖目录，保留链接；不能将 2,844 条目复制、翻译或改写成公开题卡。另需逐个检查其子文件：列表包含较早 Hadoop/工具题，时效性不一。 |
| [dataskew-io/data-engineering-interview-questions](https://github.com/dataskew-io/data-engineering-interview-questions/tree/715f5fad79373c70bc9b7e9cd3dc1cb126f69428) | 结构化 `questions.json`，按主题收录社区提交题；贡献流程要求提供题面、公司/主题等出处信息，审核后合并，并明确提醒不得提交专有信息。主题含数据建模、SQL、管道设计、故障排查与行为题。[README](https://github.com/dataskew-io/data-engineering-interview-questions/blob/715f5fad79373c70bc9b7e9cd3dc1cb126f69428/README.md) | 根目录为 **MIT**。[LICENSE](https://github.com/dataskew-io/data-engineering-interview-questions/blob/715f5fad79373c70bc9b7e9cd3dc1cb126f69428/LICENSE)。可作为少量改编候选和编辑流程参考；社区题目的公司来源是提交者陈述，需要独立核验，仍需记录题目级出处和原文修改。 |
| [DNXLabs/DevOps-Interview-Questions](https://github.com/DNXLabs/DevOps-Interview-Questions/tree/4d4b3ae44a0abd87cf5b5f79b9fce7abd6ce7e9a) | README 按通用、网络、Linux/Windows、安全、云、架构、自动化、CI、编码等分类，强调开放题可以发展为讨论；适合补充 DevOps/SRE 与工程流程场景。[README](https://github.com/DNXLabs/DevOps-Interview-Questions/blob/4d4b3ae44a0abd87cf5b5f79b9fce7abd6ce7e9a/README.md) | 根目录为 **MIT**。[LICENSE](https://github.com/DNXLabs/DevOps-Interview-Questions/blob/4d4b3ae44a0abd87cf5b5f79b9fce7abd6ce7e9a/LICENSE)。仓库较旧；适合提取经典问题类型，不宜原样迁移已过时的工具细节。 |
| [atryx/ai-engineer-interview-questions](https://github.com/atryx/ai-engineer-interview-questions/tree/2ebafa2e5d53bb114ab07541ac40c1e4feb9885f) | README 自述 100+ 问题，按 LLM、提示、RAG、向量检索、Agent、微调、评测、生产基础设施、安全及系统设计分组。实际目录只有 README 和许可文件，是集中式单文档问答，不是 100 份独立题卡。[README](https://github.com/atryx/ai-engineer-interview-questions/blob/2ebafa2e5d53bb114ab07541ac40c1e4feb9885f/README.md) | 根目录为 **MIT**。[LICENSE](https://github.com/atryx/ai-engineer-interview-questions/blob/2ebafa2e5d53bb114ab07541ac40c1e4feb9885f/LICENSE)。可借主题覆盖或精选问题，但 README 中模型版本、定价和若干技术断言变化很快；只收问题，不移植答案，技术结论回查对应官方文档。 |
| [kaushikb9/em-interviews](https://github.com/kaushikb9/em-interviews/tree/bf79a4a5a774151e3378870857c8ad9e2d3582d9) | 覆盖 Engineering Manager、Director、VP 和高级 IC 的工程领导力题；描述基于作者在印度产品创业公司的面试经历。目录按问题主题组织，可补一线与二线管理视角。[README](https://github.com/kaushikb9/em-interviews/blob/bf79a4a5a774151e3378870857c8ad9e2d3582d9/README.md) | **未发现 LICENSE**。只记录主题并链接原文；本站以管理管理者、组织设计、继任、资源组合等场景独立原创，不复制题面。 |
| [pingananth/fde-decomp-interview-guide](https://github.com/pingananth/fde-decomp-interview-guide) | 专注 Forward Deployed Engineer 的模糊问题拆解与客户模拟；强调先澄清目标、用户、数据和约束，再拆解、排序、提出阶段计划并说明风险。补足 D 域问题拆解及“产品思维/拿结果”跨域链路。 | 仓库说明有练习框架与观察信号；本次未确认明确许可，不复用其 rubric 或题面，只用作发现线索；本库自行设计问题并保留来源链接。 |

上述仓库 HEAD 于本轮核验并固定到链接中的提交。许可证状态只针对这些固定版本的仓库文件；不覆盖外部链接、嵌入材料或第三方提交内容的额外权利要求。

## 按本项目八域映射的可扩充主题

下面是从上游题目模式中整理出的候选主题，不是已经新增的本站题目。表中的数字是建议的下一批原创/审核目标，不是上游题量承诺；有授权且来源可回溯时，才把原题改编纳入发布题数。

| 域 | 高价值增量 | 可先做的审核目标 | 主要来源/边界 |
| --- | --- | ---: | --- |
| A 专业问题解决与实现 | CS 基础与语言机制、SQL/数据处理编码、数据管道设计、AI 工程评估/检索/Agent/推理部署、安全、系统设计中的可运行性和成本 | 80–120 | 当前 AI 工程 5 题、CS 10 题；复用已有 Java/前端/系统设计来源地图。DataDriven 和 Grokking 可扩充；避免把外链答案误作为本题的标准答案。 |
| B 业务理解与领域建模 | 事件/实体边界、事实表粒度、特征快照/时间窗/标签泄漏、Schema 演进、历史重放、商业规则、计费/退款/佣金/订阅、指标口径与数据契约 | 50–80 | 当前特征模型 2、模型演进 2、数据模型 4。DataDriven 的建模题库适配度最高，但需要验证站外许可和内容可保存性。 |
| C 价值判断与方向设定 | 产品机会、定价与商业模式、增长实验、归因与增量、资源组合、退出/停止条件、AI 投资取舍 | 40–60 | 当前已 58 题，优先补角色语境和高质量追问，不重复宽泛的“如何定优先级”。增长 playbook 可启发，但不直接转载。 |
| D 交付与持续运营 | 数据质量与回填、迁移/灰度/回退、告警/on-call、SLO 与成本、供应商/运营流程、事故沟通、计划变更和复盘闭环 | 40–60 | 当前 30 题；结合工程系统和面向业务/客户的运营案例。上游公司案例需分清事实、假设与情境改写。 |
| E 协作、沟通与影响 | 跨团队数据契约、产品/设计/工程冲突、无职权影响、对外承诺、招聘流程中的候选人透明度、多方决策 | 30–50 | 当前 27 题；近期博客已新加招聘与管理协作题。产品/工程面试题单只能提供灵感。 |
| F 人与组织建设 | 招聘计划、岗位定级、面试官一致性、管理者培养、继任机制、组织设计、绩效改进、团队边界和公平性 | 35–55 | 当前 62 题；管理与晋升应按责任范围扩展追问，不需纯粹堆同义领导力题。Monzo/工程阶梯用于建模要求，不当现成题库。 |
| G 学习、适应与持续成长 | 自驱与学习迁移、错判校准、反馈闭环、AI 工具学习、安全/可靠性意识形成、挫折后恢复 | 20–30 | 当前自驱 2 题；开发源头优先用博客事实和原创题，避免人格测验式、不可观察的“潜力”提问。 |
| H 职业责任与工作方式 | 责任归属、归因、风险透明、AI 使用披露、隐私/偏见/安全、对岗位与团队的预期协商 | 20–30 | 当前已有诚信/归因/边界题；AI 和运营语境带来新的真实场景，题目须观察行为而非文化相似度。 |

逐域目标的和约为 315–485 道“审核后有效增量”，足够先把覆盖做厚。原始来源索引可以超过这个数；扩到几千条可以作为内部研究库或导入源，而不意味着几千条都应成为公开题卡。若每题只靠一个短题干且无意图、证据与重复检查，数量反而会降低检索质量。

## 收录流水线建议

1. **登记来源，不立即复制内容。** 在 source ledger 记录仓库 URL、默认分支/提交 SHA、许可证文件和版本、代表文件、主题、初步数量、是否官方/作者自述、抓取日期、使用状态。
2. **区分题型。** knowledge、coding、debugging、system-design、behavioral、case、planning 等格式分别维护。算法练习不能仅靠“题数”与管理情境题比较。
3. **做来源级授权审查。** 分清仓库 LICENSE 覆盖哪些文件、是否包含外部链接内容/品牌素材/面经引用；CC BY-SA、CC BY-NC-SA、MIT、Apache 等逐项记录，不设置一个“GitHub public = free”的默认值。
4. **去重再写卡。** 以主问、情境、主要能力、预期证据做语义去重；保留不同难度/业务条件作为 variant 或 follow-up，而不重复计数。题卡最少包含：问题、考察意图、可观察信号、适用主题/岗位/责任范围、来源与许可、语言和更新时间。
5. **标注来源可信度。** 将“作者原创”“作者称真实面试”“代表性练习题”“基于公开技术文档独立编写”区分开；不把 GitHub 仓库标题中的“real/FAANG”未经核实地显示成本站事实。
6. **每批审核题量和覆盖质量。** 同一来源可先留在本地原始参考档案中，发布库只收经过双语一致性、时效、许可、事实与独立性检查的题目。中英翻译为同一个 id，统计唯一题只计 1。

## 近期建议批次

| 批次 | 内容 | 预计通过审核的新增唯一题 | 先决事项 |
| --- | --- | ---: | --- |
| 1 | AI 工程：评估/RAG/Agent/LLMOps/模型部署/AI 安全；以现有题目去重 | 20–30 | 逐条回查技术原始文档；Landed MIT 题目来源标签仅作线索。 |
| 2 | 数据与领域模型：特征定义/时间切片/泄漏、事实粒度、Schema 演进、数据管道与回填 | 25–40 | 确认 DataDriven 站外题集许可证/可获取快照；否则只按技术主题原创。 |
| 3 | 系统设计：多约束、多规模变体、容量估算、AI 系统与业务数据系统 | 25–40 | 对照 System Design Primer 和 Grokking 去重；方案不作为唯一答案。 |
| 4 | 设计、产品、增长与运营专业场景 | 40–60 | 无许可证材料只作研究线索；按本项目岗位框架独立重写并记录链接。 |
| 5 | 管理与晋升：一线/二线、继任、组织设计、责任范围证据 | 20–35 | 从框架生成情境问题；区分面试单次证据与晋升跨周期证据。 |

以上批次先形成大约 130–205 道增量，足以验证来源治理与内容工作流；再看覆盖报告决定是否继续扩张。技术和行为题应维持不同格式与解释深度。

## 下一步决策

题目扩充按“来源用于发现主题和检查覆盖，题卡按 Interview Compass 的能力框架独立组织”执行。内容仍保留来源链接，避免把上游宣称的公司面试题未经核实地写成本站事实；题卡继续只提供问题、考察意图和观察信号，不抄入上游答案或评分。

## 后续追加记录

报告完成后，已从 AI 工程、数据工程、DevOps/SRE 与模糊问题拆解来源中新增 29 道中英题卡，题面和场景由本站独立编写，来源只标记为主题参考；分别登记在 A、B、D 域来源台账。题库从 294 道增至 **323 道唯一问题**（中英各 323 条）。其中 AI 工程从 5 道增至 13 道，数据模型从 4 道增至 8 道，特征模型从 2 道增至 4 道，工程体系从 10 道增至 18 道，问题拆解从 4 道增至 8 道。后续批次可继续沿主题地图扩展，不设总题量上限，仍按去重、双语一致和意图/信号完整性校验。
