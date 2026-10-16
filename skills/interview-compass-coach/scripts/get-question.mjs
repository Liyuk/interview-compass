#!/usr/bin/env node

const [questionId, locale = 'zh-CN'] = process.argv.slice(2);
const allowedLocales = new Set(['zh-CN', 'en']);
const baseUrl = (process.env.INTERVIEW_COMPASS_BASE_URL ?? 'https://liyuk.github.io/interview-compass').replace(/\/$/, '');

/** @param {{ id?: string; language?: string; base?: string; fetchImpl?: typeof fetch }} options */
export async function resolveQuestion({ id, language = 'zh-CN', base = baseUrl, fetchImpl = fetch } = {}) {
  if (!id || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id)) throw new Error('Provide a valid question ID.');
  if (!allowedLocales.has(language)) throw new Error('Locale must be zh-CN or en.');
  const response = await fetchImpl(`${base}/data/question/${language}/${encodeURIComponent(id)}.json`);
  if (response.status === 404) throw new Error(`Question not found: ${id} (${language}).`);
  if (!response.ok) throw new Error(`Question feed returned HTTP ${response.status}.`);
  const question = await response.json();
  if (question.questionId !== id || question.locale !== language || typeof question.question !== 'string' || !question.evaluation) {
    throw new Error('Question feed response does not match the expected public question schema.');
  }
  return question;
}

async function main() {
  try {
    const question = await resolveQuestion({ id: questionId, language: locale });
    process.stdout.write(`${JSON.stringify(question, null, 2)}\n`);
  } catch (error) {
    process.stderr.write(`${error instanceof Error ? error.message : String(error)}\n`);
    process.exitCode = 1;
  }
}

if (process.argv[1] && import.meta.url === new URL(`file://${process.argv[1]}`).href) void main();
