var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
gulp.task('default', function () {
    return browserify(['./index.js'])
        .transform(require('browserify-jsx'))
        .transform(require('browserify-shim'))
        .bundle()
        //Pass desired output filename to vinyl-source-stream
        .pipe(source('index.js'))
        // Start piping stream to tasks!
        .pipe(gulp.dest('../../example-bundle/rc-calendar/'));
});