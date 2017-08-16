'use strict';

/**
 * [loadImage]
 * @param  {[String]}   url [image url]
 * @param  {Function} fn  [load success callback]
 */
function loadImage(url, fn) {
  var image = new Image();
  image.onload = function() {
    if (image.width === 2) {
      fn && fn()
    }
  }
  image.src = url;
}

/**
 * [setCookie]
 * @param {[String]} key
 * @param {[String]} value
 * @param {[String]} domain
 */
function setCookie(key, value, domain) {
  var domainStr = '';
  if (domain)
    domainStr = ';domain=' + domain;
  document.cookie = key + '=' + value + domainStr;
}

/**
 * [checkCookie]
 * @param  {[String]} key
 * @param  {[String]} value
 * @return {[Boolean]}
 */
function checkCookie(key, value) {
  var cookieArr = document.cookie.split(';');
  for (var i = 0; i < cookieArr.length; i++) {
    var cookieStr = cookieArr[i].trim();
    if (cookieStr === (key + '=' + value)) return true;
  }
  return false;
}

/**
 * [setLocalStorage]
 * @param {[String]} key
 * @param {[String]} value
 */
function setLocalStorage(key, value) {
  window.localStorage && localStorage.setItem(key, value);
}

/**
 * [checkLocalStorage]
 * @param  {[String]} key
 * @param  {[String]} value
 * @return {[Boolean]}
 */
function checkLocalStorage(key, value) {
  return window.localStorage && (localStorage.getItem(key) === value);
}

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
  if (options.type === 'cookie') {
    if (checkCookie(KEY, VALUE)) return true;
    loadImage(WEBP_URL, function() {
      setCookie(KEY, VALUE, options.domain);
    })
  } else {
    if (checkLocalStorage(KEY, VALUE)) return true;
    loadImage(WEBP_URL, function() {
      setLocalStorage(KEY, VALUE);
    })
  }
  return false;
}
