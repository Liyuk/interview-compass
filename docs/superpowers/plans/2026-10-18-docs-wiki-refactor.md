# Docs Wiki Refactor Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans. User selected Native execution and approved the technical specification and seven test seams. Implement vertical slices in this session, then one independent review-agent audit.

**Goal:** 交付统一文档树、多级文章目录、Wiki关系、统一发现与有序阅读，并补齐失败恢复和发布校验。

**Architecture:** 纯知识Registry与章节/关系模型形成共用Interface，普通Astro和Starlight作为两个真实Adapter。URL状态、Discovery和Reading Session分别管理自己的状态，通过已确认的公开Seam验证。保留现有静态发布和公开内容身份。

**Tech Stack:** Astro 7.4.0、Starlight 0.42.6、Pagefind 1.5.2、TypeScript、Vitest、Playwright、Node 24；本轮不新增应用框架或后台。

**Spec:** `docs/superpowers/specs/2026-10-18-docs-wiki-refactor-technical-design.md`

## Global Constraints

- 保留首页、题库、分类、题单、路径、阶段、方法、手册和英文对应页面，六入口顶栏与右上角状态。
- 保留既有URL、公开题目JSON形状和题目ID；不覆盖主工作区未提交手册修改。
- 1,334题的适用性复核与12题专属分析复核分别表达；不产生标准答案、候选人总分或掌握程度。
- 技术方案中的S1–S7已获用户确认；测试仅经过这些公开Interface或真实页面，不检查内部方法调用次数。
- 一次一个行为：编写测试→运行观察预期失败→最小实现→运行通过；不批量预写全部测试。
- 全量兼容输入为 `docs/reviews/2026-10-18-docs-wiki-compatibility-baseline.json`，锚点校验仅约束正文声明章节。
- 产品实现统一在 `/Users/kunli/.codex/worktrees/wiki-knowledge-experience/interview-compass`；Native执行方式不重新选择。

## Review Focus

- Registry依赖现有路由构造函数时避免循环：pathFor保留纯URL构造职责；构建Adapter先产生有href的节点，Registry不导入Astro内容读取。
- 当前scope是责任范围，新增搜索范围只能叫searchScope；任务4用两者并存的URL字面量回归。
- Pagefind筛选必须发生在分页前，且profile不影响docs组；任务5以第21–40名才匹配的fixture和真实索引验证。
- 拆文章与双语映射不能破坏旧hash；任务2/8使用旧锚点清单和对应章节检查。
- 新内联脚本不得全局声明同名变量，失败Promise不得永久缓存；任务2/7在延迟脚本与503恢复中验证。

## Task 1: Registry贯通文档导航（S1、S7）

**Files:** 创建 `src/lib/knowledge/types.ts`、`registry.ts`、`definitions.ts`、`site-registry.ts`、`src/components/docs/DocumentNavigation.astro`、`tests/knowledge-registry.test.ts`；修改 `src/layouts/SiteLayout.astro`、`src/components/starlight/Sidebar.astro`；创建 `tests/e2e/docs-navigation.spec.ts`。

**Interfaces:** `createKnowledgeRegistry(input: RegistryInput): RegistryResult`。成功值为 `{ok:true, registry}`，错误为 `{ok:false, diagnostics}`。Registry提供 `page(contentId,locale)`、`navigation(contentId,locale)`、`relations(contentId,locale)`。节点有contentId、kind、locale、title、href、primaryParentId、可选children排序；navigation返回祖先、同组节点、当前节点及所属板块。

- [ ] 先写 `reader_can_find_current_article_and_ancestors`：fixture A→B→C，navigation(C)返回A/B/C，C当前，A/B展开。运行 `npm run test:unit -- tests/knowledge-registry.test.ts`，确认缺失Interface导致失败。
- [ ] 实现纯Registry和最少类型；再逐个增加重复ID/URL、缺失父节点、父子环、显式翻译缺失的失败→通过用例。
- [ ] 实现 `loadKnowledgeRegistry(): Promise<KnowledgeRegistry>` 构建Adapter，读取现有数据并缓存；href使用pathFor，Registry不读取文件/DOM。加入现有手册、方法、8域47叶子、公开岗位/阶段、题单/路径和题目身份。
- [ ] DocumentNavigation用原生nav/ul、独立折叠按钮与文章链接；当前祖先展开，当前题目只展示其知识路径；不在全站树枚举1,334题。普通页与Starlight共用该Module。
- [ ] 浏览器验证从手册切方法、从能力叶子开题再回上层；中英标题/位置正确，手机能开关且Escape回触发器。运行 `npm run check` 和 `npm run test:e2e -- tests/e2e/docs-navigation.spec.ts`，提交。

