let gtmSettings = {};

export function config(settings) {
  gtmSettings = settings;
}

export function init() {
  // Return if not valid
  if (
    !gtmSettings ||
    (Object.entries(gtmSettings).length === 0 &&
      gtmSettings.constructor === Object)
  ) {
    return;
  }
  // Return if no GTM ID
  const { GTM_ID: id, events } = gtmSettings;
  if (!id) {
    return;
  }
  // Inject script tag
  if (document.readyState === 'loading') {
    if (window.attachEvent) {
      window.attachEvent('onload', affixScriptAndFuncs(id, events));
    } else {
      window.addEventListener('load', affixScriptAndFuncs(id, events), false);
    }
  } else {
    affixScriptAndFuncs(id, events);
  }
}

function affixScriptAndFuncs(id) {
  const scriptTag = document.createElement('script');
  const scriptText = getContentScript(id, true);
  scriptTag.text = scriptText;
  document.head.appendChild(scriptTag);
  scriptTag.remove();
  // Generate event handler functions if events exist & valid
  if (Array.isArray(events) && events.length > 0) {
    generateEventHandlerFunctions(events);
  }
}

function generateEventHandlerFunctions(events) {
  events.map(event => {
    return (window[event.name] = function() {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: event.name,
      });
    });
  });
}

function getContentScript(id) {
  return (function(w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
    var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l != 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    f.parentNode.insertBefore(j, f);
  })(window, document, 'script', 'dataLayer', id);
}
