/**
 * React Facebook Pixel Module
 *
 * @package react-facebook-pixel
 * @author  Zain Sajjad <zsajjad@fetchsky.com>
 */

let initialized = false;

/**
 * Utilities
 */

const _verifyInit = function () {
  if (!initialized) {
    console.warn('Pixel not initialized before using call ReactPixel.init with required params');
  }
  return initialized;
};

const ReactPixel = {
  init(pixelId, params = {}) {
    /* eslint-disable */
    !function (f, b, e, v, n, t, s) {
      if (f.fbq) return; n = f.fbq = function () {
        n.callMethod ?
          n.callMethod.apply(n, arguments) : n.queue.push(arguments)
      };
      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
      n.queue = []; t = b.createElement(e); t.async = !0;
      t.src = v; s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s)
    }(window, document, 'script',
      'https://connect.facebook.net/en_US/fbevents.js');
    /* eslint-enable */

    if (!pixelId) {
      console.warn('Please insert pixel id for initializing');
    } else {
      console.log('params', params);
      fbq('init', pixelId, params);
      initialized = true;
    }
  },

  pageView() {
    if (!_verifyInit()) {
      return;
    }
    fbq('track', 'PageView');
  },

  track(title, data) {
    if (!_verifyInit()) {
      return;
    }
    fbq('track', title, data);
  },

  trackCustom(event, data) {
    if (!_verifyInit()) {
      return;
    }
    fbq('trackCustom', event, data);
  },

  fbq() {
    if (!_verifyInit()) {
      return;
    }
    return fbq;
  },
};
module.exports = ReactPixel;