## Task 2: 一份章节源生成正文和多级目录（S2、S7）

**Files:** 创建 `src/lib/knowledge/outline.ts`、`src/components/docs/ArticleOutline.astro`、`SectionHeading.astro`、`src/lib/article-sections.ts`、`tests/article-outline.test.ts`；修改 `src/components/WikiOutline.astro`、`src/views/QuestioningFrameworkView.astro`、`src/views/QuestionView.astro`、Starlight目录Adapter、相关样式；创建 `tests/e2e/article-outline.spec.ts`。

**Interfaces:** `createOutline(headings: ArticleHeading[], options: OutlineOptions): OutlineResult`；ArticleHeading为 `{id,sectionKey,label,level:2|3|4,legacyIds?:string[],includeInOutline?:boolean}`，输出 `{ok:true,nodes,anchorAliases}` 或带diagnostics的错误。OutlineNode含id/label/level/children。

- [ ] 首个测试输入H2 A、H3 A1/A2、H2 B，断言nodes长2、A.children为A1/A2。观察失败后实现。
- [ ] 逐个覆盖同名不同ID、重复ID、H2跳H4、排除卡片标题、缺失可选章节、默认不收H4。旧兼容normalize函数仅作过渡Adapter，不复制新算法。
- [ ] 方法页用有稳定sectionKey的章节描述生成H2/H3与目录；结构化题目保留objective-h等旧ID。MDX Adapter读取已安装StarlightRoute.headings，映射到同一OutlineNode。
- [ ] ArticleOutline只渲染一份嵌套目录。原生锚点工作，当前章节高亮不pushState；所有内联代码独立作用域。语言切换基于sectionKey，有对应定位，无对应到对应文章顶部。
- [ ] 浏览器逐个验证H3跳转、同名标题、复制旧hash、中英映射、手机首次折叠和延迟JS；检查控制台无重复声明错误。运行outline单元与浏览器用例并提交。

## Task 3: Wiki关系和有依据的反向链接（S3、S7）

**Files:** 创建 `src/lib/knowledge/relations.ts`、`src/components/docs/ArticleRelations.astro`、`tests/knowledge-relations.test.ts`；修改构建Registry Adapter和题目/方法/叶子View；创建 `tests/e2e/wiki-relations.spec.ts`。

**Interfaces:** `buildRelations(nodes: KnowledgeNode[], edges: KnowledgeEdge[]): RelationResult`；edge含from/to、type、reason、可选contrast。Registry.relations返回显式出边、反向引用、题单收录和单独标注的同类推荐。

- [ ] fixture Q引用M、Q与R同topic，先断言M被Q引用、R不出现“引用本文”；失败后实现。
- [ ] 单独补重复边去重、缺失目标失败、允许图关系环而不允许文档树环。沿用既有relation/contrast文字，不凭标签生成编辑关系。
- [ ] 从真实题单entries反推included-in，加入已有显式题目关系；为已有方法/概念文章维护少量有理由的显式引用，未写内容不生成空文章。
- [ ] ArticleRelations区分“关联内容”“引用本文”“收录于题单”“同类题”；无对应数据时省略空分组。
- [ ] 用真实题目→方法→引用来源和题单收录做浏览器验证，运行关系单元与对应E2E并提交。

## Task 4: 统一URL契约与状态隔离（S4）

**Files:** 创建 `src/lib/discovery/query.ts`、`types.ts`、`tests/browse-query.test.ts`；修改 `src/lib/target-preferences.ts`、语言链接生成和阅读来源解析的调用者。

**Interfaces:** `parseBrowseQuery(url: URL, context: QueryContext): QueryResult`、`serializeBrowseQuery(query: BrowseQuery,destination: URL): string`；QueryContext含base、locale、分类值和本地目标。BrowseQuery含locale/searchScope/q/target/facets/sort/page；QueryResult附诊断和normalizedUrl。

