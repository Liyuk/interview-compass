# GitHub 面试与晋升项目：本地蒸馏索引

> 后续留存更新（2026-10-14）：按用户要求，品牌增长参考项目已保存完整公开仓库快照与原站 HTML 到仓库外的参考归档目录。9 类 108 题及原有辅助内容完整保留，在线 HTML 与源仓库 index.html 相同。下文“未保存正文”等描述是此前蒸馏阶段的记录；本地参考副本与公开再发布权限分别处理。之前该项目的完整 SHA 有字符转录错误，本次已按远端核验值修正。

核验日期：2026-10-14。本文把前期调研中全部 15 个主样本、三套可参考的 skills，以及补充的运营文章和特殊许可仓库，整理成可长期查阅的 20 张项目卡。这里的“蒸馏”是对仓库的结构、题型、方法和适用边界作自己的概述，不是仓库镜像、完整翻译或答案集。

本轮新增来源和可扩充题量评估见[GitHub 题库扩展来源报告](../../planning/2026-10-14-github-question-sources-expansion.md)，其中补充了 Data Engineering、AI 工程、系统设计和 DevOps/SRE 来源，并记录真实文件量与许可边界。

每个来源都固定到本轮检查的 HEAD commit。链接中的 40 位 SHA 是版本标识；路径链接也因此不会随着默认分支变化。需要复查时先看对应 commit 和路径，再查该文件当时适用的 LICENSE。仅留 GitHub URL 不等于已把上游内容归档到本机；本文件是本机保存的分析索引。没有明确许可的来源，只保存本手册原创概述和指向上游的链接，不保存其正文副本。需要离线留存带许可的上游文件时，应另建来源清单，保留版权声明、许可证和 commit，并遵守署名、相同方式共享、非商业等条件。

## 快速使用

本库现行能力域简称：A 专业解题与实现；B 业务理解与领域建模；C 价值判断与方向规划；D 交付执行与持续运营；E 协作沟通与影响；F 人才与组织建设；G 学习适应与持续成长；H 职业责任与工作方式。完整定义见[MECE 内容架构](../../planning/2026-10-14-content-architecture-mece.md)。能力映射表示“适合借作覆盖线索”，不表示上游已经按本库标准测量了该能力。

建议读取次序：先看 PM 项目、Tech Interview Handbook、Monzo 和 Sourcegraph，掌握题卡、事实追问、角色框架与责任范围；再按 A/B/D 等领域查技术、AI、产品、运营样本。用仓库做覆盖检查，不把其题目数量、所谓公司来源、答案或职级表直接当成已验证标准。

## 项目卡

### 1. Coding Interview University

