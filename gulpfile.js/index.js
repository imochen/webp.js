'use strict';
var path = require('path');
var gulp = require('gulp');
var conf = require('./config.js');
var gulpSequence = require('gulp-sequence');
var requireDir = require('require-dir');

requireDir('./task', {
  recurse: true
});

gulp.task('build', function(cb) {
  return gulpSequence('buildjs', cb);
});
