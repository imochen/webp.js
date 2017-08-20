/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {(function(global) {

	  var webpjs = __webpack_require__(1);
	  webpjs.version = '0.2.0';
	  global.webpjs = webpjs;

	})((typeof window === 'undefined') ? global : window)

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var util = __webpack_require__(2);

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


/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';


	/**
	 * [loadImage]
	 * @param  {[String]}   url [image url]
	 * @param  {Function} fn  [load success callback]
	 */
	/* istanbul ignore next */
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

	module.exports = {
	  loadImage: loadImage,
	  setCookie: setCookie,
	  checkCookie: checkCookie,
	  setLocalStorage: setLocalStorage,
	  checkLocalStorage: checkLocalStorage
	}


/***/ }
/******/ ]);