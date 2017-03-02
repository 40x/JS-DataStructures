'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();


gulp.task('scripts-reload', function() {
  return buildScripts()
    .pipe(browserSync.stream());
});

function scriptsTask(){
  return buildScripts();
};

function buildScripts() {
  return gulp.src([path.join(conf.paths.src, '/**/*.js'),
      path.join(conf.paths.tmp, '/serve/generated/*.js')])
    .pipe($.eslint())
    .pipe($.eslint.format())
    .pipe($.size())
}

gulp.task('scripts', ['configInjector'], scriptsTask);