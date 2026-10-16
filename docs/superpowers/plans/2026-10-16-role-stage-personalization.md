# Role stages and contextual question expectations Implementation Plan

> **For agentic workers:** Use superpowers:executing-plans; execute serially in this session, per the user's instruction.

**Goal:** 补齐岗位阶段模型，使同题能按阶段观察不同证据，再上线严格个性化。

**Architecture:** 岗位模型注册表区分目标阶段、责任标准、题目适用性与回答评分。模型内容支持双语；共享匹配合同贯穿列表与 Pagefind。先完成阶段标准和题目阅读提示，再审计适用数据，最后开启弹窗。

**Tech Stack:** Astro、TypeScript、现有 Radix Dialog、Pagefind、Vitest、Playwright。

**Spec:** `docs/superpowers/specs/2026-10-16-role-stage-personalization-design.md`

## Global Constraints

- 单人串行；保留现有六个工程阶段与链接。
- 岗位与阶段严格按组合匹配；不把题目难度、阶段与 1–4 分混淆。
- 同题不因阶段复制；读题提示标注规则来源；不得生成标准答案。
- 不新增服务器、账号、AI 自动请求或练习长表单。
- 阶段模型与题目适用性审计完成前，不开启首次选择弹窗。

## Review Focus

- 无工作经历的案例题不得要求编造已实现结果：任务 2 测试推演与亲历的差别。
- 岗位包含多个适用阶段时不得误算为单一难度：任务 2 测试同一 ID 多阶段不同证据。
- 非工程岗位与工程子岗位不得沿用编码标准：任务 1 测试专业证据差异。
- 链接目标不得覆盖长期偏好：任务 4 测试 URL 优先但不写入存储。
- 搜索不能先截取再过滤：任务 4 检查 Pagefind 查询过滤与分页一致。

### Task 1: 岗位阶段内容与阅读入口

Files: `src/lib/role-stage-model.ts`, `src/content/role-stages/`, `src/components/RoleStageExplorer.astro`, `src/views/CapabilityModelOverviewView.astro`, `tests/role-stage-model.test.ts`.

Interfaces: `getRoleStages(roleId, locale)`, `getRoleStage(roleId, stageId, locale)`, `validateRoleStageModels()`.

- [x] RED：12 岗位均有标准、每维 3–5 条，管理无 IC 选项；岗位标准与双语结构不同/一致的恰当断言。
- [x] GREEN：注册表、明确专业证据、岗位责任递进；工程复用既有模型，子岗位补充专业范围。
- [x] 页面实现岗位选择与阶段折叠阅读；保留工程完整标准链接。
- [x] 运行相关单测、类型检查并提交。

### Task 2: 同题不同阶段的证据框架

Files: `src/lib/question-stage-guidance.ts`, `src/components/QuestionStageGuidance.astro`, `src/views/QuestionView.astro`, `src/lib/question-analysis-prompt.ts`, related unit/E2E tests.

Interfaces: `questionStageGuidance(question, roleId, stageId, locale)` 返回责任、过程、结果、归因及 1–4 分校准；调用无有效组合时不静默套工程阶段。

- [x] RED：同一道题跨阶段责任与结果不同；知识/案例/经历题区别；高阶段不自动给高分；无效组合拒绝。
- [x] GREEN：主要能力锚点＋题目信号＋题型解释；声明通用阅读框架来源与局限。
- [x] 页面岗位/阶段选择、跨阶段比较、深链；AI Prompt 包含选定阶段且不改变原有证据锚点。
- [x] 运行单测、内容校验、构建；浏览器验证双语/键盘/移动端并提交。

### Task 3: 全量题目适用性与覆盖审计

Files: `src/content/question-applicability.json`, `src/lib/question-applicability.ts`, `scripts/check-content.mjs`, coverage report, tests.

- [ ] RED：组合不可笛卡尔展开；双语共用；未审核条目不参与过滤。
- [ ] 按现有标签和题意逐批审阅，保留同题跨阶段，不将规则生成结果标为人工审核。
- [ ] 为每个组合记录适用理由，输出岗位×阶段×A–H 覆盖与低覆盖解释。
- [ ] 每题已审核或有仅全部浏览原因；每个开放目标非空；验证并提交。

### Task 4: 全站严格过滤与目标选择

Files: shared preference/filter modules, SiteMasthead, SiteLayout, question-list views, search views, Pagefind metadata, related tests.

- [ ] RED：严格组合、局部筛选交集、URL 优先、存储异常、全部模式、分页。
- [ ] GREEN：统一匹配函数、版本化 localStorage、瞬时与完整搜索 token；列表与计数一致。
- [ ] 复用 Radix Dialog 实现首次选择、右上角目标、切换与全部浏览；中英文、键盘焦点及移动端。
- [ ] 详情直接访问、使用说明正文、模型比较保持可读；检查所有页面集合。
- [ ] 完整 CI、覆盖审计、浏览器验收与自审；提交交付，不自动合并或发布。

## Execution ledger

- 2026-10-16：用户要求落实分级并强调同题跨阶段，先实现任务 1–2，持续推进适用性审计与个性化。不会用仅完成文档冒充功能交付。
- Ruling：阶段相关性与阶段答题期待分离；保留严格过滤，但不以一次能力集合交集代替逐题适用性审阅。

- 2026-10-16：任务 1–2 已落地：12 岗位、68 个岗位阶段组合；同题可切换阶段证据，并传入 AI Prompt。单测 71、完整 E2E 103 通过/1 跳过；最后链接调整后再次类型检查、构建及相关 E2E 12 项通过。
- 自审记录：题目适用性尚未审核，页面明确标注规则框架；未开启全站过滤和首次弹窗。非工程 A–H 数值矩阵仍待补充。任务 3–4 保持未完成，完整目标继续。
