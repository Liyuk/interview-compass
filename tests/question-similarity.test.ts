import { describe, expect, it } from 'vitest';
import { normalizeSimilarityText } from '../src/lib/question-similarity';

describe('normalizeSimilarityText', () => {
  it('removes glossary expansions without removing the technical concept', () => {
    expect(normalizeSimilarityText('幂等（重复请求不会重复执行）和基线（改动前的参照状态）'))
      .toBe('幂等和基线');
  });

  it('keeps unrelated parenthetical context intact', () => {
    expect(normalizeSimilarityText('用户请求（来自移动端）重试后，系统要保持一致性。'))
      .toBe('用户请求（来自移动端）重试后，系统要保持一致性。');
  });

  it('normalizes the plain-language expansion of user retention', () => {
    expect(normalizeSimilarityText('用户继续使用（留存）下降'))
      .toBe('用户留存下降');
  });
});
