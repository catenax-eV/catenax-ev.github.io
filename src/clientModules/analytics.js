// Consent-gated usage analytics with Umami. See ANALYTICS.md for the concept.
//
// - Umami is only loaded after the visitor clicked "Allow" in the cookie consent banner
//   (src/clientModules/cookieConsent.js), which stores the decision in the cookie
//   "cx_cookieconsent_status".
// - Every payload passes beforeSend() before it is sent: it is dropped if consent was
//   withdrawn through "Cookie settings", query strings and fragments are removed from
//   the page URL, paths that are not a page of this site are replaced by "/404", and
//   only the origin of the referrer is kept.
// - Umami does not set cookies and does not store IP addresses.
// - Page views are tracked by Umami itself, also for client-side navigation. This
//   module adds the outcome of searches in the navbar, see "Search" below. Search
//   terms are never sent.

import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import { matchPath } from '@docusaurus/router';
import siteConfig from '@generated/docusaurus.config';
import routes from '@generated/routes';
import { CONSENT_CHANGE_EVENT, hasConsent } from '@site/src/utils/consent';

const BEFORE_SEND_HANDLER = 'cxAnalyticsBeforeSend';
const NOT_FOUND_PATH = '/404';
// Wait until the visitor stopped typing before a search is recorded.
const SEARCH_DEBOUNCE_MS = 1500;
const MIN_SEARCH_LENGTH = 2;
// Search bar of @easyops-cn/docusaurus-search-local. Its own class names are hashed
// CSS modules, so only the stable class of the input and the ARIA roles of the
// autocomplete dropdown are used.
const SEARCH_INPUT_SELECTOR = 'input.navbar__search-input';
const SEARCH_CONTAINER_SELECTOR = '.navbar__search';

const analytics = siteConfig.customFields?.analytics ?? {};
const isActive = ExecutionEnvironment.canUseDOM && Boolean(analytics.enabled);

// ---------------------------------------------------------------------------
// Payload sanitizing
// ---------------------------------------------------------------------------

