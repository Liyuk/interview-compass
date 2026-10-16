const glossaryTerms = [
  '灰度发布', '幂等', '回填', '错误预算', '降级', '重放', '可观测性', '基线', '可逆', '副作用', '归因',
  'SLA', 'p99', 'RAG', 'Monorepo', 'SDK', 'HRBP', 'PMO', 'TA', 'CI',
] as const;

export function normalizeSimilarityText(value: string): string {
  let normalized = value.replaceAll('用户继续使用（留存）', '用户留存');
  for (const term of glossaryTerms) {
    const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    normalized = normalized.replace(new RegExp(`${escaped}（[^）]*）`, 'g'), term);
  }
  return normalized;
}
