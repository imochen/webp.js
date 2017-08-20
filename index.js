(function(global) {

  var webpjs = require('./src/index.js');
  webpjs.version = '@VERSION';
  global.webpjs = webpjs;

})((typeof window === 'undefined') ? global : window)
