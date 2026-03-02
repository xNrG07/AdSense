// Cookie Consent Manager — GDPR-friendly
export interface ConsentState { functional: boolean; analytics: boolean; ads: boolean; timestamp?: number; }
const KEY = 'at_consent';
export function getConsent(): ConsentState | null { try { const r = localStorage.getItem(KEY); return r ? JSON.parse(r) : null; } catch { return null; } }
export function saveConsent(s: ConsentState) { s.functional = true; s.timestamp = Date.now(); localStorage.setItem(KEY, JSON.stringify(s)); }
export function hasConsent(): boolean { return getConsent() !== null; }
