module.exports = function () {
  var browserSupported = (function () {
    return !(
      !('flex' in document.body.style) ||
      !('querySelector' in document.body) ||
      !('addEventListener' in document.body) ||
      !(document.createElement('svg').getAttributeNS)
    );
  })();

  if (!browserSupported) {
    document.write('<script src="/js/old-browser-notice.js"><\/script>');
  }

  return browserSupported;
}
