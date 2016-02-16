# Old Browser Notice

## Usage

Using Webpack or Browserify

```js
var oldBrowserNotice = require('old-browser-notice');
var broswerNotSupported = false; // some test

if (broswerNotSupported) {
  oldBrowserNotice()
}

//or

var broswerNotSupported = false; // some test

if (broswerNotSupported) {
  document.write('<script src="dist/old-browser-notice.js"></script>');
  document.write('<script>oldBrowserNotice();</script>');
}

```

or Browser

```html
<!doctype html>
<html>
  <head>...</head>
  <body>
    ...

    <!--[if IE]>
      <script src="dist/old-browser-notice.js"></script>
    <![endif]-->
  </body>
</html>
```
