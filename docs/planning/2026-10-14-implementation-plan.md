# Interview Compass 产品技术方案与实施顺序

日期：2026-10-14。状态：用户确认 Astro + Starlight、Radix 设计约束、双语首发、comp-first 和首轮 TDD 接缝。首个可运行切片已迁移到 Interview Compass，包含内容校验、索引、搜索和子路径浏览器检查；完整旧内容迁移、拓展题库与首次 Pages 发布仍待实施。

## 产品契约

Interview Compass 是中英文双语、以问题为主体的启发式题库。用户可以不选定单一主读者，直接搜索，也可以按主题、能力或岗位自由浏览。每道题说明提问目的、希望读者观察什么，以及可继续查哪些背景知识。题目可以带场景或启发式追问，但不提供答案、回答样例、分数、评分锚点或招聘结论。

内容分类采用八个 MECE 编辑域，每题只设一个主要能力；岗位、主题、责任范围、职业轨道和使用场景都是独立索引。产品思维作为贯穿业务理解、价值判断和交付闭环的精选路径；产品面试、运营面试、校招、一线管理、二线管理及晋升准备是可组合入口，不复制题目正文。

## 技术决策

| 层 | 选型 | 责任 |
| --- | --- | --- |
| 静态站点 | Astro 7 + Starlight | 生成可直达的静态页面、文档阅读、站点导航和双语路由 |
| 内容 | Starlight 内容集合（Markdown/MDX） | 保存唯一题目记录、主题指南和站点文案；frontmatter 经 schema 校验 |
| 题目入口 | Astro 页面与共享查询模块 | 从同一内容集合生成首页、岗位、主题、能力、责任范围、面试/晋升入口 |
| 搜索 | Pagefind | 按当前语言检索静态索引；中文、英文分别测试 |
| 视觉系统 | Starlight + Radix Themes | Starlight 管文档阅读骨架；Radix Themes 管自定义页面的色彩、字体、间距、控件和状态；共享 token 防止风格分裂 |
| 交互 | Radix Primitives + Astro/React 集成 | 只为搜索对话框、筛选菜单等真实交互引入客户端岛；其余用语义 HTML 和静态页面 |
| 部署 | GitHub Actions + GitHub Pages | PR 校验和构建；默认分支通过同一构建产物发布 |

Radix 是整站 UI 的设计约束，不是只在一个弹窗里“用了组件”。Starlight 同时提供信息层级、导航、文档节奏和默认交互约束。设计稿和实现都要遵守两者，不额外混入一套无关组件库、任意渐变/阴影、卡片风格或按钮规范。主题兼容通过一份 token 映射落实到 Starlight CSS variables 和 Radix Theme 配置；Radix 组件按其 API 和无障碍约束使用，不用自制交互替代。

## 双语信息架构

- 中文是默认语言，站点根路径为中文；英文使用 `/en/`。仓库 Pages 的 `/interview-compass/` base 与语言路径组合为 `/interview-compass/` 和 `/interview-compass/en/`。
- Starlight `locales`/`defaultLocale` 管文档语言；定制 Astro 页面使用同一 locale 配置和 `getRelativeLocaleUrl` 一类 URL 辅助，避免自己拼路径。
- 对应的中文与英文页保持同文件路径、稳定 `questionId` 和同一主题/岗位标识，标题与正文可自然翻译。语言切换从当前路径跳到同一路径的对应语言版本；缺少配对时退到目标语言首页并明确提示。
- 发布校验要求 `published` 题目有中英文配对；draft/seed 不渲染、不进入搜索、sitemap 或导航。导航、按钮、空状态、错误提示和页面 title 均双语。
- 每种语言的 Pagefind 索引只收录该语言正文，当前语言界面使用当前语言索引。搜索不会静默返回另一语言正文；可在结果页另设显式的跨语言切换入口。

## 内容数据和深模块接口

目录建议：

```text
src/content/docs/                  中文根语言 Starlight 内容
src/content/docs/en/               英文配对内容
src/lib/content-model.ts           schema、稳定题目标识和配对校验
src/lib/taxonomy.ts                能力、主题、岗位、范围、轨道、场景词表
src/lib/question-catalog.ts        对所有页面提供本地化题目查询接口
src/lib/locale-paths.ts             当前页语言切换与 base-aware URL
src/pages/                           首页和多视角目录页
src/components/                      Astro 静态组件与必要的 Radix 交互岛
src/styles/tokens.css                Starlight/Radix Theme token 映射
scripts/                             内容、链接、双语覆盖与旧 URL 校验
```

`question-catalog` 是入口的唯一读取接口，隐藏 Starlight collection 查询、语言映射和筛选细节。它接收显式语言与筛选条件，返回已发布且满足条件的题目摘要；页面不用自行遍历 frontmatter 或复制分类逻辑。URL module 是所有站内链接的单一生成处，必须处理 `/interview-compass/` base 和 `zh`/`en` 当前语言。

题目字段建议：

