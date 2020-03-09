var RubrikkGTM = (function(e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  return (
    (n.m = e),
    (n.c = t),
    (n.d = function(e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (n.t = function(e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var o in e)
          n.d(
            r,
            o,
            function(t) {
              return e[t];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return n.d(t, 'a', t), t;
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ''),
    n((n.s = 0))
  );
})([
  function(e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'config', function() {
        return o;
      }),
      n.d(t, 'trigger', function() {
        return a;
      });
    var r = '';
    function o(e) {
      (r = e),
        i(),
        'loading' === document.readyState
          ? window.attachEvent
            ? window.attachEvent('onload', u())
            : window.addEventListener('load', u())
          : u();
    }
    function a(e) {
      i(),
        (window.dataLayer = window.dataLayer || []),
        window.dataLayer.push(e);
    }
    function i() {
      if (!r) throw Error('GTM ID is invalid, please check again');
    }
    function u() {
      if (
        !document.querySelector(
          'script[src$="https://www.googletagmanager.com/gtm.js?id="]'
        )
      ) {
        var e = document.createElement('script'),
          t = (function(e, t, n, r, o) {
            (e[r] = e[r] || []),
              e[r].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
            var a = t.getElementsByTagName(n)[0],
              i = t.createElement(n);
            (i.async = !0),
              (i.src = 'https://www.googletagmanager.com/gtm.js?id=' + o),
              a.parentNode.insertBefore(i, a);
          })(window, document, 'script', 'dataLayer', r);
        (e.text = t), document.head.appendChild(e), e.remove();
      }
    }
  },
]);