// Removes the query string and fragment, which may contain personal information
// or search terms (for example /search?q=...), and keeps the format of the value
// (absolute URL or path).
function stripQueryAndFragment(value) {
  const end = value.search(/[?#]/);
  return end === -1 ? value : value.slice(0, end);
}

// True if the path is a page of this site. Docusaurus renders every other path with
// its catch-all "*" route (the "Page Not Found" page). Such paths are typed or linked
// by someone else and may contain anything, so they are never sent.
function isKnownPage(pathname, routeList = routes) {
  return routeList.some((route) => {
    if (!route.path || route.path === '*') {
      return false;
    }
    if (!matchPath(pathname, { path: route.path, exact: Boolean(route.exact) })) {
      return false;
    }
    return route.routes ? isKnownPage(pathname, route.routes) : Boolean(route.exact);
  });
}

// Strips query and fragment and replaces unknown paths with "/404". Keeps the format
// of the value (absolute URL or path).
function sanitizeUrl(value) {
  if (typeof value !== 'string' || value === '') {
    return value;
  }
  const withoutQuery = stripQueryAndFragment(value);
  let url;
  try {
    url = new URL(withoutQuery, window.location.origin);
  } catch {
    return NOT_FOUND_PATH;
  }
  // The site uses trailingSlash: false, but "/docs/foo/" still resolves to the page.
  const pathname = url.pathname.length > 1 ? url.pathname.replace(/\/+$/, '') : url.pathname;
  if (isKnownPage(pathname)) {
    return withoutQuery;
  }
  return withoutQuery.startsWith('/') ? NOT_FOUND_PATH : `${url.origin}${NOT_FOUND_PATH}`;
}

// Keeps only the origin of a referrer, for example "https://www.google.com".
function originOnly(value) {
  if (typeof value !== 'string' || value === '') {
    return '';
  }
  try {
    return new URL(value).origin;
  } catch {
    return '';
  }
}

function beforeSend(type, payload) {
  if (!hasConsent()) {
    return false;
  }
  return {
    ...payload,
    url: sanitizeUrl(payload.url),
    referrer: originOnly(payload.referrer),
  };
}

// ---------------------------------------------------------------------------
// Loading Umami
// ---------------------------------------------------------------------------

let umamiRequested = false;

function loadUmami() {
  if (umamiRequested) {
    return;
  }
  umamiRequested = true;

  window[BEFORE_SEND_HANDLER] = beforeSend;

  const script = document.createElement('script');
  script.defer = true;
  script.src = analytics.umamiScriptUrl;
  script.dataset.websiteId = analytics.umamiWebsiteId;
  script.dataset.domains = analytics.domains;
  script.dataset.doNotTrack = 'true';
  // Also stripped in beforeSend(), set here as well so Umami never reads them.
  script.dataset.excludeSearch = 'true';
  script.dataset.excludeHash = 'true';
  script.dataset.beforeSend = BEFORE_SEND_HANDLER;
  document.head.appendChild(script);
}

function track(eventName) {
  if (hasConsent() && typeof window.umami?.track === 'function') {
    window.umami.track(eventName);
  }
}

// ---------------------------------------------------------------------------
// Search
// ---------------------------------------------------------------------------
//
// Only whether a search in the navbar found something ("search") or nothing
// ("search-no-results") is recorded, never the search term.
//
// The local search plugin offers no hook for its results, so the outcome is read from
// the autocomplete dropdown: its results have role="option", and its "See all results"
// link carries the query the results belong to. A search is recorded once the visitor
// stopped typing, and right away when a result is opened, at most once per query.
// Searches on the /search page are counted as page views of /search only.

let searchTimer;
let lastTrackedQuery = null;

function normalizeQuery(query) {
  return typeof query === 'string' ? query.trim() : '';
}

// Returns "search", "search-no-results", or null if the dropdown does not show the
// outcome of the current text yet.
function readSearchOutcome(input) {
  const container = input.closest(SEARCH_CONTAINER_SELECTOR);
  const listbox = container?.querySelector('[role="listbox"]');
  if (!listbox || listbox.style.display === 'none' || listbox.childElementCount === 0) {
    return null;
  }
  const query = normalizeQuery(input.value);
  const options = listbox.querySelectorAll('[role="option"]');
  if (options.length === 0) {
    // The plugin only renders its "No results" template once the search returned.
    return listbox.textContent.trim() ? 'search-no-results' : null;
  }
  // Results of an older text can still be shown while a newer search runs.
  const footerLink = listbox.querySelector('a[href*="/search?"], a[href*="/search/?"]');
  if (footerLink) {
    const shownQuery = normalizeQuery(new URL(footerLink.href).searchParams.get('q'));
    if (shownQuery !== query) {
      return null;
    }
  }
  return 'search';
}

function recordSearch(input) {
  clearTimeout(searchTimer);
  const query = normalizeQuery(input?.value);
  if (!hasConsent() || !input || query.length < MIN_SEARCH_LENGTH || query === lastTrackedQuery) {
    return;
  }
  const outcome = readSearchOutcome(input);
  if (outcome) {
    lastTrackedQuery = query;
    track(outcome);
  }
}

function onInput(event) {
  const input = event.target;
  if (!(input instanceof HTMLInputElement) || !input.matches(SEARCH_INPUT_SELECTOR)) {
    return;
  }
  clearTimeout(searchTimer);
  if (normalizeQuery(input.value) === '') {
    // A cleared field starts a new search, even with the same text as before.
    lastTrackedQuery = null;
  }
  if (hasConsent()) {
    searchTimer = setTimeout(() => recordSearch(input), SEARCH_DEBOUNCE_MS);
  }
}

// Opening a result (click, or Enter in the search field) or "See all results" ends the
// search: record it right away, while the dropdown still exists. Runs in the capture
// phase, before the search bar handles the event and closes the dropdown.
function onSearchSelect(event) {
  const target = event.target;
  if (!(target instanceof Element)) {
    return;
  }
  const container = target.closest(SEARCH_CONTAINER_SELECTOR);
  if (!container) {
    return;
  }
  const isResultClick = event.type === 'click' && target.closest('[role="option"], [role="listbox"] a');
  const isEnter = event.type === 'keydown' && event.key === 'Enter' && target.matches(SEARCH_INPUT_SELECTOR);
  if (isResultClick || isEnter) {
    recordSearch(container.querySelector(SEARCH_INPUT_SELECTOR));
  }
}

// ---------------------------------------------------------------------------
// Consent changes
// ---------------------------------------------------------------------------

function onConsentChanged() {
  clearTimeout(searchTimer);
  lastTrackedQuery = null;
  if (hasConsent()) {
    loadUmami();
  }
}

if (isActive) {
  if (hasConsent()) {
    loadUmami();
  }
  document.addEventListener(CONSENT_CHANGE_EVENT, onConsentChanged);
  document.addEventListener('input', onInput);
  document.addEventListener('click', onSearchSelect, true);
  document.addEventListener('keydown', onSearchSelect, true);
}
