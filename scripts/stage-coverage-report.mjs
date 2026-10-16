import { readFile, writeFile } from 'node:fs/promises';
import { domains, audienceRoles } from '../src/lib/taxonomy.ts';
import { roleStageIds } from '../src/content/role-stages/registry.ts';
import { matchesTarget, validateApplicability } from '../src/lib/question-applicability.ts';
import { loadApplicabilityQuestions } from './stage-applicability-data.mjs';

const entries = JSON.parse(await readFile('src/content/question-applicability.json', 'utf8'));
const { records, fingerprints } = await loadApplicabilityQuestions();
const requireComplete = process.argv.includes('--require-complete');
const errors = validateApplicability(entries, fingerprints, requireComplete);
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
const byId = new Map(entries.map(entry => [entry.questionId, entry]));
const reviewed = entries.filter(entry => entry.reviewStatus === 'reviewed');
const pending = entries.filter(entry => entry.reviewStatus === 'pending');
const allOnly = entries.filter(entry => entry.reviewStatus === 'all-only');
const rows = audienceRoles.flatMap(role => roleStageIds(role.id).map(stageId => {
  const questions = records.filter(record => matchesTarget(byId.get(record.questionId), { roleId: role.id, stageId }));
  return { roleId: role.id, stageId, count: questions.length, domains: domains.map(domain => questions.filter(q => q.primaryCapability.startsWith(`${domain.id}.`)).length) };
}));
const zero = rows.filter(row => row.count === 0);
const low = rows.filter(row => row.count > 0 && row.count < 10);
const shared = reviewed.filter(entry => entry.profiles.some(profile => profile.stageIds.length > 1)).length;
const withoutAudience = reviewed.filter(entry => !entry.profiles.some(profile => audienceRoles.some(role => role.id === profile.roleId)));
const ready = !pending.length && !zero.length && !withoutAudience.length;
const lines = [
  '# 岗位阶段题库适用性覆盖报告', '',
  '此报告由 `npm run report:stage-coverage` 从当前双语内容与已审核适用性数据生成。候选映射不计入覆盖；0 不等于题库没有相关题，也可能表示尚未审阅。', '',
  `- 已发布题：${records.length}（中英文共用题目 ID）。`,
  `- 已审核适用：${reviewed.length}；待审核：${pending.length}；限定全部浏览：${allOnly.length}。`,
  `- 可比较的岗位—阶段组合：${rows.length}；已审核零题组合：${zero.length}；不足 10 题组合：${low.length}。`,
  `- 无工程师适用组合：${withoutAudience.length}；非工程岗位保留为来源词汇和研究材料，不开放为准备目标。`,
  `- 已审核题中 ${shared} 道保留同一岗位的多个阶段。`,
  `- 全站个性化上线条件：${ready ? '适用性覆盖通过；仍需完成界面与运行验收。' : '未满足；不得开启首次弹窗或把候选映射作为正式筛选。'}`, '',
  '覆盖门槛只验证记录完整和组合非空，不证明标签已经准确、岗位模型已获行业校准或界面已经可用；发布还需内容复核与全站运行验收。', '',
  '## 岗位 × 阶段 × A–H', '',
  '| 岗位 | 阶段 ID | 已审核题 | A | B | C | D | E | F | G | H |',
  '| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |',
  ...rows.map(row => `| ${row.roleId} | ${row.stageId} | ${row.count} | ${row.domains.join(' | ')} |`), '',
  '## 待审核能力叶子', '',
  '| 能力 | 待审核题 |', '| --- | ---: |',
  ...domains.flatMap(domain => domain.leaves.map(leaf => {
    const id = `${domain.id}.${leaf.id}`;
    const count = records.filter(r => r.primaryCapability === id && byId.get(r.questionId)?.reviewStatus === 'pending').length;
    return count ? `| ${id} | ${count} |` : undefined;
  })).filter(Boolean), '',
  '## 限定全部浏览的原因', '',
  ...(allOnly.length ? allOnly.map(entry => `- ${entry.questionId}：${entry.rationale.zh}`) : ['当前没有已审核的限定条目；待审核题仍可在全部题库阅读。']), '',
  '## 低覆盖解释与后续', '',
  pending.length ? '当前数据审阅未完成。零题和少于 10 题的组合先按待审阅缺口处理，不能以宽泛自动标签、复制题目或单纯达到阈值填平。每批审阅需检查题面、考察意图、观察信号及实际权限；最终再区分真实内容缺口与岗位适用边界。' : '当前没有总题量为零或少于 10 题的组合。能力域内的零值需按实际职责理解：初级不设通用人员管理要求，专项技术也不自动要求其他职能掌握。不能为填满矩阵扩大标签。岗位模型仍是编辑性责任参照；总题量与覆盖不表示行业校准或逐题分析质量。', '',
];
const path = 'docs/reviews/2026-10-16-stage-applicability-coverage.md';
await writeFile(path, lines.join('\n'));
console.log(`Wrote ${path}: ${reviewed.length} reviewed, ${pending.length} pending, ${zero.length} empty reviewed profiles.`);
if (requireComplete && !ready) { console.error('Personalization coverage gate is not ready.'); process.exitCode = 1; }
