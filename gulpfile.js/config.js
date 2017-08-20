'use strict';

var path = require('path');

module.exports = {
  workDir: path.resolve(__dirname, '..'),
  distDir: path.resolve(__dirname, '../dist'),
  srcDir: path.resolve(__dirname, '../src'),
  tmpDir: path.resolve(__dirname, '../.tmp'),
}
