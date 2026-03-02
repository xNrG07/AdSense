// AdSense Module — PLACEHOLDER ONLY, no real publisher ID
// WARNING: Never place ads adjacent to primary action buttons
// WARNING: Do not generate invalid traffic or use deceptive placement
let init = false, ok = false;
export function setAdsConsent(c: boolean) { ok = c; if (c && !init) initAds(); }
export function initAds() { if (init || !ok) return; console.log('[Ads] Init (placeholder)'); init = true; }
export function renderAd(slot: string) {
  if (!ok) return;
  const el = document.querySelector(`[data-ad-slot="${slot}"]`);
  if (el) { el.setAttribute('data-ad-rendered', 'true'); console.log(`[Ads] Rendered: ${slot}`); }
}
export function renderAllAds() { document.querySelectorAll('[data-ad-slot]').forEach(el => { const s = el.getAttribute('data-ad-slot'); if (s) renderAd(s); }); }