- **固定版本与位置：** [`717298bf`](https://github.com/jwasham/coding-interview-university/tree/717298bf219a30d7fb0671285c5f057b1bb74b27)，[README 学习路线](https://github.com/jwasham/coding-interview-university/blob/717298bf219a30d7fb0671285c5f057b1bb74b27/README.md)、[许可证](https://github.com/jwasham/coding-interview-university/blob/717298bf219a30d7fb0671285c5f057b1bb74b27/LICENSE.txt)。
- **结构蒸馏：** 一份面向软件工程面试准备者的长学习清单，把基础主题、学习顺序、练习和外部资源串成课程式路线。组织单位是知识主题与练习资源，不是面试轮或能力证据。
- **值得借鉴：** 用先修关系和阶段目标组织计算机基础；每个主题都给出“学什么/去哪练”的出口。Interview Compass 可把它转换成覆盖地图，再给代表知识点补机制解释、反例、操作任务和评分证据。
- **映射：** A（数据结构、算法、计算机基础）；少量 C（备考计划本身不是候选人战略判断题）。
- **边界：** 课程覆盖很广，不能当作所有岗位都必须掌握的硬性清单；链接资源的许可与质量各自独立。不得把“完成清单”解释为具备岗位胜任力。
- **许可与本地保存：** CC BY-SA 4.0。改编和再发布时要署名、说明修改并遵守相同方式共享；逐个确认外链材料权利。当前本地只保存本手册概述和固定链接，没有复制仓库。

### 2. CS-Notes

- **固定版本与位置：** [`b70121d`](https://github.com/CyC2018/CS-Notes/tree/b70121d377cb6005eb65f12b098cd5decd905669)，[README 与授权说明](https://github.com/CyC2018/CS-Notes/blob/b70121d377cb6005eb65f12b098cd5decd905669/README.md)、[操作系统死锁笔记](https://github.com/CyC2018/CS-Notes/blob/b70121d377cb6005eb65f12b098cd5decd905669/notes/%E8%AE%A1%E7%AE%97%E6%9C%BA%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%20-%20%E6%AD%BB%E9%94%81.md)。
- **结构蒸馏：** 中文主题笔记覆盖计算机网络、操作系统、数据库、Java、分布式和编码实践；按学科/主题浏览，适合作为知识地图和复习材料。
- **值得借鉴：** 中文术语导航和跨基础主题覆盖。题库可将每个知识页改造成“概念—机制—失败场景—诊断—验证”的短问答链。
- **映射：** A（OS、网络、数据库、分布式、语言）；少量 B（数据库建模作为主题入口，具体业务语义仍由本库案例负责）。
- **边界：** 笔记不自带结构化面试评分；事实和版本需更新核验。README 对授权有实际说明，虽 GitHub API 的 license 字段为空，也不能忽略 README 的 CC BY-NC-SA 4.0 声明。仓库内引用的第三方文章、图片等需分别核权。
- **许可与本地保存：** CC BY-NC-SA 4.0（以该固定版本 README 的授权文本为准）。非商业、署名、相同方式共享条件会限制整体迁入或商业服务使用；当前只保存原创概述和链接。

### 3. Tech Interview Handbook

- **固定版本与位置：** [`e1d28e8`](https://github.com/yangshun/tech-interview-handbook/tree/e1d28e8886c0b6ff3e50da991ce0e895134ddc59)，[行为面试 Rubrics](https://github.com/yangshun/tech-interview-handbook/blob/e1d28e8886c0b6ff3e50da991ce0e895134ddc59/apps/website/contents/behavioral-interview-rubrics.md)、[资深候选人行为面试](https://github.com/yangshun/tech-interview-handbook/blob/e1d28e8886c0b6ff3e50da991ce0e895134ddc59/apps/website/contents/behavioral-interview-senior-candidates.md)、[许可证](https://github.com/yangshun/tech-interview-handbook/blob/e1d28e8886c0b6ff3e50da991ce0e895134ddc59/LICENSE)。
- **结构蒸馏：** 面向候选人的准备手册，把编码、算法、行为面试等准备内容与学习路径组合；行为页面整理常见问题、回答准备建议和评价线索，资深页面把影响范围、领导力等放到更高责任范围讨论。
- **值得借鉴：** “先选少数具体经历，再围绕行动、本人贡献、结果和反思追问”；把行为维度显式化，让面试官关注具体证据；按资深程度改变问题深度。可作为本库事实深挖问题的编辑检查表。
- **映射：** A（编码/算法）；E（冲突、协作）；G（成长）；H（动机、责任及工作方式）；资深题还可采集 C/D/F 证据。
- **边界：** 面向求职者的备考建议不等于招聘方有效评分标准；其中对个别公司流程/标准的描述是作者整理，不是公司当前正式统一政策。评分锚点须在本库试评。
- **许可与本地保存：** MIT。复用许可覆盖仓库内适用内容，但需保留版权与许可声明；外部资源和第三方材料仍独立核验。当前本地保存的是方法概述，不是手册镜像。

### 4. Front-end Interview Handbook

- **固定版本与位置：** [`75ee62a`](https://github.com/yangshun/front-end-interview-handbook/tree/75ee62afc63bb9b48be160b0710bfcba6ab01a75)，[README](https://github.com/yangshun/front-end-interview-handbook/blob/75ee62afc63bb9b48be160b0710bfcba6ab01a75/README.md)、[JavaScript 问题正文](https://github.com/yangshun/front-end-interview-handbook/blob/75ee62afc63bb9b48be160b0710bfcba6ab01a75/website/contents/javascript-questions.md)、[许可证](https://github.com/yangshun/front-end-interview-handbook/blob/75ee62afc63bb9b48be160b0710bfcba6ab01a75/LICENSE)。
- **结构蒸馏：** 前端准备资料按主题组织问题和练习，涉及 HTML/CSS/JavaScript、编码与系统设计；具体正文与早期路径并不总一致，阅读时以该提交中实际文件为准。
- **值得借鉴：** 将知识 quiz、现场编码、设计题分开；每类题用不同回答/表现形式，避免把“会讲”误当作“会实现”。
- **映射：** A（前端语言、浏览器机制、实现和设计）；D（工程实践题可作线索）。
- **边界：** 技术内容更新快；个别旧链接只是迁移指引，正文也可能导向外站最新版。外站内容不自动落在仓库许可范围内。需要迁移题目时固定具体文件、版本和技术日期。
- **许可与本地保存：** MIT，遵循版权和许可声明；外链另核验。当前仅保存摘要，不复制整套问答。

### 5. JavaGuide

- **固定版本与位置：** [`c1f7605`](https://github.com/Snailclimb/JavaGuide/tree/c1f760553abfb0a1dafaa0704a5995388f8c91e5)，[Java 并发常见问题](https://github.com/Snailclimb/JavaGuide/blob/c1f760553abfb0a1dafaa0704a5995388f8c91e5/docs/java/concurrent/java-concurrent-questions-01.md)、[许可证](https://github.com/Snailclimb/JavaGuide/blob/c1f760553abfb0a1dafaa0704a5995388f8c91e5/LICENSE)。
- **结构蒸馏：** 以 Java 工程师知识地图和专题问答为主，跨 JVM、并发、数据库、网络、分布式、微服务等领域；有系列文章和面试题页面。
- **值得借鉴：** 对后端知识面做主题导航；把并发/分布式问答与具体工程任务配对。题卡新增版本、代码追踪、故障条件、性能/正确性验证，形成从机制到实践的层次。
- **映射：** A（Java、JVM、并发、分布式、数据库、微服务）；D（部署与故障实践）。
- **边界：** 常见问题和答案不能直接作为评分量表；框架版本和答案正确性逐题核验。文章引用的图像或外部资料须核实权利。
- **许可与本地保存：** Apache-2.0；如复制适用文件，保留版权、许可证和修改说明，关注 NOTICE（若该分发形态适用）；第三方素材另查。当前本地只存蒸馏和链接。

### 6. Android Interview Questions

- **固定版本与位置：** [`a8f95e4`](https://github.com/MindorksOpenSource/android-interview-questions/tree/a8f95e444cd9a52a244929c55dd9fdc9ffe336d0)，[README 题目目录](https://github.com/MindorksOpenSource/android-interview-questions/blob/a8f95e444cd9a52a244929c55dd9fdc9ffe336d0/README.md)、[许可证](https://github.com/MindorksOpenSource/android-interview-questions/blob/a8f95e444cd9a52a244929c55dd9fdc9ffe336d0/LICENSE)。
- **结构蒸馏：** Android、Kotlin、Java、组件和生命周期、并发、架构等问题集中在题目清单；一些解答依赖外链。
- **值得借鉴：** 按平台概念形成客户端知识覆盖表；迁成题卡时补生命周期状态转换、线程约束、离线/失败行为、可测试性和实际调试任务。
- **映射：** A（Android 客户端语言、框架、并发、架构）。
- **边界：** 旧 API 和架构实践不宜不加时效标记地照抄；外链答复另核验；不能替代 iOS 或跨端能力材料。
- **许可与本地保存：** Apache-2.0，遵守许可证/版权归属和适用声明要求；外链内容另核。当前仅摘要本地保存。

### 7. System Design Primer

- **固定版本与位置：** [`ae9bbd7`](https://github.com/donnemartin/system-design-primer/tree/ae9bbd7b02d90b9866215de185217d33f39ab733)，[README 的系统设计准备和案例](https://github.com/donnemartin/system-design-primer/blob/ae9bbd7b02d90b9866215de185217d33f39ab733/README.md)、[许可证](https://github.com/donnemartin/system-design-primer/blob/ae9bbd7b02d90b9866215de185217d33f39ab733/LICENSE.txt)。
- **结构蒸馏：** 先介绍系统设计主题和常见构件，再给面试流程/练习系统；案例通过需求、估算、组件选择和扩展讨论展示推理过程。
- **值得借鉴：** 设计题先澄清需求和规模，再给候选方案、容量约束、瓶颈与取舍；要求候选人解释替代方案而不是猜唯一标准答案。可以把案例改成有约束变化的互动题。
- **映射：** A（系统设计、可靠性、扩展）；B（业务概念经常决定数据/系统边界）；C（质量/成本/时间取舍）；D（运行与失效）。
- **边界：** 示例是一个可能的解法，不是参考答案唯一解；须检查规模假设与当代技术。根许可说明作者以个人身份授权，不能推断雇主授权。引用图表/外部材料独立核验。
- **许可与本地保存：** CC BY 4.0，按署名、许可链接和修改说明要求复用；非同许可的第三方材料需区分。当前只存原创提炼。

### 8. AI Engineering Interview Questions（ayushbishtdev）

- **固定版本与位置：** [`2d62fdb`](https://github.com/ayushbishtdev/ai-engineering-interview-questions/tree/2d62fdb30d1ea7a24e4c965773a06ca8250534f4)，[README](https://github.com/ayushbishtdev/ai-engineering-interview-questions/blob/2d62fdb30d1ea7a24e4c965773a06ca8250534f4/README.md)、[Agent 工程师题目](https://github.com/ayushbishtdev/ai-engineering-interview-questions/blob/2d62fdb30d1ea7a24e4c965773a06ca8250534f4/questions/02-agentic-ai-engineer.md)、[评估工程师题目](https://github.com/ayushbishtdev/ai-engineering-interview-questions/blob/2d62fdb30d1ea7a24e4c965773a06ca8250534f4/questions/03-ai-evaluation-engineer.md)。
- **结构蒸馏：** 按 AI 岗位和主题/难度划分问题，常用题目组成包括问题、考察点、答案说明、危险或浅薄回答、追问；覆盖评估、部署、治理、Agent 等主题。
- **值得借鉴：** 一个问题除了目标知识，还列出追问和薄弱信号；可用作覆盖维度清单，再将答案改写成可观察的成功标准和合理异议。
- **映射：** A（AI 系统与实现）；B（数据/业务上下文）；C（模型质量和成本权衡）；D（部署、评估、运维）；H（治理责任）。
- **边界：** 当前固定版本未见 LICENSE；GitHub API 也未识别许可。公开可读不代表可复制、翻译或纳入商业产品。参考答案是作者表达，不是行业标准；模型/工具结论必须回到官方文档或论文核验。
- **许可与本地保存：** **未发现许可，按保留所有权处理。** 本地只保存本手册的原创结构概述和链接，不下载或复制正文；若要逐题迁入，先取得授权或重新独立创作，并避免逐句翻译。

### 9. AI Engineer Interview Questions（ombharatiya）

- **固定版本与位置：** [`e080df2`](https://github.com/ombharatiya/AI-Engineer-Interview-Questions/tree/e080df282aaf14c128ade55c177a20c38d82df1d)、[企业 RAG 案例](https://github.com/ombharatiya/AI-Engineer-Interview-Questions/blob/e080df282aaf14c128ade55c177a20c38d82df1d/11-ai-system-design/case-studies/01-enterprise-rag-assistant.md)、[限流和重试代码题](https://github.com/ombharatiya/AI-Engineer-Interview-Questions/blob/e080df282aaf14c128ade55c177a20c38d82df1d/12-coding-challenges/11_rate_limiter_and_retry.py)、[许可证](https://github.com/ombharatiya/AI-Engineer-Interview-Questions/blob/e080df282aaf14c128ade55c177a20c38d82df1d/LICENSE)。
- **结构蒸馏：** 仓库把 AI 基础、RAG/Agent、评估、推理与安全等知识题，同 system design case studies、coding challenges 等实作题分开；案例和可运行代码题并置。
- **值得借鉴：** 以企业 RAG 任务连接访问控制、检索质量、成本、延迟与部署；代码任务将 AI 面试从名词问答拉到实现和测试。可抽取“任务输入—约束—候选产物—扩展追问”的格式，重新设计自己的题面。
- **映射：** A（编码、系统设计、AI 实现）；B（企业数据、权限和业务语义）；C（质量/成本取舍）；D（限流、重试、运行）；H（隐私/安全责任）。
- **边界：** 上游宣称的题量/公司标签不等于逐项证实；本轮读了代表文件但未运行代码题，不能把其通过性或测试充分性当已验证。技术事实应固定模型/框架版本并核权威来源。
- **许可与本地保存：** MIT。保留版权与许可文本，改动应清楚标记；代码是否有第三方依赖或独立素材需另查。本地目前只存蒸馏，不保存整仓。

### 10. The Product Manager Interview Project

- **固定版本与位置：** [`5bce351`](https://github.com/deanpeters/The-Product-Manager-Interview-Project/tree/5bce351728eda31470d3737d98b22679ba87fc78)，[项目 README](https://github.com/deanpeters/The-Product-Manager-Interview-Project/blob/5bce351728eda31470d3737d98b22679ba87fc78/README.md)、[错误决策题卡](https://github.com/deanpeters/The-Product-Manager-Interview-Project/blob/5bce351728eda31470d3737d98b22679ba87fc78/Questions/behavioral/A-Decision-You-Got-Wrong.md)、[十题聚焦题卡](https://github.com/deanpeters/The-Product-Manager-Interview-Project/blob/5bce351728eda31470d3737d98b22679ba87fc78/Questions/judgment/Ten-Problems-One-Focus.md)、[评分表模板](https://github.com/deanpeters/The-Product-Manager-Interview-Project/blob/5bce351728eda31470d3737d98b22679ba87fc78/docs/interview-scorecard-template.md)、[许可证](https://github.com/deanpeters/The-Product-Manager-Interview-Project/blob/5bce351728eda31470d3737d98b22679ba87fc78/LICENSE)。
- **结构蒸馏：** 按 behavioral、judgment 等题型组织独立题卡，也包含面试轮/角色组合与可选 AI、人员管理内容。代表题卡有主问、可选中性追问、强证据/警示线索与评估表；聚焦题要求多个问题中作取舍并说明理由。
- **值得借鉴：** 这是最接近“可评审问题内容模型”的样本。可借其题卡的组成、问题与证据分开、判断题要求考虑约束和代价、面试轮覆盖矩阵；另加本库的主要能力域、证据不足锚点、岗位/责任范围和事实核验提示。
- **映射：** B（用户/商业问题和领域语义）；C（优先级、策略、取舍）；D（交付执行）；E（跨职能）；F（人员管理题）；G（错误决策后的学习）；H（责任与诚信）。
- **边界：** README 声明是 public preview，未正式内部试点；完整题卡不等于效度验证。项目内总结的思想要保留来源线索，不误称全部原创。题卡会影响候选人评估，需本地试评，不直接抄评分措辞或把作者锚点说成行业标准。
- **许可与本地保存：** CC BY-NC-SA 4.0。非商业用途、署名、相同方式共享条件限制商业化和改编分发；未来若产品收费，不能假定可以继续依赖这些题卡。现阶段只保留本手册的结构摘要，题面与评分内容另行原创。

### 11. PM Interview Questions（ferminrp）

- **固定版本与位置：** [`6562cd7`](https://github.com/ferminrp/pm-interview-questions/tree/6562cd75f6ae43593c388682fd7308834d2fa8e6)，[README 问题列表](https://github.com/ferminrp/pm-interview-questions/blob/6562cd75f6ae43593c388682fd7308834d2fa8e6/README.md)。
- **结构蒸馏：** 单个 README 以主题分组提问，覆盖协作、执行、战略、客户洞察、影响、产品与商业判断，问题多让候选人描述过去事实或具体决策。
- **值得借鉴：** 题目分类简洁，便于检查 PM 行为面是否遗漏客户、执行和业务判断。将其当作问题主题目录，自己补上情境约束、追问和证据锚点。
- **映射：** B（客户/业务理解）；C（战略、产品商业判断）；D（执行）；E（合作和影响）。
- **边界：** README 是题单，不提供完整评分或答案；本轮固定版本未发现 LICENSE，API 许可字段也为空。不能因题目短就认为可以逐条复制。
- **许可与本地保存：** **未发现许可，按保留所有权处理。** 仅在本手册原创概述分类，不缓存其问题正文；需要某题时从本库目标能力独立写新题。

### 12. Marketing / Brand / Growth Interview Playbook

- **固定版本与位置：** [`b754dfb`](https://github.com/coryjburk/intv-playbook-marketing_brand-growth/tree/b754dfbf482c4da4a3a6dd40fcb1104fd41db2f2)，[README](https://github.com/coryjburk/intv-playbook-marketing_brand-growth/blob/b754dfbf482c4da4a3a6dd40fcb1104fd41db2f2/README.md)、[题目与界面数据源 index.html](https://github.com/coryjburk/intv-playbook-marketing_brand-growth/blob/b754dfbf482c4da4a3a6dd40fcb1104fd41db2f2/index.html)。
- **结构蒸馏：** 单页 playbook 的 HTML/内嵌数据定义题目；抽查版本中有 9 个主题、每主题 12 个问题，并有分层回答/面试官观察视角。主题围绕品牌与增长营销领导，包括实验、渠道、定价、损益、跨职能、行为经历等。
- **值得借鉴：** 一份内容同时提供候选人准备和面试官阅读线索；增长题可将指标、实验设计和经营结果放到同一案例；需要用具体数字和决策证据深挖。
- **映射：** B（客户/市场与商业模式）；C（增长方向、渠道/价格取舍）；D（实验执行和运营）；E（跨职能）；F（营销团队领导）。
- **边界：** 面向 MBA 品牌/增长营销岗位，不等同内容、社区、活动、商家或平台运营；样本量、答案等级和“好回答”未经 Interview Compass 验证。固定版本未见 LICENSE，公开网页不等于可复制内容。
- **许可与本地保存：** **未发现许可，按保留所有权处理。** 只保存本手册的结构分析和链接。面向中文运营岗位应以原创情境重写，如活动净增量、内容转化、供需错配，并自行设计数据和评分锚点。

### 13. Engineering Manager Interviews

- **固定版本与位置：** [`bf79a4a`](https://github.com/kaushikb9/em-interviews/tree/bf79a4a5a774151e3378870857c8ad9e2d3582d9)、[README/面试轮清单](https://github.com/kaushikb9/em-interviews/blob/bf79a4a5a774151e3378870857c8ad9e2d3582d9/README.md)。
- **结构蒸馏：** README 按面试轮和主题列出工程管理题目，覆盖编码/架构、产品思维与执行、规划、管理行为等；可观察到从专业技术到管理情境的组合。
- **值得借鉴：** 管理候选人仍可能需要工程判断；把项目成功、技术债与业务需求、迭代/季度计划分成不同证据场景，而不是用一轮泛聊判定。
- **映射：** A（技术深度）；C（产品、规划）；D（执行和项目结果）；E（合作）；F（一线团队管理）。
- **边界：** 经验型清单，题目和面试流程未形成稳定评分标准；没有完整区分一线、二线与 VP 责任范围。固定版本未发现 LICENSE，不能直接复制问句。
- **许可与本地保存：** **未发现许可，按保留所有权处理。** 仅保存本手册概述和固定链接；本库依据 A-H 和责任范围独立起草管理题。

### 14. Sourcegraph Handbook：Engineering Leadership

- **固定版本与位置：** [`5752928`](https://github.com/sourcegraph/handbook/tree/5752928b213a3ddbc7cee4459524f404a5b96fb4)，[Engineering Leadership 招聘页](https://github.com/sourcegraph/handbook/blob/5752928b213a3ddbc7cee4459524f404a5b96fb4/content/departments/engineering/dev/hiring/engineering-leadership.md)、[README 迁移/归档说明](https://github.com/sourcegraph/handbook/blob/5752928b213a3ddbc7cee4459524f404a5b96fb4/README.md)、[许可证](https://github.com/sourcegraph/handbook/blob/5752928b213a3ddbc7cee4459524f404a5b96fb4/LICENSE)。
- **结构蒸馏：** 一份公司的历史工程管理面试指南，每个主题列“测量目标”、主问题和追问，涉及成长、优先级、辅导/培养、绩效等管理实践。
- **值得借鉴：** 先声明想观察什么，再安排主问与追问；能把面试官意图显式化。本库可增加候选人事实、候选人的角色边界、团队结果、失败证据和后续验证。
- **映射：** C（优先级）；D（交付）；E（影响和协作）；F（培养、绩效）；G（学习成长）；H（责任与公平）。
- **边界：** 这是 Sourcegraph 曾公开的公司做法，仓库说明材料已归档/迁移，不能说成当前招聘标准或普遍有效框架；管理面试价值观受组织情境影响。
- **许可与本地保存：** Apache-2.0；保留版权、许可和修改声明；归档历史仍需注明组织和时间。当前只留原创概述和来源链接。

### 15. Monzo Progression Framework

- **固定版本与位置：** [`689e622`](https://github.com/monzo/progression-framework/tree/689e6224a1a0b477ac3a1f326f1beef7494a4efa)，[README 框架说明](https://github.com/monzo/progression-framework/blob/689e6224a1a0b477ac3a1f326f1beef7494a4efa/README.md)、[产品框架](https://github.com/monzo/progression-framework/blob/689e6224a1a0b477ac3a1f326f1beef7494a4efa/frameworks/product.md)、[运营领导框架](https://github.com/monzo/progression-framework/blob/689e6224a1a0b477ac3a1f326f1beef7494a4efa/frameworks/operations/ops-leadership.md)、[客户运营框架](https://github.com/monzo/progression-framework/blob/689e6224a1a0b477ac3a1f326f1beef7494a4efa/frameworks/customer-operations.md)、[许可证](https://github.com/monzo/progression-framework/blob/689e6224a1a0b477ac3a1f326f1beef7494a4efa/LICENSE)。
- **结构蒸馏：** 公开成长/进阶框架把跨岗位通用期待和角色专属期待并列，按影响/责任范围写行为描述；覆盖工程、产品、营销、运营等职能。
- **值得借鉴：** 通用能力与岗位特定能力分层；用可观察的影响范围、责任、协作和持续行为描述成长；晋升关注一段时间内的稳定表现，而非一场面试中的漂亮故事。岗位资料同时显示运营职责需要自身专业维度。
- **映射：** B（产品/客户/运营领域）；C（优先级与方向）；D（交付/运营）；E（协作）；F（领导/培养）；G（发展）；H（工作方式）。
- **边界：** Monzo 是英国银行业务和组织环境，客户运营不等于互联网增长运营；内部级别不能逐字映射到本地职级。晋升标准要适配公司责任范围和岗位事实。
- **许可与本地保存：** MIT；保留许可/版权声明并标明适配更改。当前仅保存摘要，不把其级别文本整段迁入本库。

### 16. Engineering Manager Skills（skill 仓库）

- **固定版本与位置：** [`bc73cad`](https://github.com/philpalmieri/engineering-manager-skills/tree/bc73cad0ee1fb43f11e2be37352d7b4dd375f810)，[仓库 README](https://github.com/philpalmieri/engineering-manager-skills/blob/bc73cad0ee1fb43f11e2be37352d7b4dd375f810/README.md)、[interview-prep skill](https://github.com/philpalmieri/engineering-manager-skills/blob/bc73cad0ee1fb43f11e2be37352d7b4dd375f810/skills/management/interview-prep/SKILL.md)、[interview-analysis skill](https://github.com/philpalmieri/engineering-manager-skills/blob/bc73cad0ee1fb43f11e2be37352d7b4dd375f810/skills/management/interview-analysis/SKILL.md)、[许可证](https://github.com/philpalmieri/engineering-manager-skills/blob/bc73cad0ee1fb43f11e2be37352d7b4dd375f810/LICENSE)。
- **结构蒸馏：** 面向管理工作流的多个可调用 skill；访谈准备和分析流程围绕候选人的主张/简历证据选题、提问、追问项目与数字、记录判断理由和覆盖维度。
- **值得借鉴：** 把面试前准备、现场证据采集、面后分析分开；要求评分与原始证据相连，降低只凭印象做结论的风险。Interview Compass 可以借流程卡，不照搬自动评分。
- **映射：** D（流程执行）；E（访谈和追问）；F（管理候选人）；H（证据、公平和记录责任）。
- **边界：** 需要模板、职位标准、候选人资料和人工判断作为输入；skill 的步骤不会自动生成有效标准。处理简历/访谈个人信息须遵守组织政策和隐私要求。本轮只读，没有安装或执行。
- **许可与本地保存：** MIT；保存/改编时遵守版权及许可要求。当前只保存流程概述和固定源链接，未安装该 skill。

### 17. InterviewMentor（AI PM strategy skill）

- **固定版本与位置：** [`609d311`](https://github.com/PrepLabsAI/InterviewMentor/tree/609d311bbbb54e966e67143c822718e85fb235b8)、[仓库 README](https://github.com/PrepLabsAI/InterviewMentor/blob/609d311bbbb54e966e67143c822718e85fb235b8/README.md)、[AI 产品战略面试 skill](https://github.com/PrepLabsAI/InterviewMentor/blob/609d311bbbb54e966e67143c822718e85fb235b8/agents/ai-pm/ai-product-strategy-interviewer/SKILL.md)、[许可证](https://github.com/PrepLabsAI/InterviewMentor/blob/609d311bbbb54e966e67143c822718e85fb235b8/LICENSE)。
- **结构蒸馏：** 一套模拟面试 agent/skill，将 AI 产品战略 persona、提问方向和对话流程写成可复用提示/说明；关注成功指标、不确定性、路线图、质量/成本等权衡。
- **值得借鉴：** 练习者模式可以模拟追问，按回答逐步推进产品情境；可以形成“练习反馈”独立于正式面试评分的模式，且显式提示假设和指标。
- **映射：** B（用户/商业场景）；C（战略与路线图）；D（交付）；E（沟通）；A（AI 产品技术约束）。
- **边界：** persona 模拟不代表实际 VP/公司标准；模型给出的反馈未经效度验证。不要把生成分数当招聘决定；练习反馈要明确不确定性，题目与事实需要人工审校。本轮仅阅读，未安装或执行。
- **许可与本地保存：** MIT；保留版权/许可证和适用修改说明。当前保存方法概述，未复制提示全文或执行 skill。

### 18. BPteach 新媒体运营面试文章

- **固定版本与位置：** [`9b36f82`](https://github.com/BPteach/learn-new-media-from-scratch/tree/9b36f82c309412f45f3d06c1f558e460fcf14f29)、[2017 文章](https://github.com/BPteach/learn-new-media-from-scratch/blob/9b36f82c309412f45f3d06c1f558e460fcf14f29/2017-08-07-new-media-interview.md)。
- **结构蒸馏：** 一篇从业者经验文章，按自我介绍、经历和企业/岗位匹配等角度讨论新媒体运营面试；作者说明自身内容营销/社群运营背景。
- **值得借鉴：** 把岗位背景与候选人的实际经历和匹配理由联系起来，可作为中文运营问题发现线索。
- **映射：** B（行业、受众、业务）；D（运营经历）；E（沟通）；H（工作方式/岗位匹配）。
- **边界：** 2017 经验文章，不是现代运营题库、评分表或当前招聘规范；没有证据覆盖完整内容/社区/商家/平台运营岗位。
- **许可与本地保存：** 固定版本未见 LICENSE。**未发现许可，按保留所有权处理。** 本地仅保存本文原创概述和链接，不抓取全文；需要相关问题时原创并采用当前平台和业务情境。

### 19. Claude-Skills（borghei，特殊条款）

- **固定版本与位置：** [`4a698e8`](https://github.com/borghei/Claude-Skills/tree/4a698e8d07856fdca9ec3e69082a9d68c8dd45d0)、[根许可](https://github.com/borghei/Claude-Skills/blob/4a698e8d07856fdca9ec3e69082a9d68c8dd45d0/LICENSE)。前期资料将其作为许可边界检查样本，**不是**首轮问题库的主要证据来源。
- **结构蒸馏：** 仓库包含面试相关 skill 内容；若后续查阅具体产品面试材料，必须绑定其实际路径和所在版本，不能仅以仓库名推断授权范围。
- **值得借鉴：** 本项目把它保留为许可证治理案例，提醒逐仓库、逐目录检查 skill 内容与许可证，而不是看见“MIT”就默认可任意商业使用。
- **映射：** 当前不纳入题库能力覆盖；若后续读到具体产品面试 skill，再按 B/C/D 独立评估。
- **边界：** 根 LICENSE 明确是 Commons Clause 条件附加 MIT，不是普通 MIT；Commons Clause 对销售软件本身或包含软件的服务设限制。需结合实际使用方式审查，不把其内容列入商业复用白名单。具体 skill 文件是否均由同一权利人授权也仍须核验。
- **许可与本地保存：** Commons Clause + MIT。**本手册只保留许可证风险摘要和链接，没有复制 skill 内容。** 如需使用，先针对具体文件和用途取得法律/许可审查结论。

### 20. Lenny's Guest List：PM Mock Interviews

- **固定版本与位置：** [`6c5e8d8`](https://github.com/githrish/lenny-guest-product-mock-interview/tree/6c5e8d84fa251961343d466ac54f14667d8ab722)、[README 的使用流程和范围](https://github.com/githrish/lenny-guest-product-mock-interview/blob/6c5e8d84fa251961343d466ac54f14667d8ab722/README.md)、[Skill 主流程](https://github.com/githrish/lenny-guest-product-mock-interview/blob/6c5e8d84fa251961343d466ac54f14667d8ab722/skills/lenny-guest-product-mock-interview/SKILL.md)、[许可证](https://github.com/githrish/lenny-guest-product-mock-interview/blob/6c5e8d84fa251961343d466ac54f14667d8ab722/LICENSE)。固定 SHA 由 `git ls-remote` 核验；仓库 README 当前显示 MIT。
- **结构蒸馏：** 把模拟访谈做成连续交互：按公司/面试轮匹配公开播客嘉宾或直接选嘉宾，再进入经历深挖、轮次案例、候选人提问和反馈等阶段。README 列出产品感、指标、执行、战略、技术/系统设计、行为、估算和 GTM 等轮次；技能依赖独立维护的播客逐字稿索引与单集文本，支持按嘉宾、公司、轮次和关键词查找。
- **值得借鉴：** 将“按角色和轮次配置练习路径”与“逐轮追问、阶段计时和结构化反馈”组合；题库站点可借鉴为产品面试练习入口的交互蓝图。来源中的框架应被归纳为公开观点和练习视角，反馈应指向具体回答证据。
- **映射：** B（产品/用户/商业语境）；C（产品策略与优先级）；D（执行/指标）；A（技术与系统设计轮）；E（练习中的表达与追问）。
- **边界：** 这是模拟练习工具，不证明嘉宾本人会采用该题目、措辞或评价方式，也没有证据证明生成反馈有效。为 Interview Compass 设计时应称为“基于公开材料的模拟视角”，不能让用户误以为名人背书或真人数字替身。README 表示播客 transcript 库独立托管并未随本仓库再分发；本轮没有下载 transcript，也不应把 transcript 的可访问性等同于授权。
- **许可与本地保存：** skill 仓库声明 MIT，适用时保留版权/许可声明；播客文本是独立来源，须单独核验许可。本地只保留本卡原创概述与固定链接，没有复制提示全文或嘉宾文本。

## 跨项目可直接落地的设计结论

### 题目不应只是一行问句

多个来源分别展示了值得组合的部分：PM 项目的独立题卡/证据线索，Sourcegraph 的测量目标与追问，TIH 的事实经历准备，运营 playbook 的候选人与面试官双视角，Monzo 的岗位行为与影响范围，AI 仓库把设计案例与代码任务并列。Interview Compass 可据此采用自己的统一题卡字段：

1. **评价目标：** 一个主要能力域叶节点，以及可选、独立可观察的次要目标。
2. **候选人任务：** 主问、情境/约束、时间和允许工具；概念问、经历问、设计题、代码题分别呈现。
3. **中性追问：** 个人职责、当时掌握的信息、替代方案、代价、失败信号、结果口径、后续做法。
4. **证据锚点：** 强证据、弱证据、需要核验的信息；描述答案中的行为而非人格判断。
5. **角色条件：** 岗位、责任范围、业务情境、面试/晋升等场景。晋升另要求持续表现证据。
6. **来源与维护：** 原创/改编、来源路径、commit、许可、技术版本、复核日期、状态。

以上是本库拟采用的整合格式，不表示任何一个来源已经完整验证了这套格式。先用少量原创题让两位评价者独立阅读，再调整歧义。

### 从项目类型选择借法

| 来源类型 | 借鉴内容 | 不能直接推断 |
| --- | --- | --- |
| 学习路线/知识地图（CIU、CS-Notes、JavaGuide） | 覆盖范围、先修顺序、主题导航 | 岗位胜任力、题目难度和评分锚点 |
| 候选人准备手册（TIH、Front-end Handbook） | 准备路径、题型区分、行为事实追问 | 企业正式招聘政策或标准化测量效度 |
| 完整题卡/案例（PM Project、AI 工程题库） | 主问、约束、追问、产物、案例流程 | 题卡已经试点有效；单一答案是唯一解 |
| 公司发展/招聘材料（Monzo、Sourcegraph） | 岗位分层、影响范围、组织语境 | 可跨公司照搬的级别或现行政策 |
| 单一运营领域 playbook / 文章 | 专业问题发现、双视角呈现 | 覆盖全部运营岗位或适用于当前市场 |
| Skills | 准备、提问、记录、练习的工作流 | AI 输出可靠评分、可以取代面试官 |

## 许可与保存决策表

本表是资料管理提示，不是法律意见。以固定 commit 中实际许可证文本、文件归属和使用方式为准；仓库根 LICENSE 不一定覆盖第三方内容、外链、图片或所有子目录。

| 类别 | 本次来源 | 本地处理原则 |
| --- | --- | --- |
| CC BY-SA 4.0 | Coding Interview University | 可按许可条件改编分享；归属、变更说明、相同方式共享；第三方链接单独核权。 |
| CC BY 4.0 | System Design Primer | 按要求署名并标明修改；检查不受该许可覆盖的第三方材料。 |
| CC BY-NC-SA 4.0 | CS-Notes README 声明、PM Interview Project | 非商业、署名、相同方式共享；不得假设可进入未来商业化站点，优先只借结构并原创。 |
| MIT | Tech Interview Handbook、Front-end Handbook、ombharatiya AI、Monzo、三套列明的 skills | 允许范围较宽，但保留版权与许可声明；适用改动注明，外部素材另查。Lenny skill 的逐字稿另行托管，不在此许可结论内。 |
| Apache-2.0 | JavaGuide、Android、Sourcegraph | 保留许可证/版权/NOTICE 等适用声明，说明修改，另查第三方材料。 |
| Commons Clause + MIT | borghei/Claude-Skills | 有额外销售限制；不能归为普通 MIT 或纳入商业复用白名单。 |
| 未发现 LICENSE | ayushbishtdev AI、ferminrp PM、品牌增长 playbook、kaushikb9 EM interviews、BPteach 运营文章 | 仅本地保存原创摘要、事实性目录信息和指向原始来源的链接；不下载正文、不翻译、不逐条复制；商业项目更不能默认复用。 |

“未发现 LICENSE”是本次对固定版本仓库根部与 README 检查所得，并不证明作者没有在其他渠道授权。反过来，GitHub 可见、可 fork 或 API 里 license 字段非空，也不自动证明每个文件的版权状态。上游新增许可或条款变化时，必须更新复核记录。

## 本轮版本登记

以下 commit 均由 2026-10-14 直接查询 GitHub 远端 HEAD 得到。SHA 用于本地稳定追溯；这不是发布版本，也不说明内容已经缓存到本机。GitHub 默认分支后续移动时，本文件中的 commit 链接仍指向本次快照。

| 项目 | 固定 commit |
| --- | --- |
| jwasham/coding-interview-university | `717298bf219a30d7fb0671285c5f057b1bb74b27` |
| CyC2018/CS-Notes | `b70121d377cb6005eb65f12b098cd5decd905669` |
| yangshun/tech-interview-handbook | `e1d28e8886c0b6ff3e50da991ce0e895134ddc59` |
| yangshun/front-end-interview-handbook | `75ee62afc63bb9b48be160b0710bfcba6ab01a75` |
| Snailclimb/JavaGuide | `c1f760553abfb0a1dafaa0704a5995388f8c91e5` |
| MindorksOpenSource/android-interview-questions | `a8f95e444cd9a52a244929c55dd9fdc9ffe336d0` |
| donnemartin/system-design-primer | `ae9bbd7b02d90b9866215de185217d33f39ab733` |
| ayushbishtdev/ai-engineering-interview-questions | `2d62fdb30d1ea7a24e4c965773a06ca8250534f4` |
| ombharatiya/AI-Engineer-Interview-Questions | `e080df282aaf14c128ade55c177a20c38d82df1d` |
| deanpeters/The-Product-Manager-Interview-Project | `5bce351728eda31470d3737d98b22679ba87fc78` |
| ferminrp/pm-interview-questions | `6562cd75f6ae43593c388682fd7308834d2fa8e6` |
| coryjburk/intv-playbook-marketing_brand-growth | `b754dfbf482c4da4a3a6dd40fcb1104fd41db2f2` |
| kaushikb9/em-interviews | `bf79a4a5a774151e3378870857c8ad9e2d3582d9` |
| sourcegraph/handbook | `5752928b213a3ddbc7cee4459524f404a5b96fb4` |
| monzo/progression-framework | `689e6224a1a0b477ac3a1f326f1beef7494a4efa` |
| philpalmieri/engineering-manager-skills | `bc73cad0ee1fb43f11e2be37352d7b4dd375f810` |
| PrepLabsAI/InterviewMentor | `609d311bbbb54e966e67143c822718e85fb235b8` |
| BPteach/learn-new-media-from-scratch | `9b36f82c309412f45f3d06c1f558e460fcf14f29` |
| borghei/Claude-Skills | `4a698e8d07856fdca9ec3e69082a9d68c8dd45d0` |
| githrish/lenny-guest-product-mock-interview | `6c5e8d84fa251961343d466ac54f14667d8ab722` |

## 复查与后续本地化

- 目前文件只保留项目级蒸馏，不含上游仓库的整份题目、答案、代码或 skill 提示词。
- 若确需离线快照，先按许可表筛选，再记录仓库 URL、commit、获取日期、许可证全文、SHA-256、保存文件清单和第三方来源；无许可项目不做内容镜像。
- 未来重构题库时优先原创地重建题卡机制，不照搬题面；逐题来源记录与固定版本留在题卡 metadata 或来源登记表。
- 技术内容要重新验证官方文档；管理/产品/运营案例要明确行业和组织情境；晋升材料须结合长期证据，练习型 AI skill 的反馈与招聘评分分开。
- 本文件没有对上游代码运行测试，也没有验证上游所有题目正确性；链接核验和代表文件结构核验不应夸大为完整内容审计。
