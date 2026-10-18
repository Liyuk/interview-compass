import { describe, expect, it } from 'vitest';
import { readingReturnPath } from '../src/lib/reading-journey';

describe('reading return paths', () => {
  it('preserves filters and anchors inside the current language and deployment base', () => {
    expect(readingReturnPath('/interview-compass/questions/?role=backend#question-list', 'zh-CN', '/interview-compass/')).toBe('/interview-compass/questions/?role=backend#question-list');
    expect(readingReturnPath('/interview-compass/search/?q=causality&page=2', 'zh-CN', '/interview-compass/')).toBe('/interview-compass/search/?q=causality&page=2');
    expect(readingReturnPath('/interview-compass/en/collections/technical-selected/', 'en', '/interview-compass/')).toBe('/interview-compass/en/collections/technical-selected/');
  });
  it('preserves target context and paginated or model sources', () => {
    for (const path of ['questions/?page=2&profileRole=frontend&profileStage=senior-engineer', 'roles/frontend/page/2/', 'capability-model/roles/frontend/?targetStage=senior-engineer', 'capability-model/dimensions/business-results/']) {
      const url = `/interview-compass/${path}`;
      expect(readingReturnPath(url, 'zh-CN', '/interview-compass/')).toBe(url);
    }
  });
  it('rejects external paths, other languages and unsupported destinations', () => {
    for (const path of ['//evil.test/', 'https://evil.test/', '/other/questions/', '/interview-compass/en/questions/', '/interview-compass/practice/', '/interview-compass/questions/a-question/', '/interview-compass/questions/?next=https://evil.test/']) {
      expect(readingReturnPath(path, 'zh-CN', '/interview-compass/')).toBeUndefined();
    }
    expect(readingReturnPath('/interview-compass/questions/', 'en', '/interview-compass/')).toBeUndefined();
  });
});