- [ ] 首个fixture `/questions/?scope=team&searchScope=docs` 必须保留责任范围team和搜索范围docs；失败后实现最少codec。
- [ ] 逐个加入合法链接前端覆盖本地后端、不写本地；profile=all；无效岗位阶段；未知分类；page=-2/NaN/越界；base为根与子路径。
- [ ] 更新调用者统一迁移可传递参数。targetRole/targetStage仅用于单题比较，不能写准备目标。普通导航不传播本地默认，分享才序列化有效目标。
- [ ] q/目标/条件变化重置页码；popstate读已有页码。语言切换用Registry与章节映射，不再各View手列参数白名单。
- [ ] 运行query、target-preferences、routes、reading-journey的相关单元用例；用现有真实分享/返回浏览器用例确认兼容，提交。

## Task 5: 统一发现流程、类型分组和过滤（S5、S7）

**Files:** 创建 `src/lib/discovery/search.ts`、`pagefind-adapter.ts`、`catalog-adapter.ts`、`controller.ts`、`src/views/DiscoverView.astro`、`tests/discovery.test.ts`、`tests/e2e/unified-discovery.spec.ts`；修改QuestionsView/SearchResultsView、SiteMasthead搜索控件及Pagefind元数据输出。

**Interfaces:** `createDiscovery(adapters: DiscoveryAdapters).search(query: BrowseQuery): Promise<ResultPage>`。ResultPage包含docs/questions分组的items、total、page/pageSize、sort、appliedConditions和状态。Adapter返回已过滤的有序候选句柄，按窗口读取显示数据。

- [ ] 首个fixture60候选，只有原排名21–40符合目标；断言total20和这20条ID。确认失败后实现过滤在分页前的行为。
- [ ] 有q使用Pagefind，补kind/locale/profile及全部facet元数据；无q题目浏览使用Catalog。文档/题目按组计数，profile仅筛题目；首个目标下搜“使用说明”仍有docs组的手册结果。
- [ ] 两个旧路由接DiscoverView；q＋主题＋题型、分页、分享、后退、返回来源使用同一Query。保持既有筛选默认和数据端点。
- [ ] 单独验证某维度计数排除自身而考虑其他条件；只为展开筛选组计算，按查询缓存。仅读取当前窗口的Pagefind data；章节命中映射到锚点。
- [ ] 浏览器慢请求/慢data先发后到、清空/Escape、恶意标题/URL、空结果与索引失败用例逐个红→绿；文本显示，内部URL校验沿用安全规则。
- [ ] 验证真实生产索引而非仅fake：中英文手册、方法、题目均可找到；已选准备目标时文档仍可找、题目严格匹配。运行discovery单元及搜索E2E，提交。

## Task 6: 有序阅读与本次题单（S6、S7）

**Files:** 创建 `src/lib/reading/session.ts`、`storage.ts`、`src/components/docs/ReadingNavigation.astro`、`CurrentCollection.astro`、`tests/reading-session.test.ts`、`tests/e2e/reading-session.spec.ts`；迁移ReadingJourney和QuestionView相关调用者。

**Interfaces:** `createReadingSession(storage: ReadingStorage,registry: KnowledgeRegistry)`返回open/current/move/updateCollection。ReadingStorage为带get/set的浏览器或内存Adapter；所有操作返回可观察状态和保存范围，不暴露内部存储布局。

- [ ] 首个fixture题单q3/q1/q2，在q1断言上一题q3、下一题q2；失败后实现有序上下文。
- [ ] 加入去重、移除当前、排序、清空、200题上限、失效ID，以及端点禁用/回集合的用例，逐个实现。
- [ ] 迁移已有sessionStorage单条来源；保存查询来源URL、已解析顺序和位置。公开浏览状态与本地题单分别保存，跨标签更新不强制跳题。
- [ ] 存储抛异常、损坏JSON、旧version退到内存；拒绝//evil、其他base、反斜杠和控制字符来源。Registry永久归属不随来源改变。
- [ ] 本次题单只存ID/顺序，提供清空和范围说明，不增加完成率、评分、笔记或作答。分享旧题单仍用原URL。
- [ ] 浏览器覆盖从第2页结果/题单开题、前后题、刷新、移除当前、切语言和返回；运行session单元及E2E后提交。

## Task 7: 全站阅读层级与恢复行为（S7）

