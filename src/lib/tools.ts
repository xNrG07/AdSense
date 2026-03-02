// Shared tool utilities
export function buildShareUrl(path: string, params: Record<string, string | number>) {
  const url = new URL(path, window.location.origin);
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, String(v)));
  return url.toString();
}
export function readUrlParams(): Record<string, string> {
  const p: Record<string, string> = {};
  new URLSearchParams(window.location.search).forEach((v, k) => { p[k] = v; });
  return p;
}
export async function copyToClipboard(text: string): Promise<boolean> {
  try { await navigator.clipboard.writeText(text); return true; } catch { return false; }
}
export function saveResult(toolId: string, data: unknown) {
  try { const k = `at_saved_${toolId}`, x = JSON.parse(localStorage.getItem(k) || '[]');
    x.unshift({ data, savedAt: new Date().toISOString() });
    localStorage.setItem(k, JSON.stringify(x.slice(0, 10))); } catch {}
}
export function formatEUR(v: number) { return new Intl.NumberFormat('de-AT', { style: 'currency', currency: 'EUR' }).format(v); }
