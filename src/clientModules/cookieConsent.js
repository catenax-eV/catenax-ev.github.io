// Cookie consent banner. See ANALYTICS.md for the concept.
//
// - Shown on the first visit, and again after 90 days, when the stored decision
//   expires (see src/utils/consent.js).
// - "Allow" and "Deny" are equally prominent. Nothing is tracked before "Allow".
// - "Cookie settings" in the footer (class "cx-manage-cookies") opens it again, so the
//   visitor can change or withdraw the decision at any time.
// - Plain DOM instead of a React component, so it works on every page, including the
//   ones rendered by plugins, and needs no swizzling.

import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import siteConfig from '@generated/docusaurus.config';
import { readConsent, writeConsent } from '@site/src/utils/consent';

const BANNER_ID = 'cx-cookie-consent';
const MANAGE_SELECTOR = '.cx-manage-cookies';

const consentConfig = siteConfig.customFields?.cookieConsent ?? {};

let banner = null;
let returnFocusTo = null;

function createBanner() {
  const element = document.createElement('section');
  element.id = BANNER_ID;
  element.className = 'cx-cookie-consent';
  element.setAttribute('role', 'region');
  element.setAttribute('aria-label', 'Cookie consent');
  element.innerHTML = `
    <p class="cx-cookie-consent__text" id="${BANNER_ID}-text">
      We would like to use privacy-friendly analytics to understand which pages are
      used and improve this site. No cookies are set for this, and no personal data or
      search terms are collected. Your choice is stored in a cookie for 90 days.
      <a class="cx-cookie-consent__link" target="_blank" rel="noopener noreferrer"></a>
    </p>
    <div class="cx-cookie-consent__actions">
      <button type="button" class="button button--secondary cx-cookie-consent__deny" data-consent="deny">Deny</button>
      <button type="button" class="button button--secondary cx-cookie-consent__allow" data-consent="allow">Allow</button>
    </div>
  `;
  const link = element.querySelector('.cx-cookie-consent__link');
  link.href = consentConfig.privacyPolicyUrl;
  link.textContent = 'Privacy policy';
  element.addEventListener('click', onBannerClick);
  return element;
}

function showBanner({ focus = false } = {}) {
  if (!banner) {
    banner = createBanner();
  }
  if (!banner.isConnected) {
    document.body.appendChild(banner);
  }
  if (focus) {
    banner.querySelector('button')?.focus();
  }
}

function hideBanner() {
  banner?.remove();
  if (returnFocusTo?.isConnected) {
    returnFocusTo.focus();
  }
  returnFocusTo = null;
}

function onBannerClick(event) {
  const button = event.target instanceof Element && event.target.closest('[data-consent]');
  if (button) {
    writeConsent(button.dataset.consent);
    hideBanner();
  }
}

function onDocumentClick(event) {
  const trigger = event.target instanceof Element && event.target.closest(MANAGE_SELECTOR);
  if (trigger) {
    event.preventDefault();
    returnFocusTo = trigger;
    showBanner({ focus: true });
  }
}

function onKeydown(event) {
  // Escape closes a banner opened from "Cookie settings" without changing the decision.
  if (event.key === 'Escape' && banner?.isConnected && readConsent()) {
    hideBanner();
  }
}

if (ExecutionEnvironment.canUseDOM && consentConfig.enabled) {
  document.addEventListener('click', onDocumentClick);
  document.addEventListener('keydown', onKeydown);
  if (!readConsent()) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => showBanner(), { once: true });
    } else {
      showBanner();
    }
  }
}
