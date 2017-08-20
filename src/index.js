'use strict';

var util = require('./util');

//the key & value for cookie & localStorage
var KEY = 'webp';
var VALUE = '1';

//for webp detection
var WEBP_URL = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoCAAEAAQAcJaQAA3AA/v4G0AA=';

/**
 * @param  {[Object]} options https://github.com/imochen/webp.js/blob/master/README.md
 */
module.exports = function(options) {
  options = options || {};
  options.key = options.key || KEY;
  options.value = options.value || VALUE;
  if (options.type === 'cookie') {
    if (util.checkCookie(options.key, options.value)) return true;
    util.loadImage(WEBP_URL, function() {
      util.setCookie(options.key, options.value, options.domain);
    })
  } else {
    if (util.checkLocalStorage(options.key, options.value)) return true;
    util.loadImage(WEBP_URL, function() {
      util.setLocalStorage(options.key, options.value);
    })
  }
  return false;
}
