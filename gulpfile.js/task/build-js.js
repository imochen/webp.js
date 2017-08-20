'use strict';

var path = require('path');
var gulp = require('gulp');
var gulpWebpack = require('gulp-webpack');
var replace = require('gulp-replace');
var webpack = require('webpack');
var version = require('../../package.json').version;

var conf = require('../config.js');

gulp.task('buildjs', function() {
  return gulp.src(path.resolve(conf.workDir, 'index.js'))
    .pipe(gulpWebpack({
      debug: true,
      output: {
        filename: 'webp.js'
      },
      plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.DedupePlugin()
      ]
    }))
    .pipe(replace('@VERSION', version))
    .pipe(gulp.dest(conf.distDir))
    .pipe(gulpWebpack({
      devtool: 'source-map',
      output: {
        filename: 'webp.min.js'
      },
      plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
          'process.env': {
            'NODE_ENV': 'production'
          }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
          comments: false,
          compress: {
            warnings: false
          }
        })
      ]
    }))
    .pipe(gulp.dest(conf.distDir));
})
