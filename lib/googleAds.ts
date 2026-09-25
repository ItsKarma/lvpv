export const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
export const GOOGLE_ADS_LEAD_LABEL = process.env.NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Fires the Google Ads "lead" conversion. Safe to call when the tag is not configured.
 */
export function trackAdsLeadConversion(params: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return;
  if (!GOOGLE_ADS_ID || !GOOGLE_ADS_LEAD_LABEL) return;
  if (typeof window.gtag !== 'function') return;

  window.gtag('event', 'conversion', {
    send_to: `${GOOGLE_ADS_ID}/${GOOGLE_ADS_LEAD_LABEL}`,
    ...params,
  });
}
