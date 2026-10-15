import { readFile } from 'node:fs/promises';
import { describe, expect, it, vi } from 'vitest';
import { resolveQuestion } from '../skills/interview-compass-coach/scripts/get-question.mjs';

const record = { questionId: 'sample-question', locale: 'zh-CN', question: '样例问题', evaluation: { intent: '考察判断' } };

describe('Interview Compass Coach skill', () => {
  it('resolves one public question in the requested locale', async () => {
    const fetchImpl = vi.fn(async () => new Response(JSON.stringify({ ...record, locale: 'en', question: 'Sample question' }), { status: 200 }));
    const result = await resolveQuestion({ id: 'sample-question', language: 'en', base: 'https://example.test/interview-compass', fetchImpl });
    expect(result.question).toBe('Sample question');
    expect(fetchImpl).toHaveBeenCalledWith('https://example.test/interview-compass/data/question/en/sample-question.json');
  });

  it('rejects an invalid ID, unsupported locale, missing question, and schema drift', async () => {
    await expect(resolveQuestion({ id: '../private' })).rejects.toThrow('valid question ID');
    await expect(resolveQuestion({ id: 'sample-question', language: 'fr' })).rejects.toThrow('zh-CN or en');
    await expect(resolveQuestion({ id: 'sample-question', fetchImpl: async () => { throw new Error('offline'); } })).rejects.toThrow('offline');
    await expect(resolveQuestion({ id: 'sample-question', fetchImpl: async () => new Response('', { status: 404 }) })).rejects.toThrow('Question not found');
    await expect(resolveQuestion({ id: 'sample-question', fetchImpl: async () => new Response(JSON.stringify({ ...record, questionId: 'other' }), { status: 200 }) })).rejects.toThrow('schema');
  });

  it('documents privacy, all three modes, evidence limits, and a runnable resolver', async () => {
    const skill = await readFile(new URL('../skills/interview-compass-coach/SKILL.md', import.meta.url), 'utf8');
    expect(skill).toContain('Candidate practice');
    expect(skill).toContain('Interviewer review');
    expect(skill).toContain('Reverse-question planning');
    expect(skill).toContain('Do not fetch, transmit, or paste them into any external service');
    expect(skill).toContain('not validated measurements');
    expect(skill).toContain('get-question.mjs QUESTION_ID');
  });
});
