// Event Tracker — console.log by default, replace with GA4/Plausible after consent
type EventName = 'tool_opened'|'input_changed'|'result_generated'|'copy_clicked'|'share_clicked'|'consent_changed'|'ad_slot_rendered'|'page_view'|'preset_selected';
let ok = false;
export function setAnalyticsConsent(c: boolean) { ok = c; trackEvent('consent_changed', { analytics: c }); }
export function trackEvent(event: EventName, payload?: Record<string, any>) {
  console.log(`[Track] ${event}`, payload ?? '');
  if (!ok && event !== 'consent_changed') return;
  // TODO: window.gtag?.('event', event, payload);
}
