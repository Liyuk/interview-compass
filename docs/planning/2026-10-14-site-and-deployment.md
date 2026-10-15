# Interview Compass：站点技术与 GitHub 部署决策

日期：2026-10-14。状态：Astro + Starlight、Radix 基线、双语首发及 GitHub Pages 工作流已经实现首个本地切片；新个人远端已准备提交，但 Pages 尚未启用或发布。本文件记录架构依据和部署验收要求。

## 1. 建议

采用 **Astro + Starlight + Markdown 内容集合 + Pagefind + Radix Themes/Primitives + GitHub Actions + GitHub Pages**。

Starlight 负责题目与文章阅读、双语路由和默认页面骨架；定制 Astro 页面负责首页、多视角入口和题目目录；Radix Themes 与 Starlight 共用一套设计 token，Radix Primitives 负责搜索、筛选等必要交互的可访问行为。保留静态 HTML 与轻量增强，不引入全站 SPA、数据库、账号或在线模型服务。与本地博客复用 Astro、Markdown、内容校验和搜索的工程经验，保持独立仓库与发布。

理由：用户提出的复杂度主要来自内容关系和阅读入口，不是运行时计算。同题可以在构建时出现在多个入口，页面搜索与筛选在客户端执行，仍可部署到静态平台。GitHub Pages 直接托管 HTML、CSS 和 JavaScript。[GitHub Pages 官方说明](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)

## 2. 框架比较

| 方案 | 与当前需求的关系 | 主要代价 | 判断 |
| --- | --- | --- | --- |
| Astro + Starlight + 定制入口 | 既有文档阅读功能，也能为跨岗位入口添加页面；与博客技术接近 | 需设计 schema、路由及主题边界 | 推荐 |
| VitePress | 适合 Markdown 与 Vue 文档，也能定制主题及入口 | 多视角数据校验和目录生成需自建；与博客分两套工程习惯 | 希望最小主题改造时的备选 |
| 完全定制 Astro / React 应用 | 页面自由度最高，未来应用功能更直接 | 阅读导航、搜索、文档样式、可访问性需自己维护 | 待真实使用需求超出 Starlight 后再考虑 |

