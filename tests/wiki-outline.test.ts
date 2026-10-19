import { describe, expect, it } from 'vitest';
import { normalizeWikiOutline, type WikiOutlineItem } from '../src/lib/wiki-outline';

describe('normalizeWikiOutline', () => {
  it('returns no entries for empty input', () => {
    expect(normalizeWikiOutline([])).toEqual([]);
  });

  it('drops blank ids and labels, trims values, and keeps only the first occurrence of an id', () => {
    const items: WikiOutlineItem[] = [
      { id: '  intro ', label: ' Introduction ' },
      { id: '   ', label: 'No id' },
      { id: 'empty-label', label: '  ' },
      { id: 'intro', label: 'Duplicate introduction' },
      { id: 'details', label: 'Details' },
    ];
    expect(normalizeWikiOutline(items)).toEqual([
      { id: 'intro', label: 'Introduction' },
      { id: 'details', label: 'Details' },
    ]);
  });

  it('preserves source ordering for valid unique anchors', () => {
    const items = [
      { id: 'second', label: 'Second' },
      { id: 'first', label: 'First' },
      { id: 'third', label: 'Third' },
    ];
    expect(normalizeWikiOutline(items).map(item => item.id)).toEqual(['second', 'first', 'third']);
  });
});
