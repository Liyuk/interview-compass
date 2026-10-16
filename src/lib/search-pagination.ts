export type PageWindow = { page: number; pageCount: number; start: number; end: number };

export function getPageWindow(total: number, requestedPage: number, requestedPageSize: number): PageWindow {
  const safeTotal = Number.isFinite(total) ? Math.max(0, Math.floor(total)) : 0;
  const pageSize = Number.isFinite(requestedPageSize) ? Math.max(1, Math.floor(requestedPageSize)) : 20;
  const pageCount = Math.ceil(safeTotal / pageSize);
  const page = pageCount === 0
    ? 1
    : Number.isFinite(requestedPage)
      ? Math.min(pageCount, Math.max(1, Math.floor(requestedPage)))
      : 1;
  const start = (page - 1) * pageSize;
  return { page, pageCount, start, end: Math.min(start + pageSize, safeTotal) };
}