```yaml
questionId: prioritization-under-limited-capacity
kind: question
status: published
primaryCapability: value-direction.prioritization
topics: [planning, prioritization]
roles: [engineering, product, operations]
responsibilityScopes: [direction, team]
careerTracks: [individual-contributor, team-manager]
scenarios: [interview, promotion]
intent: 了解候选人如何在有限容量下解释目标、取舍与不做项。
background: [capacity-planning, opportunity-cost]
relatedQuestions: []
source:
  url: https://example.com/reference
  attribution: adapted
```

`questionId` 在双语文件中配对；URL 由文件路径和语言产生。`intent` 必填；`background`、`followUps`、`scenario`、`relatedQuestions`、来源按内容需要填写。schema 不提供 `answer`、`sampleAnswer`、`score`、`rubric` 或 `hiringRecommendation` 字段。主能力必须恰好一个；多值筛选字段只引用词表中存在的 ID。

## 页面和路径

中文默认路径：`/`、`/questions/`、`/roles/<role>/`、`/topics/<topic>/`、`/capabilities/<capability>/`、`/scopes/<scope>/`、`/scenarios/interview/`、`/scenarios/promotion/` 和 `/questions/<stable-slug>/`。英文相应页面使用 `/en/` 前缀。所有路由遵循仓库 base `/interview-compass/`。

首页首屏让搜索与主题浏览同等可见；岗位入口随后提供自由探索。题库目录支持主题/岗位等过滤并把选择写入 query，详情显示问题、考察意图、能力和可选背景。管理/晋升、运营、产品、AI 工程均有独立精选入口，但不预设唯一首页主受众。

## 首轮 TDD 接缝（用户已确认）

1. **题目内容校验和多维分类**：先写失败测试，验证缺少题目/意图/主能力或使用未知词表 ID 时拒绝构建；验证双语 `questionId` 成对、多个视角只引用同一题。
2. **主题与岗位浏览**：先测试由题目目录得到本地化主题/岗位列表、筛选结果、去重以及 draft 排除，再实现目录模块和页面。
3. **中英文搜索与键盘交互**：以真实中英文问题文本验证 Pagefind 的语言隔离、筛选和结果；Radix 搜索对话框通过键盘打开、移动、选择、关闭并恢复焦点。
4. **Pages 子路径和站内链接**：先测试 `/interview-compass/` base 与中文/英文切换、深层链接、assets/search index URL，再实现唯一 URL helper 和 Actions 构建配置。

当前实现包含 Vitest 逻辑测试、内容校验及 Playwright 浏览器验收；npm scripts 区分 `test:unit`、`check:content`、`build` 和 `test:e2e`。后续接缝继续以行为验证为主，不把快照测试当作内容模型的证明。

## GitHub 工作流

- Pull request：安装锁定依赖、类型检查/静态检查、内容和双语配对校验、Vitest、生产构建、对刚构建的产物做必要 Playwright 子路径和搜索检查；不授予部署写权限。
- 默认分支：复用经验证的同一构建产物部署 GitHub Pages。生产 job 使用 `pages: write` 与 `id-token: write`，第三方 actions 固定完整 SHA，设置 `github-pages` environment 与并发组。
- 项目 Pages 配置为 GitHub Actions；设置 `site` 为当前 Pages 域名，`base: '/interview-compass'`。不再用本地 `gh-pages` 分支强推脚本作为主发布流程。
- PR preview 暂用 Actions 构建产物；如果实测需要可点击的每 PR URL，再评估 Cloudflare Pages。首期的多入口、双语、搜索和筛选均可在静态托管完成。

## Comp-first 与实现门槛

先在 `.impeccable/mocks/decision/` 展示视觉方向及完整首页 comp，等用户选择方向；之后生成三版构图 comp，用户批准后才进入 UI 代码。已确认 Radix + Starlight 为设计约束，视觉方向必须兼容两者；一旦选定，按批准 comp 的结构翻译为语义、响应式、可访问代码，不以实现便利重新发明布局。

实施按至少三轮产品迭代：

1. **基础轮**：中英文文档壳、首页搜索/主题浏览、题目详情和 Radix 视觉基线。
2. **发现轮**：岗位、能力、主题和责任范围多视角列表，筛选 URL、Pagefind 双语搜索。
3. **覆盖轮**：产品/运营/AI/管理/晋升入口，旧内容迁移和旧 URL 兼容，贡献与维护流程。
4. **发布轮**：GitHub Actions、无障碍与响应式完善、真实内容验证、回归检查。

每轮完成后运行对应测试并按用户要求做代码/设计审阅。视觉 screenshot review 遵守 Impeccable 的轮数上限；三轮以上是功能与内容迭代，不重复无限调整截图。

## 完成条件

- 中英文页面都有可见切换器，所有已发布问题有配对，切换保留对应页面。
- 搜索与主题浏览是主要入口；至少能按主题和岗位发现问题，并保留分享链接。
- 问题展示考察意图，题目正文不含答案示范、评分系统或录用结论。
- 内容分类与语言配对在构建时校验；draft 不进入静态站、搜索、sitemap。
- Radix Themes 与 Starlight 共用 token；交互键盘可用，基础页面不依赖客户端运行。
- `/interview-compass/` base 下的资源、搜索、语言切换和深链均可用；Actions 产物可成功部署。
