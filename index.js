module.exports = (function () {
  var doc = global.document
  var elNotice = doc.createElement('div')
  elNotice.id = 'oldBrowserNotice'
  elNotice.className = 'wrap__oldBrowserNotice'
  elNotice.innerHTML = '' +
    '<div id="oldBrowserNotice" class="wrap__oldBrowserNotice">' +
      '<div class="oldBrowserNotice">' +
        '<div class="inner__oldBrowserNotice">' +
          '<div class="oldBrowserNotice__content">' +
            '<div class="oldBrowserNotice__header">Upgrade Your Browser</div>' +
            '<div class="oldBrowserNotice__body">' +
              '<p>This website makes use of the latest web technologies to bring you the best online experience possible.' +
                'We have detected that your current browser version is not the latest one.</p>' +
              '<p>Please upgrade to avoid experiencing browsing issues. <b>Thank you!</b></p>' +
              '<div class="oldBrowserNotice__links">' +
                '<a target="blank" href="http://www.google.com/chrome">' +
                  '<span class="oldBrowserNotice__image oldBrowserNotice__image--chrome"></span>' +
                  '<span>Chrome</span>' +
                '</a>' +
                '<a target="blank" href="http://www.mozilla.org/">' +
                  '<span class="oldBrowserNotice__image oldBrowserNotice__image--firefox"></span>' +
                  '<span>Firefox</span>' +
                '</a>' +
                '<a target="blank" href="http://www.opera.com/">' +
                  '<span class="oldBrowserNotice__image oldBrowserNotice__image--opera"></span>' +
                  '<span>Opera</span>' +
                '</a>' +
                '<a target="blank" href="http://windows.microsoft.com/en-US/internet-explorer/products/ie/home">' +
                  '<span class="oldBrowserNotice__image oldBrowserNotice__image--internet-explorer"></span>' +
                  '<span>Internet Explorer</span>' +
                '</a>' +
              '</div>' +
            '</div>' +
            '<div onclick="document.body.removeChild(document.getElementById(\'oldBrowserNotice\'))"' +
                'class="oldBrowserNotice__close" >&times</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>'

  doc.body.appendChild(elNotice)
})();
