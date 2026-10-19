# Site Journey Redesign Implementation Plan
> **Historical record:** This document records a plan or review from its date; its framework and implementation statements are not current. See the [current architecture](../../architecture/current-state.md).


> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [x]`) syntax for tracking. Execution method already selected by the user: Native, in the existing isolated worktree.

**Goal:** 在全站恢复稳定导航，按找题、阅读、板块浏览分配布局，并让读者持续完成找题与连续阅读任务。

**Architecture:** SiteMasthead 始终提供同一份六入口主导航和右上角状态；SiteLayout 从 RouteRef 派生页面呈现策略。局部侧栏只服务当前板块，Starlight 通过适配器使用同一页头与交互。来源恢复继续采用已有安全 URL 校验与 sessionStorage，不引入服务端状态。

**Tech Stack:** Astro、Starlight、TypeScript、现有 Pagefind、Vitest、Playwright；不新增依赖。

**Spec:** `docs/superpowers/specs/2026-10-17-site-journey-redesign-design.md`

## Global Constraints

- 覆盖首页、目标路径、题库、搜索、题单、题目详情、分类、能力与阶段、方法、Starlight 手册及全部英文对应页面。
- 保留现有题目、来源、路由与静态部署，遵循 PRODUCT.md 的工程师定位及不提供标准答案和自动评分的边界。
- 已有 URL、数据接口、过滤语义、来源署名、许可与静态 GitHub Pages 基础路径均保持有效。
- 主工作区未提交手册内容不得覆盖；执行前只读比较差异，必要时保留并单独合入有效内容。
- 右上角目标状态浮层已经在 b9d2a71 实现，继续补齐回归；不恢复全宽目标栏或首次自动弹窗。

## Review Focus

- 英文长标签、320px 和 768–1280px 中间尺寸：导航、状态与语言切换可达，无横向溢出。由任务 1 的浏览器矩阵验证。
- 新用户直接打开任意内容页：无自动弹窗，无因目标数据加载而出现额外全宽条。由任务 2 的新存储上下文用例验证。
- 目标 URL 与本地偏好冲突、存储不可用：浮层解释有效目标，操作不悄悄覆盖偏好。由任务 2 的现有目标用例验证。
- 从第 2 页结果与目标参数进入题目：返回保持 URL、位置和展开状态，同时拒绝外站和不支持来源。由任务 4 的单元与端到端用例验证。
- Starlight 移动目录、搜索浮层与全站菜单：不重复、不互相遮住，锚点不在页头后方。由任务 1、3、5 验证。

## Task 1: 全站导航与响应式页头

**Files:** 修改 `src/components/SiteMasthead.astro`、`src/layouts/SiteLayout.astro`、`src/components/starlight/Header.astro`、`src/styles/global.css`、`src/styles/starlight.css`；创建 `src/lib/site-navigation.ts`、`src/lib/site-navigation-dom.ts`；调整 `tests/e2e/wiki-layout.spec.ts`。

**Interfaces:** `siteNavigationFor(route: RouteRef, locale: Locale, base: string)` 返回 `{key,label,href,current}[]`。客户端菜单逻辑以 `[data-site-navigation]`、`[data-site-navigation-toggle]` 为挂载点，由同一入口初始化，不在各页面复制。

- [x] 添加中英文首页、题库、题目、分类、模型、方法、手册、404 均可访问六入口的浏览器断言；后代路由只有一个所属板块高亮。先运行相关用例确认当前内页失败。
- [x] 提取现有导航列表和所属板块映射，删除 wiki 决定是否渲染主导航的分支。保留旧路径和双语标签。
- [x] 菜单使用浮层及一致断点，支持展开状态、Escape、外部点击、焦点返回；无脚本保留链接。移动主菜单打开时正文位置不变。
- [x] 清除写入 404px 页头高度的菜单补丁；Starlight 页头尺寸只有一个来源，优先使用自然布局，确需测量时使用已有观察器且不得测量浮层。
- [x] 运行 `npm run check`，浏览器验证 320/390/768/1024/1440px 中英代表页，检查导航、状态和语言入口并提交。

## Task 2: 状态浮层与目标选择回归

**Files:** `src/lib/target-selector.ts`、`src/lib/target-dom.ts`、`src/components/SiteMasthead.astro`、`tests/e2e/target-personalization.spec.ts`、`tests/e2e/engineering-audience.spec.ts`。

**Interfaces:** 保留 `[data-profile-trigger]` 作为状态展开按钮，`[data-edit-target]` 打开原有目标编辑对话框；原有目标状态与偏好 API 不变。

- [x] 将全宽状态条移至右上角固定尺寸按钮与浮层，取消首次自动编辑；初步浏览器验证展开正文位移为 0px。
- [x] 更新旧测试的用户动作：从「状态按钮直接打开编辑框」改为「展开状态 → 切换目标」。修改首次使用断言为直接可读、无对话框；不删除目标筛选与偏好语义断言。
- [x] 添加浮层外部点击、Escape、焦点离开关闭、加载失败、无目标、有效链接目标、无效链接目标与存储失败的验证；数据未加载时不显示 undefined。
- [x] 验证状态宽度、选择/清除目标和题目计数变化不推动正文；选择编辑后焦点返回状态按钮。
- [x] 运行目标相关单元和端到端测试并提交。

## Task 3: 按任务布局与清晰入口

**Files:** 创建 `src/lib/page-presentation.ts`、`tests/page-presentation.test.ts`；修改 `src/layouts/SiteLayout.astro`、`src/lib/wiki-navigation.ts`、`src/components/WikiSidebar.astro`、`src/components/starlight/Sidebar.astro`、`src/views/HomeView.astro`、`src/views/ScenarioPathsView.astro`、`src/styles/global.css`、`tests/e2e/wiki-layout.spec.ts`。

**Interfaces:** `pagePresentationFor(route: RouteRef)` 返回 `{kind: 'home'|'discovery'|'article'|'section', section: 'goals'|'questions'|'browse'|'stages'|'methods'|'guide'|null}`。SiteLayout 将 kind 输出到 data 属性，决定是否渲染局部侧栏；outline 为空时不预留右栏。局部导航沿用 wikiNavigationFor 的数据和路由解析，但按 section 筛选真实分组。

- [x] 为 RouteRef 各变体断言呈现策略：题库/搜索为 discovery，题目/题单详情/路径详情/方法为 article，分类和模型系列为 section，首页为 home。不存在的侧栏不占列。
- [x] 将统一三栏改为按策略选择；题库保留现有主/高级筛选与结果；阅读页面保留目录和所属分类；分类/阶段仅显示本板块导航。同步 Starlight 章节导航。
- [x] 调整首页主次入口：保留搜索、按目标开始和精选题单；削减重复行动链接，将分类作为已知需求入口。区分使用情境和岗位阶段准备目标，不新增事实或计数。
- [x] 检查短页面、无 outline 和长文在桌面与移动端的空间、标题与目录；更新旧的「每个内页必须有完整知识树」断言。
- [x] 运行 `npm run test:unit -- tests/page-presentation.test.ts tests/wiki-navigation.test.ts` 与布局用例，提交。

## Task 4: 连续阅读与来源恢复

**Files:** `src/lib/reading-journey.ts`、`src/components/ReadingJourney.astro`、`src/views/QuestionView.astro`、`tests/reading-journey.test.ts`；创建 `tests/e2e/reading-continuation.spec.ts`。

**Interfaces:** 保留 `readingReturnPath(value: string, locale: Locale, base: string): string | undefined`，扩大到现有合法目标参数和分页/模型来源；仍拒绝外站、其他语言、当前部署之外及未知来源。支持一组 `[data-reading-return]` 链接而非只查第一个，直达题目有题库兜底。

- [x] 单元用例增加合法 profile/profileRole/profileStage、targetRole/targetStage、分类分页及模型阶段/岗位/维度来源；保留恶意路径、未知参数和其他语言拒绝用例。先确认缺失场景失败。
- [x] 安全扩展来源解析，并使顶部和页尾共用同一来源恢复结果；sessionStorage 不可用也保留有效默认入口。
- [x] 题目页页尾主动作返回本次结果/题单，次动作进入相近问题或所属能力。保留来源署名与复核状态。
- [x] 浏览器覆盖题库第2页、搜索、题单、分类和阶段链接到题目再返回，断言 URL、目标偏好与滚动位置；覆盖直达题目与切换语言。
- [x] 运行 `npm run test:unit -- tests/reading-journey.test.ts` 及阅读端到端用例，提交。

## Task 5: 全站验收与 PR 更新

**Files:** 修改 `tests/e2e/wiki-layout.spec.ts`；创建 `scripts/check-site-shell.mjs`；在 `docs/reviews/2026-10-17-site-journey-redesign.md` 记录证据；更新现有 PR #12。

**Interfaces:** 静态检查扫描 dist 下全部 HTML 内容文件，检查共享六入口导航、唯一主内容、资源与内部路径，并按语言和页面族汇总失败。排除数据 JSON 与许可原文；重定向页单独验证其目标。

- [x] 执行 `npm run ci`（类型、内容、阶段覆盖、单元、构建、大小、端到端）。目标交互变化造成的旧断言必须按新真实操作更新，不能跳过失败。
- [x] 执行静态全路由检查。分别验证题目、分类、分页、模型、手册和英文对应页，不以少数代表页替代全站壳覆盖。
- [x] 批量浏览器检查五条核心动线、菜单与状态浮层、搜索错误/空结果/重试、键盘、长英文、移动目录和手册锚点，记录桌面和移动截图。
- [x] 对生产预览测量初始布局偏移并定位来源；只对存在问题的路径修复并复查。状态与菜单展开均不得移动正文。
- [x] 一次执行设计机械检测，修复本轮新增问题；记录既有且不在范围的发现。
- [x] 对照规范逐项完成审核，整理变更、验证、局限；推送当前分支，重写 PR #12 标题和正文为全站交互与导航改造，并附 PR 到本会话；不合并。
