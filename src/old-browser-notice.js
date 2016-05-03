module.exports = function oldBrowserNotice () {
  document.body.appendChild(noticeStyle());
  document.body.appendChild(noticeMarkup());

  function noticeStyle () {
    var element = document.createElement('style');
    element.innerHTML = `
    .oldBrowserNotice-wrap { font-family: sans-serif; position: fixed; top: 0; right: 0; bottom: 0; left: 0; z-index: 99999999; zoom:1; }
    .oldBrowserNotice { color: #fff; display: table; height: 100%; margin: auto; }
    .oldBrowserNotice__inner { display: table-cell; margin: auto; max-width: 600px; vertical-align: middle; }
    .oldBrowserNotice__content { background: #333; border: 3px solid #fff; margin: 16px; padding: 16px; position: relative; }
    .oldBrowserNotice__header { border-bottom: 1px solid #fff; font-size: 22px; margin: 0 0 16px; padding: 0 0 16px; vertical-align: middle; }
    .oldBrowserNotice__body * { line-height: 1.3; color: #fff !important; }
    .oldBrowserNotice__link { color: #fff; display: inline-block; text-decoration: none; vertical-align: top; text-align: center; }
    .oldBrowserNotice__close { cursor: pointer; font-size: 32px; position: absolute; right: 16px; top: 8px; }
    `;
    return element;
  }

  function noticeMarkup () {
    var element = document.createElement('div');
    element.id = 'js-oldBrowserNotice';
    element.innerHTML = `
    <div class="oldBrowserNotice-wrap">
      <div class="oldBrowserNotice">
        <div class="oldBrowserNotice__inner">
          <div class="oldBrowserNotice__content">
            <div class="oldBrowserNotice__header">Consider Upgrading Your Browser</div>
            <div class="oldBrowserNotice__body">
              <p>This website makes use of the latest web technologies to bring you the best online experience possible.</p>
              <p>We have detected that your current browser version is out of date.<br/> Please upgrade to avoid experiencing browsing issues.</p>
              <div>
                <a class="oldBrowserNotice__link" target="_blank" href="http://www.google.com/chrome">
                  <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/chrome/chrome_128x128.png" width="128" height="128"/><div>Chrome</div>
                </a>
                <a class="oldBrowserNotice__link" target="_blank" href="http://www.mozilla.org/">
                  <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/firefox/firefox_128x128.png" width="128" height="128"/><div>Firefox</div>
                </a>
                <a class="oldBrowserNotice__link" target="_blank" href="https://www.microsoft.com/en-gb/windows/microsoft-edge">
                  <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/edge/edge_128x128.png" width="128" height="128"/><div>Microsoft Edge</div>
                </a>
                <a class="oldBrowserNotice__link" target="_blank" href="http://www.opera.com/">
                  <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/opera/opera_128x128.png" width="128" height="128"/><div>Opera</div>
                </a>
              </div>
            </div>
            <div class="oldBrowserNotice__close" onclick="document.body.removeChild(document.getElementById('js-oldBrowserNotice'))">&times</div>
          </div>
        </div>
      </div>
    </div>
    `;
    return element;
  }
};
