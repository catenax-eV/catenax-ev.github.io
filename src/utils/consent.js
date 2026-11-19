// Cookie consent state shared by the banner (src/clientModules/cookieConsent.js) and
// the analytics (src/clientModules/analytics.js). See ANALYTICS.md for the concept.
//
// The visitor's decision is stored in the cookie "cx_cookieconsent_status" ("allow" or
// "deny") for 90 days. It is a host-only cookie (no Domain attribute): the site runs on
// catenax-ev.github.io, and github.io is a public suffix, so browsers would reject a
// cookie for ".github.io".

export const CONSENT_COOKIE = 'cx_cookieconsent_status';
export const CONSENT_VALUES = ['allow', 'deny'];
// Fired on document whenever the visitor clicks "Allow" or "Deny".
export const CONSENT_CHANGE_EVENT = 'cx:consentchange';

const MAX_AGE_SECONDS = 90 * 24 * 60 * 60;

export function readConsent() {
  const prefix = `${CONSENT_COOKIE}=`;
  const cookie = document.cookie
    .split(';')
    .map((part) => part.trim())
    .find((part) => part.startsWith(prefix));
  const value = cookie ? cookie.slice(prefix.length) : null;
  return CONSENT_VALUES.includes(value) ? value : null;
}

export function hasConsent() {
  return readConsent() === 'allow';
}

export function writeConsent(value) {
  if (!CONSENT_VALUES.includes(value)) {
    return;
  }
  const attributes = [`max-age=${MAX_AGE_SECONDS}`, 'path=/', 'SameSite=Lax'];
  if (window.location.protocol === 'https:') {
    attributes.push('Secure');
  }
  document.cookie = [`${CONSENT_COOKIE}=${value}`, ...attributes].join('; ');
  document.dispatchEvent(new CustomEvent(CONSENT_CHANGE_EVENT, { detail: { value } }));
}
