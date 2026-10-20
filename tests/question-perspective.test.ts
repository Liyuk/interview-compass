import { afterEach, describe, expect, it } from 'vitest';
import { mkdtemp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { inferQuestionPerspective } from '../src/lib/question-perspective';
import type { PerspectiveQuestionInput } from '../src/lib/question-perspective';

const pair = (zh: Partial<PerspectiveQuestionInput>, en: Partial<PerspectiveQuestionInput>): PerspectiveQuestionInput[] => [
  { locale: 'zh-CN', question: '', intent: '', roles: [], careerTracks: [], scenarios: [], primaryCapability: 'professional.debugging', ...zh },
  { locale: 'en', question: '', intent: '', roles: [], careerTracks: [], scenarios: [], primaryCapability: 'professional.debugging', ...en },
];

const roots: string[] = [];
afterEach(async () => Promise.all(roots.splice(0).map((root) => rm(root, { recursive: true, force: true }))));

describe('inferQuestionPerspective', () => {
  it('recognizes an interviewer-authored prompt from explicit interview design language', () => {
    const result = inferQuestionPerspective(pair(
      { question: '作为面试官，你会如何追问候选人的决策证据？', scenarios: ['hiring'] },
      { question: 'As an interviewer, how would you probe a candidate for evidence behind a decision?', scenarios: ['hiring'] },
    ));

    expect(result).toMatchObject({ perspective: 'interviewer', confidence: 'high' });
  });

  it('recognizes a manager response about leading a team', () => {
    const result = inferQuestionPerspective(pair(
      { question: '你作为团队管理者，如何处理成员持续未达预期的情况？', careerTracks: ['team-manager'], primaryCapability: 'people-organization.frontline-management' },
      { question: 'As a team manager, how would you respond to a direct report who repeatedly misses expectations?', careerTracks: ['team-manager'], primaryCapability: 'people-organization.frontline-management' },
    ));

    expect(result).toMatchObject({ perspective: 'manager', confidence: 'high' });
  });

  it('recognizes a candidate experience prompt without treating all second-person wording as candidate evidence', () => {
    const candidate = inferQuestionPerspective(pair(
      { question: '请描述你在跨团队项目中做出的关键决定及其结果。', scenarios: ['interview'] },
      { question: 'Describe a key decision you made in a cross-team project and its outcome.', scenarios: ['interview'] },
    ));
    const ambiguous = inferQuestionPerspective(pair(
      { question: '解释数据库隔离级别及其取舍。', scenarios: ['interview'] },
      { question: 'Explain database isolation levels and their trade-offs.', scenarios: ['interview'] },
    ));

    expect(candidate).toMatchObject({ perspective: 'candidate', confidence: 'high' });
    expect(ambiguous).toMatchObject({ perspective: 'candidate', confidence: 'low' });
    expect(ambiguous.reasons.join(' ')).toMatch(/default|ambiguous|explicit/i);
  });

  it('does not infer interviewer perspective from a hiring tag alone', () => {
    expect(inferQuestionPerspective(pair(
      { question: '解释数据库隔离级别及其取舍。', scenarios: ['hiring'] },
      { question: 'Explain database isolation levels and their trade-offs.', scenarios: ['hiring'] },
    ))).toMatchObject({ perspective: 'candidate', confidence: 'low' });
  });

  it('produces the same assignment regardless of bilingual record order', () => {
    const records = pair(
      { question: '作为面试官，你会如何追问？', scenarios: ['hiring'] },
      { question: 'As an interviewer, what would you probe?', scenarios: ['hiring'] },
    );
    expect(inferQuestionPerspective(records)).toEqual(inferQuestionPerspective([...records].reverse()));
  });
});

describe('question quality migration', () => {
  async function fixtureRoot() {
    const root = await mkdtemp(join(tmpdir(), 'interview-compass-quality-'));
    roots.push(root);
    for (const locale of ['zh-CN', 'en']) await mkdir(join(root, 'src/content/questions', locale), { recursive: true });
    await mkdir(join(root, 'docs/reviews'), { recursive: true });
    const records = [
      { locale: 'zh-CN', body: '作为面试官，你会如何追问候选人？', title: '面试追问' },
      { locale: 'en', body: 'As an interviewer, how would you probe a candidate?', title: 'Interview probe' },
    ];
    for (const record of records) {
      const file = join(root, 'src/content/questions', record.locale, 'test-question.md');
      await writeFile(file, `---\nquestionId: test-question\nkind: question\nstatus: published\nlocale: ${record.locale}\ntitle: ${record.title}\nquestion: ${record.body}\nintent: Decide what evidence matters.\nsignals:\n  - Signal\nprimaryCapability: professional.debugging\ntopics: []\nroles: []\nresponsibilityScopes: []\ncareerTracks: []\nscenarios: [hiring]\nformats: []\nsource:\n  - attribution: original\n---\nBody stays unchanged.\n`);
    }
    return root;
  }

  it('supports a read-only check and writes matching defaults once', async () => {
    const root = await fixtureRoot();
    const script = new URL('../scripts/migrate-question-quality.mjs', import.meta.url).pathname;
    const zhPath = join(root, 'src/content/questions/zh-CN/test-question.md');
    const before = await readFile(zhPath, 'utf8');
    const check = spawnSync('node', [script, '--root', root, '--check'], { encoding: 'utf8' });
    expect(check.status).toBe(0);
    expect(check.stdout).toMatch(/2 records pending/i);
    expect(check.stdout).not.toContain('"lowConfidence"');
    expect(await readFile(zhPath, 'utf8')).toBe(before);

    const write = spawnSync('node', [script, '--root', root, '--write'], { encoding: 'utf8' });
    expect(write.status).toBe(0);
    const zh = await readFile(zhPath, 'utf8');
    const en = await readFile(join(root, 'src/content/questions/en/test-question.md'), 'utf8');
    expect(zh).toContain('perspective: interviewer');
    expect(zh).toContain('perspectiveReview: inferred');
    expect(zh).toContain('qualityTier: extended');
    expect(en).toContain('perspective: interviewer');
    expect(zh).toContain('Body stays unchanged.');

    const rerun = spawnSync('node', [script, '--root', root, '--check'], { encoding: 'utf8' });
    expect(rerun.status).toBe(0);
    expect(rerun.stdout).toMatch(/pending.*0/i);
  });

  it('preserves an explicitly reviewed correction on rerun', async () => {
    const root = await fixtureRoot();
    const script = new URL('../scripts/migrate-question-quality.mjs', import.meta.url).pathname;
    const first = spawnSync('node', [script, '--root', root, '--write'], { encoding: 'utf8' });
    expect(first.status).toBe(0);
    for (const locale of ['zh-CN', 'en']) {
      const file = join(root, 'src/content/questions', locale, 'test-question.md');
      const content = (await readFile(file, 'utf8')).replace('perspective: interviewer', 'perspective: manager').replace('perspectiveReview: inferred', 'perspectiveReview: reviewed');
      await writeFile(file, content);
    }
    const rerun = spawnSync('node', [script, '--root', root, '--write'], { encoding: 'utf8' });
    expect(rerun.status).toBe(0);
    for (const locale of ['zh-CN', 'en']) expect(await readFile(join(root, 'src/content/questions', locale, 'test-question.md'), 'utf8')).toMatch(/perspective: manager[\s\S]*perspectiveReview: reviewed/);
  });

  it('continues to report inferred low-confidence assignments after metadata has been written', async () => {
    const root = await fixtureRoot();
    const script = new URL('../scripts/migrate-question-quality.mjs', import.meta.url).pathname;
    for (const locale of ['zh-CN', 'en']) {
      const file = join(root, 'src/content/questions', locale, 'test-question.md');
      const content = (await readFile(file, 'utf8')).replace(locale === 'zh-CN' ? '作为面试官，你会如何追问候选人？' : 'As an interviewer, how would you probe a candidate?', locale === 'zh-CN' ? '解释数据库隔离级别及其取舍。' : 'Explain database isolation levels and their trade-offs.');
      await writeFile(file, content);
    }
    const write = spawnSync('node', [script, '--root', root, '--write'], { encoding: 'utf8' });
    expect(write.status).toBe(0);
    const report = JSON.parse(await readFile(join(root, 'docs/reviews/2026-10-19-question-perspective-migration.json'), 'utf8'));
    expect(report.lowConfidence).toHaveLength(1);
    const check = spawnSync('node', [script, '--root', root, '--check', '--details'], { encoding: 'utf8' });
    expect(check.status).toBe(0);
    expect(check.stdout).toMatch(/1 low-confidence assignments/i);
  });
});
