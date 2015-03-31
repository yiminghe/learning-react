'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var shelljs = require('shelljs');
var cwd=process.cwd();
var path=require('path');

gulp.task('lint', function () {
  return gulp.src([
    'example/**/*.js'
  ])
    .pipe(require('gulp-reactify')())
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .pipe(jshint.reporter('fail'));
});

gulp.task('gh-pages',function(){
  shelljs.cd(path.join(cwd, '../' + path.basename(cwd) + '-gh-pages'));
  shelljs.rm('-rf', '*');
  shelljs.cp('-r', path.join(cwd, 'build'), '');
  shelljs.cp('-r', path.join(cwd, 'example'), '');
  shelljs.exec('git add --all');
  shelljs.exec('git commit -am "update examples at ' + Date.now() + '"');
  shelljs.exec('git push origin gh-pages:gh-pages');
});