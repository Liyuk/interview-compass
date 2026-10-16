import { describe, expect, it } from 'vitest';
import { getPageWindow } from '../src/lib/search-pagination';

describe('search result pagination', () => {
  it('returns a one-based bounded page window', () => {
    expect(getPageWindow(43, 2, 20)).toEqual({ page: 2, pageCount: 3, start: 20, end: 40 });
    expect(getPageWindow(7, 4, 20)).toEqual({ page: 1, pageCount: 1, start: 0, end: 7 });
    expect(getPageWindow(0, 1, 20)).toEqual({ page: 1, pageCount: 0, start: 0, end: 0 });
  });

  it('normalizes invalid page sizes and page numbers', () => {
    expect(getPageWindow(21, Number.NaN, 20)).toEqual({ page: 1, pageCount: 2, start: 0, end: 20 });
    expect(getPageWindow(21, -5, 0)).toEqual({ page: 1, pageCount: 21, start: 0, end: 1 });
  });
});
