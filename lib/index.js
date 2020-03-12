const gtmId = process.env.GTM_ID;

export function trigger(eventData) {
  validateGTMId();
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(eventData);
}

export function initDataLayer(data) {
  trigger(data);
}

generateScript();

function generateScript() {
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
    throw Error('GTM_ID is invalid, please check and put it in .env file');
  }
}

function affixScriptToHead() {
  const isScriptTagExist = document.querySelector(
    `script[src="https://www.googletagmanager.com/gtm.js?id=${gtmId}"]`
  );
  if (!isScriptTagExist) {
    const scriptTag = document.createElement('script');
    const scriptText = getContentScript();
    scriptTag.text = scriptText;
    document.head.appendChild(scriptTag);
    scriptTag.remove();
    // pushUserTimingEvent();
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

// function pushUserTimingEvent() {
//   const { timing } = window.performance;
//   const api = {};
//   api.ttfb = timing.responseStart - timing.requestStart;
//   api.domLoading = timing.domLoading - timing.navigationStart;
//   api.domInteractive = timing.domInteractive - timing.navigationStart;
//   api.domComplete = timing.domComplete - timing.navigationStart;
//   api.onLoad = timing.loadEventEnd - timing.navigationStart;
//   trigger(api);
//   trigger({ event: 'userTiming' });
// }
