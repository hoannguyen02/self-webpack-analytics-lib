let gtmId = '';

export function config(id) {
  gtmId = id;
  init();
}

export function trigger(eventData) {
  validateGTMId();
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(eventData);
}

function init() {
  validateGTMId();
  // Inject script tag
  if (document.readyState === 'loading') {
    if (window.attachEvent) {
      window.attachEvent('onload', affixScriptToHead());
    } else {
      window.addEventListener('load', affixScriptToHead());
    }
  } else {
    affixScriptToHead();
  }
}

function validateGTMId() {
  if (!gtmId) {
    throw Error('GTM ID is invalid, please check again');
  }
}

function affixScriptToHead() {
  let isScriptTagExits = document.querySelector(
    'script[src$="https://www.googletagmanager.com/gtm.js?id="]'
  );
  if (!isScriptTagExits) {
    const scriptTag = document.createElement('script');
    const scriptText = getContentScript();
    scriptTag.text = scriptText;
    document.head.appendChild(scriptTag);
    scriptTag.remove();
  }
}

function getContentScript() {
  return (function(w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
    var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l != 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    f.parentNode.insertBefore(j, f);
  })(window, document, 'script', 'dataLayer', gtmId);
}
