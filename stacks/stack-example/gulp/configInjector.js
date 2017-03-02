'use strict';

var path = require('path');
var $ = require('gulp-load-plugins')();
var gulp = require('gulp');
var conf = require('./conf');
var pkg = require('../package.json');

function injectConfigTask () {
  var now = new Date().toGMTString();
  var buildNumber = 'N/A';
  var version = pkg.version;

  //if running on jenkins
  if (process.env['BUILD_NUMBER']) {
    buildNumber = process.env['BUILD_NUMBER'];
  }

  return gulp.src([path.join(conf.paths.generated, 'config.module.js')])
    .pipe(replace('VERSION', 'N/A', version))
    .pipe(replace('BUILD_DATE', 'N/A', now))
    .pipe(replace('BUILD_NUMBER', 'N/A', buildNumber))
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/generated')));
}

function replace (key, oldValue, newValue) {
  return $.replace(
    "'" + key + "':'" + oldValue + "'",
    "'" + key + "':'" + newValue + "'"
  );
}

gulp.task('configInjector', function () {
  return injectConfigTask();
});