**Files:** 修改QuestionView、QuestionStageGuidance、QuestioningFrameworkView、阶段总览/详情、手册、stage-model-client、question-library/统一发现控制器；创建 `src/components/docs/AsyncStatus.astro`、`src/styles/{tokens,shell,reading,discovery,reference}.css`、`tests/e2e/docs-recovery.spec.ts`；迁移global.css和Starlight样式。

**Interfaces:** UI统一idle/loading/ready/empty/error/degraded状态，重试只针对实际失败请求；正文无需等工具数据。

- [ ] 先用浏览器复现阶段模型503后无错误/重试；增加能重试成功的行为测试，失败后修正请求缓存和UI，再验证题库503恢复。
- [ ] 四类索引/数据错误都有真实重试或降级；保留静态50题时明确未应用动态筛选，暂停无效控件。结构/version不匹配给更新/重试提示。
- [ ] 单题正文调整为问题、意图、信号/追问、实际专属分析、可选工具、关系/来源和继续阅读；共用框架只做短提示/可展开参考。既有来源、分析与内容不丢失。
- [ ] 阶段入口突出岗位阶段摘要，完整矩阵与映射按需进入。手册/方法整理真实章节，空内容不造新页。200%缩放和长英文不依靠截断正文修复布局。
- [ ] 按tokens/shell/reading/discovery/reference迁移样式，删除旧覆盖；普通Astro和Starlight共享断点。原生nav＋按钮，只有实现完整键盘模型才使用tree角色。
- [ ] 验证320/390/768/1024/1440px、慢JS冷加载<0.05偏移、菜单/状态展开正文不移动、键盘/Escape/焦点、无JS和存储受限。无JS工具明确禁用或隐藏并给静态替代。
- [ ] 浏览器批量截图查看桌面/手机和英文；按impeccable执行一次机械检查，集中修复本轮新增问题后确认一轮，提交。

## Task 8: 构建校验、完整回归与独立审核

**Files:** 扩展 `scripts/check-site-shell.mjs`；创建 `scripts/check-knowledge-output.mjs`、`docs/reviews/2026-10-18-docs-wiki-refactor-review.md`；修改package.json、`.github/workflows/deploy.yml`与DESIGN/CONTEXT中的已变更实现说明。

**Interfaces:** `npm run check:knowledge-output`校验构建产物；退出0表示旧URL/锚点兼容、目录目标存在、章节唯一、关系有效、语言映射与资源有效。诊断必须给页面与锚点/目标ID。

- [ ] 用临时输出fixture验证缺失旧URL/旧锚点、重复章节ID、悬空关系会失败；修复fixture后通过。真实产物以兼容baseline和Registry结果校验，不能只抽样代表全站。
- [ ] 将站点壳与知识检查接入package ci和GitHub build，在build之后、浏览器检查之前执行；保持内容/阶段/大小检查。
- [ ] 运行 `npm run ci`，记录类型、内容、阶段覆盖、单元、生产构建、全站输出和E2E结果。同步旧测试到真实新动线，不能跳过语义回归。
- [ ] 完成技术方案逐条证据表：S1–S7、全部中英文页面族、公开JSON形状、旧路径/锚点、无JS和错误恢复。记录未覆盖或明确限制。
- [ ] 委托read-only review-agent检查本轮开始BASE到当前HEAD完整diff；提供技术方案、实现计划、测试证据。审查者不编辑/再委托；输出每个可证实缺陷的优先级、路径/行和场景。
- [ ] 对确定缺陷按TDD补回归、修复、运行相关检查；重大变化再运行完整ci。浏览器实际走文档树→文章目录→Wiki关联→搜索筛选→有序阅读，不以源码审查替代交互观察。
- [ ] 按实际最终HEAD更新验收记录、提交、推送并更新现有PR #12，附到会话；不自动合并。完成前核对远端HEAD与本地一致。

## 自审与交付记录

- S1/S2/S3分别对应任务1/2/3；S4/S5/S6对应任务4/5/6；S7由任务1–3、5–8共同覆盖。
- 首屏阅读和错误状态由任务7负责，未散落成各模块各自兜底；兼容、发布与独立审核由任务8收尾。
- 最终交付必须是实际页面和完整证据，不能以纯模块测试通过声称重构完成。