Starlight 官方列出的能力包括导航、搜索、多语言、SEO、代码高亮与 Markdown/MDX；VitePress 提供 Markdown 文档生成、Vue 定制和静态 HTML。[Starlight](https://starlight.astro.build/)、[VitePress](https://vitepress.dev/)

旧 VuePress 不作为升级路线：本次同时重做分类、内容契约与 URL，继续围绕 0.8 配置做增量升级不能解决内容结构问题。这是项目判断，不是对当前 VuePress 产品维护状态的断言。

### 版本与兼容性

2026-10-14 查询 npm 官方 registry 的 `latest` 得到：

| 包 | 稳定标签版本 | 核实信息 |
| --- | --- | --- |
| astro | 7.3.8 | Node >=22.12.0，npm >=9.6.5 |
| @astrojs/starlight | 0.42.6 | peer：astro ^7.2.10、@astrojs/markdown-remark ^7.3.0 |
| vitepress | 1.6.4 | 2.0.0-alpha.20 位于 next 标签，不作为本次稳定基线 |

来源：[Astro registry](https://registry.npmjs.org/astro/latest)、[Starlight registry](https://registry.npmjs.org/@astrojs%2fstarlight/latest)、[VitePress registry](https://registry.npmjs.org/vitepress/latest)。这些是查询快照，不是已经安装并验证的组合。实施当天再次核验，采用兼容稳定版本；不把 `@latest` 留在自动构建中。锁定依赖和 Node 版本，提交 lockfile，CI 使用 `npm ci`。本地博客的 `.node-version` 可作为统一运行时的候选，仍需核对新站全部依赖。

Starlight 内建 `locales`、`defaultLocale`、根语言与语言切换支持；本项目使用中文根语言和 `/en/` 英文路径，并以相同相对文件名配对题目。[Starlight i18n](https://starlight.astro.build/guides/i18n/)

## 3. 内容与渲染架构

```text
src/content/docs/          权威内容：题目、案例、方法、责任范围说明
  index.md                 中文根语言内容
  en/                      英文翻译；同名文件与中文页配对
src/lib/taxonomy.ts        能力、主题、岗位、责任范围、轨道、场景的受控词表
src/lib/content-query.ts   读取与筛选，供所有入口复用
src/lib/content-paths.ts   ID 到 URL 与 base 路径
src/pages/                首页、roles、audiences、scopes、scenarios、questions
src/components/           Astro 结构、Radix UI React islands、阅读辅助
src/styles/tokens.css     Radix Themes 与 Starlight 共用的色彩/字体/间距映射
scripts/                  内容、链接、资产、迁移校验
docs/planning/            本次规划，不进入公开内容集合
```

默认语言使用中文根路径，英文使用 `/en/` 前缀。每个公开题目的两种语言使用相同文件路径和稳定 `questionId`，不同语言各自保存标题、正文和搜索文本；构建校验确保发布题目均有中英配对，避免 Starlight 的默认语言回退悄悄输出未翻译内容。语言切换保留当前页的配对路径；若目标语言没有对应页面，切到目标语言首页并说明该内容尚未翻译。UI 标签和 Starlight 内置字符串也必须本地化。

在 Starlight 内容 schema 上扩展 `kind` 和题目元数据；题目、参考资料与方法文档分别校验。题目必须有问题、考察意图和主能力；追问、场景和背景知识按需填写。题目详情展示客观问题、考察意图、潜在推论、观察信号、补充上下文、决策与收益/成本风险，并以题目自己的观察信号形成 1–4 分评估锚点；不保存候选人分数或录用建议。题目详情仍由 Starlight 渲染，定制入口只读取同一个集合。Starlight 支持 Markdown frontmatter 和自定义字段。[内容写作说明](https://starlight.astro.build/guides/authoring-content/)

视觉系统采用分层约束：Starlight 定义阅读页的导航与文档节奏；Radix Themes 约束定制页面和控件的颜色、排版、间距、密度与状态；Radix Primitives 处理需要弹窗、菜单、选择器等交互语义的场景。全站 CSS token 映射到 Starlight 变量和 Radix Theme 配置，避免出现两套互不相关的按钮、字体或表面样式。静态链接、标题和简单表单继续使用语义 HTML，不为了“使用 Radix”而增加客户端框架。

以[MECE 内容架构](./2026-10-14-content-architecture-mece.md)为准：主要能力决定唯一归属，知识主题、岗位、责任范围、职业轨道与场景提供索引，题目正文只存一份。稳定的题目 ID 用于引用、收藏、迁移与链接，不与目录层级绑定。按主要能力域存放题卡以方便 Git 编辑；知识指南独立按主题存放，通过元数据生成其他视角。

第一期路由：

| 路由（均相对于站点 base） | 用途 |
| --- | --- |
| / | 使用场景、岗位/专题入口和精选内容 |
| /roles/engineering/、/roles/product/、/roles/operations/ | 专业提纲和精选题单 |
| /audiences/campus/、/scopes/team/ | 校招与按责任范围准备 |
| /scenarios/interview/、/scenarios/promotion/ | 求职与晋升方法、清单 |
| /questions/ | 能力/主题/岗位/范围/题型筛选 |
| /questions/<stable-id>/ | 唯一题目详情 |
| /cases/<stable-id>/ | 多题共享的项目案例 |

选择过滤条件不生成无限组合页面；使用 query 保存筛选，预设题单有独立 URL。初期一个题目一页，可将仅有标题的素材留在 seed 清单，不把空页面加入索引。

Pagefind 按语言生成独立搜索索引，当前语言搜索本地化题目，切换语言后查询对应索引。主站题库搜索使用统一的 Radix Dialog 界面。搜索结果可按岗位、主题和主能力筛选，URL 保存可分享的条件。需要覆盖中文与英文查询、空结果、键盘导航和项目子路径测试，不能仅依据“支持多语言”就假定召回合格。[Starlight 搜索](https://starlight.astro.build/guides/site-search/)、[Starlight i18n](https://starlight.astro.build/guides/i18n/)、[Pagefind 多语言](https://pagefind.app/docs/multilingual/)、[Radix Themes](https://www.radix-ui.com/themes/docs/overview/getting-started)、[Radix Primitives](https://www.radix-ui.com/primitives/docs/overview/introduction)

## 4. GitHub 上用哪种发布方式

推荐在仓库 Settings → Pages 将 Source 设置为 **GitHub Actions**，通过构建产物发布，而不是在本机 dist 目录初始化仓库并强推 gh-pages。

官方流程由三个 action 分别配置 Pages、上传产物和部署；部署需要 `pages: write`、`id-token: write`、`github-pages` environment，并依赖成功的 build job。本次查询文档示例为 configure-pages@v5、upload-pages-artifact@v4、deploy-pages@v4；实施时核验对应版本并固定完整 commit SHA。[自定义 Pages 工作流](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)

```text
Pull request
  内容/schema/链接检查 → 类型检查 → 生产构建 → 搜索索引
  → 用该产物运行必要的浏览器检查 → 留存审核产物

合入默认分支或手动发布指定版本
  相同验证 → 上传通过验证的 dist → github-pages environment
  → deploy-pages → 核对最终地址与关键页面
```

建议将验证和发布分开：PR 的写权限为零，只检查与上传审核产物；生产部署仅对当前默认分支/明确的发布 ref 开放。默认分支通过 GitHub 元数据核实，不能把博客的 master 或模板的 main 直接抄进本仓库。手动运行也受相同验证约束。

构建期间运行时与 lockfile 一致；缓存依赖下载，不拿旧 dist 当新产物。浏览器检查应服务刚刚产生的 dist，验证 base 路径与搜索，而不是重新构建另一份再发布。部署记录关联 commit、workflow run 与最终 URL。

PR 验证可以取消过期运行；生产部署串行，不在上传/发布中途取消。触发规则需要避免较旧的构建晚于较新的构建覆盖生产。回退到已知成功 commit 后重新走验证和部署，不回退源内容与 lockfile 的一半。

外部贡献使用普通 `pull_request` 验证，不借助 `pull_request_target` 执行未受信任代码；第三方 actions 固定 SHA。这些配置适合公开可贡献的题库。[GitHub Actions 安全参考](https://docs.github.com/en/actions/reference/security/secure-use)

本轮没有检查需要管理员权限的仓库 Pages 设置、Secrets 或 DNS，因而不声称当前发布已经使用上述方式。

## 5. URL、项目路径与迁移

新项目使用个人仓库 `Liyuk/interview-compass`，预期地址为 `https://liyuk.github.io/interview-compass/`。原有 `Mountain-Buzhou/Interview-Book` 及其站点保持独立，不由本仓库覆盖。

项目 Pages 地址具有仓库名前缀，Astro 配置使用 `site: https://liyuk.github.io` 与 `base: /interview-compass`；所有资产、内部链接、搜索资源都经过同一 URL 规则。构建和浏览器检查必须使用 `/interview-compass/`，不能只在根路径开发。Astro 官方提供 Pages 的 site/base 部署指导。[Astro GitHub 部署](https://docs.astro.build/en/guides/deploy/github/)

保存旧 URL、大小写、标题锚点与图片资产映射；为旧页面保留兼容页、目标链接和必要的旧锚点。静态托管的 Astro 重定向输出可能采用 HTML/meta refresh，不能把它写成服务器 301；SEO 迁移和旧 hash 需要实际检验。[Astro 重定向](https://docs.astro.build/en/guides/routing/#redirects)

旧路径来自站点实际输出/旧链接记录；Markdown 文件位置不等于线上路径。若一篇旧提纲拆成多题，旧 URL 应进入迁移后的专题导航，并保存原来的章节定位。

## 6. 什么时候改用其他托管

| 已出现的真实需求 | Pages 的关系 | 推荐动作 |
| --- | --- | --- |
| 多入口、静态全文搜索、筛选、浏览器本地收藏 | 可以静态实现 | 留在 Pages |
| 每个 PR 都有可直接浏览的独立预览 | 基础 Pages 工作流不会自动提供完整预览体系 | CI 留存产物；若频繁需要预览，接 Cloudflare Pages |
| 登录、跨设备笔记、在线模拟面试、服务端模型调用 | Pages 本身不运行应用后台 | 加服务端 API；可迁入 Cloudflare 等平台 |
| 付费课程、交易或以商业 SaaS 为主要目的 | 需要重新审视托管条件 | 选择与业务匹配的托管与后端 |

Cloudflare Pages 的 Git 集成支持分支/同仓库 PR 预览；预览默认公开，不能当作私有草稿空间。[Cloudflare 预览部署](https://developers.cloudflare.com/pages/configuration/preview-deployments/)

GitHub Pages 当前限制包括发布站点不超过 1GB、软带宽约 100GB/月；其条款限制以商业交易或商业 SaaS 为主要目的的托管。本项目公开知识书的首期范围没有出现需要后端的功能。[Pages 限制](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits)

因此，平台选择基于实际功能与协作方式，而不是“目录复杂就不能用 GitHub”。后续迁移托管时保留静态内容和稳定 ID，避免重做全部题库。

## 7. 首次切换验收

1. 新站在独立分支或工作区构建，旧站在新站通过验收前可恢复。
2. 核实 schema、ID、来源、题目引用、图片和内链；seed/draft 从 HTML、索引和 sitemap 排除。
3. 浏览器检查首页、岗位/管理专题、责任范围入口、题目详情；筛选状态可分享；键盘、移动端与中文搜索通过。
4. 用真实项目 base 服务构建产物，直接刷新深层页面；检查搜索脚本、资源路径与旧 URL 样本。
5. 在仓库 Pages 设置确认 Actions；发布通过同一验证的产物，检查最终地址、HTTPS、页面和搜索。
6. 写下版本、commit、发布记录与回退方法；新旧地址变化单独登记。

实现已包含 GitHub Actions Pages 构建/部署工作流和 `npm run ci` 校验链。推送功能分支只验证 PR/手动流程，不会触发 `main` 的生产部署；首次正式发布前仍需在个人仓库设置 Pages source 为 GitHub Actions，并核对部署权限、环境和真实地址。
