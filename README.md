# webp.js
[![npm](https://img.shields.io/npm/v/webp.js.svg)](https://www.npmjs.com/package/webp.js)  [![Build Status](https://travis-ci.org/imochen/webp.js.svg?branch=master)](https://travis-ci.org/imochen/webp.js) [![Coverage Status](https://coveralls.io/repos/github/imochen/webp.js/badge.svg?branch=master)](https://coveralls.io/github/imochen/webp.js?branch=master)

webp.js is a library for webp detection.

Here's an example:
```javascript
var webpjs = require('webp.js');
if (webpjs()) {
  //do something
}
```
By using cookie, you can process your images at the backend.

```javascript
var webpjs = require('webp.js');
if (webpjs({ type:'cookie' })) {
  //do something
}
```
Get the cookies at the backend, if the value of `webp` is `1`, that means current browser support webp.
